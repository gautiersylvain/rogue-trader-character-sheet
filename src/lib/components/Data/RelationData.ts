import abelard from "../../assets/images/Companions/Abelard.png"
import idira from "../../assets/images/Companions/Idira.png";
import argenta from "../../assets/images/Companions/Argenta.png"
import cassia from "../../assets/images/Companions/Cassia.png"
import pasqal from "../../assets/images/Companions/Pasqal.png"
import heinrix from "../../assets/images/Companions/Heinrix.png"
import jae from "../../assets/images/Companions/Jae.png"
import yrliet from "../../assets/images/Companions/Yrliet.png"
import ulfar from "../../assets/images/Companions/Ulfar.png"
import marazhai from "../../assets/images/Companions/Marazhai.png"
import incendia from "../../assets/images/Companions/Incendia.png"
import calligos from "../../assets/images/Companions/Calligos.png"
import kibellah from "../../assets/images/Companions/Kibellah.png"

interface Relation {
    name: String,
    accordionOpen: boolean,
    quote?: String,
    classified?: boolean,
    body?: String,
    pic: string,
}

export const RelationsData:Array<Relation> = [
    {
        name:"Seneschal Abelard Weserian",
        accordionOpen: false,
        quote: "Nothing's impossible for this old officer.",
        body: `<p>The Rogue Trader's most trusted confidant. As it should be.</p>
        <p>Write stuff about your companions here. If you don't include the body item from the object, a classified stamp will appear. This sentence doesn't make sense? Just look at the code and you will see.</p>`,
        pic: abelard,
    },
    {
        name:"Unsanctioned Psyker Idira Tlass",
        accordionOpen: false,
        quote: "All right, let's hear what they're whispering about you, hmm?",
        body: `<p>test</p>`,
        pic: idira,
    },
    {
        name:"Sister Argenta",
        accordionOpen: false,
        quote: `The God-Emperor did not forsake His chosen one! I prayed for our paths to cross once more!`,
        body: ``,
        classified: true,
        pic: argenta,
    },
    {
        name:"Kibellah the Second Spinner of the Bloodspun Web",
        accordionOpen: false,
        quote: `Let the blood of the wicked be shed, as thou hast willed!`,
        body: `<p>test</p>`,
        pic: kibellah,
    },
    {
        name:"Lady Navigator Cassia Orsellio",
        accordionOpen: false,
        quote: `Is this a job for the serfs?`,
        body: `<p>test</p>`,
        pic: cassia,
    },
    {
        name:"Magos Explorator Pasqal Haneumann",
        accordionOpen: false,
        quote: `The Omnissiah knows all, comprehends all.`,
        body: `<p>:)</p>`,
        pic: pasqal,
    },
    {
        name:"Interrogator Heinrix van Calox",
        accordionOpen: false,
        quote: `I am a heretic, Pandora. It is strange to say and even stranger hear...but that is my decision. No more sacrifices in the name of the Imperium. I have paid my debt to the Golden Throne - now I serve you.`,
        body: '<p>test</p>',
        pic: heinrix,
    },
    {
        name:"Cold Trader Jae Heydari",
        accordionOpen: false,
        quote: `The battlefield air is good for my lungs!`,
        body: `<p>test</p>`,
        pic: jae,
    },
    {
        name:"Asuryani Ranger Yrliet Lanaevyss",
        accordionOpen: false,
        quote: `I'm not your Xenos pet, Mon'Keigh!`,
        body: `<p>test</p>`,
        pic: yrliet,
    },
    {
        name:"Drukhari Dracon Marazhai Aezyrraesh",
        accordionOpen: false,
        quote: `I will say this only once, Pandora: you are the reason for all my misfortunes, but you are also the reason why I survived - despite the fury of all Commorragh and the wrath of the Black Heart. Consider this confession an expression of my gratitude.`,
        body: ``,
        classified: true,
        pic: marazhai,
    },
    {
        name:"Space Wolf Ulfar",
        accordionOpen: false,
        quote: `*intelligible wolf noises*`,
        body: `<p>test</p>`,
        pic: ulfar,
    },
    {
        name:"Rogue Trader Incendia Bastaal-Chorda",
        accordionOpen: false,
        quote: `I will not rest until all have been judged!`,
        body: `<p>test</p>`,
        pic: incendia,
    },
    {
        name: "Rogue Trader Calligos Winterscale",
        accordionOpen: false,
        quote: ``,
        body: `<p>test</p>`,
        pic: calligos,
    },
    // {
    //     name:"",
    //     accordionOpen: true,
    //     quote: ``,
    //     body: ``,
    //     pic: abelard,
    // },
]
