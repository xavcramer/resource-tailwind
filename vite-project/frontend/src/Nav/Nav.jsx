import "../main.css"

import homenav from "./imgs/homenav.png"
import navlogo from "./imgs/navlogo.png"
import navsearch from "./imgs/navsearch.png"

export default function Nav() {
    return (
        <>
            <nav class='w-[full] h-32 md:flex items-center font-montserrat'>
                <div class='w-[86%] h-20 ml-[7%] mr-[7%]'>
                    <div class='w-[full] h-fit md:flex justify-between items-center'>
                        <ul class='w-[fit] md:flex text-transform: uppercase gap-x-[20px] text-[12px] items-center'>
                            <li><img src={homenav} alt="" class='w-[22px] h-[22px]'/></li>
                            <li class='w-[137px]'>Resource Center</li>
                            <li>Blog</li>
                            <li>Featured</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>

                        <div class='w-[150px] h-[98px] bg-orange md:flex items-center justify-center'><img src={navlogo} alt="" class='w-[90px] h-[98px]'/></div>

                        <div class='w-[fit] h-[fit] md:flex items-center'>
                            <input type="search" placeholder="Search website..." class='w-[255px] h-[43px] p-[10px] border-1 border-neutral-500 rounded-l-lg'/>
                            <button class='w-[137px] h-[43px] bg-gray rounded-r-lg text-[14px]'>Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}