<template>
    <v-dialog width="350px" persistent v-model="editDialog">
        <v-btn small fab color="secondary" slot="activator">
            <v-icon>edit</v-icon>
        </v-btn>
        <v-form ref="form">
            <v-card>
                <v-container>
                    <v-layout row>
                        <v-flex xs12>
                            <v-card-text>
                                <v-text-field
                                name="title"
                                label="Title"
                                v-model="editedTitle"
                                required></v-text-field>
                                <v-text-field
                                name="author"
                                label="Author"
                                v-model="editedAuthor"
                                required></v-text-field>
                                <v-text-field
                                name="total"
                                label="Total Pages"
                                v-model="editedTotal"
                                required></v-text-field>
                                <v-text-field
                                name="read"
                                label="Pages Read"
                                v-model="editedRead"
                                required></v-text-field>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-layout row>
                        <v-flex xs12>
                            <v-card-actions>
                                <v-btn flat
                                class="info--text"
                                @click="editDialog = false">Close</v-btn>
                                <v-btn flat class="info--text" @click="onSave">Save</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-form>
        
    </v-dialog>
</template>

<script>
export default {
    props: ['book', 'index'],
    data(){
      return {
          editDialog: false,
          editedTitle: this.book.bookTitle,
          editedAuthor: this.book.author,
          editedTotal: this.book.totalPages,
          editedRead: this.book.readPages,
      }
    },
    methods: {
        onSave() {
            if (this.editedTitle.trim() === '' ||
            this.editedAuthor.trim() === '' ||
            this.editedTotal <= 0 ||
            this.editedRead <= 0){
                return
            }
            this.editDialog = false
            this.$store.dispatch('updateBook',{
                index: this.index,
                title: this.editedTitle,
                author: this.editedAuthor,
                total: this.editedTotal,
                read: this.editedRead
            })
               
        }
    }
    
};
</script>
