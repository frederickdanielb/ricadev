import { useEffect, useRef, useState } from 'react';
import { limits } from '../../../../../config/constants';
import RoomBox from './RoomBox/RoomBox';
import { ButtonSolid } from '@tsyacom/rica-template-react';
import './RoomSelector.scss';
const RoomSelector = ({ onChangeRooms }) => {
	const ref = useRef();
	const defaultRoom = {
		paxCount: 1,
		distribution: [{ adults: 1, childs: [] }],
	};
	const [rooms, setRooms] = useState(defaultRoom);
	const [showSelector, setShowSelector] = useState(false);
	const [roomDescription, setRoomDescription] = useState('Seleccione');
	const [disableAdditions, setDisableAdditions] = useState(false);
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
		console.log(rooms);
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
		if (rooms.paxCount > limits.maxPax) {
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
		console.log(showSelector)
	},[showSelector])
	return (
		<div className="rooms-section" ref={ref}>
			<input
				type="text"
				className="form-control open-select"
				placeholder={roomDescription}
				onFocus={show}
				onChange={() => {}}
			/>
			{showSelector && <div className={'room_selector_Container ' + (showSelector ? 'show roomSelector' : '')}>
				<div className="room-cls mt-3 ">
					{rooms &&
						rooms.distribution.map((room, idx) => {
							return (
								<RoomBox
									idx={idx}
									room={room}
									onUpdate={updateRoom}
									onRemove={removeRoom}
									key={'room-' + idx}
									disableAddButton={disableAdditions}
								/>
							);
						})}
				</div>
				<div className="row mt-3">
					<div className={'col-lg-12 col-md-12 col-xs-12 col-sm-12'}>
						<ButtonSolid
							block
							secondary
							disabled={rooms.length >= limits.maxRooms || disableAdditions}
							onClick={addRoom}
						>
							Agregar Habitación
						</ButtonSolid>
					</div>
					<div className={'col-lg-12 col-md-12 col-xs-12 col-sm-12 mt-1'}>
						<ButtonSolid
							block
							secondary
							onClick={() => {
								apply();
								hide();
							}}
						>
							Aplicar
						</ButtonSolid>
					</div>
				</div>
			</div>}
		</div>
	);
};
export default RoomSelector;
