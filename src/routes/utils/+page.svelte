<script>
    import {handleRedirect} from '@sierra-95/svelte-scaffold';
    import {RenderCode, sectionIds} from '$lib';

    function navigate() {
        handleRedirect(
            '/login',
            '/manage/user?status=test&passed=true',
            {}, //replaceState or useHardRedirect
            {
                condition_1: "test",
                condition_2: "test",
            }
        )
    }
</script>

<main class="space-y-4">
	<title>Utils</title>
    <h1>Utils</h1>
    <ol class="sierra-docs-ol">
    
        <section id={sectionIds.stores_utils.utils.isValidEmail} class="space-y-4">
            <li>isValidEmail</li>
            <h3>A utility function for validating email addresses.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { isValidEmail, User } from '@sierra-95/svelte-scaffold';

                    $effect(() => {
                        if (isValidEmail($User.email)) {
                            console.log('This is a valid email:', $User.email);
                        }
                    });
                <\/script>
            `}/>
        </section>
	
        <section id={sectionIds.stores_utils.utils.handleRedirect} class="space-y-4 mb-10">
            <li>handleRedirect</li>

            <h3>
            The best way to demonstrate its usage is with a Sign In/Sign Up scenario. Assume you are on page X and want to navigate to page Y, but accessing page Y requires you to be logged in.
            </h3>

            <h3>
            <code>handleRedirect</code> takes a base route and a target route, along with any parameters, to construct a complete route and then navigate to it.
            </h3>

            <h3>
            Please note that it is your responsibility to read the <code>redirectTo</code> parameter on the login page. Below are several examples of how to use <code>handleRedirect</code> in different scenarios.
            </h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {handleRedirect} from '@sierra-95/svelte-scaffold';
                <\/script>
            `}/>
                <h3 class="font-bold">Basic redirect</h3>
                <h3>http://localhost:5173/login?redirectTo=%2Fmanage%2Fuser</h3>
                <RenderCode
                    lang="svelte"
                    code={`
                    <\script>
                        handleRedirect(
                            '/login',
                            '/manage/user',
                        )
                    <\/script>
                `}/>
                <h3 class="font-bold">Param heavy redirect</h3>
                <h3>http://localhost:5173/login?condition_1=test&condition_2=test&redirectTo=%2Fmanage%2Fuser%3Fstatus%3Dtest%26passed%3Dtrue</h3>
                <RenderCode
                    lang="svelte"
                    code={`
                    <\script>
                        handleRedirect(
                            '/login',
                            '/manage/user?status=test&passed=true',
                            {}, //replaceState or useHardRedirect
                            {
                                condition_1: "test", //login params
                                condition_2: "test",
                            }
                        )
                    <\/script>
                `}/>
                <h3 class="font-bold">Simple hard redirect</h3>
                <h3>By default, <code>handleRedirect</code> uses <code>goto</code>, hence the optional options param <code>replaceState: true</code>. However, if you need a hard redirect, you can use the <code>useHardRedirect</code> option.</h3>
                <RenderCode
                    lang="svelte"
                    code={`
                    <\script>
                        handleRedirect(
                            '/login',
                            '/manage/user',
                            {useHardRedirect: true}
                        )
                    <\/script>
                `}/>
        </section>
</main>