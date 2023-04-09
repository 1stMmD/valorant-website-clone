import React from 'react'
import CallToAction from '../../shared/buttons/call-to-action'

const Featured = () => {
  return (
    <section
    className='
    flex
    relative
    w-full
    h-[110%]
    '>
        <img
        src='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltec6e41768fe56f69/6402195c27ccd11087ac695a/Val_ep6a2_PlayVal_act_Overview-Art_gekko_3440x1020.jpg'
        className='
        absolute
        h-full
        top-0
        bottom-0
        object-cover
        object-center
        '
        />

        <div
        className='
        relative
        flex
        flex-col
        justify-end
        w-full
        min-h-[110vh]
        px-[5vw]
        lg:px-[7.5vw]
        py-10
        '>
            <div
            className='
            flex
            flex-col
            relative
            lg:px-8
            md:py-[70px]
            '>
                <h4
                className='
                absolute
                text-[20px]
                text-secondary
                font-medium
                font-DINNext
                tracking-[7px]
                leading-none
                top-0
                md:relative
                '>
                    EPISODE_06 // ACT II / YR 3
                </h4>

                <h3
                className='
                my-10
                md:my-[45px]
                text-[55px]
                md:text-[100px]
                lg:text-[120px]
                leading-none
                tracking-[1px]
                text-secondary
                font-Tungsten
                '>
                    REVELATION
                </h3>

                <a>
                    <CallToAction
                    title="act ii overview"
                    />
                </a>
            </div>

        </div>

        <span
        className='
        absolute
        w-[1px]
        h-full
        top-0
        bottom-0
        bg-white/60
        left-[5vw]
        lg:left-[7.5vw]
        '
        />
        
    </section>
  )
}

export default Featured