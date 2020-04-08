<template>
  <div class="homePage">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      >
      <van-card
        v-for="item in list"
        :key="item.id"
        :desc="item.summary"
        :title="item.title"
        :thumb="item.img"
      >
        <template #tags>
          <p>{{item.content}}</p>
        </template>
      </van-card>
    </van-list>
  </div>
</template>

<script>
import {
  List,
  Image,
  Card
} from 'vant'
export default {
  name: 'Home',
  components: {
    [List.name]: List,
    [Image.name]: Image,
    [Card.name]: Card
  },
  data () {
    return {
      loading: false,
      finished: false,
      list: [
        {
          id: Math.floor(Math.random() * Math.floor(100000000)),
          title: '思维风暴',
          summary: '超级思维能力提升宝典',
          content: '让思维更敏锐，让大脑更聪明，让人生更成功',
          img: 'https://img.yzcdn.cn/vant/cat.jpeg'
        },
        {
          id: Math.floor(Math.random() * Math.floor(100000000)),
          title: '思维风暴',
          summary: '超级思维能力提升宝典',
          content: '让思维更敏锐，让大脑更聪明，让人生更成功',
          img: 'https://img.yzcdn.cn/vant/cat.jpeg'
        }
      ]
    }
  },
  methods: {
    onLoad () {
      this.loading = false
    }
  }
}
</script>
<style lang="scss" scoped>
.homePage {
  .wrapper {
    display: flex;
  }
}
</style>
