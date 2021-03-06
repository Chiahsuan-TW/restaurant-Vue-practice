import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')


export default {
  getRestaurants({page, categoryId}) {
    const URLparams = new URLSearchParams({page, categoryId})

    return apiHelper.get(`/restaurants?${URLparams.toString()}`, {
      headers: {Authorization: `Bearer ${getToken()}`}
    })
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds', {
      headers: {Authorization: `Bearer ${getToken()}`}
    })
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top', {
      headers: {Authorization: `Bearer ${getToken()}`}
    })
  }
}