import whiteBg from '../assets/whiteBg.webp';
import atay from '../assets/atay.webp';
import pattern from '../assets/pattern.webp';
import resume from '../assets/Haitam-Bouladhan-Resume.pdf';
import { motion } from 'framer-motion';

const Contact = ({routeVariants, childVariants, imageVariants}) => {
    return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
    <section className='min-h-[1024px] h-[100vh] w-screen'>
        <div className="absolute top-0 bg-cover bg-top h-[100vh] w-full" style={{ backgroundImage: `url(${whiteBg})` }}>
            <motion.img variants={imageVariants} initial="initial" animate="final" src={atay} alt="Atay" className='h-2/3 absolute -left-[7%] -bottom-2 flipped-image'/>
            <div className='contact flex lg:ml-[27%] m-auto justify-center items-center h-full w-full lg:w-1/2'>
                <div className='z-10'>
                    <motion.h1 variants={childVariants} initial="initial" animate="final">
                    <h1 className='text-2xl font-[andalousBold] sm:text-6xl sm:font-[andalousRegular] text-center text-black'>LET'S HAVE A CUP OF ATAY</h1>
                    </motion.h1>
                    <motion.p variants={childVariants} initial="initial" animate="final">
                    <div className='flex flex-col text-center  mt-[5%] sm:text-left sm:flex-row h-1/2 justify-between m-auto px-16 rounded-lg backdrop-blur-sm'>
                        <div className='flex flex-col justify-evenly font-[andalousRegular] text-xl'>
                            <div className='flex items-center contactHover'><img src={pattern} className='h-4 w-4 mr-2' alt="zellij" /><a href="https://www.instagram.com/haitam_bouladhan/" target="_blank">Instagram</a></div>
                            <div className='flex items-center contactHover'><img src={pattern} className='h-4 w-4 mr-2' alt="zellij" /><a href="https://www.linkedin.com/in/haitam-bouladhan-528a3b293/" target="_blank">Linkedin</a></div>
                            <div className='flex items-center contactHover'><img src={pattern} className='h-4 w-4 mr-2' alt="zellij" /><a href="https://github.com/H-BOU" target="_blank">Github</a></div>
                            <div className='flex items-center contactHover'><img src={pattern} className='h-4 w-4 mr-2' alt="zellij" /><a href="https://www.behance.net/haitambou" target="_blank">Behance</a></div>
                        </div>
                        <div className='flex flex-col justify-evenly font-[andalousRegular]'>
                            <div className='flex items-center contactHover'><img src={pattern} className='h-4 w-4 mr-2' alt="zellij" /><h2 className='font-[andalousSemiBold]'><span className="hidden sm:inline">Email</span><a href="mailto:bouladhanhaitam@gmail.com" className='text-xl text-stone-700'><span className="hidden sm:inline"><br /></span>bouladhanhaitam@gmail.com</a></h2></div>
                            <div className='flex items-center contactHover'><img src={pattern} className='h-4 w-4 mr-2' alt="zellij" /><h2 className='font-[andalousSemiBold]'><span className="hidden sm:inline">Phone</span><a href="tel:+212682062052" className='text-xl text-stone-700'><span className="hidden sm:inline"><br /></span>+212682062052</a></h2></div>
                        </div>
                    </div>
                    <div className='items-center justify-center flex m-5'>
                        <a href={resume} download="Haitam-Bouladhan-Resume">
                            <button className='font-[andalousBold] rounded-lg backdrop-blur-xl p-4 hover:bg-slate-200 duration-[0.5s]'>Download Resume</button>
                        </a>
                    </div>
                    </motion.p>
                </div>
            </div>
        </div>
    </section>
    </motion.div>
    );
}

export default Contact;
