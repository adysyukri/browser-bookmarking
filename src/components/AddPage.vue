<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm10 md7>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="secondary darken-2">
                            <v-toolbar-title>Add your book</v-toolbar-title>
                        </v-toolbar>
                        <v-form ref="form" v-model="valid">
                            <v-card-text class="pa-5">
                                <v-text-field
                                outline
                                name="book"
                                label="Book Title*"
                                type="text"
                                v-model="bookTitle"
                                :rules="[v => !!v || 'Title is required' ]"
                                required></v-text-field>
                                <v-text-field
                                outline
                                name="author"
                                label="Author"
                                v-model="author"
                                type="text"></v-text-field>
                                <v-text-field
                                outline
                                name="pages"
                                label="Total pages*"
                                v-model="totalPages"
                                type="number"
                                :rules="[v => !!v || 'Total number of pages is required' ]"
                                required></v-text-field>
                                <v-text-field
                                outline
                                name="readpage"
                                v-model="readPages"
                                label="Total pages read"
                                type="number"
                                ></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="secondary darken-3"
                                :disabled="!valid"
                                @click="submit"
                                class="mr-3 mb-3">Add</v-btn>
                            </v-card-actions>        
                        </v-form>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
export default {
    
    data(){
        return {
            valid: true,
            bookTitle: '',
            author: '',
            totalPages: null,
            readPages: null,
            bookArray: []
        }
    },
    methods: {
        submit(){
            if(this.$refs.form.validate()) {
                const book = {
                    bookTitle : this.bookTitle,
                    author: this.author,
                    totalPages: this.totalPages,
                    readPages: this.readPages
                    // this.$store.dispatch('addBook',{
                    //     bookTitle: this.bookTitle,
                    //     author: this.author,
                    //     totalPages: this.totalPages,
                    //     readPages: this.readPages
                    // })
                }

                this.$refs.form.reset()
                //this.bookArray.push(book)
                this.$store.dispatch('addBook', book)
                //localStorage.setItem('bookstore', JSON.stringify(this.bookArray))
                this.$store.dispatch('changeComponentTag', 'appHomeBody')
                
            }      
        }
    }
    
}
</script>
