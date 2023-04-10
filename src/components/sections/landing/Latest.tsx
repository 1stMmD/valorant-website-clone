import { useState , useEffect, useRef } from 'react'
import EventCard from '../../constructs/event-card'
import { Swiper , SwiperSlide } from "swiper/react";
import "swiper/swiper.css"
import { useIsLG } from '../../../hooks/useIsLG';
import NavigationButton from '../../shared/buttons/navigation-button';
import { useParallax } from '../../../hooks/useParallax';

const Latest = () => {
    const isLG = useIsLG()

    const {container , element} = useParallax()

    return (
        <section
        className='
        relative
        px-[5vw]
        lg:px-[7.5vw]
        py-[70px]
        bg-primary
        after:content-[""]
        after:z-2
        after:absolute
        after:-top-[4.9vw]
        after:left-0
        after:border-b-[5vw]
        after:border-r-[5vw]
        lg:after:border-b-[4rem]
        lg:after:border-r-[4rem]
        lg:after:-top-[4rem]
        after:border-r-transparent
        after:border-b-blue-100
        '>

            <header
            className='
            relative
            z-[2]
            flex
            justify-between
            items-center
            '>
                <h2
                className='
                text-[55px]
                md:text-[100px]
                lg:text-[120px]
                font-Tungsten
                text-blue-500
                translate-y-[.75rem]
                md:translate-y-[1.5rem]
                leading-none
                '>
                    THE LATEST
                </h2>

                <div
                className='
                hidden
                lg:inline-block
                pt-[10px]
                pb-[20px]
                '>
                    <NavigationButton
                    title="Go to news page."
                    url="https://playvalorant.com/en-us/news//"
                    />
                </div>

            </header>

            <div
            className='
            relative
            z-[1]
            '>  
                {
                    isLG ?
                    <div
                    className='
                    grid
                    grid-cols-3
                    gap-8
                    '>
                        {
                            latest_data.map((item , idx) => (
                                <EventCard
                                key={idx}
                                event={item}
                                />
                            ))
                        }
                    </div>
                    :

                    <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    className='
                    grid
                    overflow-visible
                    '>
                        {
                            latest_data.map((item , idx) => (
                                <SwiperSlide
                                key={idx}>
                                    <EventCard
                                    key={idx}
                                    event={item}
                                    />
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>
                }
            </div>
            
            <div
            className='
            inline-block
            lg:hidden
            pt-[10px]
            pb-[20px]
            '>
                <NavigationButton
                title="Go to news page."
                url="https://playvalorant.com/en-us/news//"
                />
            </div>

            <div
            className='
            absolute
            flex
            w-[55px]
            justify-between
            top-[2rem]
            lg:top-[4rem]
            right-[50%]
            translate-x-[50%]
            '>
                <span
                className='
                bg-secondary
                inline-block
                w-[7px]
                h-[7px]
                '
                />

                <span
                className='
                bg-secondary
                inline-block
                w-[7px]
                h-[7px]
                '/>
            </div>

            <div
            ref={container}
            className='
            z-[0]
            absolute
            top-0
            left-0
            w-full
            overflow-hidden
            '>
                <div
                ref={element}
                className='
                leading-none
                uppercase
                text-transparent
                flex
                flex-col
                text-[23.4vw]
                font-Tungsten
                text-stroke
                tracking-[1rem]
                '>
                    <span
                    className='
                    text-shadow
                    '>
                        MmD
                    </span>

                    <span
                    className='
                    translate-x-[40vw]
                    '>
                        Jamli
                    </span>
                </div>
            </div>

            <span
            className='
            absolute
            w-[1px]
            h-full
            top-0
            bottom-0
            bg-slate-500
            left-[5vw]
            lg:left-[7.5vw]
            '
            />
        </section>
    )
}

export default Latest

const latest_data = [
    {
        url : "https://youtu.be/Dwm89ETfGtc",
        banner : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd264d1ac1435cbc1/642c77088aab7b10efdf19af/AgentAllStars_Thumbnail_YT_Textless.jpg",
        date : "04/05/23",
        category : "esports",
        title : "VALORANT Agents to watch in the VCT | Hype Trailer",
    },
    {
        url : "https://valorantesports.com/news/masters-tokyo-ticket-sale-information/",
        banner : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb96a726ab7e7a4c7/6410f16faeefb86bfe4b5eb3/VCT23_Masters_Ticket_Announcement_Textless.jpg",
        date : "04/04/23",
        category : "esports",
        title : "Masters Tokyo: Live Audience and Ticket Sale Information",
    },
    {
        url : "https://www.youtube.com/watch?v=9N_iC-Yc0FA",
        banner : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2f2481f6e8195b98/642501dfaf3dfe110c7ecd9b/040123_VAL_Cyphers_Revenge_CG_Banner_v4.jpg",
        date : "04/01/23",
        category : "announcements",
        title : "CHECKMATE // Cypher’s Revenge Game Mode Trailer - VALORANT",
    }
]