<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid"

export default {
  name: "CreateComment",
  props: {
    restaurantId: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      text: ""
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.text)

      this.$emit('handle-submit', {
        id: uuidv4(),
        text: this.text,
        restaurantId: this.restaurantId
      })

      this.text = ""
    }
  }
}
</script>
