const Service = require('egg').Service;

class ArticleService extends Service {
  // 文章发布
  async publish(params) {
    const {app} = this;
    try {
      // 数据入库
      // 传入数据的类型与数据库内的数据类型不匹配
      let result = await app.mysql.insert('article', params);
      return result;
    } catch (error) {
      console.log(error);
      return;
    }
  }

  // 获取文章列表
  async lists() {
    const {app} = this;
    try {
      const result = await app.mysql.select('article');
      return result;
    } catch (error) {
      console.log(error);
      return;
    }
  }

  // 获取文章详情
  async details(id) {
    const {app} = this;
    try {
      const result = await app.mysql.get('article', {id});
      return result;
    } catch (error) {
      console.log(error);
      return;
    }
  }
}

module.exports = ArticleService
