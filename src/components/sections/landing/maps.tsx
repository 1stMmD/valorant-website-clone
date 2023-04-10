import { LegacyRef } from "react"
import { useParallax } from "../../../hooks/useParallax"
import CallToAction from "../../shared/buttons/call-to-action"
import { useXParallax } from "../../../hooks/useXParallax"

const Maps = () => {

    const { container , element } = useParallax()

    const { container : containerX , element : elementX } = useXParallax("up",.3)

  return (
    <section
    className="
    relative
    flex
    bg-primary
    font-DINNext
    px-[5vw]
    py-[100px]
    lg:px-[7.5vw]
    ">

        <div
        ref={containerX}
        className='
        hidden
        lg:flex
        z-[0]
        absolute
        top-0
        left-0
        h-full
        w-full
        items-center
        lg:items-start
        justify-center
        overflow-hidden
        '>
            <img
            ref={(elementX as LegacyRef<HTMLImageElement>)}
            src="https://playvalorant.com/static/birds-e038b522474ce3a3104f482100815770.png"
            className='
            object-center
            object-contain
            h-[45%]
            w-[35%]
            '/>
        </div>

        <div
        ref={container}
        className='
        hidden
        lg:inline-block
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

        <div
        className="
        relative
        flex
        flex-col
        md:flex-row
        ">

            <div
            className="
            z-[2]
            flex-shrink
            lg:w-[50%]
            relative
            flex
            flex-col
            gap-8
            lg:gap-12
            pt-[30px]
            lg:pl-[9%]
            ">
                <h2
                className='
                text-[55px]
                md:text-[100px]
                lg:text-[120px]
                leading-none
                tracking-[1px]
                text-primary
                font-Tungsten
                '>
                    YOUR MAPS
                </h2>

                <div
                className="
                flex
                flex-col
                gap-6
                ">
                    <h5
                    className="
                    text-[20px]
                    font-bold
                    text-primary
                    ">
                        FIGHT AROUND THE WORLD.
                    </h5>

                    <p
                    className="
                    text-primary
                    opacity-60
                    text-[18px]
                    lg:text-[16px]
                    sm:mr-[calc(20%_-_6px)]
                    ">
                        Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.
                    </p>
                </div>

                <a
                className="
                mt-[35vw]
                mb-[50px]
                lg:mt-0
                w-full
                flex
                justify-center
                z-[2]
                md:w-fit
                ">
                    <CallToAction
                    light={false}
                    title="View all Agents"
                    />
                </a>                

                <span
                className="
                absolute
                top-0
                h-[1px]
                w-full
                bg-slate-500/60
                "/>
                
            </div>

            <div
            className="
            z-[1]
            absolute
            bottom-[-100px]
            translate-x-[12.5vw]
            ">
                <div
                className="
                relative
                h-[100%]
                ">

                    <img
                    src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt02c83424f7b41a97/6243813d8850ee0e8ea0ae56/maps-03ebbf2c074f13a65af1dba0c80f767e.png"
                    className="
                    z-[1]
                    h-full
                    object-center
                    object-cover
                    overflow-visible
                    "
                    />

                    <span
                    className="
                    absolute
                    bottom-0
                    left-0
                    h-[70%]
                    w-[10vw]
                    bg-gradient-to-r
                    from-blue-100
                    to-transparent
                    "
                    />

                </div>
            </div>
            
        </div>

        {/* vertical line */}
        <span
        className="
        absolute
        top-0
        bottom-0
        left-[5vw]
        lg:left-[7.5vw]
        w-[1px]
        h-full
        bg-slate-500/60
        z-[2]
        "/>

        <span
        className="
        w-[32px]
        h-[540px]
        scale-75
        md:scale-100
        absolute
        left-[-6px]
        md:left-[-2px]
        lg:left-[calc(7.5vw_/_2_-_16px)]
        top-[35%]
        lg:top-[10%]
        bg-[url('https://playvalorant.com/assets/images/background-sprite.png')]
        "
        />
                
    </section>
  )
}

export default Maps