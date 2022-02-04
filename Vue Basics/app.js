console.log("Hello Vue")

// Creating a Vue App
const app = Vue.createApp({
    // {} -- Root Component of Vue app
    // setup data functions
    // the template below will be injected inside the element 
    // template: "<h2>It's a template</h2>"
    data() {
        // We are returning a data object here
        return  {
            title: "A History of Internet",
            author: "John Ryan",
            age: 88
        }
    },
    methods: {
        changeTitle(user_input)  {
            this.title = user_input
        }
    }
})

// Telling where to mount this app in DOM (an element having id of app)
// which means this app exist for this element and all functions inside this 
// app will be available only inside this element
app.mount("#app")