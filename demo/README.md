# demo

# npm init egg --type=simple

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

# 文档
[文档地址](https://eggjs.org/zh-cn/intro/quickstart.html)

# Controller
1. 处理业务逻辑
2. 命名规则-开发规范

# 关闭csrf
```js
config.security = {
  csrf: {
    enable: false,
  },
};
```

[安全规范](https://eggjs.org/zh-cn/core/security.html#%E5%AE%89%E5%85%A8%E5%A8%81%E8%83%81csrf%E7%9A%84%E9%98%B2%E8%8C%83)

[模板渲染](https://eggjs.org/zh-cn/core/view.html#mobileAside)

[模板渲染-ejs](https://github.com/eggjs/egg-view-ejs)

[vant-ui](https://youzan.github.io/vant/#/zh-CN/intro)

