<!-- TODO: 추후 추가 (현재 레거시한 상태) -->

<script lang="ts">
	import { Tabs, TabItem } from 'flowbite-svelte';
	import { user } from '../../../stores/user';
	import { onMount } from 'svelte';
	import { isUser, type User } from '$lib/types/User';
	import { loadUserList } from '$lib/loadUserList';

	// TODO: userList 제거된 것 반영하고, 기능 추가하기

	let currentUser: User | undefined;

	// onMount에서 사용자 데이터 로드
	onMount(async () => {
		const userList = await loadUserList(0); // 사용자 목록 로드
		if (userList.length > 0) {
			currentUser = userList[0]; // 첫 번째 사용자만 선택
			user.set(currentUser); // 스토어에 설정
		} else {
			user.set(undefined); // 목록이 비어 있는 경우
		}
	});

	// 스토어 구독
	$: currentUser = $user; // 구독을 통해 스토어의 값을 가져옴
</script>

{#if isUser($user)}
	<div>
		<Tabs>
			<TabItem open title="개인 정보">
				<p class="text-sm text-gray-500 dark:text-gray-400">
					<b>개인 정보</b> <br />
					성함 : {$user.name} <br />
					이메일 : {$user.email}
				</p>
			</TabItem>
			<TabItem title="배송지 정보">
				<p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Settings:</b>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua.
				</p>
			</TabItem>
			<TabItem title="개인 정보 수정">
				<p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Users:</b>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua.
				</p>
			</TabItem>
		</Tabs>
	</div>
{:else}
	<p>고객님의 정보가 아직 로드되지 않았습니다.</p>
{/if}
