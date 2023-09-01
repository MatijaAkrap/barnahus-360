import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

interface IHotSpotProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	controlsRef: any;
}

const HotSpot = (props: IHotSpotProps) => {
	const [textHidden, setTextHidden] = useState<boolean>(true);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const hotSpotRef: any = useRef();
	const initialPosition = [9.4, 5.5, 0];

	useFrame(() => {
		if (props.controlsRef && hotSpotRef) {
			hotSpotRef.current.position.setX(initialPosition[0] + props.controlsRef.current.object.position.x);
			hotSpotRef.current.position.setY(initialPosition[1] + props.controlsRef.current.object.position.y);
			hotSpotRef.current.position.setZ(initialPosition[2] - props.controlsRef.current.object.position.z - 25);
		}
	});

	return (
		<mesh scale={9} ref={hotSpotRef} position={initialPosition}>
			<Html>
				<button onClick={() => setTextHidden(!textHidden)} className='hotspot-container'>
					<label>{textHidden ? 'Click for info' : 'Click to close'}</label>
				</button>
				<div className='hotspot-info-container' hidden={textHidden}>
					This is hotspot that explains item on which is placed, in this example it is tv.
				</div>
			</Html>
		</mesh>
	);
};

export default HotSpot;
