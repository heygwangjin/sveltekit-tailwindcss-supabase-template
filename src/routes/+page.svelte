<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	export let data;

	let { session } = data;
	$: ({ session } = data);

	let visible = false;

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 500);
	});
</script>

<main class="flex flex-col items-center justify-center h-full gap-3">
	{#if visible}
		<h1 class="font-bold text-3xl text-orange-400" transition:fade={{ delay: 500 }}>
			This is Sveltekit-TailwindCSS-Supabase Starter
		</h1>
		<div class="flex items-center gap-4" transition:fly={{ delay: 1000, y: 50, duration: 1500 }}>
			<a href="/login" class="font-semibold text-lg"> login </a>
			<form method="post" action="?/logout">
				<div>
					<button
						class="font-semibold text-lg {!session ? 'text-gray-400' : ''}"
						disabled={!session}>logout</button
					>
				</div>
			</form>
		</div>
	{/if}
</main>
