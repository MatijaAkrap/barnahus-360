import { Dispatch, SetStateAction } from 'react';
import { RoomsEnum } from '../models/RoomsEnum';

interface IRoomNavigationProps {
	setCurrentRoom: Dispatch<SetStateAction<string>>;
}

const RoomNavigation = (props: IRoomNavigationProps) => {
	const roomsArray = Object.values(RoomsEnum) as unknown as Array<keyof typeof RoomsEnum>;

	return (
		<div className='room-navigation-container'>
			{roomsArray.map((key: string) => (
				<button onClick={() => props.setCurrentRoom(key)}>{key}</button>
			))}
		</div>
	);
};

export default RoomNavigation;
