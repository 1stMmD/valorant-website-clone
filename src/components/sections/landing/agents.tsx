import { LegacyRef } from "react"
import { useParallax } from "../../../hooks/useParallax"
import CallToAction from "../../shared/buttons/call-to-action"
import H2 from "../../primitives/text/header-2"
import SlideUpWhenInView from "../../animated/slide-up-when-in-view"

const Agents = () => {

    const {container , element} = useParallax("up" , .3)

  return (
    <section
    className="
    relative
    flex
    bg-blue-500
    font-DINNext
    px-[5vw]
    py-[50px]
    lg:px-[7.5vw]
    ">

        <div
        className="
        relative
        flex
        flex-col
        lg:flex-row-reverse
        ">

            <div
            className="
            z-[2]
            flex-shrink-0
            lg:w-[40%]
            relative
            flex
            flex-col
            gap-6
            pt-[30px]
            ">
                <div
                className="
                text-secondary
                ">
                    <SlideUpWhenInView once>
                        <H2>
                            YOUR AGENTS
                        </H2>
                    </SlideUpWhenInView>
                    
                </div>

                <h5
                className="
                text-[20px]
                font-bold
                text-secondary
                ">
                    CREATIVITY IS YOUR GREATEST WEAPON.
                </h5>

                <p
                className="
                text-secondary
                text-[18px]
                lg:text-[16px]
                sm:mr-[calc(20%_-_6px)]
                ">
                    More than guns and bullets, you'll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.
                </p>

                <a
                className="
                mt-[70vw]
                mb-[8vw]
                lg:mt-0
                w-full
                flex
                justify-center
                z-[2]
                ">
                    <CallToAction
                    title="View all agents"
                    secondary
                    />
                </a>

                <span
                className="
                absolute
                top-0
                h-[1px]
                w-full
                bg-white/50
                "/>
                
            </div>

            <div
            className="
            z-[1]
            flex-shrink-0
            lg:w-[60%]
            absolute
            lg:relative
            bottom-[-30vw]
            sm:bottom-[-20vw]
            lg:bottom-[0]
            ">
                <div
                ref={container}
                className="
                relative
                h-[134vw]
                sm:h-[120vw]
                md:h-[110vw]
                lg:h-[130%]
                ">

                    <img
                    ref={(element as LegacyRef<HTMLImageElement> | undefined)}
                    src="https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png"
                    className="
                    z-[1]
                    h-full
                    object-center
                    object-cover
                    overflow-visible
                    "
                    />

                </div>
            </div>

            <span
            className="
            hidden
            lg:inline-block
            absolute
            top-0
            h-[15px]
            w-full
            bg-no-repeat
            scale-75
            md:scale-100
            bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2cAAAAaBAMAAADBMTnUAAAALVBMVEUAAAAPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMPGSMEvDlEAAAAD3RSTlMAkT8wGAhgOycjEoN7VB+N+usOAAAAdklEQVRo3u3UwQmBcRyH8W8pvQcpcpMbvTmj5CQTKBMYwQo2sAKjWcQMvwP91eezwlNPAADg5wZ9arr+nMaclql5rlNzX6Ulo3mxwXByTGNu09Q8Fqm5ztIS0f4wWrdPzXjT3B5fh9Rctql57wIAAAAAAAB81we4bAq3ImcPlQAAAABJRU5ErkJggg==')]
            "
            />

            <span
            className="
            hidden
            lg:inline-block
            absolute
            top-[20%]
            h-[32px]
            w-full
            scale-75
            md:scale-100
            bg-[url('https://playvalorant.com/assets/images/background-sprite.png')]
            bg-[center_-630px]
            bg-no-repeat
            "
            />

            <span
            className="
            hidden
            lg:inline-block
            absolute
            top-[50%]
            h-[32px]
            w-full
            scale-75
            md:scale-100
            bg-[url('https://playvalorant.com/assets/images/background-sprite.png')]
            bg-[right_-630px]
            bg-no-repeat
            "
            />

            <span
            className="
            hidden
            lg:inline-block
            absolute
            top-[60%]
            h-[32px]
            w-full
            scale-75
            md:scale-100
            bg-[url('https://playvalorant.com/assets/images/background-sprite.png')]
            bg-[50px_-630px]
            bg-no-repeat
            "
            />
            
        </div>


        {/* horizontal bold line */}
        <span
        className="
        absolute
        -top-2
        right-0
        h-2
        w-[80px]
        bg-secondary
        "/>


        {/* triangle */}
        <span
        className="
        absolute
        -top-[4.4vw]
        lg:-top-[6.9vw]
        left-0
        h-2
        w-[80px]
        border-t-transparent
        border-t-[4.5vw]
        lg:border-t-[7vw]
        border-l-[5vw]
        lg:border-l-[7.5vw]
        border-l-blue-500
        "/>

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
        bg-primary
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
        
        <span
        className="
        w-[32px]
        h-[540px]
        scale-75
        md:scale-100
        absolute
        right-[-4px]
        bottom-[35%]
        bg-[url('https://playvalorant.com/assets/images/background-sprite.png')]
        bg-[right_-240px]
        "
        />

        <span
        className="
        hidden
        lg:inline-block
        absolute
        bottom-0
        h-[32px]
        w-full
        scale-75
        md:scale-100
        bg-[url('https://playvalorant.com/assets/images/background-sprite.png')]
        bg-[left_-630px]
        bg-no-repeat
        "
        />
        
    </section>
  )
}

export default Agents