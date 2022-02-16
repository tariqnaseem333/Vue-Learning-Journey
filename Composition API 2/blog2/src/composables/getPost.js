import { ref } from "vue";

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            // simulate the delay it will give us 2sec before 
            // we make a fetch request
            // await new Promise((resolve) => {
            //     setTimeout(resolve, 2000)
            // })
            // suspense vue component can be used to provide the fallback
            // content to the user untill the data is loaded
            let data = await fetch("http://localhost:3000/posts/" + id);
            if (!data.ok) {
                // when we throw an error in try block then catch block
                // will catch the error and update value of error
                throw Error("The Post you request does not exist");
            }
            post.value = await data.json();
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };
    return { post, error, load }
}

export default getPost