<template>
    <div>
        <section class='row mx-auto col-12 mt-4'>
            <Post />
            <Post />
            <Post />
        </section>
    </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
    name: 'Home',
    data: () => ({
        news: []
    }),
    components: {
        Post
    }
}
</script>
