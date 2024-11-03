<script lang="ts">
	import MainHeader from '../../components/MainHeader.svelte';
</script>

<div class="flex flex-row justify-center">
	<div class="container">
		<MainHeader></MainHeader>

		<div>
			<slot />
		</div>
	</div>
</div>
