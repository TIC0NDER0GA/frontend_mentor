//@ts-ignore
import prof_image from '../../assets/avatar-jessica.jpeg';




let SocialLinksProfile = () => {
    return (<div className=' font-outfit flex flex-col justify-center items-center min-h-screen bg-[var(--social-links-grey-900)]'>

        <div className=' flex flex-col justify-center items-center bg-[var(--social-links-grey-800)] text-center text-[var(--social-links-white)] text-[14px] px-[2.5rem] rounded-[0.5rem] py-[2.0rem]'>
            <img className='rounded-full w-[4.7rem] mb-[1.3rem]' src={prof_image}/>

            <div className="mb-[1.3rem]">    
            <h1 className='font-semibold text-[1.3rem]'> Jessica Randall</h1>
            <h2 className=' text-[var(--social-links-green)]' >
            London, United Kingdom</h2>

            </div>

            <h3 className='pb-[1.6rem]'> "Front-end developer and avid reader."</h3>

            <ul className='font-[600] [&_a]:bg-[var(--social-links-grey-700)] [&_a]:p-[.5rem] grid grid-cols-1 gap-[1.0rem] [&_a]:rounded-[0.25rem] [&_a]:py-[0.8rem] [&_a]:inline-block [&_a]:w-full w-[4.0] [&_a]:px-[6.0rem]  [&_a]:hover:bg-[var(--social-links-green)]  [&_a]:hover:text-[var(--social-links-grey-800)] [&_a]:transition-colors [&_a]:duration-300'>
            <li>
                <a href="https://github.com" className="">
                GitHub
                </a>
            </li>
            <li>
                <a href="https://www.frontendmentor.io" className="">
                Frontend Mentor
                </a>
            </li>
            <li>
                <a href="https://linkedin.com" className="">
                LinkedIn
                </a>
            </li>
            <li>
                <a href="https://twitter.com" className="">
                Twitter
                </a>
            </li>
            <li>
                <a href="https://instagram.com" className="">
                Instagram
                </a>
            </li>
            </ul>
            
            </div>

    </div>);
}


export default SocialLinksProfile