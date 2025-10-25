import "../main.css"

import otherimg from "./imgs/otherimg.png"
import otherarrow from "./imgs/otherarrow.png"

export default function Others() {
    return (
        <>
            <section class='w-full h-fit'>
                <div /*враппер*/ class='w-full h-fit md:flex justify-between'>
                    <div /*блок1*/ class='w-[170%] h-full relative bottom-[8vh] md:flex-col justify-center items-center pl-[20%] p-[30px] bg-white'>
                        <h1 class='text-center text-[28px] pb-[3vh] text-graytext'>What <span class='text-salad underline'>others </span>say</h1>

                        <div class='w-[276px] h-[336px] absolute top-[35vh] p-[10px] space-y-[40px] bg-white'>
                            <h2 class='w-[183px] text-purple3 text-[18px]'>"I learned so much, even as a professional".</h2>
                            <p class='w-[212px] text-[13px]'>"Ut vehicula lacus a lacus tempor, nec viverra justo condimentum.
                                Integer eu urna dapibus, scelerisque nisl non, semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."</p>
                            <p class='text-purple3 text-[13px]'>Juan Huang</p>
                        </div>
                        <img src={otherimg} alt="" />
                        <button class='w-[145px] h-[47px] text-white bg-salad absolute right-[2vh] bottom-[5vh] shadow-xl'>more stories</button>
                    </div>
                    <div class='w-[60%] h-[fit] ml-[20%] mr-[20%]'>
                        <div /*блок2*/ class='w-[160%] h-[460px] pt-[20px'>

                            <h3 class='w-[300px] text-graytext text-[28px] pb-[20px] pt-[10px]'>What kind of photographer <span class='text-salad text-[28px] underline'>are you</span>?</h3>
                            <div class='md:flex items-center space-y-[20px]'>
                                <div class='space-y-[10px]'>
                                    <p class='text-[20px] text-purple3'>Amateur</p>
                                    <p class='w-[305] h-fit text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                                    <button class='text-bluecard'>More Information</button>
                                </div>
                                <img src={otherarrow} alt="" />
                            </div>

                            <div class='md:flex items-center space-y-[20px]'>
                                <div class='space-y-[10px]'>
                                    <p class='text-[20px] text-purple3'>Amateur</p>
                                    <p class='w-[305] h-fit text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                                    <button class='text-bluecard'>More Information</button>
                                </div>
                                <img src={otherarrow} alt="" />
                            </div>

                            <div class='md:flex items-center space-y-[20px]'>
                                <div class='space-y-[10px]'>
                                    <p class='text-[20px] text-purple3'>Amateur</p>
                                    <p class='w-[305] h-fit text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                                    <button class='text-bluecard'>More Information</button>
                                </div>
                                <img src={otherarrow} alt="" />
                            </div>

                            <button class='text-orange'>Visit Resource Center</button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}