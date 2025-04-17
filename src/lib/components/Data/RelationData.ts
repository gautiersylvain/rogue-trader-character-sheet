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
        accordionOpen: true,
        quote: "Nothing's impossible for this old officer.",
        body: `<p>The Rogue Trader's most trusted confidant. As it should be.</p>
        <p>Write stuff about your companions here. If you don't include the body item from the object, a classified stamp will appear. This sentence doesn't make sense? Just look at the code and you will see.</p>`,
        pic: abelard,
    },
    {
        name:"Unsanctioned Psyker Idira Tlass",
        accordionOpen: true,
        quote: "All right, let's hear what they're whispering about you, hmm?",
        body: ``,
        pic: idira,
    },
    {
        name:"Sister Argenta",
        accordionOpen: true,
        quote: `The God-Emperor did not forsake His chosen one! I prayed for our paths to cross once more!`,
        body: ``,
        classified: true,
        pic: argenta,
    },
    {
        name:"Kibellah the Second Spinner of the Bloodspun Web",
        accordionOpen: true,
        quote: `Let the blood of the wicked be shed, as thou hast willed!`,
        body: ``,
        pic: kibellah,
    },
    {
        name:"Lady Navigator Cassia Orsellio",
        accordionOpen: true,
        quote: `Is this a job for the serfs?`,
        body: ``,
        pic: cassia,
    },
    {
        name:"Magos Explorator Pasqal Haneumann",
        accordionOpen: true,
        quote: `The Omnissiah knows all, comprehends all.`,
        body: `<p>:)</p>`,
        pic: pasqal,
    },
    {
        name:"Interrogator Heinrix van Calox",
        accordionOpen: true,
        quote: `Not sanctioned to do that!`,
        pic: heinrix,
    },
    {
        name:"Cold Trader Jae Heydari",
        accordionOpen: true,
        quote: `The battlefield air is good for my lungs!`,
        body: ``,
        pic: jae,
    },
    {
        name:"Asuryani Ranger Yrliet Lanaevyss",
        accordionOpen: true,
        quote: `I'm not your Xenos pet, Mon'Keigh!`,
        body: ``,
        pic: yrliet,
    },
    {
        name:"Drukhari Dracon Marazhai Aezyrraesh",
        accordionOpen: true,
        quote: `*madman laugh*`,
        body: ``,
        classified: true,
        pic: marazhai,
    },
    {
        name:"Space Wolf Ulfar",
        accordionOpen: true,
        quote: `*intelligible wolf noises*`,
        body: ``,
        pic: ulfar,
    },
    {
        name:"Rogue Trader Incendia Bastaal-Chorda",
        accordionOpen: true,
        quote: `I will not rest until all have been judged!`,
        body: ``,
        pic: incendia,
    },
    {
        name: "Rogue Trader Calligos Winterscale",
        quote: ``,
        body: ``,
        accordionOpen: true,
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
