import { useRef, useState, useEffect, useCallback } from 'react';

 const useResizeObserver = () => {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const ref = useCallback((node) => {
        if (node) {
            const resizeObserver = new  ResizeObserver((entries)=>{
                const {width, height } = entries[0].contentRect;
                setSize({width , height});
            })
           resizeObserver.observe(node)
        }
    }, []);

    return [size, ref];
}

export default useResizeObserver