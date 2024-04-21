// Counter.js
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Fab } from "@mui/material";

const Counter = () => {
    const [count, setCount] = useState(0);

    // React Spring animation config with bezier curve easing
    const springProps = useSpring({
        from: { backgroundColorLevel: 0 },
        to: { backgroundColorLevel: count * 10 },
        config: { tension: 300, friction: 50 }, // Bezier curve animation config
        reset: true, // Reset animation when count changes
    });

    const increment = () => {
        setCount((prevCount) => Math.min(100, prevCount + 1));
    };

    const decrement = () => {
        setCount((prevCount) => Math.max(0, prevCount - 1));
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="text-center p-10 border border-black rounded-lg flex flex-col justify-center items-center">
            <div className="absolute left-0 top-0 h-full w-full z-[-1]">
                <animated.div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor:
                            springProps.backgroundColorLevel.to(
                                (level) => `rgba(0, 0, 255, ${level / 1000})`
                            ),
                        borderRadius: "0px",
                    }}
                />
            </div>
            <div className="flex flex-col bg-slate-300 rounded-lg px-8 py-4 mb-8 relative">
                <h2 className="text-3xl font-bold">Counter</h2>
                <p className="text-3xl font-semibold">
                    {count}
                </p>
            </div>
            <div className="flex justify-center gap-8">
                <Fab color="success" aria-label="add" onClick={increment}>
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="reset" onClick={reset}>
                    <RestartAltIcon />
                </Fab>
                <Fab color="error" aria-label="remove" onClick={decrement}>
                    <RemoveIcon />
                </Fab>
            </div>
        </div>
    );
};

export default Counter;
