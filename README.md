# vuw

主要用于 vue-webapp

## 组件规划

### 通用组件

- 公共参数

### 业务组件

- 与业务高度耦合，慎重使用

## 组件创建

- 命名规范 vw-xxx-xxx
- 只可通过 plop 创建，严禁自己创建

## 组件发布

- 查看当前用户 npm whoami
- 查看当前镜像 npm config get resgistry
- 发布 yarn lerna

## UI 层级规划

- content 内容 z-index： 0
- navigation 导航 z-index 1000 ～ 2000
- mast 遮罩 z-index 2000 ~ 3000
- popout 弹出层 z-index 4000 以上

## 备注

- 需要通过 额外的插件将 px 转换为 rem 用于实现等比还原 UI 效果【lib-flexible、px2rem-loader】
