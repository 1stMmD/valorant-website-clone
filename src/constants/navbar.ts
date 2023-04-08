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
                "agents",
                null
            ),
            new option(
                "Weapons",
                false,
                "weapons",
                null
            ),
            new option(
                "Maps",
                false,
                "maps",
                null
            )
        ]
    ),
    new option(
        "Media",
        false,
        "media",
        null
    ),
    new option(
        "News",
        false,
        "news",
        null
    ),
    new option(
        "Leaderboards",
        false,
        "leaderboards",
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
                "link",
                null
            ),
            new option(
                "Support",
                true,
                "link",
                null
            ),
            new option(
                "Community code",
                true,
                "link",
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
                "link",
                null
            ),
            new option(
                "Youtube",
                true,
                "link",
                null
            ),
            new option(
                "Instagram",
                true,
                "link",
                null
            ),
            new option(
                "Facebook",
                true,
                "link",
                null
            ),
            new option(
                "Discord",
                true,
                "link",
                null
            ),
        ]
    ),
    new option(
        "Esports",
        true,
        "",
        null,
    ),
    new option(
        "PBE Signup",
        false,
        "/pbe",
        null
    )
]