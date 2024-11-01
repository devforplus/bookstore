<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<h1
	on:click={() => {
		goto('/auth/register');
	}}
>
	회원가입
</h1>
