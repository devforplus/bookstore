<!-- TODO: 추후 추가 (현재 레거시한 상태) -->

<script lang="ts">
import { Tabs, TabItem } from "flowbite-svelte";
import { user } from "../../../stores/user";
import { isUser } from "$lib/types/User";
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
