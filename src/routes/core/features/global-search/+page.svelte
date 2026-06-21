<script>
    import {routes, sectionIds, RenderCode} from '$lib'
</script>

<title>Global Search</title>
<section id={sectionIds.features.global_search} class="space-y-4">
    <h1 class="sierra-docs-h1">The Snitch</h1>
    <h3>Gliobal search is built on 
        <a href={`${routes.core.components.children.inputs}#${sectionIds.components.inputs.search_bar}`} class="note">Search Bar</a> to allow 
        quick search across the entire application. It is designed to be accessible from anywhere in the app and allow users to find what they are looking for without having to navigate through multiple pages or sections
    </h3>
    <h3>Press <code>ctrl + K</code>, or click the search bar on the header to get the interface.</h3>
    <h3>
    Note that Global Search compiles its results based solely on the provided sections file. It runs within
    <a href={routes.modules.layout.children.overview} class="note">Layout</a>, and <a href={routes.modules.layout.children.example} class="note">here</a> is a sample sections file.
    </h3>
    <RenderCode
		lang="svelte"
		code={`
        <\script>
            import {sections} from '$lib';
            import {GlobalSearch} from '@sierra-95/svelte-scaffold';
        <\/script>

        <GlobalSearch {sections}/>
        `}
    />
</section>