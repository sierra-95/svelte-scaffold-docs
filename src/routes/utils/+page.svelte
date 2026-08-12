<script>
    import {handleRedirect, Button} from '@sierra-95/svelte-scaffold';
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';

    function navigate() {
        handleRedirect({ 
            baseUrl: '/login', 
            baseParams: { source: 'admin_panel' }, 
            redirectTo: { 
                path: '/manage/user', 
                params: { status: 'pending', filter: 'email_verified' } 
            } 
        });
    }
</script>


<title>Utils</title>
<main class="space-y-6">
    <h1 class="sierra-docs-h1">Scaffold Utils <span>Just call me, i know a guy</span></h1>

    <ol class="sierra-docs-ol space-y-4">
    
        <section id={routes.utils.ids.isValidEmail} data-title="Validate Email" class="space-y-4">
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
	
        <section id={routes.utils.ids.handleRedirect} data-title="Handle Redirect" class="space-y-4 mb-10">
            <li>handleRedirect</li>

            <h3>
            The most practical way to understand this is through a Sign In / Sign Up flow. Imagine a user is on page X and tries to access page Y, but page Y requires authentication. In that case, the user is redirected to a login page, and after successful authentication, sent back to their original destination.
            </h3>

            <h3>
            <code>handleRedirect</code> builds this flow by taking a base route (e.g. the login page), an optional redirect target, and structured parameters for both. It then constructs the final URL and handles the navigation.
            </h3>

            <h3>
            Keep in mind that your login page must read and handle the <code>redirectTo</code> parameter to complete the flow. Below are examples showing how to use <code>handleRedirect</code> in different scenarios.
            </h3>

            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {handleRedirect} from '@sierra-95/svelte-scaffold';
                <\/script>
            `}/>
            <h3>Here is the type definition:</h3>
            <RenderCode
                lang="typescript"
                code={`
                type RedirectConfig = {
                    baseUrl: string;
                    baseParams?: Record<string, string>;

                    redirectTo?: {
                        path: string;
                        params?: Record<string, string>;
                    };

                    navigation?: {
                        replaceState?: boolean;
                        softRedirect?: boolean; // true = goto, false = window.location
                    };
                };
            `}/>
            <h3 class="font-bold">Simple navigation with params</h3>
            <h3>http://localhost:5173/login?reason=session_expired&retry=true</h3>
            <RenderCode
                lang="typescript"
                code={`
                handleRedirect({ 
                    baseUrl: '/login', 
                    baseParams: { reason: 'session_expired', retry: 'true' } 
                });
            `}/>
            <h3 class="font-bold">Basic redirect</h3>
            <h3>http://localhost:5173/login?redirectTo=%2Fdashboard</h3>
            <RenderCode
                lang="typescript"
                code={`
                handleRedirect({ 
                    baseUrl: '/login', 
                    redirectTo: { path: '/dashboard' } 
                });
            `}/>
            <h3 class="font-bold">Redirect with params</h3>
            <h3>http://localhost:5173/login?source=admin_panel&redirectTo=%2Fmanage%2Fuser%3Fstatus%3Dpending%26filter%3Demail_verified</h3>
            <Button onclick={navigate}>Try Redirect (404)</Button>
            <RenderCode
                lang="typescript"
                code={`
                handleRedirect({ 
                    baseUrl: '/login', 
                    baseParams: { source: 'admin_panel' }, 
                    redirectTo: { 
                        path: '/manage/user', 
                        params: { status: 'pending', filter: 'email_verified' } 
                    } 
                });
            `}/>
            <h3 class="font-bold">Replace state</h3>
            <RenderCode
                lang="typescript"
                code={`
                handleRedirect({ 
                    baseUrl: '/login', 
                    navigation: { replaceState: true } 
                });
            `}/>
            <h3 class="font-bold">Hard redirect</h3>
            <h3>By default, <code>handleRedirect</code> uses <code>goto</code>. If <code>softRedirect</code> is set to <code>false</code>, it will use <code>window.location</code> for a hard redirect.</h3>
            <RenderCode
                lang="typescript"
                code={`
                handleRedirect({ 
                    baseUrl: '/login', 
                    navigation: { softRedirect: false } 
                });
            `}/>
        </section>
    </ol>
</main>