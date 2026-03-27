<script>
    import {MenuItem, DropdownContainer, buttonRipple, User, Hr, resetUserStore, Tabs, HamburgerMenu} from '@sierra-95/svelte-scaffold';
	import {RenderCode, sectionIds} from '$lib';


    let openMenu = $state(true);
    let openUserMenu = $state(true);
    let hamburgerMenuOpen = $state(false);

    function handleProfile(){
        alert('Profile clicked');
    }
    function handleLogout(){
        resetUserStore();
    }
</script>

<title>Menus</title>
<section id={sectionIds.components.menu.dropdown} class="space-y-4 mb-10">
    <h1>Menus</h1>
    <h2>1. Dropdown Menu</h2>
    <p>
        The dropdown container lets you build any dropdown menu quickly.
        It only requires a trigger element (such as a button or icon)
        and the content to be displayed inside the dropdown.
    </p>
    {#snippet TriggerMenu()}
        <button use:buttonRipple class="w-10" aria-label="Ellipsis" onclick={() => (openMenu = !openMenu)}>
            <i class="fa-solid fa-ellipsis-v"></i>
        </button>
    {/snippet}
    <DropdownContainer bind:open={openMenu} dropdownTrigger={TriggerMenu}>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>More Tools</MenuItem>
        <MenuItem>Settings</MenuItem>
    </DropdownContainer>
    {#if openMenu}
        <div class="h-37.5"></div>
    {/if}

    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import {DropdownContainer, MenuItem, buttonRipple} from '@sierra-95/svelte-scaffold'
            
            let openMenu = $state(true);
        <\/script>
        
        <!-- Default top=130% width=auto open=$bindable(true) -->
        {#snippet TriggerMenu()}
            <button use:buttonRipple class="w-10" aria-label="Ellipsis" onclick={() => (openMenu = !openMenu)}>
                <i class="fa-solid fa-ellipsis-v"></i>
            </button>
        {/snippet}
        <DropdownContainer bind:open={openMenu} dropdownTrigger={TriggerMenu}>
            <MenuItem>New Tab</MenuItem>
            <MenuItem>More Tools</MenuItem>
            <MenuItem>Settings</MenuItem>
        </DropdownContainer>
    `}/>
</section>
<section id={sectionIds.components.menu.user_menu} class="space-y-4 mb-10">
    <h3 class="font-bold">Example: User Menu</h3>
    {#snippet TriggerUserInfo()}
        <button use:buttonRipple class="w-10 text-3xl text-(--primary-bg)" aria-label="Ellipsis" onclick={() => (openUserMenu = !openUserMenu)}>
            <i class="fa-solid fa-user"></i>
        </button>
    {/snippet}
    <DropdownContainer width="300px" bind:open={openUserMenu} dropdownTrigger={TriggerUserInfo}>
        <div class="p-2 pl-4">
            <h3>{$User?.firstName} {$User?.lastName}</h3>
            <p class="text-sm text-(--text-secondary)">{$User?.email}</p>
        </div>
        <Hr/>
        <MenuItem onclick={handleProfile} icon="fa-user" iconSize='15px'>Profile</MenuItem>
        <MenuItem onclick={handleLogout} icon="fa-right-from-bracket" iconSize='15px'>Logout</MenuItem>
    </DropdownContainer>
    {#if openUserMenu}
        <div class="h-50"></div>
    {/if}
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { goto } from '$app/navigation';
            import {MenuItem, DropdownContainer, buttonRipple, User, Hr, resetUserStore, isLoggedIn} from '@sierra-95/svelte-scaffold';

            let openUserMenu = $state(true);
            function handleProfile(){
                alert('Profile clicked');
            }
            function handleLogout(){
                resetUserStore();
                isLoggedIn.set(false);
                goto('/login');
            }
        <\/script>
        
        {#snippet TriggerUserInfo()}
            <button use:buttonRipple class="w-10 text-3xl text-(--primary-bg)" aria-label="Ellipsis" onclick={() => (openUserMenu = !openUserMenu)}>
                <i class="fa-solid fa-user"></i>
            </button>
        {/snippet}
        <DropdownContainer width="300px" bind:open={openUserMenu} dropdownTrigger={TriggerUserInfo}>
            <div class="p-2 pl-4">
                <h3>{$User?.firstName} {$User?.lastName}</h3>
                <p class="text-sm text-(--text-secondary)">{$User?.email}</p>
            </div>
            <Hr/>
            <MenuItem onclick={handleProfile} icon="fa-user" iconSize='15px'>Profile</MenuItem>
            <MenuItem onclick={handleLogout} icon="fa-right-from-bracket" iconSize='15px'>Logout</MenuItem>
        </DropdownContainer>
    `}/>
</section>
<section id={sectionIds.components.menu.tabs} class="space-y-4 mb-10">
    <h2>2. Tabs</h2>
    <p>
        Tabs allows you to create a tabbed interface for organizing content into separate views.
        Users can navigate between different sections of content without leaving the page.
    </p>
    {#snippet Home()}
        <h3>Welcome Home</h3>
    {/snippet}

    {#snippet Insert()}
        <h3>Insert Something</h3>
    {/snippet}

    {#snippet actions()}
        <button use:buttonRipple class="w-10" aria-label="Ellipsis">
            <i class="fa-solid fa-ellipsis-v"></i>
        </button>
    {/snippet}

    <Tabs
        tabs={[
            { key: 'Home', title: 'Home', icon: 'fa-home' },
            { key: 'Insert', title: 'Insert', icon: 'fa-plus' }
        ]}
        snippets={{ Home, Insert }}
        actions={actions}
        boxShadow
    />
    <h3>Snippet name should be same as key</h3>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import {Tabs, useButtonRipple} from '@sierra-95/svelte-scaffold';
        <\/script>

        {#snippet Home()}
            <h3>Welcome Home</h3>
        {/snippet}

        {#snippet Insert()}
            <h3>Insert Something</h3>
        {/snippet}

        {#snippet actions()}
            <button use:buttonRipple class="w-10" aria-label="Ellipsis">
                <i class="fa-solid fa-ellipsis-v"></i>
            </button>
        {/snippet}

        <Tabs
            tabs={[
                { key: 'Home', title: 'Home', icon: 'fa-home' },
                { key: 'Insert', title: 'Insert', icon: 'fa-plus' }
            ]}
            snippets={{ Home, Insert }}
            actions={actions}
            boxShadow
        />
    `}/>
</section>

<section id={sectionIds.components.menu.hamburger} class="space-y-4 mb-10">
    <h2>3. Hamburger Menu</h2>
    <p>
        The HamburgerMenu component provides a responsive navigation menu that can be toggled open and closed.
        It is commonly used in mobile and responsive web design to save space and provide a clean user interface.
    </p>
    <HamburgerMenu
        bind:menuOpen={hamburgerMenuOpen}
        barHeight="2px"
        barColor="var(--primary-bg)"
        menuBackgroundColor="white"
        companyLogo="https://files.michaelmachohi.com/logos/michaelmachohi.favicon.circle.ico"
        LogoWidth="30px"
        buttonTimesColor="black"
    >
        <div class="p-6">
            <h2>Some Items</h2>
            <h3>Item 1</h3>
            <h3>Item 2</h3>
            <h3>Item 3</h3>
        </div>
    </HamburgerMenu>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import {HamburgerMenu} from '@sierra-95/svelte-scaffold';
            let hamburgerMenuOpen = $state(false);
        <\/script>

        <HamburgerMenu
            bind:menuOpen={hamburgerMenuOpen}
            barHeight="2px"
            barColor="var(--primary-bg)"
            menuBackgroundColor="white"
            companyLogo="https://company.com/logo.png"
            LogoWidth="30px"
            buttonTimesColor="black"
        >
            <div class="p-6">
                <h2>Some Items</h2>
                <h3>Item 1</h3>
                <h3>Item 2</h3>
                <h3>Item 3</h3>
            </div>
        </HamburgerMenu>
    `}/>

</section>