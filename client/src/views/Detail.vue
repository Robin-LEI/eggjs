<template>
  <div class="detailPage">
    <div class="header">
      <h5>{{detail.title}}</h5>
      <van-image
        round
        width="4rem"
        height="4rem"
        :src="detail.img">
      </van-image>
    </div>
    <van-divider />
    <span class="summary">{{detail.summary}}</span>
    <van-divider />
    <p class="content">{{detail.content}}</p>
  </div>
</template>

<script>
import {
  Divider,
  Image
} from 'vant'
export default {
  name: 'Detail',
  components: {
    [Divider.name]: Divider,
    [Image.name]: Image
  },
  data () {
    return {
      detail: {
        title: '思维风暴,思维风暴,思维风暴,思维风暴,思维风暴',
        summary: '超级思维能力提升宝典',
        content: '让思维更敏锐，让大脑更聪明，让人生更成功,让思维更敏锐，让大脑更聪明，让人生更成功,让思维更敏锐，让大脑更聪明，让人生更成功,让思维更敏锐，让大脑更聪明，让人生更成功',
        img: 'https://img.yzcdn.cn/vant/cat.jpeg'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.detailPage {
  padding: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    h5 {
      flex: 1;
    }
  }
  .summary {
    color: #999;
    font-size: 12px;
  }
  .content {
    color: #333;
    font-size: 14px;
    text-indent: 2em;
  }
}
</style>
