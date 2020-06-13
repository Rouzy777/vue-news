<template>
    <div>
        <div class="text-center mt-4 mb-3">
            <small class='text-primary'>NEWS</small>
        </div>
        <div v-if='article'>
            <div class="col-lg-9 col-12 mx-auto">
                <div class="text-center mb-2">
                    <h1 class='mb-3 responsive-title'>{{article.title}}</h1>
                    <small class='text-muted'>{{date}} <span class='us-none'>&middot;</span> Source: <a target='_blank' :href='article.url'>{{article.source.name}}</a></small>
                    <img class='mt-3 us-none img-fluid text-center' :src="article.urlToImage" alt="">
                </div>
                <p class='mt-4'>{{article.description}}</p>
                <p>{{article.content}}</p>
                <div class="mt-5 pb-4">
                    <span class='border-author pt-3 font-weight-bold'>{{article.author}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    data: () => ({
        article: ''
    }),
    metaInfo() {
        return {
            title: this.article.title
        }
    },
    computed: {
        author() {
            return this.article.author ? this.article.author : "Anonymous"
        },
        date() {
            return moment(this.article.publishedAt).format('LLL')
        }
    },
    async mounted() {
        let res = await fetch(`http://newsapi.org/v2/everything?source=cnn&q=${this.$route.params.slug}&apiKey=${process.env.VUE_APP_API_KEY}`)
        this.article = (await res.json()).articles[0]
    }
}
</script>

<style lang="css" scoped>
    .us-none {
        user-select: none;
    }

    .border-author {
        border-top: 1px solid black;
    }

    .responsive-title {
        font-size: calc(24px + 16 * ((100vw - 320px) / (1280 - 320)));
    }
</style>
