<template>
	<IndexPage/>
	<BlogPage/>
	<BlogDetailsPage/>
</template>

<script>
import IndexPage from './components/IndexPage.vue';
import BlogPage from './components/BlogPage.vue';
import BlogDetailsPage from './components/BlogDetailsPage.vue';

export default {
	components: {
		IndexPage,
		BlogPage,
		BlogDetailsPage
	},
};
</script>

<style lang="scss">
</style>
