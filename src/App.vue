<template>
    <div class='container' id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="">
                <a class="navbar-brand" href="#">News</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="ml-lg-3 collapse justify-content-center navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link
                        v-for='item in links'
                        :to="item.to"
                        :key='item.to'>
                        {{item.name}}
                    </router-link>
                </div>
            </div>
            <div class="">
                <span>EN</span>
                <span class='mx-2'>|</span>
                <span>RU</span>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
    export default {
        data: () => ({
            links: [
                {
                    to: '/',
                    name: 'Home'
                }
            ]
        })
    }
</script>
