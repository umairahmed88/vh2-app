import axios from "axios";

const KEY = "AIzaSyCdSwK2kIRq1zpJVXH4vMZzfv3ffeMwxzg";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});