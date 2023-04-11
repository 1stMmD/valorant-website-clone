import { useInView } from "../../hooks/useInView"

type props = {
    children : React.ReactNode,
    once : boolean
}

const SlideUpWhenInView = ({
    children,
    once = true
} : props) => {
    const {ref, inView} = useInView(once)
  return (
    <div
    className="
    overflow-hidden
    "
    ref={ref}>
        <div
        className={`
        ${inView ? "translate-y-0" : "translate-y-[100%]"}
        transition-transform
        duration-1000
        `}>
            {children}
        </div>
    </div>
  )
}

export default SlideUpWhenInView