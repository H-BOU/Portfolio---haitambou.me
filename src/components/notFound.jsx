import whiteBg from '../assets/whiteBg.webp';

const NotFound = ({routeVariants, childVariants, imageVariants}) => {
    return (
    <section className='min-h-[1024px] h-[100vh] w-screen'>
        <div className="absolute top-0 bg-cover bg-top h-[100vh] w-full flex items-center justify-center" style={{ backgroundImage: `url(${whiteBg})` }}>
            <h1 className='font-[andalousBold] text-3xl sm:text-5xl'>Not Found Khouya</h1>
        </div>
    </section>
    );
}

export default NotFound;