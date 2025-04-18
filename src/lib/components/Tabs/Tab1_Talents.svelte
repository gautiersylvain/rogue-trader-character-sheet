<script lang="ts">
    import Accordion from "../Accordion/Accordion.svelte";
    import Button from '../Button/Button.svelte'
    import Classified from "../Decor/Classified.svelte";
    import { TalentsData } from "../Data/FeaturesData";
</script>
<style lang="scss">
    .abilityContainer {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        text-transform: capitalize;
        .classifiedContainer {
            grid-column: span 2 / 4;
        }
    }
    @media screen and (max-width: 768px) {
        .abilityContainer {
            padding-bottom: 20px;
        }
    }

    @media screen and (max-width: 425px) {
        .abilityContainer {
            grid-template-columns: repeat(2, 1fr);
            .classifiedContainer {
                grid-column: span 2 / 3;
            }
        }
    }
</style>

<Accordion open={TalentsData.exemplarOpen}>
	<span slot="head">Archetype talents: Exemplar</span>
	<div slot="details" class="abilityContainer">
        {#if TalentsData.archetypeTalentExemplar.length > 0}
            {#each TalentsData.archetypeTalentExemplar as talent}
                <Button buttonType={"ability"}>
                    <div slot="buttonContent">{talent}</div>
                </Button>
            {/each}
        {:else}
            <div class="classifiedContainer">
                <Classified></Classified>
            </div>
        {/if}
    </div>
</Accordion>
<Accordion open={TalentsData.talentTwoOpen}>
	<span slot="head">Archetype talents: Master Tactician</span>
	<div slot="details" class="abilityContainer">
        {#if TalentsData.archetypeTalentTwo.length > 0}
            {#each TalentsData.archetypeTalentTwo as talent}
                <Button buttonType={"ability"}>
                    <div slot="buttonContent">{talent}</div>
                </Button>
            {/each}
        {:else}
            <div class="classifiedContainer">
                <Classified></Classified>
            </div>
        {/if}
    </div>
</Accordion>
<Accordion open={TalentsData.talentOneOpen}>
	<span slot="head">Archetype talents: Officer</span>
	<div slot="details" class="abilityContainer">
        {#if TalentsData.archetypeTalentOne.length > 0}
            {#each TalentsData.archetypeTalentOne as talent}
                <Button buttonType={"ability"}>
                    <div slot="buttonContent">{talent}</div>
                </Button>
            {/each}
        {:else}
            <div class="classifiedContainer">
                <Classified></Classified>
            </div>
        {/if}
    </div>
</Accordion>
<Accordion open={TalentsData.originTabOpen}>
	<span slot="head">Origin talents</span>
	<div slot="details" class="abilityContainer">
        {#if TalentsData.originTalents.length > 0}
            {#each TalentsData.originTalents as talent}
                <Button buttonType={"ability"}>
                    <div slot="buttonContent">{talent}</div>
                </Button>
            {/each}
        {:else}
            <div class="classifiedContainer">
                <Classified></Classified>
            </div>
        {/if}
    </div>
</Accordion>
