import "../main.css"

import secbgimg from "./imgs/secbgimg.png"
import secimgarrow from "./imgs/secimgarrow.png"

export default function Secimg() {
    return (
        <>
            <section class='w-full h-[460px]'>
                <div class='w-[60%] h-[fit] ml-[20%] mr-[20%]'>
                    <div class='w-full h-fit relative z-9'>
                        <img src={secbgimg} alt="" class='w-[1100px] h-[660px]'/>
                      <div class='w-[500px] max-h-[469px] bg-purple2 p-10 space-y-[20px] text-white absolute z-10 top-[191px]'>
                            <h4 class='w-[370px] text-[44px]'>
                                Inspired to get your photography to the next level?
                            </h4>
                            <p class='text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                            <button class='w-[335px] h-[68px] bg-salad text-white md:flex justify-center mt-[60px] items-center text-[23px] text-left space-x-[30px] p-4 cursor-pointer'><img src={secimgarrow} alt="" /><div>Resource Center <br /> <span class='text-[14px]'>Packed with useful tips & tutorials</span></div></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}