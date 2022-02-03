console.log("Hello Vue")

// Creating a Vue App
const app = Vue.createApp({
    data() {
        return  {
            url: 'https://www.google.co.in/',
            showBooks: true,
            books: [
            { title: "name of the winds", author: "patrick", isFav: true },
            { title: "the way of the kings", author: "brandon", isFav: false},
            { title: "The Final Empire", author: "Brandon", isFav: true},
        ]
        }
    },
    methods: {
       toggleShowBooks()  {
           this.showBooks = !this.showBooks
       },
       toggleClass(item) {
            item.isFav = !item.isFav
       },
    },
    // Computed Properties are those properties which are dependent on the 
    // data property declared above. If data property changes then computed
    // property also changes
    computed: {
        filteredBooks() {
            return this.books.filter( (book)=> book.isFav )
        }
    }
})

app.mount("#app")