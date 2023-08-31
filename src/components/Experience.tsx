/* eslint-disable @typescript-eslint/no-explicit-any */
import { Environment, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { RoomsImagesEnum } from '../models/RoomImagesEnum';
import { RoomsEnum } from '../models/RoomsEnum';

interface IExperienceProps {
	currentRoom: string;
}

const Experience = (props: IExperienceProps) => {
	// const medicalHealth = useEnvironment({ files: RoomsImagesEnum.MEDICAL_HEALTH });
	// const interviewRoom = useEnvironment({ files: RoomsImagesEnum.INTERVIEW_ROOM });
	// const criminalInvestigation = useEnvironment({ files: RoomsImagesEnum.CRIMINAL_INVESTIGATION });
	// const physicalRoom = useEnvironment({ files: RoomsImagesEnum.PHYSICAL_ROOM });

	return (
		<>
			<Perf position='top-left' />
			<OrbitControls makeDefault />
			<Environment
				background={props.currentRoom === RoomsEnum.MEDICAL_HEALTH}
				files={RoomsImagesEnum.MEDICAL_HEALTH}
				resolution={32}
			/>
			<Environment
				background={props.currentRoom === RoomsEnum.INTERVIEW_ROOM}
				files={RoomsImagesEnum.INTERVIEW_ROOM}
				resolution={32}
			/>
			<Environment
				background={props.currentRoom === RoomsEnum.CRIMINAL_INVESTIGATION}
				files={RoomsImagesEnum.CRIMINAL_INVESTIGATION}
				resolution={32}
			/>
			<Environment
				background={props.currentRoom === RoomsEnum.PHYSICAL_ROOM}
				files={RoomsImagesEnum.PHYSICAL_ROOM}
				resolution={32}
			/>
		</>
	);
};

export default Experience;
