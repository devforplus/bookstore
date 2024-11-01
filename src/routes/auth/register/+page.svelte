<script lang="ts">
	import { enhance } from '$app/forms';
	import { Select, Label } from 'flowbite-svelte';

	// biome-ignore lint/style/useConst: <explanation>
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	let selected: string | any = null;
	const sex = [
		{ value: 'women', name: '여자' },
		{ value: 'men', name: '남자' }
	];
</script>

<h1 class="py-4 text-4xl font-bold">회원가입</h1>

<form class="w-1/2 space-y-4 px-4" action="?/register" method="post" use:enhance>
	<div>
		<label for="id">아이디</label>
		<input type="text" id="id" name="username" />
	</div>
	<div>
		<label for="password">비밀번호</label>
		<input type="password" id="password" name="password" />
	</div>
	<div>
		<label for="password">비밀번호 확인</label>
		<input type="password" id="pwdcheck" name="pwdcheck" />
	</div>
	<div>
		<label for="email">이메일</label>
		<input type="email" id="email" name="email" />
	</div>
	<div>
		<Label>
			Select an option
			<Select class="mt-2" items={sex} bind:value={selected} />
		</Label>
	</div>
	<div>
		<label for="phonenumber">전화번호</label>
		<input type="text" id="phonenumber" name="phonenumber" />
	</div>
	<button type="submit">회원가입</button>
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
