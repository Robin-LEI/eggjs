'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "这是product页面";
  }

  async detail() {
    const { ctx } = this;
    ctx.body = `这是detail页面-${ctx.params.id}`;
  }

  async detail2() {
    const { ctx } = this;
    ctx.body = `[这是detail页面2]-${ctx.query.id}-${ctx.query.name}`;
  }

  async create() {
    const { ctx } = this;
    const { name, id } = ctx.request.body
    ctx.body = {
      id,
      name
    }
  }
}

module.exports = ProductController;
