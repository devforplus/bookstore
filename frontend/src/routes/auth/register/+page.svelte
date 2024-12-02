<script lang="ts">
import { SexSchema } from "$lib/types/Sex";
import type { UserWithCredential } from "$lib/types/UserWithCredential";
import { Select, Label, Input } from "flowbite-svelte";
import { writable } from "svelte/store";
import Brand from "../../../components/Brand.svelte";
import { showToast } from "$lib/showToast";
import { client } from "backend";

// 사용자 정보를 관리하는 writable 스토어
const user = writable<UserWithCredential & { passwordConfirm: string }>({
	id: "",
	name: "",
	password: "",
	passwordConfirm: "",
	email: "",
	phone: "",
	sex: "남자",
	address: "",
	detail_address: "",
});

// 성별 선택 옵션 생성
const SexSelection: { value: string; name: string }[] = SexSchema.options.map(
	(option) => {
		return {
			value: option,
			name: option,
		};
	},
);

/** 회원가입 수행 함수 */
const register = async () => {
	// 비밀번호와 비밀번호 확인 입력 검사
	if (!$user.password) {
		showToast({}, "비밀번호가 입력되지 않았습니다");
		return;
	}

	if (!$user.passwordConfirm) {
		showToast({}, "비밀번호 확인이 입력되지 않았습니다");
		return;
	}

	// 비밀번호 일치 여부 검사
	if ($user.password !== $user.passwordConfirm) {
		showToast({}, "비밀번호가 일치하지 않습니다.");
		return;
	}

	// 서버에 회원가입 요청
	try {
		const response = await client.user.addUser.mutate({ ...$user });

		console.log(response);

		showToast({}, "회원가입이 성공적으로 완료되었습니다.");
	} catch (error) {
		// 네트워크 오류 등 처리
		console.error("회원가입 요청 중 오류 발생:", error);
		console.error(error);
		showToast({}, "회원가입 요청 중 오류가 발생했습니다.");
	}
};
</script>

<div class="flex flex-row place-items-center justify-center gap-2">
	<Brand />
	<span class="py-4 text-3xl font-bold">회원가입</span>
</div>

<form class="space-y-4 px-4" on:submit|preventDefault={register}>
	<div>
		<Label for="name">이름</Label>
		<Input type="text" id="name" name="name" bind:value={$user.name} />
	</div>
	<div>
		<Label for="id">아이디</Label>
		<Input type="text" id="id" name="username" bind:value={$user.id} />
	</div>
	<div>
		<Label for="password">비밀번호</Label>
		<Input type="password" id="password" name="password" bind:value={$user.password} />
	</div>
	<div>
		<Label for="pwdcheck">비밀번호 확인</Label>
		<Input type="password" id="pwdcheck" name="pwdcheck" bind:value={$user.passwordConfirm} />
	</div>
	<div>
		<Label for="email">이메일</Label>
		<Input type="email" id="email" name="email" bind:value={$user.email} />
	</div>
	<div>
		<Label>
			성별 선택
			<Select class="mt-2" items={SexSelection} bind:value={$user.sex} />
		</Label>
	</div>
	<div>
		<Label for="phonenumber">전화번호</Label>
		<Input type="text" id="phonenumber" name="phonenumber" bind:value={$user.phone} />
	</div>

	<div class="flex flex-row place-items-center justify-between">
		<button
			type="submit"
			class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>회원가입</button
		>

		<a href="/auth/login">이미 계정이 있으신가요?</a>
	</div>
</form>
