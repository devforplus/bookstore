<script>
	import { onDestroy, onMount } from 'svelte';
	import { loadBookList } from '$lib/loadBookList';
	import { bookList } from '../stores/bookList';

	import '../app.css';
	import { loadUserList } from '$lib/loadUserList';
	import { userList } from '../stores/userList';

	onMount(async () => {
		// TODO: 페이지 번호 받아오는 부분 추가하거나, 필요 하에 "이 데이터 로드 로직"을 이동시키기
		const _bookList = await loadBookList(0);

		bookList.set(_bookList);
	});

	onDestroy(() => {
		bookList.set(undefined);
		userList.set(undefined);
	});
</script>

<div class="h-screen">
	<slot></slot>
</div>
