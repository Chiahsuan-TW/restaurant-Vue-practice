import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')


export default {
  getRestaurants({page, categoryId}) {
    const URLparams = new URLSearchParams({page, categoryId})

    return apiHelper.get(`/restaurants?${URLparams.toString()}`, {
      headers: {Authorization: `Bearer ${getToken()}`}
    })
  }
}