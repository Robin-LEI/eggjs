<template>
  <div class="addPage">
    <van-uploader
      class="uploader"
      :max-count="1"
      v-model="fileList"
      :after-read="afterRead"
    />
    <van-cell-group>
      <van-field v-model="article.title" label="文章标题" placeholder="文章标题" />
      <van-field v-model="article.summary" label="文章简介" placeholder="文章简介" />
      <van-field v-model="article.content" label="文章内容" placeholder="文章内容" type="textarea" autosize />
    </van-cell-group>
    <van-button class="add" type="primary" @click="addArticle">添加</van-button>
  </div>
</template>

<script>
import {
  Uploader,
  CellGroup,
  Field,
  Button
} from 'vant'
export default {
  components: {
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data () {
    return {
      fileList: [],
      article: {
        title: '',
        summary: '',
        content: ''
      }
    }
  },
  methods: {
    afterRead (file) {
      console.log(file)
    },
    addArticle () {
      // 准备数据
    }
  }
}
</script>

<style lang="scss" scoped>
.addPage {
  position: relative;
  // height: 100%;
  height: 100vh;
  .uploader {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 12px;
    margin-bottom: 8px;
  }
  .add {
    position: absolute;
    width: 100%;
    bottom: 55px;
  }
}
</style>
