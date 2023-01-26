import { useEffect, useRef, useState } from 'react';
import RoomBox from './RoomBox/RoomBox';
import './RoomSelector.scss';
import { ButtonSolid } from '../Buttons';
import PropTypes from 'prop-types';
import { SelectorContainer } from './styled';
import HorizontalRoomSelector from './HorizontalRoomSelector';

const RoomSelector = ({ onChangeRooms, type = 'horizontal', limits }) => {
	const defaultLimits = {
		maxPax: 9,
		maxRooms: 3,
		minAdultsPerRoom: 1,
		minAgeChild: 1,
		maxAdultsPerRoom: 4,
		minChildsPerRoom: 0,
		maxChildsPerRoom: 2,
		maxAgeChild: 12,
	};
	const ref = useRef();
	const defaultRoom = {
		paxCount: 1,
		distribution: [{ adults: 1, childs: [] }],
	};
	const [rooms, setRooms] = useState(defaultRoom);
	const [showSelector, setShowSelector] = useState(false);
	const [roomDescription, setRoomDescription] = useState('Seleccione');
	const [disableAdditions, setDisableAdditions] = useState(false);
	const [boxLimits, setBoxLimits] = useState(defaultLimits);
	const show = () => {
		setShowSelector(true);
	};
	const hide = () => {
		setShowSelector(false);
	};
	const apply = (evt) => {
		if (evt) evt.preventDefault();
		let adults = 0;
		let childs = [];
		rooms.distribution.forEach((room) => {
			adults = adults + room.adults;
			childs = childs + room.childs.length;
		});
		setRoomDescription(
			rooms.distribution.length +
				(rooms.distribution.length > 1 ? ' Habs.' : ' Hab.') +
				' + ' +
				adults +
				' Adt.' +
				(childs.length > 0 ? ' + ' + childs.length + ' Niños' : ''),
		);
		onChangeRooms(rooms);
	};
	const addRoom = (evt) => {
		evt.preventDefault();
		let newRooms = rooms.distribution;
		newRooms.push({ adults: 1, childs: [] });
		let pax = countPax(newRooms);
		setRooms({ paxCount: pax, distribution: newRooms });
		apply(evt);
	};
	const updateRoom = (idx, room) => {
		let updatedRooms = rooms.distribution;
		updatedRooms[idx] = room;
		let pax = countPax(updatedRooms);
		setRooms({ paxCount: pax, distribution: updatedRooms });
		apply();
	};
	const removeRoom = (idx) => {
		let updatedRooms = rooms.distribution;
		updatedRooms.splice(idx, 1);
		let pax = countPax(updatedRooms);
		setRooms({ paxCount: pax, distribution: updatedRooms });
		apply();
	};
	const countPax = (rooms) => {
		let pax = 0;
		rooms.forEach((room) => {
			pax = pax + room.adults;
			pax = pax + room.childs.length;
		});
		return pax;
	};
	useEffect(() => {
		if (rooms.paxCount > boxLimits.maxPax) {
			setDisableAdditions(true);
		} else {
			setDisableAdditions(false);
		}
	}, [rooms.paxCount]);
	useEffect(() => {
		onChangeRooms(defaultRoom);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				hide();
			}
		}

		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);

	useEffect(() => {
		setBoxLimits((prev) => ({ ...prev, ...limits }));
	}, [limits]);

	return (
		<div ref={ref}>
			{type === 'horizontal' && (
				<HorizontalRoomSelector
					rooms={rooms}
					showSelector={showSelector}
					addRoom={addRoom}
					removeRoom={removeRoom}
					boxLimits={boxLimits}
					show={show}
					updateRoom={updateRoom}
					disableAdditions={disableAdditions}
					roomDescription={roomDescription}
				/>
			)}
		</div>
	);
};

RoomSelector.propTypes = {
	onChangeRooms: PropTypes.func.isRequired,
	limits: PropTypes.shape({
		maxPax: PropTypes.number,
		maxRooms: PropTypes.number,
		minAdultsPerRoom: PropTypes.number,
		minAgeChild: PropTypes.number,
		maxAdultsPerRoom: PropTypes.number,
		minChildsPerRoom: PropTypes.number,
		maxChildsPerRoom: PropTypes.number,
		maxAgeChild: PropTypes.number,
	}),
};
export default RoomSelector;
