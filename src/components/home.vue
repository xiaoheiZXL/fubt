<template>
	<div class="con-box">
		<Header class="header"></Header>
		<slider class="slider"></slider>
		<news></news>
		<Content class="content"></Content>
	</div>
</template>
<script>
// 头部：
import Header from "./header.vue"
// 轮播模块
import slider from "./subcom/slider.vue"
// 新闻模块
import news from "./subcom/news.vue"
// 主要内容
import Content from "./subcom/content.vue"
	export default {
		data(){
			return {}
		},
		methods:{},
		components:{
			Header,//头部
			slider,//轮播图
			news,//新闻模块
			Content,//主要内容
		}
	}
</script>
<style scoped>

</style>
