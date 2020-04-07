<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  components: {
    [Button.name]: Button
  }
}
</script>
