import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null);

    useEffect (() => {
        axios.get(url)
        .then(res => (setBlogs(res.data)))

        .catch(err => console.log(err))
    }, [url]);

    return(blogs);
}

export default useFetch;