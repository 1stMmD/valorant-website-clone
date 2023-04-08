import React from 'react'
import CallToAction from '../../shared/buttons/call-to-action'

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
        lg:left-[0]
        lg:right-[0]
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
        flex
        items-center
        justify-center
        h-[30rem]
        p-[5vw]
        relative
        '>

            <CallToAction/>

            <span
            className='
            absolute
            w-[1px]
            h-full
            top-0
            bottom-0
            left-[5vw]
            bg-primary
            '
            />

        </div>

    </section>
  )
}

export default Introduction