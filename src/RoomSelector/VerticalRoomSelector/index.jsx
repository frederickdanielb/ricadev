import { SelectorContainer } from '../styled';
import RoomBox from '../RoomBox/RoomBox';
import { ButtonSolid } from '../../Buttons';

export default function VerticalRoomSelector({
	rooms,
	showSelector,
	boxLimits,
	updateRoom,
	removeRoom,
	disableAdditions,
	addRoom,
}) {
	return (
		<SelectorContainer>
			<div className={'room_selector_Container ' + (showSelector ? 'show roomSelector' : '')}>
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
									limits={boxLimits}
								/>
							);
						})}
				</div>
				<div className="row mt-3">
					<div className={'col-lg-12 col-md-12 col-xs-12 col-sm-12'}>
						<ButtonSolid
							block
							secondary
							disabled={rooms.length >= boxLimits.maxRooms || disableAdditions}
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
			</div>
		</SelectorContainer>
	);
}
