# umi插件qiankun

## 安装依赖

```bash
cd main && yarn

cd ../app1 && yarn

cd ../app2 && yarn
```

## 启动

```bash
npm run start
```
主应用

open http://localhost:8000


main为基座应用

app1 app2为子应用


## 打包

```bash
npm run build
```

> 此部署方案为应用单独部署 主应用需nginx代理 具体见nginx.conf 微应用则直接使用即可
