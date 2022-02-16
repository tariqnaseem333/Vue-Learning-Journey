// take in an array of posts
// create a new tag set (so no duplicates)
// add the tags of each post to the tag set
// return a single array of tags based on the set

import { ref } from "vue"

const useTags = (posts) => {
    const tags = ref([]);
    // Set is similar to array but it won't allow duplicates
    const tagSet = new Set();

    posts.forEach((item) => {
        item.tags.forEach((tag) => tagSet.add(tag));
    })

    // populating tags array with the tagSet non-duplicates
    // values
    tags.value = [...tagSet];

    return { tags }

}

export default useTags;