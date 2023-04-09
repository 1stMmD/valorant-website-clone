import React from 'react'
import CallToAction from '../../shared/buttons/call-to-action'
import ValorantText from '../../svg/valorant-text'

const Introduction = () => {
  return (
    <section
    className='
    relative
    '>

        <div
        className='
        absolute
        top-0
        bottom-0
        lg:bottom-[unset]
        lg:top-[unset]
        overflow-hidden
        '>
            <video
            className='
            h-full
            object-cover
            object-center
            '
            playsInline
            preload='true'
            muted
            loop
            autoPlay
            poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte299f23c6e55ebed/63bcad4899e03c1edced9b6f/VAL_Ep6_Homepage-CG-Still.jpg"
            >
                <source
                src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4"
                type='video/mp4'
                />
            </video>
        </div>

        <div
        className='
        w-full
        flex
        flex-col
        items-center
        justify-between
        lg:justify-center
        lg:gap-12
        h-[490px]
        lg:h-[36vw]
        px-[5vw]
        py-[4.5rem]
        relative
        '>

            <div
            className='
            flex
            flex-col
            lg:flex-col-reverse
            gap-4
            lg:gap-10
            '>
                <span
                className='
                mx-6
                '>
                    <ValorantText
                    className='
                    w-full
                    lg:w-[48vw]
                    fill-white
                    '/>
                </span>

                <p
                className='
                mx-8
                text-center
                text-secondary
                text-[1.1rem]
                font-DINNext
                font-bold
                '>
                A 5v5 character-based tactical shooter
                </p>
            </div>

            <CallToAction/>

            <span
            className='
            absolute
            w-[1px]
            h-full
            top-0
            bottom-0
            left-[5vw]
            lg:left-[7.5vw]
            bg-primary
            '
            />

            <span
            className='
            hidden
            lg:inline
            absolute
            w-[1px]
            h-full
            top-0
            bottom-0
            lg:left-[30vw]
            bg-primary
            '
            />

            <span
            className='
            hidden
            lg:inline
            absolute
            w-[1px]
            h-full
            top-0
            bottom-0
            lg:right-[7.5vw]
            bg-primary
            '
            />

            <span
            className='
            hidden
            lg:inline
            absolute
            w-[20px]
            h-[20px]
            lg:left-[7.5vw]
            top-[70px]
            bg-secondary
            '
            />

            <span
            className='
            hidden
            lg:inline
            absolute
            border-l-[10px]
            border-l-blue-500
            border-b-[10px]
            border-b-transparent
            border-t-[10px]
            border-t-transparent
            lg:left-[calc(7.5vw_+_20px)]
            top-[70px]
            '
            />

        </div>

    </section>
  )
}

export default Introduction