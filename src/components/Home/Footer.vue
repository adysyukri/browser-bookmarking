<template>
    <v-footer dark height="auto" class="footer-bottom">
            <v-card flat tile class="flex">
                <v-card-title class="secondary lighten-1">
                    <strong class="subheading">This app uses browser local storage as database.</strong>
                    <!-- <v-spacer></v-spacer>
                    <v-tooltip bottom>
                        <a href="#">
                            <v-icon slot="activator">code</v-icon>
                            <span>Source code</span>
                        </a>
                    </v-tooltip>  -->
                </v-card-title>
                <v-card-actions class="primary darken-3 justify-center">
                    &copy; <pre>{{ new Date().getFullYear()}}</pre> -
                    
                    <pre> Made by </pre> 
                    <a 
                    href="https://vuetifyjs.com/" 
                    target="_blank"
                    class="white--text">
                    <strong> Vuetify</strong></a>
                </v-card-actions>
            </v-card>
    </v-footer>
</template>


<style>
.footer-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%
}
</style>
