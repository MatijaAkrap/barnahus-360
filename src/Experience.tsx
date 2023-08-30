/* eslint-disable @typescript-eslint/no-explicit-any */
import { Environment, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Suspense } from 'react';

const Experience = () => {
	return (
		<>
			<Perf position='top-left' />
			<OrbitControls makeDefault />
			<Suspense fallback={null}>
				<Environment background files='./environmentMaps/cabin_4k.hdr' resolution={32} />
			</Suspense>
		</>
	);
};

export default Experience;
