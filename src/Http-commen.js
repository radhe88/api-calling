import axios from "axios";

export default axios.create({
    baseURL: "https://stagedbapi.ansharlabs.com/",
    headers: {
        "Content-type": "application/json"
    }
});