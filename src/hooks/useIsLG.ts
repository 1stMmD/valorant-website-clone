import { useEffect , useState } from "react"

export const useIsLG = () =>{ 
    const [isLG, setIsLG] = useState<boolean>(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        setIsLG(mediaQuery.matches);

        const handler = (e : any) => {
            setIsLG(e.matches)
        };

        mediaQuery.addListener(handler);

        return () => {
            mediaQuery.removeListener(handler);
        };
    }, []);
    
    return isLG
}