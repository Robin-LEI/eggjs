'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.service.home.index();
    // ctx.body = 'hi test, egg' + JSON.stringify(result);
    await ctx.render('index.html', {
      address: {
        location: '上海'
      },
      list: result
    })
  }
}

module.exports = HomeController;
