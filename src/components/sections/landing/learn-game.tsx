import React from 'react'
import CallToAction from '../../shared/buttons/call-to-action'
import VideoCard from '../../constructs/video-card'

const LearnGame = () => {
  return (
    <section
    className='
    relative
    px-[5vw]
    lg:px-[7.5vw]
    bg-primary
    py-10
    lg:py-12
    gap-6
    '>

        <div
        className='
        relative
        flex
        flex-col
        py-10
        '>

            <div
            className='
            lg:mr-[120px]
            lg:ml-[calc(8.33%_-_2.5px)]
            lg:mb-8
            lg:p-3
            '>
                <h3
                className='
                text-[55px]
                md:text-[100px]
                lg:text-[120px]
                leading-none
                tracking-[1px]
                text-primary
                font-Tungsten
                '>
                    WE ARE VALORANT
                </h3>
            </div>

            <div
            className='
            flex
            flex-col
            lg:flex-row
            lg:items-center
            gap-8
            md:gap-x-14
            font-DINNext
            '>

                <div
                className='
                relative
                flex
                flex-col
                gap-y-6
                flex-shrink
                w-full
                lg:max-w-[calc(25%_-_50px)]
                lg:ml-[calc(16.6%_-_5px)]
                lg:gap-y-12
                lg:mb-[80px]
                '>

                    <h5
                    className='
                    text-[20px]
                    text-primary
                    '
                    >
                        DEFY THE LIMITS
                    </h5>

                    <p
                    className='
                    text-primary
                    text-[18px]
                    lg:text-[16px]
                    opacity-70
                    '>
                        Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
                    </p>

                    <a
                    className='
                    flex
                    justify-center
                    '>
                        <CallToAction
                        title='learn game'
                        light={false}
                        />
                    </a>

                    {/* little square beside description 👇🏻*/}
                    <span
                    className='
                    absolute
                    w-[8px]
                    h-[8px]
                    bg-secondary
                    bottom-[30%]
                    -left-[30%]
                    ' />

                </div>

                <div
                className='
                flex-shrink
                relative
                w-full
                '>
                    <div
                    className='
                    lg:translate-x-[7.5vw]
                    '>
                        <VideoCard
                        poster=''
                        src=''
                        />
                    </div>

                    <span
                    className='
                    top-[20px]
                    -left-[20px]
                    lg:translate-x-[7.5vw]
                    font-DINNext
                    font-bold
                    text-secondary
                    text-[15px]
                    absolute
                    bg-secondary
                    px-5
                    py-1
                    '>
                        Gameplay
                    </span>

                    <span
                    className='
                    hidden
                    lg:flex
                    absolute
                    lg:translate-x-[7.5vw]
                    -top-[40px]
                    left-0
                    gap-10
                    '>
                        <span
                        className='
                        w-[8px]
                        h-[8px]
                        bg-secondary
                        '
                        />

                        <span
                        className='
                        w-[8px]
                        h-[8px]
                        bg-secondary
                        '/>
                    </span>

                    <span
                    className='
                    -bottom-[4px]
                    left-0
                    lg:translate-x-[7.5vw]
                    absolute
                    w-[100px]
                    h-[4px]
                    bg-secondary
                    '
                    />
                </div>

            </div>

            {/* horizontal line on the top 👇🏻*/}
            <span
            className='
            absolute
            h-[1px]
            w-full
            lg:w-[90%]
            right-0
            top-0
            bg-slate-500/60
            '
            />

            {/* little square on the top 👇🏻*/}
            <span
            className='
            absolute
            h-[15px]
            aspect-square
            right-[25%]
            top-[20px]
            bg-secondary
            '
            />

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

        {/* section with -30 top value containing 3 shapes 👇🏻*/}
        <div
        className='
        flex
        w-full
        h-[50px]
        absolute
        -top-[30px]
        left-0
        right-0
        px-[5vw]
        lg:px-[7.5vw]
        '>
            <div
            className='
            flex
            h-[30px]
            w-full
            relative
            '>
                <span
                className='
                top-0
                left-0
                absolute
                w-[10px]
                h-[10px]
                bg-secondary
                '/>

                <span
                className='
                top-0
                right-[20%]
                absolute
                w-[100px]
                h-[3px]
                bg-secondary
                '/>

                <span
                className='
                bottom-0
                right-0
                absolute
                w-[15px]
                h-[15px]
                bg-secondary
                '/>
            </div>
        </div>

        {/* little square beside description 👇🏻*/}
        <span
        className='
        hidden
        lg:inline-block
        absolute
        w-[12px]
        h-[12px]
        bg-secondary
        bottom-[10%]
        ' />

        {/* 00. 👇🏻*/}
        <span
        className='
        hidden
        lg:inline-block
        absolute
        bottom-[10%]
        left-[15%]
        border-t-[6px]
        border-t-slate-300
        text-[50px]
        font-Tungsten
        leading-none
        text-slate-300
        ' >
            00.
        </span>

    </section>
  )
}

export default LearnGame