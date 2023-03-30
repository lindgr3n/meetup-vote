<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each data.emojis as emoji}
	<form method="post">
		<input type="hidden" name="emoji" value={emoji} />
		<button>{emoji}</button>
	</form>
{/each}

{#each data.votes as vote}
	<span>{vote.vote}:{vote.total_votes}</span>
{/each}
