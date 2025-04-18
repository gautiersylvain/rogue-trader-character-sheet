interface Stats {
    shorthand: string,
    label: string,
    value: number,
    bonus?: number
}
export const statsData:Stats[] = [
    { 
        shorthand: "WS",
        label: "Weapon Skill",
        value: 35,
        bonus: 0,
    },  
    { 
        shorthand: "BS",
        label: "Ballistic Skill",
        value: 80,
        bonus: 0,
    },
    { 
        shorthand: "STR",
        label: "Strength",
        value: 30,
        bonus: 0,
    },
    { 
        shorthand: "TGH",
        label: "Toughness",
        value: 45,
        bonus: 0,
    },
    { 
        shorthand: "AGI",
        label: "Agility",
        value: 40,
        bonus: 0,
    },
    { 
        shorthand: "INT",
        label: "Intelligence",
        value: 30,
        bonus: 0,
    },
    { 
        shorthand: "PER",
        label: "Perception",
        value: 40,
        bonus: 5,
    },
    {   
        shorthand: "WP",
        label: "Willpower",
        value: 85,
        bonus: 10,
    },
    { 
        shorthand: "FEL",
        label: "Fellowship",
        value: 105,
        bonus: 30,
    },
]
