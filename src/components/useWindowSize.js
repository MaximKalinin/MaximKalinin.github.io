import { useState, useRef, useEffect } from 'react';

export const useWindowSize = () => {
	const [size, setSize] = useState({ width: 0, height: 0 });
	console.log(size);
	useEffect(() => {
		window.onresize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
		return () => window.onresize = null;
	}, []);
	return size;
};
