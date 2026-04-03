<script lang="ts">
    import { Hr, HrSplit, Checkbox, ColorPicker, Button, Input } from '@sierra-95/svelte-scaffold';
    import {sectionIds, RenderCode} from '$lib';

    let checked=$state(false);
    let openDropdown=$state(false);
    let selectedColor=$state('#CA8A04');

    function setColor(color: string){
        selectedColor = color;
    }
</script>

<style>
    ol {
        list-style: decimal inside;
    }
    ol span{
        font-weight: bold;
        font-size: 1.2rem;
    }
    ol section{
        margin-top: 1rem;
    }
</style>
<title>Random Components</title>

{#snippet TriggerColorPicker()}
    <Button onclick={() =>  openDropdown = !openDropdown}>Select Color</Button>
{/snippet}

<h1 class="font-bold text-[1.5rem] mb-5" style="color: var(--primary-bg)">Random Components</h1>
<ol class="space-y-6">
    <li><span>Checkbox</span>
        <section id={sectionIds.random_stuff.checkbox} class="space-y-4">
            <Checkbox bind:checked><p>I agree to the terms and conditions</p></Checkbox>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { Checkbox } from '@sierra-95/svelte-scaffold';
                    let checked=$state(false);
                <\/script>
                <Checkbox bind:checked><p>I agree to the terms and conditions</p></Checkbox>
            `}/>
        </section>
    </li>
    <li><span>Color Picker</span>
        <section id={sectionIds.random_stuff.color_picker} class="space-y-4">
        <h3>Recently used colors are also stored in local storage</h3>
            <div class="flex gap-4 items-end">
                <Input background={selectedColor} width="150px" required label="Category Color" id="color" bind:value={selectedColor}/>
                <ColorPicker bind:openDropdown={openDropdown} dropdownTrigger={TriggerColorPicker} onSelect={setColor}/>
            </div>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { ColorPicker, Input } from '@sierra-95/svelte-scaffold';
                    let openDropdown=$state(false);
                    let selectedColor=$state('');

                    function setColor(color: string){
                        selectedColor = color;
                    }
                <\/script>
                {#snippet TriggerColorPicker()}
                    <Button onclick={() =>  openDropdown = !openDropdown}>Select Color</Button>
                {/snippet}
                <div class="flex gap-4 items-end">
                    <Input background={selectedColor} width="150px" required label="Category Color" id="color" bind:value={selectedColor}/>
                    <ColorPicker bind:openDropdown={openDropdown} dropdownTrigger={TriggerColorPicker} onSelect={setColor}/>
                </div>
            `}/>
        </section>
    </li>
    <li><span>Horizontal Rule</span>
        <section id={sectionIds.random_stuff.hr} class="space-y-4">
            <h3 class="font-bold">1. Default</h3>
            <div><Hr color="var(--primary-bg)" width="90%" /></div>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { Hr } from '@sierra-95/svelte-scaffold';
                <\/script>
                
                <Hr color="var(--primary-bg)" width="90%" />
            `}/>
            <h3 class="font-bold">2. Split</h3>
            <HrSplit margin="1rem">Split HR</HrSplit>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { HrSplit } from '@sierra-95/svelte-scaffold';
                <\/script>
                
                <HrSplit margin="1rem">Split HR</HrSplit>
            `}/>
        </section>
    </li>
</ol>