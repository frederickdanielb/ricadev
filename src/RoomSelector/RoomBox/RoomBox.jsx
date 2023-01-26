import { useEffect, useReducer, useState } from 'react';
import { RoomBoxContainer, RoomSelectorTitle } from '../styled';
import { Card, Row } from 'react-bootstrap';
import { ButtonSolid } from '../../Buttons';
import roomSelector, { room_selector_actions } from '../roomSelectorReducer';

const RoomBox = ({ idx, onUpdate, disableAddButton, onRemove, limits }) => {
	const [room, dispatch] = useReducer(roomSelector, {
		adults: limits.minAdultsPerRoom,
		childs: [],
	});

	useEffect(() => {
		onUpdate(idx, room);
	}, [room]);

	const checkAdultLimits = (newValue) => {
		return newValue <= limits.maxAdultsPerRoom && newValue >= limits.minAdultsPerRoom;
	};
	const checkChildLimits = (newValue) => {
		return newValue <= limits.maxChildsPerRoom && newValue >= limits.minChildsPerRoom;
	};
	const checkChildAgeLimits = (newValue) => {
		return newValue <= limits.maxAgeChild && newValue >= limits.minAgeChild;
	};
	const addAdult = (evt) => {
		evt.preventDefault();
		if (checkAdultLimits(room.adults + 1)) {
			dispatch({ type: room_selector_actions.ADD_ADULT });
		}
	};
	const addChild = (evt) => {
		evt.preventDefault();
		if (checkChildLimits(room.childs.length + 1)) {
			dispatch({ type: room_selector_actions.ADD_CHILD });
		}
	};
	const removeAdult = (evt) => {
		evt.preventDefault();
		if (checkAdultLimits(room.adults - 1)) {
			dispatch({ type: room_selector_actions.REMOVE_ADULT });
		}
	};
	const removeChild = (evt) => {
		evt.preventDefault();
		if (checkChildLimits(room.childs.length - 1)) {
			dispatch({ type: room_selector_actions.REMOVE_CHILD });
		}
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
		if (checkChildAgeLimits(room.childs[0] + 1)) {
			dispatch({ type: room_selector_actions.ADD_AGE, idx: 0 });
		}
		/*
		setChilds((currentChilds) => addAge(1, currentChilds));
*/
	};
	const removeAgeFirstChild = (evt) => {
		evt.preventDefault();
		if (checkChildAgeLimits(room.childs[0] - 1)) {
			dispatch({ type: room_selector_actions.REMOVE_AGE, idx: 0 });
		}
	};
	const addAgeSecondChild = (evt) => {
		evt.preventDefault();
		if (checkChildAgeLimits(room.childs[1] + 1)) {
			dispatch({ type: room_selector_actions.ADD_AGE, idx: 1 });
		}
	};
	const removeAgeSecondChild = (evt) => {
		evt.preventDefault();
		if (checkChildAgeLimits(room.childs[1] - 1)) {
			dispatch({ type: room_selector_actions.REMOVE_AGE, idx: 1 });
		}
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
							readOnly
							type="text"
							id={'roombox-' + idx}
							name="quantity"
							className="form-control qty-input input-number"
							value={room.adults}
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
							readOnly
							type="text"
							id={'roombox-' + idx}
							name="quantity"
							className="form-control qty-input input-number"
							value={room.childs.length}
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
			<Row>
				{room.childs.length > 0 && (
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
								readOnly
								type="text"
								id={'roombox-age-' + idx}
								name="quantity"
								className="form-control qty-input input-number"
								value={room.childs[0]}
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
				{room.childs.length > 1 && (
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
								readOnly
								type="text"
								id={'roombox-age-' + idx}
								name="quantity"
								className="form-control qty-input input-number"
								value={room.childs[1]}
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
			</Row>
			<div className={'mb-3'}></div>
		</RoomBoxContainer>
	);
};
export default RoomBox;
