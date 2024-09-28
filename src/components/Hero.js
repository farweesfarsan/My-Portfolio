import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer',
        social: {
            twitter: 'https://twitter.com',
            facebook: 'https://github.com/farweesfarsan',
            linkedin: 'https://www.linkedin.com/in/farwees-farsan-15451027a/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Farwees</span> Farsan
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><FaGithub size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
