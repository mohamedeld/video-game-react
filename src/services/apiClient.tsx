import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2536bc29c1084d21a96293e9962efa58",
  },
});
