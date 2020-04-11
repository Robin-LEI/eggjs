'use strict';

const Controller = require('egg').Controller;
const moment = require('moment')

class ArticleController extends Controller {
  // 发布文章
  async create() {
    const { ctx } = this;
    let params = {
      ...ctx.request.body,
      createTime: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    let result = await ctx.service.article.publish(params);
    if (result) {
      ctx.body = {
        msg: '发布成功',
        status: 200
      }
    } else {
      ctx.body = {
        msg: '发布文章失败',
        status: 500
      }
    }
  }

  // 获取文章列表
  async lists() {
    const {ctx} = this;
    let result = await ctx.service.article.lists()
    if (result) {
      ctx.body = {
        code: 200,
        data: result
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '数据请求失败'
      }
    }
  }

  // 获取文章详情
  async detail() {
    const {ctx} = this;
    let result = await ctx.service.article.details(ctx.params.id);
    if (result) {
      ctx.body = {
        code: 200,
        data: result
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '接口请求失败'
      }
    }
  }
}

module.exports = ArticleController
