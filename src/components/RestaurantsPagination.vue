<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 previousPage -->
      <li class="page-item">
        <router-link
          :class="['page-link', {disabled: currentPage === 1}]"
          aria-label="Previous"
          :to="{name: 'Restaurant', query: {page: previousPage, categoryId}}"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <li v-for="page in totalPage" :key="page" :class="['page-item', {active: page === currentPage}]">
        <router-link
          class="page-link"
          :to="{name: 'Restaurant', query: { page: page, categoryId}}"
        >
          {{page}}
        </router-link>
      </li>


      <!-- 後一頁 nextPage -->
      <li class="page-item">
        <router-link
          :class="['page-link', {disabled: currentPage === totalPage.length}]"
          aria-label="Next"
          :to="{name: 'Restaurant', query: { page: nextPage, categoryId}}"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "RestaurantsPaginaiton",
  props: {
    categoryId: {
      type: [Number, String],
      default: '',
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Array,
      required: true,
    },
    previousPage: {
      type: Number,
      required: true,
    },
    nextPage : {
      type: Number,
      required: true,
    }
  }
}
</script>
