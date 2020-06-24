import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer eVg_wltMnekBWZneVraXf3haASvteCEGHiYRVNVhX53SvQwDjiAEgM1l4KSqqnc7iCAsCKgKl5x-eK0b1xOmudscLyCZ_zyJb_TuKWb9MYjxW_euDNGSdgESGDrzXnYx",
  },
});
