<script lang="ts">
    import { Hr, HrSplit, Checkbox, ColorPicker, Button, Input, Carousel, Date, Time, Avatar, WhatsappShare } from '@sierra-95/svelte-scaffold';
    import {sectionIds, RenderCode, routes} from '$lib';

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
    <li><span>Avatar</span>
        <section class="space-y-4">
            <h3>In non-upload mode, it can be used to display user avatars. Try it on 
                <a class="note" href={routes.core.components.children.menus + '#' + sectionIds.components.menu.user_menu}>User Menu</a>
            </h3>
            <div class="flex gap-4">
                <Avatar boxShadow=""/>
                <Avatar url={images[0]} boxShadow=""/>
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
            <Avatar 
                url={images[0]}
                avatarSize = '150px'
                iconSize = '40px'
                zIndex={2}
                upload={true}
                borderSize ="0px"
                icon="fa-regular fa-camera"
                onClick={handleAvatarClick}
            />
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { Avatar } from '@sierra-95/svelte-scaffold';
                <\/script>
                <Avatar 
                    url={images[0]}
                    avatarSize = '150px'
                    iconSize = '40px'
                    zIndex={2}
                    upload={true} //only activates onClick
                    borderSize ="0px"
                    icon="fa-regular fa-camera" //switching from default fa-user
                    onClick={handleAvatarClick}
                />
            `}/>
        </section>
    </li>
    <li><span>Carousel</span>
        <section id={sectionIds.random_stuff.carousel} class="space-y-4">
            <div class="relative max-w-125 h-125">
                <Carousel images={images} />
            </div>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { Carousel } from '@sierra-95/svelte-scaffold';

                    let images=[];
                <\/script>
                {/*Ensure to set position relative*/}
                <div class="relative w-125 h-125">
                    <Carousel images={images} />
                </div>
            `}/>
        </section>
    </li>
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
    <li><span>Timezones</span>
        <section id={sectionIds.random_stuff.timezones} class="space-y-4">
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
    </li>

    <li><span>WhatsApp Share</span>
        <section class="space-y-4">
            <h3>When clicked, your website will preview correctly in WhatsApp if Open Graph (OG) tags are configured.</h3>
            <h3>If the share fails, it falls back to copying the link.</h3>
            <WhatsappShare
                shareURL="https://yoursite.com"
                shareTitle="Cats & Coffee"
                shareText="A cat just knocked over a cup of coffee while debugging your code. Productivity level: questionable."
            />
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { WhatsappShare } from '@sierra-95/svelte-scaffold';
                <\/script>

                <WhatsappShare
                    shareURL="https://yoursite.com"
                    shareTitle="Cats & Coffee"
                    shareText="A cat just knocked over a cup of coffee while debugging your code. Productivity level: questionable."
                />
            `}/>
        </section>
    </li>
</ol>