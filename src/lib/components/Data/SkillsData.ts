interface Skills {
    shorthand: string,
    name: string,
    value: number,
    bonus?: number
}

// START EDITING BELOW ⤵ //
export const skillsData:Skills[] = [
    {
        shorthand: "STR",
        name: "Athletic",
        value: 40,
        bonus: 10,
    },
    {
        shorthand: "PER",
        name: "Awareness",
        value: 62,
        bonus: 17,
    },
    {
        shorthand: "TGH",
        name: "Carouse",
        value: 63,
        bonus: 13,
    },
    {
        shorthand: "FEL",
        name: "Coercion",
        value: 125,
        bonus: 20,
    },
    {
        shorthand: "FEL",
        name: "Commerce",
        value: 115,
        bonus: 10,
    },
    {
        shorthand: "AGI",
        name: "Demolition",
        value: 50,
        bonus: 10,
    },
    {
        shorthand: "INT",
        name: "Logic",
        value: 47,
        bonus: 17,
    },
    {
        shorthand: "INT",
        name: "Lore (Imperium)",
        value: 55,
        bonus: 25
    },
    {
        shorthand: "INT",
        name: "Lore (Warp)",
        value: 90,
        bonus: 5,
    },
    {
        shorthand: "INT",
        name: "Lore (Xenos)",
        value: 50,
        bonus: 20,
    },
    {
        shorthand: "INT",
        name: "Medicae",
        value: 45,
        bonus: 10,
    },
    {
        shorthand: "FEL",
        name: "Persuasion",
        value: 160,
        bonus: 55,
    },
    {
        shorthand: "INT",
        name: "Tech-Use",
        value: 50,
        bonus: 20,
    },
]
