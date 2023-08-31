import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import RoomNavigation from './components/RoomNavigation';
import { useState } from 'react';
import { RoomsEnum } from './models/RoomsEnum';

const App = () => {
	const [currentRoom, setCurrentRoom] = useState<string>(RoomsEnum.MEDICAL_HEALTH);

	return (
		<div className='app'>
			<Canvas>{<Experience currentRoom={currentRoom} />}</Canvas>
			<RoomNavigation setCurrentRoom={setCurrentRoom} />
		</div>
	);
};

export default App;
