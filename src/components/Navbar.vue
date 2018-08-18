<template>
    <v-toolbar dark color="primary">
        <v-toolbar-title >Bookmark in Browser</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat @click="buttonText === 'Add book' ? buttonText = 'Back' : buttonText = 'Add book'">{{buttonText}}</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    data() {
        return {
            buttonText: 'Add book',
            componentName: this.componentTag            
        }
    },
    watch: {
        buttonText(text){
            console.log(text)
            if (text === 'Add book'){
                this.componentName = 'appHomeBody'
            }else if (text === 'Back'){
                this.componentName = 'appAddPage'
            }
            console.log(this.componentName)
            this.$store.dispatch('changeComponentTag', this.componentName)
        },
        componentTag(value){
            if(value === 'appHomeBody') {
                this.buttonText = 'Add book'
            } else {
                this.buttonText = 'Back'
            }
        }
    },
    computed: {
        componentTag(){
            return this.$store.getters.loadComponentTag
        }
    }
}

</script>
