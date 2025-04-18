<script lang="ts">
    import Accordion from "../Accordion/Accordion.svelte";
    import Button from '../Button/Button.svelte';
    import Classified from "../Decor/Classified.svelte";
    import { ActiveAbilities } from "../Data/FeaturesData";
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
    @media screen and (max-width: 526px) {
        .abilityContainer {
            grid-template-columns: repeat(3, 1fr);
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
<Accordion open={ActiveAbilities.talentTwoOpen}>
	<span slot="head">Archetype talents: Master Tactician</span>
	<div slot="details" class="abilityContainer">
        {#if ActiveAbilities.archetypeTalentTwo.length > 0}
            {#each ActiveAbilities.archetypeTalentTwo as talent}
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

<Accordion open={ActiveAbilities.talentOneOpen}>
	<span slot="head">Archetype talents: Officer</span>
	<div slot="details" class="abilityContainer">
        {#if ActiveAbilities.archetypeTalentOne.length > 0}
            {#each ActiveAbilities.archetypeTalentOne as talent}
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

<Accordion open={ActiveAbilities.exemplarOpen}>
	<span slot="head">Archetype talents: Exemplar</span>
	<div slot="details" class="abilityContainer">
        {#if ActiveAbilities.archetypeTalentExemplar.length > 0}
            {#each ActiveAbilities.archetypeTalentExemplar as talent}
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
