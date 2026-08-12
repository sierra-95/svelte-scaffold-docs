<script lang="ts">
    import { Hr, HrSplit, Checkbox, ColorPicker, Button, Input, Carousel, Date, Time, Avatar } from '@sierra-95/svelte-scaffold';
    import {RenderCode} from '$lib';
    import { routes } from '$lib/assets/company';

    let checked=$state(false);
    let openDropdown=$state(false);
    let selectedColor=$state('#CA8A04');

    function setColor(color: string){
        selectedColor = color;
    }
    let images=
    [
        "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o",
        "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
        "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
        "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",    
    ];
    const timezone = "America/New_York";

    function handleAvatarClick(){
        alert('Avatar clicked!');
    }
</script>

{#snippet TriggerColorPicker()}
    <Button onclick={() =>  openDropdown = !openDropdown}>Select Color</Button>
{/snippet}


<title>Utilities</title>
<main class="space-y-6">
    <h1 class="sierra-docs-h1">Scaffold Utilities<span>I can’t find it either</span></h1>
    <ol class="sierra-docs-ol space-y-4">
        <section id={routes.core.utilities.ids.avatar} data-title="Avatar" class="space-y-4">
            <li>Avatar</li>
            <h3>In non-upload mode, it can be used to display user avatars. Try it on 
                <a class="note" href={routes.core.components.children.menus.path + '#' + routes.core.components.children.menus.ids.user_menu}>User Menu</a>
            </h3>
            <div class="flex gap-4 items-center">
                <Avatar boxShadow=""/>
                <Avatar url={images[0]} boxShadow=""/>
                <Avatar 
                    url={images[0]}
                    avatarSize = '100px'
                    iconSize = '30px'
                    zIndex={2}
                    upload={true}
                    borderSize ="0px"
                    icon="fa-regular fa-camera"
                    onClick={handleAvatarClick}
                />
            </div>
            <RenderCode
                lang="svelte"
                code={`
                    <\script>
                        import { Avatar } from '@sierra-95/svelte-scaffold';
                    <\/script>
                    <Avatar boxShadow=""/>
                    <Avatar url={images[0]} boxShadow=""/>
            `}/>
            <h3>In upload mode, it can be used to allow users to upload their own avatars. It is upto the developer to implement the upload functionality.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { Avatar } from '@sierra-95/svelte-scaffold';
                <\/script>
                <Avatar 
                    url="https://example.com/avatar.jpg"
                    avatarSize = '100px'
                    iconSize = '30px'
                    zIndex={2}
                    upload={true} //only activates onClick
                    borderSize ="0px"
                    icon="fa-regular fa-camera" //switching from default fa-user
                    onClick={handleAvatarClick}
                />
            `}/>
        </section>
        
        <section id={routes.core.utilities.ids.carousel} data-title="Carousel" class="space-y-4">
            <li>Carousel</li>
            <div class="relative h-125">
                <Carousel images={images} autoplay autoScale />
            </div>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { Carousel } from '@sierra-95/svelte-scaffold';

                    let images=[];
                <\/script>
                {/*Ensure to set position relative*/}
                <div class="relative h-125">
                    <Carousel images={images} autoplay autoScale />
                </div>
            `}/>
        </section>

        <section id={routes.core.utilities.ids.checkbox} data-title="Checkbox" class="space-y-4">
            <li>Checkbox</li>
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

        <section id={routes.core.utilities.ids.color_picker} data-title="Color Picker" class="space-y-4">
            <li>Color Picker</li> 
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

        <section id={routes.core.utilities.ids.hr} data-title="Horizontal Rule" class="space-y-4">
            <li>Horizontal Rule</li>
            <h3 class="font-bold">1. Default</h3>
            <div><Hr color="var(--ss-warning)" width="90%" /></div>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { Hr } from '@sierra-95/svelte-scaffold';
                <\/script>
                
                <Hr color="var(--ss-warning)" width="90%" />
            `}/>
            <h3 class="font-bold">2. Split</h3>
            <HrSplit hrColor="var(--ss-neutral)" color="var(--ss-success)" margin="1rem">Split HR</HrSplit>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { HrSplit } from '@sierra-95/svelte-scaffold';
                <\/script>
                
                <HrSplit hrColor="var(--ss-neutral)" color="var(--ss-success)" margin="1rem">Split HR</HrSplit>
            `}/>
        </section>

        <section id={routes.core.utilities.ids.timezones} data-title="Timezones" class="space-y-4">
            <li>Timezones</li>
            <Date {timezone}/>
            <Time {timezone}/>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { Date, Time} from '@sierra-95/svelte-scaffold';

                    const timezone = "America/New_York";
                <\/script>
                <Date {timezone}/>
                <Time {timezone}/>
            `}/>
        </section>
    </ol>
</main>