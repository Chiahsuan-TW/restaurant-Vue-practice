<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div v-for="comment in comments" :key="comment.id" class="card-body">
      <div>
        <h4>
          <router-link :to="{name: 'restaurant', params: {id: comment.Restaurant.id}}">
            {{comment.Restaurant.name}}
          </router-link>
        </h4>
        <p>{{comment.text}}</p>by
        <a href="#">
          {{comment.User.name}}
        </a>
        {{comment.User.createdAt | fromNow}}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import {fromNowFilter} from "./../utils/mixin"

export default {
  name: "NewestComments",
  props: {
    comments: {
      type: Array,
      required: true,
    }
  },
  mixins: [fromNowFilter]
}
</script>


