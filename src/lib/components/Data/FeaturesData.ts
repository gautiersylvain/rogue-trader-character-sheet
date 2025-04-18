interface activeAbilities {
    talentOneOpen: boolean,
    talentTwoOpen: boolean,
    exemplarOpen: boolean,
    archetypeTalentOne: Array<string>,
    archetypeTalentTwo: Array<string>,
    archetypeTalentExemplar: Array<string>
}

interface Talents {
    originTabOpen: boolean,
    talentOneOpen: boolean,
    talentTwoOpen: boolean,
    exemplarOpen: boolean,
    originTalents: Array<string>,
    archetypeTalentOne: Array<string>,
    archetypeTalentTwo: Array<string>,
    archetypeTalentExemplar: Array<string>
}

export const ActiveAbilities: activeAbilities = {
    talentOneOpen: true,
    talentTwoOpen: true,
    exemplarOpen: true,
    archetypeTalentExemplar: [],
    archetypeTalentOne: ['Focus!', 'Still Mind', 'Personal Oversight', 'Steel Resolve', ],
    archetypeTalentTwo: [`Aim for opening`, `Death Whisper`, `Death Whisper - Second Hand`, `Dispatch`, `Dispatch - Second Weapon`, `Poised to Strike`, `Feinting Attack`]
}

export const TalentsData: Talents = {
    originTabOpen: true,
    talentOneOpen: true,
    talentTwoOpen: true,
    exemplarOpen: true,
    originTalents: ['Hive World', 'Strength in Numbers', 'Sanctioned Psyker', 'Sanctioned Psyker - Biomancer', 'Biomancy', 'Shadow of Torment', 'Illustrious Glory', 'Malediction of Rykad Minoris', 'Celestial Inspiration', 'Legacy of the Dead', 'Blood of Scipione 84-249', 'Otherworldly Observer', 'Punisher', 'Expert Cryptographer', 'Frequency of Faith', 'Wisdom of the Tech-Guards', 'I Will Fear No Poison', 'Leader of the Engine Vandals', 'Dark Revelation', 'The Hammer and the Cog', 'Secrets of Ancient Cybersmiths', 'Aeldari Machine Taming', 'Disciple of the Damned', 'Blessings of the Data Angels', 'Battle Mastery', 'Holy Woman', 'Mistress of Flame', 'Patroness of Cults', 'Wisdom Extractor', 'Merciful Saviour', 'Exalted Instruments of War', 'Bestower of Freedom', 'Iron Arm', 'Fiend of Vheabos VI'],
    archetypeTalentOne: ['Voice of Command', 'Bring It Down!', 'Get Back in the Fight!'],
    archetypeTalentTwo: [],
    archetypeTalentExemplar: [`Exemplar`, 'Unbreakable Will', `Sharpshooter`, `Imminent Demise`, `Aeldari Weapon Proficiency`, `Intimidation`, `Perfection Under Fire`, `Lethality Heightens`, `Ballistic Calculation`, `Danse Macabre`, `Deadly Calculation`, `AP Increase`, `Know-It-All`, `Continuous Analysis`, `Passive Learning`, `Ambush`, `Critical Velocity`, `Combat Insight`, `Outsmart`, `Sniper Expertise`, `Base Skill: Lore [Warp]`, `Feinting Attack`, `Cataclysm`, `AP Increase`, `Offensive Pattern Prediction`]
}
