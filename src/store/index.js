import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        componentTag: 'appHomeBody',
        bookList: []
    },
    mutations: {
        setBookList(state, payload){
            state.bookList = payload
        },
        setComponentTag(state, payload){
            state.componentTag = payload
        }
    },
    actions: {
        addBook({commit}, payload){
            let books = []
            books = JSON.parse(localStorage.getItem('bookstore'))
            
            const bookAdded = {
                bookTitle: payload.bookTitle,
                author: payload.author,
                totalPages: payload.totalPages,
                readPages: payload.readPages,
                id: books.length
            }

            books.push(bookAdded)
            localStorage.setItem('bookstore', JSON.stringify(books))
            commit('setBookList', books)
            alert('Book added.')
        },
        changeComponentTag({commit}, payload){
            commit('setComponentTag', payload)
        },
        fetchBooks({commit}){
            let books = JSON.parse(localStorage.getItem('bookstore'))
            commit('setBookList', books)
        },
        removeBook({commit}, payload){
            
            let books = JSON.parse(localStorage.getItem('bookstore'))
            books.splice(payload, 1)
            localStorage.setItem('bookstore', JSON.stringify(books))
            commit('setBookList', books)
            alert('Book has been remove')
        },
        updateBook({commit}, payload){
            let books = JSON.parse(localStorage.getItem('bookstore'))
            books[payload.index] = {
                bookTitle: payload.title,
                author: payload.author,
                totalPages: payload.total,
                readPages: payload.read
            }
            localStorage.setItem('bookstore', JSON.stringify(books))
            commit('setBookList', books)
        }
    },
    getters: {
        loadBooks(state) {
            return state.bookList
        },
        loadComponentTag(state) {
            return state.componentTag
        }
    }
})