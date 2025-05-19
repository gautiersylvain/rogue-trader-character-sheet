// THIS SECTION IS FOR TECH PRIESTS ONLY 
interface BasicData {
    homeworld: string,
    origin: string,
    triumph: string,
    darkestHour: string
}
interface historyEntry {
    entry: string,
    conviction?: ConvictionType,
    convictionChanges?: number,
}
enum ConvictionType {
    iconoclast = "Iconoclast",
    dogmatic = "Dogmatic",
    heretic = "Heretic"
}
interface Conviction {
    dogmatic: number,
    iconoclast: number,
    heretical: number,
}
// END SECTION

// START EDITING BELOW ⤵ //
export const basicData: BasicData = {
    homeworld: "Hive World",
    origin: "Sanctioned Psyker",
    triumph: "Illustrious Glory",
    darkestHour: "Shadow of Torment"
}

export const convictionData: Conviction = {
    dogmatic: 2,
    iconoclast: 5,
    heretical: 0,
}


export const HistoryData: Array<historyEntry> = [
    {
        entry: `Led the people out of the fire trap, refusing "Theodora's" help.`,
        conviction: ConvictionType.iconoclast,
        convictionChanges: 15
    },
    {
        entry: `Ordered that the defective servitors be destroyed in order to end their suffering.`,
        conviction: ConvictionType.iconoclast,
        convictionChanges: 3
    },
    {
        entry: `Destroyed Rykad Minoris with an orbital strike.`,
        conviction: ConvictionType.dogmatic,
        convictionChanges: 15
    }
]
