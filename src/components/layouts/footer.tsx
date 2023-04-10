import React from 'react'
import { Discord, Facebook, Instagram, Twitter, Youtube } from '../svg/social-media-icons'
import RiotGames from '../svg/riot-games'
import Valorant from '../svg/Valorant'

const Footer = () => {
  return (
    <footer
    className='
    relative
    flex
    flex-col
    w-full
    font-DINNext
    '>

        <div
        className='
        flex
        flex-wrap
        items-center
        justify-center
        p-6
        bg-neutral-800
        gap-y-6
        '>
            {
                download_links.map((item, idx) => (
                    <a
                    href={item.url}
                    key={idx}
                    className='
                    duration-500
                    transition-colors
                    bg-neutral-800
                    px-4
                    py-1
                    rounded-md
                    text-white
                    uppercase
                    text-[15px]
                    hover:bg-neutral-700
                    tracking-[1px]
                    '>
                        {item.title}
                    </a>
                ))
            }
        </div>

        <div
        className='
        bg-neutral-900
        flex
        flex-col
        '>
            <div
            className='
            w-full
            py-[18px]
            flex
            items-center
            justify-center
            gap-3
            '
            >
                {
                    social_media_links.map(({url, Icon}, idx) => (
                        <a
                        href={url}
                        key={idx}
                        className='
                        duration-500
                        transition-colors
                        bg-neutral-800
                        p-2
                        rounded-xl
                        text-white
                        uppercase
                        text-[15px]
                        hover:bg-neutral-700
                        tracking-[1px]
                        '>
                            <Icon
                            className='
                            w-[16px]
                            aspect-square
                            fill-white
                            '
                            />
                        </a>
                    ))
                }
            </div>

            <div
            className='
            w-full
            pt-6
            pb-5
            flex
            items-center
            justify-center
            gap-3
            '
            >
                {
                    credits.map(({url, Icon}, idx) => (
                        <a
                        href={url}
                        key={idx}
                        className={url ? "cursor-pointer" : "cursor-default"}
                        >
                            <Icon
                            className={`
                            transition-colors
                            w-[100px]
                            aspect-square
                            fill-white
                            ${url ? "fill-white/50 hover:fill-white" : "fill-white"}
                            `}
                            />
                        </a>
                    ))
                }
            </div>

            <div
            className='
            flex
            items-center
            max-w-[640px]
            mx-auto
            text-center
            text-[14px]
            '>
                <p
                className='
                text-neutral-500
                '>
                    © 2023 Riot Games, Inc. Riot Games, VALORANT, and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.
                </p>
            </div>

            <div
            className='
            flex
            flex-wrap
            items-center
            justify-center
            pt-7
            pb-6
            '>
            {
                legal_links.map(({title , url}, idx) => (
                    <a
                    href={url}
                    key={idx}
                    className='
                    duration-500
                    transition-colors
                    bg-neutral-900
                    px-4
                    py-1
                    rounded-md
                    text-white
                    uppercase
                    text-[15px]
                    hover:bg-neutral-800
                    tracking-[1px]
                    '>
                        {title}
                    </a>
                ))
            }
            </div>

            <div
            className='
            flex
            justify-center
            pb-12
            '>
                <div
                className='
                relative
                p-3
                flex
                bg-neutral-800
                rounded-lg
                gap-3
                '
                >

                    <img 
                    className='
                    shrink-0
                    h-full
                    '
                    src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt67f8b7843bd8166a/5e71600f353d6343a753219d/na-esrb.png?&height=100&disable=upscale" 
                    alt="" 
                    />

                    <div
                    className='
                    flex
                    flex-col
                    justify-evenly
                    text-[13px]
                    leading-none
                    text-white
                    '>
                        {game_rating_texts.map((text, idx) => (
                            <span
                            key={idx}>
                                {text}
                            </span>
                        ))}
                    </div>

                </div>
            </div>

        </div>
        
    </footer>
  )
}

export default Footer

const download_links = [
    {
        title : "Download game client",
        url : "https://playvalorant.com/en-us/download/"
    },
    {
        title : "Download riot mobile companion app",
        url : "https://riotgames.sng.link/Dnyzj/csgh"
    }
]

const social_media_links = [
    {
        Icon : Twitter,
        url : "https://twitter.com/playvalorant"
    },
    {
        Icon : Youtube,
        url : "https://www.youtube.com/PlayValorant"
    },
    {
        Icon : Instagram,
        url : "https://www.instagram.com/playvalorantofficial/"
    },
    {
        Icon : Facebook,
        url : "https://www.facebook.com/playvalorant/"
    },
    {
        Icon : Discord,
        url : "https://discord.gg/valorant"
    },
]
const credits = [
    {
        Icon : RiotGames,
        url : "https://twitter.com/playvalorant"
    },
    {
        Icon : Valorant,
        url : ""
    },
]

const legal_links = [
    {
        title : "Privacy notice",
        url : "https://www.riotgames.com/en/privacy-notice"
    },
    {
        title : "terms of service",
        url : "https://www.riotgames.com/en/terms-of-service"
    },
]

const game_rating_texts = [
    "Blood",
    "Language",
    "Violence",
    "Users Interact",
    "In-Game Purchases",
]