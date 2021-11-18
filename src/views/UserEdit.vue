<template>
  <div class="container py-5">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img 
        :src="userProfile.image" 
        alt="user-image"
        width= "200"
        height="200"
        class="d-block thumbnail-img"
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
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>

const dummyData = {
  'profile': {
    'id': 1,
    'name': 'root',
    'email': 'root@example.com',
    'password': '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
    'isAdmin': true,
    'image': 'https://i.imgur.com/58ImzMM.png',
    'createdAt': '2019-07-30T16:24:54.983Z',
    'updatedAt': '2019-08-01T10:33:51.095Z',
  }
}
export default {
  data() {
    return {
      userProfile: {
      id: -1,
      name: '',
      email: '',
      password: '',
      isAdmin: '',
      image: '',
      createdAt: '',
      updatedAt: '',
      }
    }
  },
  methods: {
    fetchUser(userId) {
      this.userProfile = dummyData.profile
    },
    handleUpload(e) {
      const {files} = e.target
      
      if(!files.length) {
        return
      } else {
        const imgURL = window.URL.createObjectURL(files[0])
        this.userProfile.image = imgURL
      }
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      for(let [name, value] of formData.entries()) {
        console.log(name, ":", value)
      }
    },
  },
  created() {
    const {id} = this.$route.params
    this.fetchUser(id)
  }
}
</script>
