/* eslint-disable @typescript-eslint/no-explicit-any */
import { Environment, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Suspense } from 'react';
import { RoomsImagesEnum } from '../models/RoomImagesEnum';
import { RoomsEnum } from '../models/RoomsEnum';

interface IExperienceProps {
	currentRoom: string;
}

const Experience = (props: IExperienceProps) => {
	const getKey = (obj: any, value: string) => {
		const keyIndex = Object.values(obj).indexOf(value);

		return Object.keys(obj)[keyIndex];
	};
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const file = RoomsImagesEnum[getKey(RoomsEnum, props.currentRoom)];

	return (
		<>
			<Perf position='top-left' />
			<OrbitControls makeDefault />
			<Suspense fallback={null}>
				<Environment background files={file} resolution={32} />
			</Suspense>
		</>
	);
};

export default Experience;
