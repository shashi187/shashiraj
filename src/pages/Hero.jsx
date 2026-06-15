import React from 'react'
import HeroText from '../components/HeroText'
import HeroVideo from '../components/HeroVideo'
import ParticleBackground from '../components/ParticleBackground'
import blackhole from '../assets/blackhole.webm'
import TypewriterText from '../components/TypeWriterText'
import { FiDownload } from 'react-icons/fi'
import resume from '../assets/shashirajWD.pdf'
const userIsMobile = (query = '(max-width: 639px)') => {
    const [isMobile, setIsMobile] = React.useState(
        typeof window !== 'undefined' && window.matchMedia(query).matches
    );
    React.useEffect(() => {
        if (typeof window === 'undefined') return;
        const mediaQuery = window.matchMedia(query);
        const handleChange = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        setIsMobile(mediaQuery.matches);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [query]);
    return isMobile;
}
const name = "SHASHIRAJ".split("")
const Hero = () => {
    const isMobile = userIsMobile();
    return (
        <div className='relative w-full h-screen flex items-center overflow-hidden'>
            <div className='absolute top-1/2 left-[5vw] -translate-y-1/2 flex flex-col gap-4'>
                <div className='text-white top-40 p-2 relative font-[anzo] text-3xl flex flex-col md:hidden'>
                    <p className='p-2'>Hi, I'm</p>
                    <h1 className='text-6xl '>Shashiraj</h1>
                    <h2 className='text-2xl p-1'>Full Stack Developer</h2>
                    <TypewriterText className='p-1' words={['MongoDB', 'Express.js', 'React', 'NodeJS', 'TypeScript', 'NextJS', 'NodeJS', 'NestJS', 'WordPress', 'Shopify']} />
                    <a href={resume} download className='font-semibold text-xl my-6 px-4 rounded-lg hover:text-gray-200'>
                        <FiDownload className='inline mr-2' />
                        Resume
                    </a>
                </div>
                <div className='hidden mt-16 md:flex flex-col justify-center gap-4' style={{ perspective: "1000px" }}>
                    {/* Hi I'm */}
                    <span
                        className='text-white text-5xl font-light tracking-widest'
                        style={{ transform: "skewX(-5deg)", display: "inline-block" }}
                    >
                        Hi, I'm
                    </span>

                    {/* Spaghettified Name */}
                    <div className='flex items-center'>
                        {name.map((letter, i) => {
                            const total = name.length - 1
                            const progress = i / total

                            const scaleX = 1 + progress * 2.5   // stretches horizontally
                            const scaleY = 1 - progress * 0.1  // squishes vertically
                            const fontSize = 6.5 - progress * 3   // shrinks 
                            const skewX = progress * -16        // leans right
                            const opacity = 1 - progress * 0.3   // fades
                            const marginRight = 8 + progress * 90    // spreads apart

                            return (
                                <span
                                    className='bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent'
                                    key={i}
                                    style={{
                                        display: "inline-block",
                                        transform: `scaleX(${scaleX}) scaleY(${scaleY}) skewX(${skewX}deg)`,
                                        transformOrigin: "center",
                                        opacity,
                                        color: "transparent",
                                        fontSize: isMobile ? '' : `${fontSize}rem `,
                                        fontWeight: "800",
                                        lineHeight: 1,
                                        marginRight: `${marginRight}px`,
                                    }}
                                >
                                    {letter}
                                </span>
                            )
                        })}
                    </div>
                </div>
                <div className='hidden md:block'>
                    <HeroText />
                </div>
            </div>
            <HeroVideo src={blackhole} className={isMobile ? 'absolute lg:left-188 rotate-0 min-h-[84vh] object-cover z-[20]' : 'absolute lg:left-188 rotate-90 min-h-[160vh] object-cover z-[20]'}
                style={{
                    top: "calc(65px - 110vh + 70%)",
                    transform: "scaleY(-1)",
                }}
            />
        </div>
    )
}

export default Hero