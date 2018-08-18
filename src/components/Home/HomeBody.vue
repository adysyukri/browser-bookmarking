<template>
    <div class="home-content">
        <v-container v-if="bookList.length <= 0" text-xs-center>
            <v-layout row>
                <v-flex xs12>
                    <div>No book to show. Please add book.</div> 
                </v-flex>
            </v-layout>
        </v-container>
        <v-content class="content" v-else>
            <v-container>
                <v-layout row v-for="(book, index) in bookList" :key="index" class="mb-2">
                    <v-flex xs12 sm8 offset-sm2>
                        <v-card class="accent lighten-1">
                            <v-container fluid>
                                <v-layout row>
                                    <v-flex>
                                        <v-card-title primary-title class="pa-0">
                                            <div>
                                                <h1 class="white--text mb-0 mt-0">{{book.bookTitle}}</h1>
                                                <h3>Author: {{ book.author}}</h3>
                                            </div>
                                        </v-card-title>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                    <template>
                                        <app-edit-modal 
                                        :book="book" 
                                        :index="index" 
                                        ></app-edit-modal>
                                    </template>
                                    <v-btn @click="removeBook(index)" small fab color="secondary darken-3">
                                        <v-icon>delete</v-icon>
                                    </v-btn>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs4>
                                        <div>Total pages: {{book.totalPages}}</div>
                                    </v-flex>
                                    <v-flex xs4>
                                        <div class="white--text">Pages read: {{book.readPages}}</div>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>        
        <app-footer></app-footer>
    </div>
</template>

<script>
import Footer from "./Footer";
import EditModal from './EditModal'
export default {
    data(){
        return {
            bookList: []
        }
    },
    components: {
        appFooter: Footer,
        appEditModal: EditModal
    },
    beforeCreate(){
        this.$store.dispatch('fetchBooks')
    },
    computed: {
        booksAll(){
            return this.$store.getters.loadBooks
        }
    },
    methods: {
        removeBook(book){
            let decide = confirm('Do you really want to remove this book?')
            if(decide){
                console.log('removing')
                console.log(book)
                this.$store.dispatch('removeBook', book)
            }
            this.bookList = this.$store.getters.loadBooks
        }
    },
    beforeMount(){
        this.bookList = this.booksAll
    },
    watch: {
        booksAll(books){
            this.bookList = books
        }
    }
};
</script>

<style>
.home-content{
    min-height: 100%;
    position: relative;
}
.content{
    margin-bottom: 20px
}
</style>
