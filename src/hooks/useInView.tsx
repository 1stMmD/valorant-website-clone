import {useState , useRef, useCallback} from 'react';

export const useInView = (once : boolean) => {
    const [inView, setInView] = useState<boolean>(false)
    const observer = useRef<null | IntersectionObserver>(null)

    const ref = useCallback((node : HTMLElement | null) => {
        if(observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
                setInView(true)
                return
            }

            if(!once) {
                setInView(false)
            }
        },{
            rootMargin : "0px 0px -10% 0px"
        })

        if(node) observer.current.observe(node);

    },[])

    return {
        ref,
        inView
    }

}