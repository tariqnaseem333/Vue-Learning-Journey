console.log("Hello Vue")

// Creating a Vue App
const app = Vue.createApp({
    // setup data functions
    // template: "<h2>It's a template</h2>"
    data() {
        // We are returning a data object here
        return  {
            title: "The Final Empire",
            author: "Brandon",
            age: 45
        }
    },
    methods: {
        changeTitle(title)  {
            this.title = title
        }
    }
})

// Telling where to mount this app in DOM (an element having id of app)
app.mount("#app")