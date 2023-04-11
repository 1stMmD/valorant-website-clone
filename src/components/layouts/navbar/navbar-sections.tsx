import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import More, { Child, Parent } from './more'
import type { OptionType } from '../../../constants/navbar'
import { sections_array } from '../../../constants/navbar'
type OptionsActions = "Update" | "Hide"

type OptionsPayload = {
    show : boolean,
    x : number,
    value : OptionType[] | null
}

type OptionsAction = {
    type : OptionsActions,
    payload ?: OptionsPayload
}

type OptionsState = {
    show : boolean,
    x : number,
    value : OptionType[] | null
}

const actions : {
    [type : string] : (prev : OptionsState , action : OptionsAction) => OptionsState
}= {
    "Update" : (prev , action) => {
        if(!action.payload) return prev

        return action.payload
    },
    "Hide" : (prev , action) => {

        return {
            ...prev,
            show : false
        }
    }
}

function NavbarSections() {
    const [sections , setSections] = useState<OptionType[] | []>(sections_array)
    const [more , setMore] = useState<OptionType[] | []>([])
    const [options, updateOptions] = useReducer((prev : OptionsState , action : OptionsAction) => {
        const { type } = action
        return actions[type](prev , action);
    },
    {
        show : false,
        x : 0,
        value : null
    })

    const timeout = useRef<undefined | number>(undefined)

    const observer = useRef<null | ResizeObserver>(null) 
    const m_observer = useRef<null | MutationObserver>(null) 

    const cb = useCallback((node : HTMLDivElement) => {
        observer.current = new ResizeObserver((e) => {
            const { scrollWidth , clientWidth } = e[0].target
            if(scrollWidth > clientWidth){
                setSections(prev => {
                    if(prev.length <= 0) return prev
                    let l = [...prev]
                    let Item = l.splice(prev.length - 1, 1)
                    setMore(morePrev => {
                        if(morePrev.some((i) => i.name === Item[0].name)) return morePrev
                        return [...morePrev,Item[0]]
                    })
                    return l
                })
            }
        })

        m_observer.current = new MutationObserver((e) => {
            const { scrollWidth , clientWidth } = (e[0].target as any)
            if(scrollWidth > clientWidth){
                setSections(prev => {
                    if(prev.length <= 0) return prev
                    let l = [...prev]
                    let Item = l.splice(prev.length - 1, 1)
                    setMore(morePrev => {
                        if(morePrev.some((i) => i.name === Item[0].name)) return morePrev
                        return [...morePrev,Item[0]]
                    })
                    return l
                })
            }
        })
        
        if(node){
            observer.current.observe(node)
            m_observer.current.observe(node , {childList : true})
        }
    },[])

    return (
        <>
            <div
            ref={cb}
            className='
            flex-grow-0
            flex
            items-center
            h-full
            w-full
            max-w-full
            relative
            overflow-hidden
            gap-1
            '>
                {sections?.map(({name , options , url} , idx) => {
                    return(
                        <span
                        className='
                        flex-shrink-0
                        text-secondary
                        relative
                        flex
                        items-center
                        h-full
                        '
                        key={idx}>
                            
                            <a
                            href={url ? url : ""}
                            onMouseEnter={(e) => {
                                if(!options) return

                                if(timeout.current) clearTimeout(timeout.current)

                                const parent = (e.currentTarget.parentNode as Element);
                                const {x} = parent?.getBoundingClientRect()
                                updateOptions({
                                    type : "Update",
                                    payload : {
                                        show : true,
                                        x,
                                        value : options
                                    }
                                })
                            }}
                            onMouseLeave={() => {
                                if(!options) return
                                timeout.current = setTimeout(() => {
                                    updateOptions({
                                        type : "Hide"
                                    })
                                },300)
                            }}
                            className='
                            peer
                            font-DINNext
                            uppercase
                            text-[.87rem]
                            tracking-[1px]
                            font-medium
                            px-4
                            py-2
                            hover:bg-neutral-800
                            rounded-lg
                            '>
                                {name}
                            </a>
                            
                            {
                            !options ? <span
                            className='
                            z-[3]
                            transition-all
                            peer-hover:max-w-full
                            absolute
                            bottom-2
                            left-0
                            right-0
                            bg-secondary
                            h-1
                            rounded-full
                            max-w-[0px]
                            w-full
                            
                            '/> : 
                            <></>}

                        </span>
                    )
                })}
                    
                <More
                onMouseEnter={(e) => {
                    if(timeout.current) clearTimeout(timeout.current)
                    const parent = (e.currentTarget.parentNode as Element);
                    const {x} = parent?.getBoundingClientRect()
                    console.log(more)
                    updateOptions({
                        type : "Update",
                        payload : {
                            show : true,
                            x,
                            value : more
                        }
                    })
                }}
                onMouseLeave={() => {
                    timeout.current = setTimeout(() => {
                        updateOptions({
                            type : "Hide"
                        })
                    },300)
                }}
                />
                    
            </div>

            <div
            onMouseLeave={() => {
                timeout.current = setTimeout(() => {
                    updateOptions({
                        type : "Hide"
                    })
                },300)
            }}
            onMouseEnter={() => {
                if(timeout.current) clearTimeout(timeout.current)
            }}
            style={{
                left : options.x + "px",
                display : options.show ? "flex" : "none"
            }}
            className='
            absolute
            bg-neutral-800
            top-[calc(100%_-_12px)]
            flex
            flex-col
            min-w-[200px]
            rounded-md
            '>
                <span
                className='
                flex-grow
                z-[3]
                transition-all
                bg-secondary
                h-1
                rounded-sm            
                '/>

                <div
                className='
                flex-grow
                flex
                flex-col
                p-4
                gap-1
                text-secondary
                font-DINNext
                font-medium
                uppercase
                text-[.87rem]
                '
                >
                    {options.value?.map((item , idx) => {
                        if(!item.options) return(
                            <Child
                            key={idx + item.name}
                            section={item}
                            />
                        )
                        return(
                            <Parent
                            key={idx + item.name}
                            section={item}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default NavbarSections

