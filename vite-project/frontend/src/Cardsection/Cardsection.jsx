import "../main.css"

import instant from "./imgs/instant.png"

import { useState, useEffect } from "react"

export default function Cardsection() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3010/api/card')
            .then((response) => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error))
    }, []);

    const handlePurchase = async (card) => {
        try {
            const response = await fetch('http://localhost:3010/api/purchases', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    card_id: card.id,
                    period: card.period,
                    price: card.price
                })
            });

            if (response.ok) {
                console.log('Purchase recorded successfully');

            } else {
                console.error('Failed to record purchase');
            }
        } catch (error) {
            console.error('Error recording purchase:', error);
        }
    };

    return (
        <>

            <section class='w-full h-fit bg-purple2 bg-card-section'>
                <div class='w-[60%] h-[fit] ml-[20%] mr-[20%]'>
                    <h1 class='text-[52px] pt-[30vh] text-center text-white'>Get full accesses. Today</h1>
                    <div class='w-full h-fit md:flex justify-around pt-20'>
                        {data.map((card) => (
                            <div key={card.id} class='w-[287px] h-[429px] bg-white p-5 space-y-[20px] transition-all duration-500 ease-in-out transform hover:scale-105 hover:h-[449px] hover:-translate-y-4 shadow-lg hover:shadow-xl'>
                                <p class='text-left text-[15px]' className="period">{card.period}</p>
                                <h2 class='w-full h-fit md:flex items-center gap-x-4 text-[55px]'>{card.price}<span class='text-[14px]'>{card.month}</span></h2>
                                <ul class='custom-check-list'>
                                    <li>{card.point_first}</li>
                                    <li>{card.point_second}</li>
                                    <li>{card.point_third}</li>
                                </ul>
                                <button class='w-[112px] h-[47px] bg-salad text-white cursor-pointer hover:bg-orange transition-colors duration-300' onClick={() => handlePurchase(card)}>Buy Now</button>
                                <p class='w-[193px] text-description text-[11px]'>{card.description}</p>
                            </div>
                        ))}
                    </div>

                    <div class='w-full h-fit md:flex items-center m-auto justify-around pb-[20vh] mt-[9vh] text-white'>
                        <div>
                            <div class='md:flex items-center pb-[20px] gap-x-[10px]'>
                                <img src={instant} alt="" class='w-[20px] h-[20px]'/>
                                <h3 class='text-[21px]'>Instant Access</h3>
                            </div>
                            <p class='w-[537px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                        </div>
                        <button>Learn more</button>
                    </div>

                </div>
            </section >
        </>
    )
}