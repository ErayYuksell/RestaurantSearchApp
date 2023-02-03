import axios, { Axios } from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 4btGQp2mmEO_hFXQaY2uUUm1MHYpRAoj4wC07Rtv6o2203AmQaWpH7_ItjKGXPwJsRLvhXRI_3Auaye-l72GQecZNqZCYWHKiCNDvMmnaJ_o8-bSGNEYrRwQjpLbY3Yx",
  },
});
