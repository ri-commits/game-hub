import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6e72b2117f6c455d81a9c2f47bc2761b",
  },
});
