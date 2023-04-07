import React, { useCallback, useReducer, useRef, useState } from 'react'
import More, { Child, Parent } from './more'

type OptionsActions = "Update" | "Hide"

type OptionsPayload = {
    show : boolean,
    x : number,
    value : string[] | null
}

type OptionsAction = {
    type : OptionsActions,
    payload ?: OptionsPayload
}

type OptionsState = {
    show : boolean,
    x : number,
    value : string[] | null
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
    const [sections , setSections] = useState([
        {
            name : "Game Info",
            options : [
                "Agents",
                "Weapons",
                "Maps"
            ]
        },
        {
            name : "Media",
            options : [
                "Telegram",
                "Instagram",
                "Discord"
            ]
        },
        {
            name : "News",
            options : null
        },
        {
            name : "Leaderboards",
            options : null
        }
    ])
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

    const cb = useCallback((node : HTMLDivElement) => {
        observer.current = new ResizeObserver((e) => {
            const { scrollHeight , clientHeight } = e[0].target
            if(scrollHeight > clientHeight){
                setSections(prev => {
                    let l = [...prev]
                    l.splice(prev.length - 1, 1) 
                    return l
                })
            }
        })
        
        if(node)
        observer.current.observe(node)
    },[])

    return (
        <>
            <div
            ref={cb}
            className='
            flex-grow-0
            flex
            flex-wrap
            items-center
            h-full
            w-full
            relative
            overflow-hidden
            gap-1
            '>
                {sections.map(({name , options} , idx) => {
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
                            
                            <button
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
                            </button>
                            
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
                    {options.value?.map((item) => {
                        if(!item.options) return(
                            <Child
                            section={item}
                            />
                        )
                        return(
                            <Parent
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

const more = [
    {
        name : "Game Info",
        options : [
            {
                name : "Agents",
                options : null
            },
            {
                name : "Weapons",
                options : null
            },
            {
                name : "Maps",
                options : [
                    {
                        name : "test",
                        options : null
                    },
                    {
                        name : "test2",
                        options : null
                    },
                ]
            }
        ]
    },
    {
        name : "News",
        options : null
    },
]