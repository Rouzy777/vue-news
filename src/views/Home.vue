<template>
    <div>
        <section v-if='news' class='row mx-auto col-12 mt-4 px-0'>
            <Post v-for='(item, i) in news' :article='item' :key='`${item.title}-${i}`'/>
        </section>
    </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
    name: 'Home',
    metaInfo: {
        title: 'All - VueNews'
    },
    data: () => ({
        currPage: 0,
        news: null
    }),
    components: {
        Post
    },
    methods: {
        async fetchNews() {
            this.currPage++

            let res = await fetch(`http://newsapi.org/v2/everything?language=en&pageSize=18&page=${this.currPage}&sources=cnn&apiKey=${process.env.VUE_APP_API_KEY}`),
                finalNews = (await res.json()).articles

            if(this.news === null) {
                this.news = finalNews
            } else {
                this.news = [...this.news, ...finalNews]
            }
        }
    },
    mounted() {
        this.fetchNews()
        let that = this
        window.onscroll = function() {
            let d = document.documentElement
            let offset = d.scrollTop + window.innerHeight
            let height = d.offsetHeight

            if (offset >= height) {
                that.fetchNews()
            }
        }
    }
}
</script>
