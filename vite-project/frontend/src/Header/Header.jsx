import "../main.css"

import headerhuman1 from "./imgs/headerhuman1.png"
import headerhuman2 from "./imgs/headerhuman2.png"
import headerhuman3 from "./imgs/headerhuman3.png"

export default function Header() {
    return (
        <>
            <header className='w-full h-fit'>
                <div className='w-full h-[900px] bg-header-img bg-cover bg-center relative z-1'>
                    <div class='w-[60%] h-[700px] ml-[20%] mr-[20%]'>
                        <div class='w-full h-[790px] md:flex items-center'>
                            <div class='w-full h-fit md:flex-wrap'>
                                <h1 class='w-[576px] h-fit text-[49px] leading-[65px] text-graytext'>The <span class='text-salad underline'>most complete </span>Photography resource.</h1>
                                <p class='w-[500px] h-fit text-[19px] mt-[4px] text-graytext'>Welcome at Template Resource. This template is packed with useful features to built out your own resource website.</p>
                                <div class='w-[500px] h-fit md:flex gap-x-[20px] items-center mt-[10vh]'>
                                    <button class='w-[211px] h-[63px] bg-orange text-white text-[23px] p-[10px] leading-none cursor-pointer'>Visit our Blog <br /><span class='text-[14px]'>Stories, News & info</span></button>
                                    <button class='w-[211px] h-[63px] bg-white text-graytext text-[23px] p-[10px] leading-none cursor-pointer'>Resource Center <br /><span class='text-[14px]'>Tips, Tricks & Tutorials</span></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class='w-[74%] h-fit ml-[13%] mr-[13%]'>
                    <div class='md:flex items-center justify-between'>
                        <div class='w-[full] h-[fit] md:flex gap-x-[4vh] items-center mt-[51px]'>
                            <h1 class='w-[125px] h-[fit] leading-[44px] text-salad text-[28px]'>How can we help you?</h1>
                            <ul class='w-[260px] h-[fit] leading-[28px] text-[15px] text-purple'>
                                <li>Visit our Blog</li>
                                <li>Photographers Resources Library</li>
                                <li>Featured Stories</li>
                                <li>Get Full Access Today!</li>
                            </ul>
                        </div>
                        <div class='w-[800px] h-[375px] bg-header-block bg-no-repeat bg-cover bg-center bottom-[8vh] left-[21.7vh] relative z-2 md:flex-col justify-center items-center text-white'>
                            <p class='w-fit h-fit pl-[8vh] pt-[2vh] text-[24px]'>Meet our Writers</p>
                            <p class='w-[306px] h-fit pl-[8vh] pt-[2vh] pb-[1vh] text-[14px]'>We've got a professional team of professional photographers providing you with resources.</p>
                            <div class='w-full h-full md:flex pl-[8vh] mt-[3vh]'>
                                <img src={headerhuman1} alt="" class='w-[80px] h-[80px] relative z-3' />
                                <img src={headerhuman2} alt="" class='w-[80px] h-[80px] relative top-3 right-6 z-4' />
                                <img src={headerhuman3} alt="" class='w-[80px] h-[80px] relative right-10 z-3' />
                                <button class='w-[146px] h-[50px] box bg-salad text-[15px] relative shadow-2xl right-14 top-5 z-5'>meet our team</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}