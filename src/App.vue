<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="/">News</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#expand" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse justify-content-center navbar-collapse" id="expand">
                    <div class="col-6 my-lg-0 my-2 navbar-nav">
                        <router-link
                            class='text-uppercase ml-lg-auto text-light font-weight-bold custom-link'
                            v-for='item in links'
                            :to="item.to"
                            :key='item.to'>
                            {{item.name}}
                        </router-link>
                    </div>
                    <div class="col-6 px-0">
                        <div class="text-lg-right">
                            <a target="_blank" href="https://github.com/Rouzy777/vue-news">
                                <img src="https://img.shields.io/badge/Star-Github-brightgreen" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <router-view class='container px-0' />
    </div>
</template>

<script>
    export default {
        data: () => ({
            links: [
                {
                    to: '/',
                    name: 'ALL'
                }
            ]
        })
    }
</script>

<style media="screen">
    .custom-link:hover {
        text-decoration: none;
        color: rgba(255,255,255,0.8)
    }

    .navbar-toggler:focus {
        outline: none;
    }
</style>
