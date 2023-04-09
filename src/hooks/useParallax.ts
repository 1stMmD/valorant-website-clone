import { useEffect , useRef } from "react"

export const useParallax = (direction : "up" | "bottom" = "bottom") => {

    const dir = direction === "bottom" ? -1 : 1

    const container = useRef<HTMLDivElement | null>(null)
    const element = useRef<HTMLDivElement | null>(null)
  
    useEffect(() => {
      window.addEventListener( "scroll" , () => {
        const offset = window.pageYOffset
        const top = container.current?.getClientRects()[0].top ?? 0
        const position = top - (offset)
  
        element.current?.animate({
          transform : `translateY(${(position * dir) * .075}px)`
        },{
          duration: 200,
          easing: 'ease-in-out',
          fill : "forwards"
        })  
      })
    },[container , element])

    return{
        container,
        element
    }
}