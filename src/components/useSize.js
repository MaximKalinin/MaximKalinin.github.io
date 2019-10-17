import { useState, useRef, useEffect } from 'react';

export const useSize = (deps) => {
	const [size, setSize] = useState({ width: 0, height: 0 });
	const ref = useRef({});
	useEffect(() => {
		if (ref.current) {
			setSize({
				width: ref.current.offsetWidth,
				height: ref.current.offsetHeight
			});
		}
	}, deps);
	return [size, ref];
};
