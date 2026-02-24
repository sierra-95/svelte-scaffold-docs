<script>
    import { Input, Editor, theme, Button, isMobile, isTablet } from "@sierra-95/svelte-scaffold";
    
    let link= $state("");
    let firstName = $state("");
    let lastName = $state("");
    let email = $state(""); 
    let message = "";

    $effect(() => {
        if($theme){
            link = `https://files.michaelmachohi.com/logos/michaelmachohi.${$theme === 'light' ? 'dark' : 'light'}.blue.png`;
		}  
    });

</script>

<title>Support</title>
<main class="mx-auto flex flex-col" style="max-width: 600px; gap: 2rem; {$isMobile || $isTablet ? '':'border-radius: 5px; box-shadow: var(--box-shadow); background-color: var(--background); padding: 2rem'}">
    <div class="relative" style="height: 100px;">
        <img src={link} alt="Support" style="object-fit: contain; width:100%; height:100%;"/>
    </div>
    <h3 class="text-center text-2xl">Get in touch</h3>
    <div class="flex justify-between" style="flex-direction: {$isMobile || $isTablet ? 'column':'row'}; gap: 2rem">
        <Input underline placeholder="First Name" bind:value={firstName} />
        <Input underline placeholder="Last Name"  bind:value={lastName} />
    </div>
    <Input underline placeholder="Email Address" type="email" bind:value={email} />
    <Editor boxShadow={$isMobile || $isTablet}/>
    <Button type="submit">Submit</Button>
</main>