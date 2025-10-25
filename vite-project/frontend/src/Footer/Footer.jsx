import "../main.css"

import logofooter from "./imgs/logofooter.png"

export default function Footer() {
    return (
        <>
            <footer class='w-full h-[fit] bg-footer-section bg-purple4'>
                <div class='w-[60%] h-[fit] ml-[20%] mr-[20%]'>
                    <div class='w-full h-full md:flex justify-between pt-[10%]'>
                        <div class='text-white space-y-[20px]'>
                            <img src={logofooter} alt="" />
                            <p class='w-[300px]'>Welcome at Template Resource. This template is packed with useful features to built out your own resource website.</p>
                        </div>
                        <div class='w-[40%] md:flex items-center gap-x-[40px]'>
                            <ul class='space-y-[10px]'>
                                <li class='w-[84px] text-white text-[18px]'>About us</li>
                                <li class='w-[130px] text-purple5 text-[14px]'>About us</li>
                                <li class='w-[130px] text-purple5 text-[14px]'>Our team</li>
                                <li class='w-[130px] text-purple5 text-[14px]'>Frequent Questions</li>
                                <li class='w-[130px] text-purple5 text-[14px]'>Contact us</li>
                            </ul>
                            <ul class='space-y-[10px]'>
                                <li class='w-[84px] text-white text-[18px]'>Information</li>
                                <li class='w-[130px] text-purple5 text-[14px]'>Blog</li>
                                <li class='w-[130px] text-purple5 text-[14px]'>Pricing</li>
                                <li class='w-[130px] text-purple5 text-[14px]'>Resources</li>
                                <li class='w-[130px] text-purple5 text-[14px]'>Frequent Questions</li>
                            </ul>
                            <ul class='space-y-[10px]'>
                                <li class='w-[84px] text-white text-[18px]'>Contact</li>
                                <li class='w-[130px] text-purple5 text-[14px]'>Email us</li>
                                <li class='w-[130px] text-purple5 text-[14px]'>Support Page</li>
                                <li class='w-[130px] text-purple5 text-[14px]'>Facebook</li>
                                <li class='w-[130px] text-purple5 text-[14px]'>Twitter</li>
                            </ul>
                        </div>
                    </div>
                    <p class='text-white text-[12px] pt-[9vh] pb-[9vh]'>Copyright © <span class='text-orange'>Studio Corvus </span>Powered by <span class='text-orange'>Webflow Template Licensing Info</span></p>
                </div>
            </footer>
        </>
    )
}