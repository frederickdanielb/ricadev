import { useEffect, useState } from 'react';
import { RoomBoxContainer, RoomSelectorTitle } from '../styled';
import { Card, Row } from 'react-bootstrap';
import { ButtonSolid } from '../../Buttons';

const RoomBox = ({ idx, room, onUpdate, disableAddButton, onRemove, limits }) => {
	const [adults, setAdults] = useState(limits.minAdultsPerRoom);
	const [childs, setChilds] = useState([]);
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	/*useEffect(() => {
		setAdults(room.adults);
		setChilds(room.childs);
	}, [room]);*/

	/*	useEffect(() => {
		if (isFirstLoad) {
			setIsFirstLoad(false);
		} else {
			onUpdate(idx, { adults: adults, childs: childs });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [adults, childs?.length]);*/
	const checkAdultLimits = (newValue) => {
		return newValue <= limits.maxAdultsPerRoom && newValue >= limits.minAdultsPerRoom;
	};
	const checkChildLimits = (newValue) => {
		return newValue < limits.maxChildsPerRoom && newValue >= limits.minChildsPerRoom;
	};
	const checkChildAgeLimits = (newValue) => {
		return newValue <= limits.maxAgeChild && newValue >= limits.minAgeChild;
	};
	const addAdult = (evt) => {
		evt.preventDefault();
		let newValue = adults + 1;
		if (checkAdultLimits(newValue)) setAdults(newValue);
	};
	const addChild = (evt) => {
		evt.preventDefault();
		setChilds((currentChilds) => {
			console.log('try adding', currentChilds);
			if (checkChildLimits(currentChilds.length)) {
				console.log('adding');
				let modifiedChilds = currentChilds;
				console.log('modified childs', currentChilds);
				return modifiedChilds.push(limits.minAgeChild);
			}
			console.log('not adding', currentChilds.length);
			console.log('not adding', currentChilds);
			return currentChilds;
		});
	};
	const removeAdult = (evt) => {
		evt.preventDefault();
		let newValue = adults - 1;
		if (checkAdultLimits(newValue)) setAdults(newValue);
	};
	const removeChild = (evt) => {
		evt.preventDefault();
		/*let newValue = childs - 1;
		if (checkChildLimits(newValue)) setChilds(newValue);*/
		setChilds((currentChilds) => {
			console.log('try adding', currentChilds);
			if (checkChildLimits(currentChilds.length)) {
				console.log('adding');
				let modifiedChilds = currentChilds;
				console.log('modified childs', currentChilds);
				return modifiedChilds.slice(-1);
			}
			console.log('not adding', currentChilds.length);
			return currentChilds;
		});
	};
	const removeRoom = (evt) => {
		evt.preventDefault();
		onRemove(idx);
	};

	const addAge = (item, currentChilds) => {
		if (checkChildAgeLimits(currentChilds[item])) {
			const modifiedChild = currentChilds;
			let newValue = (currentChilds[item] ?? 0) + 1;
			modifiedChild[item] = newValue;
			return modifiedChild;
		}
		return currentChilds;
	};
	const removeAge = (item, currentChilds) => {
		if (checkChildAgeLimits(currentChilds[item])) {
			const modifiedChild = currentChilds;
			let newValue = (currentChilds[item] ?? 0) - 1;
			modifiedChild[item] = newValue;
			return modifiedChild;
		}
		return currentChilds;
	};
	const addAgeFirstChild = (evt) => {
		evt.preventDefault();
		setChilds((currentChilds) => addAge(1, currentChilds));
	};
	const removeAgeFirstChild = (evt) => {
		evt.preventDefault();
		setChilds((currentChilds) => removeAge(1, currentChilds));
	};
	/*	const removeAgeFirstChild = (evt) => {
		evt.preventDefault();
		let newValue = (ageChilds[0].age ?? 0) - 1;
		if (checkChildAgeLimits(newValue)) setAgeChilds([{ age: newValue }, { age: ageChilds[1].age }]);
	};*/
	const addAgeSecondChild = (evt) => {
		evt.preventDefault();
		/*let newValue = (ageChilds[1].age ?? 0) + 1;
		if (checkChildAgeLimits(newValue)) setAgeChilds([{ age: ageChilds[0].age }, { age: newValue }]);*/
		setChilds((currentChilds) => addAge(2, currentChilds));
	};
	const removeAgeSecondChild = (evt) => {
		evt.preventDefault();
		/*	let newValue = (ageChilds[1].age ?? 0) - 1;
		if (checkChildAgeLimits(newValue)) setAgeChilds([{ age: ageChilds[0].age }, { age: newValue }]);*/
		setChilds((currentChilds) => removeAge(2, currentChilds));
	};
	return (
		<RoomBoxContainer className={'mb-3'}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<RoomSelectorTitle>{'Habitación ' + (idx + 1)}</RoomSelectorTitle>
				{idx !== 0 && (
					<ButtonSolid error rounded onClick={removeRoom}>
						x
					</ButtonSolid>
				)}
			</div>
			<Row>
				<div className="qty-box col-md-6 col-xl-6">
					<label>Adultos</label>
					<div className="input-group">
						<ButtonSolid
							secondary
							type="button"
							onClick={removeAdult}
							className="btn"
							data-type="minus"
							data-field=""
						>
							{' '}
							-{' '}
						</ButtonSolid>
						<input
							type="text"
							id={'roombox-' + idx}
							name="quantity"
							className="form-control qty-input input-number"
							onChange={() => {}}
							value={adults}
						/>
						<ButtonSolid
							secondary
							type="button"
							disabled={disableAddButton}
							onClick={addAdult}
							className="btn"
							data-type="plus"
							data-field=""
						>
							+
						</ButtonSolid>
					</div>
				</div>
				<div className="qty-box col-md-6 col-xl-6">
					<label>Niños</label>
					<div className="input-group">
						<ButtonSolid
							secondary
							type="button"
							onClick={removeChild}
							className="btn"
							data-type="minus"
							data-field=""
						>
							{' '}
							-{' '}
						</ButtonSolid>
						<input
							type="text"
							id={'roombox-' + idx}
							name="quantity"
							className="form-control qty-input input-number"
							onChange={() => {}}
							value={childs.length}
						/>
						<ButtonSolid
							secondary
							type="button"
							disabled={disableAddButton}
							onClick={addChild}
							className="btn"
							data-type="plus"
							data-field=""
						>
							{' '}
							+{' '}
						</ButtonSolid>
					</div>
				</div>
			</Row>
			{childs.length > 0 && (
				<div className="qty-box col-md-6 col-xl-6">
					<label>Edad Niño 1</label>
					<div className="input-group">
						<ButtonSolid
							secondary
							type="button"
							onClick={removeAgeFirstChild}
							className="btn"
							data-type="minus"
							data-field=""
						>
							{' '}
							-{' '}
						</ButtonSolid>
						<input
							type="text"
							id={'roombox-age-' + idx}
							name="quantity"
							className="form-control qty-input input-number"
							onChange={() => {}}
							value={childs[0]}
						/>
						<ButtonSolid
							secondary
							type="button"
							disabled={disableAddButton}
							onClick={addAgeFirstChild}
							className="btn"
							data-type="plus"
							data-field=""
						>
							{' '}
							+{' '}
						</ButtonSolid>
					</div>
				</div>
			)}
			{childs.length > 1 && (
				<div className="qty-box col-md-6 col-xl-6">
					<label>Edad Niño 2</label>
					<div className="input-group">
						<ButtonSolid
							secondary
							type="button"
							onClick={removeAgeSecondChild}
							className="btn"
							data-type="minus"
							data-field=""
						>
							{' '}
							-{' '}
						</ButtonSolid>
						<input
							type="text"
							id={'roombox-age-' + idx}
							name="quantity"
							className="form-control qty-input input-number"
							onChange={() => {}}
							value={childs[1]}
						/>
						<ButtonSolid
							secondary
							type="button"
							disabled={disableAddButton}
							onClick={addAgeSecondChild}
							className="btn"
							data-type="plus"
							data-field=""
						>
							{' '}
							+{' '}
						</ButtonSolid>
					</div>
				</div>
			)}
			<div className={'mb-3'}></div>
		</RoomBoxContainer>
	);
};
export default RoomBox;
