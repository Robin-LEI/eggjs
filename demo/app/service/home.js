const Service = require('egg').Service;

class HomeService extends Service {
  async index() {
    return [
      {
        id: Math.random()*10000,
        name: '测试'
      },
      {
        id: Math.random()*10000,
        name: '测试2'
      }
    ]
  }
}

module.exports = HomeService