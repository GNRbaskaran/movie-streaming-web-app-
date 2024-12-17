import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "10e1350886aa04003d38f015ddab60bf",
    },
});