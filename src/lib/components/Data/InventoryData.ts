interface InventoryItem {
label: String,
item?: String,
itemDesc: String,
}

export const InventoryData:Array<InventoryItem> = [
    {
        label: "headwear",
        item: 'Commissar Hat',
        itemDesc: `A commissar without his signature hat is like an angel without wings.`
    },
    {
        label: "armour",
        item: 'Commissar Jacket',
        itemDesc: 'The law of cool and good taste triumphs all.'
    },
    {
        label: "accessory 1",
        item: "black signet of the inquisition",
        itemDesc: "The wearer gains +40 Persuasion and the Inquisitor's Tenet ability that can be used once per combat."
    },
    {
        label: "weapon slot 1",
        itemDesc: `<div class="cairo-bold itemName">Main: </div>
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed venenatis velit. Praesent facilisis sem id congue sagittis. Morbi orci dolor, imperdiet a sapien in, blandit iaculis velit. Sed dapibus tristique tortor sit amet sollicitudin.
        
        <div class="cairo-bold itemName">Secondary:</div> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed venenatis velit. Praesent facilisis sem id congue sagittis. Morbi orci dolor, imperdiet a sapien in, blandit iaculis velit. Sed dapibus tristique tortor sit amet sollicitudin. Vestibulum faucibus leo ut lobortis eleifend. Praesent vitae sem enim. Suspendisse leo felis, suscipit id posuere ullamcorper, luctus eu elit. Donec eget est commodo, bibendum ligula tempor, facilisis neque.<small>small small</small>`
    },
    {
        label: "weapon slot 2",
        item: "Flamer",
        itemDesc: '[Screeching Xenos noises]'
    },
    {
        label: "amulet",
        item: "Hair",
        itemDesc: `<p>What else do you expect to be on there?</p>`
    },
    {
        label: "accessory 2",
        item: "Heart of the Nameless",
        itemDesc: "This item increases the wielder's Lore (Xenos) by +10. If the wearer has Iconoclast — Adherent, it increases all skills by +10 instead."
    },
    {
        label: "cape",
        item: "None",
        itemDesc: 'In the word of renowned Imperium Combat Attire Specialist Ednax "E" Modicus: NO CAPES!!!!!'
    },
    {
        label: "footwear",
        item: "Boots of dubious origin",
        itemDesc: 'These boots are made for walking and stomping out enemies of humanity.'
    },
    {
        label: "consumables",
        item: "medkits & grenades",
        itemDesc: 'placeholder',
    },
];
