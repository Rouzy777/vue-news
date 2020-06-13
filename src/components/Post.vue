<template>
    <div class="col-lg-4 col-12 mb-4">
        <div class="card h-100 px-0 col-md-12">
            <img class="card-img-top" :src="article.urlToImage" alt="Image">
            <div class="card-body pt-2">
                <small class="text-muted">{{author}}</small>
                <router-link :to='link'>
                    <h5 class='card-title mt-1'>{{article.title}}</h5>
                </router-link>
                <p class="card-text text-muted mt-1">{{article.description}}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">{{date}}</small>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        article: Object
    },
    computed: {
        date() {
            return moment(this.article.publishedAt).fromNow()
        },
        author() {
            return this.article.author ? this.article.author : "Anonymous"
        },
        link() {
            return this.article.title.replace(/ /g, '-')
        }
    }
}
</script>
