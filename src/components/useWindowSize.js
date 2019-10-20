import { useState, useEffect } from 'react';

export const useWindowSize = () => {
	const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
	useEffect(() => {
		window.onresize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
		return () => window.onresize = null;
	}, []);
	return size;
};
