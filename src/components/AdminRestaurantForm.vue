<template>
  <form @submit.prevent="handleSubmit" v-show="!isLoading">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
        v-model="restaurant.name"
      >
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <!--v-model 放在select-->
      <select
        id="categoryId"
        class="form-control"
        name="categoryId"
        required
        v-model="restaurant.categoryId"
      >
        <option
          value=""
          selected
          disabled
        >
          --請選擇--
        </option>
        <!--value 設為類別的id-->
        <option v-for="category in categories" 
                :key="category.id"
                :value="category.id"
                >
         {{category.name}}
        </option>
        
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
        v-model="restaurant.tel"
      >
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
        v-model="restaurant.address"
      >
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
        v-model="restaurant.openingHours"
      >
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        class="form-control"
        rows="3"
        name="description"
        v-model="restaurant.description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        width= "200"
        height= "200"
        class="d-block img-thumbnail mb-3"
      >
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleUpload"
      >
    </div>

    <button
      type="submit"
      class="btn btn-primary"
      :disabled="isProcessing"
    >
      {{isProcessing ? "處理中": "送出"}}
    </button>
  </form>
</template>



<script>
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'


export default {
  name: "AdminRestaurantForm",
  props: {
    initialRestaurant: {
      type: Object,
      default: () => ({
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      })
    },
    isProcessing: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      restaurant: {
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      categories: [],
      isLoading: true,
    }
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get()
        this.categories = data.categories
        this.isLoading = false

      } catch(error) {
        console.log(error)
        this.isLoading = false
      }
    },
    handleUpload(e) {
      const { files } = e.target

      if (!files.length) {
        this.image = ''
        return 
      } else {
        const imgURL = window.URL.createObjectURL(files[0])
        this.restaurant.image = imgURL
      }
    },
    handleSubmit(e) {
      if (!this.restaurant.name) {
        Toast.fire({
          icon: 'warning',
          title: '請填寫餐廳名稱'
        })
        return
      } else if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: 'warning',
          title: '請選擇餐廳類別'
        })
        return
      }

      const form = e.target
      const formData = new FormData(form)
      this.$emit('click-submit', formData)
    }
  },
  created() {
    this.fetchCategories()
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant,

    }
  },
  watch: {
    initialRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  }
}
</script>
