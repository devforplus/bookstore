<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1 class="py-4 text-4xl font-bold">로그인</h1>

<form class="w-1/2 space-y-4 px-4" action="?/login" method="post" use:enhance>
	<div>
		<label for="username">아이디</label>
		<input type="text" id="username" name="username" />
	</div>
	<div>
		<label for="password">비밀번호</label>
		<input type="password" id="password" name="password" />
	</div>

	<button type="submit">로그인</button>
</form>

<style lang="postcss">
	label {
		@apply mb-2 block text-sm font-medium text-green-700 dark:text-green-500;
	}
	input {
		@apply block w-full rounded-lg border border-green-500 bg-green-50 p-2.5 text-sm text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-500 dark:bg-gray-700 dark:text-green-400 dark:placeholder-green-500;
	}
	button {
		@apply mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;
	}
</style>
