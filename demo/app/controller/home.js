'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.service.home.index();
    console.log(result)
    ctx.body = 'hi test, egg' + JSON.stringify(result);
  }
}

module.exports = HomeController;
