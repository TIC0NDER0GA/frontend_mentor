//@ts-ignore
import blog_img from '../../assets/illustration-article.svg';
//@ts-ignore
import prof_pic from '../../assets/image-avatar.webp';



let BlogCard = () => {

return (<div className='font-figtree bg-[var(--blog-yellow)] text-blog-paragraph min-h-screen grid grid-rows-1 justify-center items-center  '>


<div className='bg-[var(--blog-white)] rounded-[20px] p-[16px] border-black border-[1px] shadow-[5px_5px_0px_2px_black] grid grid-cols-1 gap-[1.5rem]' >

<div className='w-[20.0rem] grid grid-cols-1 gap-[.5rem]'>


<img className='rounded-[20px] mb-[.45rem]' src={blog_img}/>

<div className='grid grid-cols-1 gap-[0.7rem]'>
<h2 className='bg-[var(--blog-yellow)] justify-self-start py-[.35rem] px-[.7rem] font-bold rounded-[.2rem]'>Learning</h2>
<p>Published 21 Dec 2023</p>
</div>


<h1 className='font-bold text-[1.5rem]'>HTML & CSS foundations</h1>
<p className='text-[var(--blog-gray-500)]'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
</div>

<div className='flex flex-row items-center pb-[.5rem]'>
<img className='w-[2.2rem]' src={prof_pic}/>
<h2 className='font-bold pl-[.2rem]'>Greg Hooper</h2>
</div>

</div>



</div>);
}








export default BlogCard;