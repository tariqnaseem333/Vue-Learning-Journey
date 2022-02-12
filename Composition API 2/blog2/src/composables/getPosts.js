import { ref } from "vue";


const getPosts = () => {

    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            let data = await fetch("http://localhost:3000/posts");
            if (!data.ok) {
                // when we throw an error in try block then catch block
                // will catch the error and update value of error
                throw Error("No Data Available");
            }
            posts.value = await data.json();
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };
    return { posts, error, load }
}

export default getPosts