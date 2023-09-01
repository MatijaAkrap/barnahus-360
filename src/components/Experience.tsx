/* eslint-disable @typescript-eslint/no-explicit-any */
import { Environment, OrbitControls } from '@react-three/drei';
// import { Perf } from 'r3f-perf';
import { RoomsImagesEnum } from '../models/RoomImagesEnum';
import { RoomsEnum } from '../models/RoomsEnum';
import HotSpot from './HotSpot';
import { useRef } from 'react';

interface IExperienceProps {
	currentRoom: string;
}

const Experience = (props: IExperienceProps) => {
	const controlsRef: any = useRef();

	return (
		<>
			{/* <Perf position='top-left' /> */}
			<OrbitControls makeDefault ref={controlsRef} enableZoom={false} />

			{props.currentRoom === RoomsEnum.MEDICAL_HEALTH && (
				<>
					<HotSpot controlsRef={controlsRef} />
					<Environment background={true} files={RoomsImagesEnum.MEDICAL_HEALTH} resolution={32} />
				</>
			)}

			{props.currentRoom === RoomsEnum.INTERVIEW_ROOM && (
				<Environment background={true} files={RoomsImagesEnum.INTERVIEW_ROOM} resolution={32} />
			)}

			{props.currentRoom === RoomsEnum.CRIMINAL_INVESTIGATION && (
				<Environment background={true} files={RoomsImagesEnum.CRIMINAL_INVESTIGATION} resolution={32} />
			)}

			{props.currentRoom === RoomsEnum.PHYSICAL_ROOM && (
				<Environment background={true} files={RoomsImagesEnum.PHYSICAL_ROOM} resolution={32} />
			)}
		</>
	);
};

export default Experience;
