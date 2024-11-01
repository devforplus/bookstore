<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span on:click={() => goto('/')}>동서 서점</span>
