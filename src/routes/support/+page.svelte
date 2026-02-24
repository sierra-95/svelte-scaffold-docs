<script lang="ts">
    import { onMount } from "svelte";
    import { enhance } from "$app/forms";
    import { Input, Editor, theme, Button, isMobile, isTablet, editorStore, setToastMessage, isValidEmail } from "@sierra-95/svelte-scaffold";
    
    let link= $state("");
    let firstName = $state("");
    let lastName = $state("");
    let email = $state(""); 
    let content = $state("");
    let formEl: HTMLFormElement;

    onMount(() =>{
        editorStore.update( store =>{
            store.onExport = requestSubmit;
            return store;
        }) 
    })
    $effect(() => {
        if($theme){
            link = `https://files.michaelmachohi.com/logos/michaelmachohi.${$theme === 'light' ? 'dark' : 'light'}.blue.png`;
		}
    });
    function onExport(){
        editorStore.update( store =>{
            store.export = true
            return store;
        })
    }
    function requestSubmit(){
        content = $editorStore.content.html_content;
        formEl.requestSubmit();
    }
    function handleSubmit({formData, cancel}: { formData: FormData; cancel: () => void }){
        formData.append("content", content);
        for (const [name, value] of formData.entries()) {
            if (!value || (typeof value === "string" && value.trim() === "")) {
                setToastMessage("error", `Field "${name}" is empty`);
                cancel();
                return;
            }
        }
        if(!isValidEmail(email)){
            setToastMessage("error", "Please enter a valid email address");
            cancel();
            return;
        }
        //console.log("Form Data:", Object.fromEntries(formData.entries()));
        setToastMessage("error", "WIP");
        cancel();
    }

</script>

<title>Support</title>
<main
    class="mx-auto space-y-4 flex flex-col" 
    style="max-width: 600px;{$isMobile || $isTablet ? '':'border-radius: 5px; box-shadow: var(--box-shadow); background-color: var(--background); padding: 2rem'}"
>
    <form 
        bind:this={formEl}
        method="post"
        use:enhance={handleSubmit}
        class="flex flex-col"
        style="gap: 2rem;"
    >
        <div class="relative" style="height: 100px;">
            <img src={link} alt="Support" style="object-fit: contain; width:100%; height:100%;"/>
        </div>
        <h3 class="text-center text-2xl">Get in touch</h3>
        <div class="flex justify-between" style="flex-direction: {$isMobile || $isTablet ? 'column':'row'}; gap: 2rem">
            <Input id="firstname" underline placeholder="First Name" bind:value={firstName} />
            <Input id="lastname" underline placeholder="Last Name"  bind:value={lastName} />
        </div>
        <Input id="email" underline placeholder="Email Address" type="email" bind:value={email} />
    </form>
    <Editor boxShadow={$isMobile || $isTablet}/>
    <Button onclick={onExport}>Submit</Button>
</main>