<template>
	<header>
		<div class="topline">
			<div class="headmenu">
				<div v-if="isLogin">
					{{this.$store.state.loginStore.memberId}}님, 안녕하세요.
					<span @click="Logout()">로그아웃</span>
				</div>
				<div v-else>
					<router-link :to="{ name: 'Login' }" v-show="isLogin == false">로그인</router-link>
				</div>
			</div>
		</div>
		<div class="menuWrap">			
			<ul class="menu">
				<li><router-link :to="{ name: 'Login'}" class="link">로그인</router-link></li>
				<!--<li><a href="/login">로그인</a></li>-->
				<li><router-link :to="{name: 'BoardList'}">게시판</router-link></li>
				<li><a href="https://www.naver.com/">네이버</a></li>
				<li><a href="/">돌아가기</a></li>
			</ul>
		</div>
	</header>
</template>

<script>
export default {
	
	
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:120px; border-bottom:1px solid #35495e}
header h1{position:absolute; top:0; left:100px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:20px; right:50px;}
header ul.menu li{float:left; padding:10px 20px; list-style:none;}
.header .topline { position:relative; height:30px; margin:0 10px; }
.header .topline .headmenu { position:absolute; right:0; top:4px; }
.header .topline .headmenu a { font-weight:bold; color:#2c3e50; }
.header .topline .headmenu span { font-weight:bold; color:#2c3e50; cursor:pointer; text-decoration:underline; }
a{text-decoration:none; color:#333;}
</style>