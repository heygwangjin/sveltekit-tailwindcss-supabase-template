<script lang="ts">
	import { afterNavigate, beforeNavigate, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import ProgressBar from 'svelte-progress-bar';
	import '../app.css';

	let progress: any;
	beforeNavigate(() => progress.start());
	afterNavigate(() => progress.complete());

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="h-screen">
	<ProgressBar bind:this={progress} />
	<slot />
</div>
