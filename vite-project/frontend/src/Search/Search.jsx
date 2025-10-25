import "../main.css"

import navsearch from "../Nav/imgs/navsearch.png"
import listsearch from "./imgs/listsearch.png"

export default function Search(){
    return(
        <>
        <section class='w-[full] h-fit pt-[15vh]'>
            <div class='w-[60%] h-[fit] ml-[20%] mr-[20%]'>
                <h1 class='text-graytext text-center text-[24px] h-4'>The most complete Photography resource.</h1>
                <h2 class='text-graytext text-center text-[52px]'>Search our Resources:</h2>

                <div class='w-full h-fit md:flex items-center justify-center pt-[5vh]'>
                    <input type="search" placeholder="Search website..." class='w-[306px] h-[50px] border-1 border-neutral-500 pl-5'/>
                    <button class='w-[165px] h-[50px] bg-salad text-white text-[14px]'>Search</button>
                </div>

                <div class='w-full h-fit md:flex justify-around pt-[10vh] pb-[15vh]'>
                    <div class='w-[294px] h-[214px] space-y-[20px]'>
                        <h3 class='text-bluecard'>For Beginners</h3>

                        <ul className="custom-check-list1">
                            <li class='w-[294px] h-fit text-orange'>10 Beginner tips to get started</li>
                            <li class='w-[294px] h-fit text-orange'>Basic gear kit for Beginners</li>
                            <li class='w-[294px] h-fit text-orange'>The first steps in Photo Editing</li>
                            <li class='w-[294px] h-fit text-orange'>The first steps in using Lightroom</li>
                        </ul>
                        
                        <button class='text-bluecard pt-[40px]'>View All</button>
                    </div>

                    <div class='w-[294px] h-[214px] space-y-[20px]'>
                        <h3 class='text-bluecard'>For Amateurs</h3>

                        <ul className="custom-check-list1">
                            <li class='w-[294px] h-fit text-orange'>Basic gear kit for Amateurs</li>
                            <li class='w-[294px] h-fit text-orange'>The next steps in Photo Editing</li>
                            <li class='w-[294px] h-fit text-orange'>The next steps in using Lightroom</li>
                            <li class='w-[294px] h-fit text-orange'>Using Photoshop for Photo Editing</li>
                        </ul>
                        
                        <button class='text-bluecard pt-[40px]'>View All</button>
                    </div>

                    <div class='w-[294px] h-[214px] space-y-[20px]'>
                        <h3 class='text-bluecard'>For Professionals</h3>

                        <ul className="custom-check-list1">
                            <li class='w-[294px] h-fit text-orange'>Basic gear kit for Pros</li>
                            <li class='w-[294px] h-fit text-orange'>Create custom filters in Lightroom</li>
                            <li class='w-[294px] h-fit text-orange'>Using Lightroom as a Pro</li>
                            <li class='w-[294px] h-fit text-orange'>Using Photoshop for Photo Editing</li>
                        </ul>
                        
                        <button class='text-bluecard pt-[40px]'>View All</button>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}