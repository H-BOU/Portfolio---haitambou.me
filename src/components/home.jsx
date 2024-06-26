import portfolioImage from '../assets/portfolio.webp';
import { motion } from "framer-motion";


const Home = ({routeVariants, childVariants}) => {
    return (
        <>
        <motion.div
            variants={routeVariants}
            initial="initial"
            animate="enter"
            exit="exit"
        >
        <section className='min-h-[1024px] h-[100vh] w-screen'>
            <div className="absolute top-0 bg-cover bg-top h-[100vh] w-full" style={{ backgroundImage: `url(${portfolioImage})` }}>
                
                <div className="header-above-h4 is-inview" data-scroll="" data-scroll-speed="1">
               <div className="arrow big absolute left-[20%] lg:left-[30%] top-[45%]">
                    <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>arrow-up-right</title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Artboard" transform="translate(-1019.000000, -279.000000)" stroke="#FFFFFF" strokeWidth="1.5">
                                <g id="arrow-up-right" transform="translate(1026.000000, 286.000000) rotate(180.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                                    <polyline id="Path" points="2.76923077 0 12 0 12 9.23076923"></polyline>
                                    <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
                <h1 className="description text-stone-300 text-2xl 2xl:text-5xl font-[andalousRegular] absolute top-[70%] left-[5%] lg:left-[20%] md:top-[55%]">DESIGNER <br />DEVELOPER</h1>
            </div>
        </section>
        
        </motion.div>
        <div className="animated-text-strip">
            <h1 className="text-[6rem] 2xl:text-[14rem] flex justify-center font-[andalousBold] marquee py-5 px-16">HAITAM BOULADHAN</h1>
            <h1 className="text-[6rem] 2xl:text-[14rem] flex justify-center font-[andalousBold] marquee py-5 px-16">HAITAM BOULADHAN</h1>
            <h1 className="text-[6rem] 2xl:text-[14rem] flex justify-center font-[andalousBold] marquee py-5 px-16">HAITAM BOULADHAN</h1>
        </div>
    </>
    );
}
export default Home; 