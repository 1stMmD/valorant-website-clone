import { useEffect , useRef } from "react"

export const useXParallax = (direction : "up" | "bottom" = "bottom" , speed : number = .075) => {

    const dir = direction === "bottom" ? -1 : 1

    const container = useRef<HTMLDivElement | null>(null)
    const element = useRef<HTMLDivElement | HTMLImageElement | null>(null)
  
    useEffect(() => {
      if(!container.current || !element.current) return

      const handleScroll = () => {
        const top = container.current?.getClientRects()[0].top ?? 0
        const position = top - (window.innerHeight / 2)
  
        element.current?.animate({
          transform : `translateX(${(position * dir) * speed}px)`
        },{
          duration: 200,
          easing: 'ease-in-out',
          fill : "forwards"
        })  
      }

      window.addEventListener( "scroll" , handleScroll)
      
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    },[container , element])

    return{
        container,
        element
    }
}