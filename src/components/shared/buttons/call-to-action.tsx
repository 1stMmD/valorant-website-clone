type props = {
  title : string,
  light ?: boolean
}

const CallToAction = ({
  title ,
  light = true
} : props) => {
  return (
    <div
    className="
    flex-shrink-0
    max-w-[280px]
    w-[280px]
    flex
    items-center
    justify-center
    p-2
    relative
    ">
        <button
        className="
        group
        overflow-hidden
        relative
        text-[1.1rem]
        lg:text-[1rem]
        text-secondary
        text-center
        w-full
        font-bold
        font-DINNext
        py-4
        uppercase
        ">
            <span
            className="
            relative
            z-[2]
            ">
                {title}
            </span>

            <span
            className="
            absolute
            flex
            w-[100%]
            h-[calc(100%_-_4px)]
            bottom-0
            left-0
            bg-secondary
            "
            />

            <span
            className="
            absolute
            flex
            w-[calc(100%_-_4px)]
            h-[4px]
            top-0
            right-0
            bg-secondary
            "
            />

            <span
            className="
            transition-all
            duration-500
            bottom-0
            right-0
            absolute
            w-1.5
            h-1.5
            bg-neutral-800
            group-hover:bg-primary
            z-[2]
            "
            />

            <span
            className="
            transition-all
            duration-500
            top-0
            -left-[150%]
            group-hover:-left-[5%]
            -skew-x-6
            absolute
            w-[110%]
            h-full
            bg-neutral-800
            "
            />

        </button>

        <span
        className={`
        ${light ? "" : "border-slate-500/60"}
        pointer-events-none
        absolute
        w-full
        h-[40%]
        border-[1px]
        border-t-[0px]
        bottom-0
        `}
        />

        <span
        className={`
        ${light ? "" : "border-slate-500/60"}
        pointer-events-none
        absolute
        w-full
        h-[40%]
        border-[1px]
        border-b-[0px]
        top-0
        `}
        />
    </div>
  )
}

export default CallToAction