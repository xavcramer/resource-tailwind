import "../main.css"

import mainfirstimg from "./imgs/mainfirstimg.png"
import mainsecondimg from "./imgs/mainsecondimg.png"
import mainthirdimg from "./imgs/mainthirdimg.png"
import headerhuman3 from "../Header/imgs/headerhuman3.png"


export default function Mainpage() {
    return (
        <>
            <main class='w-full h-[1200px]'>
                <div class='w-[60%] h-[700px] ml-[20%] mr-[20%]'>
                    <h1 class='w-[500px] text-[52px] ml-17 text-graytext'>Recently in our Photography <span class='text-orange underline'>Blog</span>.</h1>
                    <div class='w-[1000px] h-[769px] m-auto md:flex gap-x-[4vh] mt-[3vh]'>
                        <div class='w-[534px] h-[769px]'>
                            <img src={mainfirstimg} alt="" />
                            <div class='w-[400px] h-[300px] bg-white relative bottom-31 pt-[10px]'>
                                <h2 class='w-[314px]  text-purple text-[30px]'>Photographers Who Changed the World forever</h2>
                                <p class='w-[327px] text-[14px] text-graytext pt-[20px] pb-[20px]'>Debitis ea dicta ea eum laboriosam quis dolore repudiandae.
                                    Est hic quod et similique ullam et. Ipsum ipsam temporibus quo ea natus
                                    enim quae officia nulla.</p>
                                <div class='md:flex items-center gap-x-[10px]'>
                                    <img src={headerhuman3} alt="" class='w-[40px] h-[40px]' />
                                    <div class='text-[14px] text-purple'>
                                        <p>Robert Brown</p>
                                        <p>on September 13, 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class='w-fit h-[1000px] md:flex-col space-y-[20px]'>
                            <img src={mainsecondimg} alt="" />
                            <img src={mainthirdimg} alt="" />
                            <div class='w-[75%] h-fit text-[18px] bg-white relative pt-[3vh] bottom-[10vh]'>
                                <p class='text-[12px] text-graytext'>Sep 13, 2019</p>
                                <p class='w-[222px] text-purple'>7 Things About Photography Your Boss Wants To Know</p>
                            </div>
                            <div class='w-[400px] h-[350px] md:flex-col space-y-[20px] pt-[25%] items-center bg-main-block bg-no-repeat bg-cover bg-center p-[60px] text-white'>
                                <h3 class='text-[28px]'>Visit Full Blog </h3>
                                <p class='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button class='text-[14px] text-orange'>Visit Blog</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}