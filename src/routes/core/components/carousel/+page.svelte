<script>
    import {sectionIds, RenderCode} from '$lib';
    import { Carousel } from '@sierra-95/svelte-scaffold';

    let images=
    [
        "https://files.karakal.africa/random-images/Martin%20Lewis%20gives%20five%20tips%20to%20save%20on%20fuel%20costs%20as%20petrol%20hits%20new%20record%20high.jpeg",
        "https://files.karakal.africa/random-images/kenjiro-yagi-zNeCv-nM7i0-unsplash.jpg",
        "https://files.karakal.africa/random-images/waldemar-brandt-kHBtydeNIpM-unsplash.jpg",
        "https://files.karakal.africa/random-images/_.jpeg",    
    ];
</script>
<section id={sectionIds.components.carousel.default} class="space-y-4">
    <h1>Carousel</h1>
    <h3>This can be used to display a series of images in a rotating manner.</h3>
    <div class="relative w-full h-125">
        <Carousel images={images} />
    </div>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import { Carousel } from '@sierra-95/svelte-scaffold';

            let images=[];
		<\/script>
        
        <div class="relative w-full h-125">
            <Carousel images={images} />
        </div>
	`}/>
</section>