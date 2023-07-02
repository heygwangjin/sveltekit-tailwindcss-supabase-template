<script lang="ts">
	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	supabase.auth.signInWithOAuth({
		provider: 'google'
	});
</script>

<main class="flex items-center justify-center h-full" />
