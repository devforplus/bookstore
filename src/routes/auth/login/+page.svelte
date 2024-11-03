<script lang="ts">
	import Brand from '../../../components/Brand.svelte';
	import { showToast } from '$lib/showToast';
	import { Input, Label } from 'flowbite-svelte';

	// TODO: 로그인 아이디, 비밀번호를 입력받을 상태 추가
	// TODO: 관련 로직 추가

	/** 로그인 수행 함수 */
	const login = async () => {
		const username = (document.getElementById('username') as HTMLInputElement).value;
		const password = (document.getElementById('password') as HTMLInputElement).value;

		// 입력 검사
		if (!username) {
			showToast({}, '아이디가 입력되지 않았습니다.');
			return;
		}
		if (!password) {
			showToast({}, '비밀번호가 입력되지 않았습니다.');
			return;
		}

		// 서버에 로그인 요청
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			});

			const result = await response.json();

			// 응답에 따라 메시지 표시
			if (result.ok) {
				showToast({}, result.message);
				// 로그인 성공 후 필요한 추가 작업 (예: 리다이렉트)
			} else {
				showToast({}, result.message);
			}
		} catch (error) {
			console.error('로그인 요청 중 오류 발생:', error);
			showToast({}, '로그인 요청 중 오류가 발생했습니다.');
		}
	};
</script>

<div class="flex flex-row place-items-center justify-center gap-2">
	<Brand />
	<span class="py-4 text-3xl font-bold">로그인</span>
</div>

<form class="space-y-4 px-4" on:submit|preventDefault={login}>
	<div>
		<Label for="username">아이디</Label>
		<Input type="text" id="username" name="username" placeholder="아이디를 입력하세요" />
	</div>
	<div>
		<Label for="password">비밀번호</Label>
		<Input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" />
	</div>

	<div class="flex flex-row place-items-center justify-between">
		<button
			type="submit"
			class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			로그인
		</button>

		<a href="/auth/register">계정이 없으신가요?</a>
	</div>
</form>
