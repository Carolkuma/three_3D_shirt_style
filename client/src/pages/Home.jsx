import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';

import {
    slideAnimation,
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation
} from '../config/motion';

import CustomButton from '../components/CustomButton';

const Home = () => {
    
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.div className="flex gap-2">
                    <motion.header {...slideAnimation('down')}>
                        <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
                    </motion.header>
                    <motion.header {...slideAnimation('down')}>
                        <p className="max-w-md font-normal text-amber-300 text-xl">
                                <strong>3D AI Tshirt Customization</strong>
                        </p>
                    </motion.header>
                </motion.div>
                <motion.div className="home-content" {...headContainerAnimation}>
                    <motion.div {...headTextAnimation} >
                        <h1 className="head-text">
                            LET'S <br className="xl:block hidden" /> DO IT.
                        </h1>
                    </motion.div>
                    <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
                        <p className="max-w-md font-normal text-white text-base">
                            Experience the ultimate in personalization with our innovative 3D customization tool. <strong>Unleash your creativity</strong> and craft a unique shirt that perfectly reflects your style.
                        </p>

                        <CustomButton
                            type="filled"
                            title="Customize It"
                            handleClick={() => state.intro = false}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
};

export default Home;