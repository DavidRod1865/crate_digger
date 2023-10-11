import { useEffect, useRef } from "react"
import { motion, useSpring } from "framer-motion"

const BIG_DOT_SIZE = 100;
const SMALL_DOT_SIZE = 15;
const PER_PX = 0.3;

const Dot = ({ mousePos }) => {

    const size = useSpring(SMALL_DOT_SIZE,
        { damping: 30, stiffness: 200 });

    const dotRef = useRef(null);

    useEffect(() => {
        if(!dotRef.current) return;
        const { x, y } = mousePos;
        const { x: dotX, y: dotY } = dotRef.current.getBoundingClientRect();

        const dist = Math.sqrt(
            Math.pow(x - dotX, 2) + 
            Math.pow(y - dotY, 2)
        );

        size.set(BIG_DOT_SIZE - PER_PX * dist, SMALL_DOT_SIZE);

    }, [mousePos, size]);

    return (
        <div ref={dotRef} className="relative">
            <motion.div
                className="bg-orange-700 rounded-full absolute -translate-x-1/2 -translate-y-1/2"  
                style={{ width: size, height: size }}
            />
        </div>
    );
}

export default Dot;