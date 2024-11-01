<script lang="ts">
	import IconStore from './IconStore.svelte';
	import Login from './login.svelte';
	import MypageIcon from './MypageIcon.svelte';
	import Register from './register.svelte';
	import SearchBar from './SearchBar.svelte';
	import Title from './Title.svelte';
</script>

<header class="header">
	<div class="logo">
		<Title></Title>
	</div>
	<div class="search-container">
		<SearchBar></SearchBar>
	</div>
	<div class="user-actions">
		<div class="auth-links">
			<div class="signup">
				<Register></Register>
			</div>
			<div class="login">
				<Login></Login>
			</div>
		</div>
		<div class="icon-links">
			<div class="cart-icon">
				<IconStore></IconStore>
			</div>
			<div class="user-icon">
				<MypageIcon></MypageIcon>
			</div>
		</div>
	</div>
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30px;
		background-color: #fff;
		border-bottom: 1px solid #eaeaea;
		position: relative;
	}

	.logo {
		display: flex;
		align-items: center;
	}

	.user-actions {
		display: flex;
		flex-direction: column; /* 세로 방향으로 배치 */
		align-items: flex-end; /* 오른쪽 정렬 */
		position: absolute;
		right: 16px;
		top: 6px;
	}

	.auth-links {
		display: flex;
		align-items: center;
	}

	.signup,
	.login {
		margin-left: 16px;
		text-decoration: none;
		color: #333;
	}

	.signup:hover,
	.login:hover {
		text-decoration: underline;
	}

	.icon-links {
		display: flex;
		align-items: center;
		margin-top: 8px; /* 간격 조정 */
	}

	.user-icon {
		border-radius: 50%;
		padding: 2px;
	}
	.cart-icon {
		padding: 4px;
	}
	.search-container {
		display: flexbox;
		align-items: center;
		position: absolute; /* 절대 위치 설정 */
		left: 50%; /* 중앙 정렬을 위한 설정 */
		transform: translateX(-50%); /* 중앙으로 이동 */
		margin-top: 10px; /* 사용자 액션과의 간격 조정 */
		width: 70%;
	}
</style>
