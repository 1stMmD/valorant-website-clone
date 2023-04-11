export type OptionType = {
    name :string;
    external : boolean;
    url : string;
    options : OptionType[] | null
}

class option{
    name :string;
    external : boolean;
    url : string;
    options : OptionType[] | null
    constructor(name : string , external : boolean , url : string , options : OptionType[] | null ){
        this.name = name
        this.external = external
        this.url = url
        this.options = options
    }
}

export const sections_array = [
    new option(
        "Game Info",
        false,
        "",
        [
            new option(
                "Agents",
                false,
                "https://playvalorant.com/en-us/agents/",
                null
            ),
            new option(
                "Weapons",
                false,
                "https://playvalorant.com/en-us/maps/",
                null
            ),
            new option(
                "Maps",
                false,
                "https://playvalorant.com/en-us/arsenal/",
                null
            )
        ]
    ),
    new option(
        "Media",
        false,
        "https://playvalorant.com/en-us/media",
        null
    ),
    new option(
        "News",
        false,
        "https://playvalorant.com/en-us/news/",
        null
    ),
    new option(
        "Leaderboards",
        false,
        "https://playvalorant.com/en-us/leaderboards/",
        null
    ),
    new option(
        "Support",
        false,
        "",
        [
            new option(
                "Spec",
                true,
                "https://playvalorant.com/en-us/specs/",
                null
            ),
            new option(
                "Support",
                true,
                "https://support-valorant.riotgames.com/hc/en-us/",
                null
            ),
            new option(
                "Community code",
                true,
                "https://playvalorant.com/en-us/news/announcements/valorant-community-code/",
                null
            ),
        ]
    ),
    new option(
        "Our Socials",
        false,
        "",
        [
            new option(
                "Twitter",
                true,
                "https://twitter.com/playvalorant",
                null
            ),
            new option(
                "Youtube",
                true,
                "https://www.youtube.com/PlayValorant",
                null
            ),
            new option(
                "Instagram",
                true,
                "https://www.instagram.com/playvalorantofficial/",
                null
            ),
            new option(
                "Facebook",
                true,
                "https://www.facebook.com/playvalorant/",
                null
            ),
            new option(
                "Discord",
                true,
                "https://discord.gg/valorant",
                null
            ),
        ]
    ),
    new option(
        "Esports",
        true,
        "https://playvalorant.com/en-us/",
        null,
    ),
    new option(
        "PBE Signup",
        false,
        "https://playvalorant.com/en-us/pbe/",
        null
    )
]