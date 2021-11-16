<template>
  <div id="restaurant-forum">
    <Navbar />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>


<style>
  main {
    padding-top: 40px;
  }

</style>
