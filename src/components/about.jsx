import darkBg from '../assets/darkBg.webp';
import hassanTower from '../assets/hassanTower.webp';
import { motion } from "framer-motion";


const About = ({routeVariants, childVariants, imageVariants}) => {
    return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
    <section className='min-h-[1024px] h-[100vh] w-screen'>
        <div className="absolute top-0 bg-cover bg-top h-[100vh] w-full" style={{ backgroundImage: `url(${darkBg})` }}>
            <motion.img variants={imageVariants} initial="initial" animate="final" src={hassanTower}alt="Hassan Tower" className='z-10 h-2/3 absolute -left-10 -bottom-2'/>
            <div className='flex lg:ml-[30%]  m-auto justify-center items-center h-full w-4/5 md:w-1/2'>
                <div className='z-10'>
                    <motion.div variants={childVariants} initial="initial" animate="final">
                        <h1 className='text-sm 2xl:text-4xl font-[andalousRegular] text-left text-stone-400'>About</h1>
                        <p className='paragraph text-xl md:text-2xl 2xl:text-4xl mt-5 font-[andalousMedium] text-white'>Spiced with the vibrancy of Rabat, Morocco, I'm a creative UI/UX designer and front-end developer who brings digital experiences to life.  Imagine a tagine of fresh ideas simmering with technical know-how – that's my code! I craft user journeys into captivating interfaces, ensuring every click is a delightful surprise.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
    </motion.div>
    );
}

export default About;