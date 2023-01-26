const room_selector_actions = {
	ADD_ADULT: 'addAdult',
	REMOVE_ADULT: 'removeAdult',
	ADD_CHILD: 'addChild',
	REMOVE_CHILD: 'removeChild',
	ADD_AGE: 'addAge',
	REMOVE_AGE: 'removeAge',
};

const room_initial_state = {
	adults: 1,
	childs: [],
};
let _childs;
function roomSelector(state = room_initial_state, action) {
	switch (action.type) {
		case room_selector_actions.ADD_ADULT:
			return { ...state, ...{ adults: state.adults + 1 } };
		case room_selector_actions.REMOVE_ADULT:
			return { ...state, ...{ adults: state.adults - 1 } };
		case room_selector_actions.ADD_CHILD:
			_childs = state.childs;
			_childs.push(0);
			return { ...state, ...{ childs: _childs } };
		case room_selector_actions.REMOVE_CHILD:
			_childs = state.childs;
			_childs.pop();
			return { ...state, ...{ childs: _childs } };
		case room_selector_actions.ADD_AGE:
			_childs = state.childs;
			_childs[action.idx] = _childs[action.idx] + 1;
			return { ...state, ...{ childs: _childs } };
		case room_selector_actions.REMOVE_AGE:
			_childs = state.childs;
			_childs[action.idx] = _childs[action.idx] - 1;
			return { ...state, ...{ childs: _childs } };
		default:
			return state;
	}
}

export default roomSelector;
export { room_selector_actions };
