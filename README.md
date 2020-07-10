

# 有好货网上商城(微信小程序)

## 前言

声明:该小程序所有数据和信息仅作为学习使用,不涉及任何商业行为，若需转载请标明出处

技术栈:微信开发者工具+MINA(微信原生框架)+VsCode+SASS+TypeScript+VantWeapp(第三方UI库)+Promise+ES6、7+Eslint for TypeScript

## 功能描述

- #### 首页
  - 商品搜索栏:用户可以点击搜索进入搜索中心对需要的商品进行检索
  - 首页轮播图:用户可以看到最近的一些活动或信息的照片，并且能够通过点击的方式进入相应详情页
  - 推荐菜单,分类清单：用户可以通过点击此进入不同分类商品的列表页
  - 导航栏:用户通过此切换对应功能页面
    ![](/readmeImage/home.jpg)
  - 

- #### 分类页面

  - 搜索框:同上

  - 侧边导航栏:用户可以滑动左侧的导航栏选择不同的商品分类
  - 商品细分栏:会根据用户选中的侧边栏内容展示对应商品属性的细分种类
- #### 分类页面	
  - 主界面:
  
  - ![](/readmeImage/list.jpg)

  - 搜索:
  
   - ![](/readmeImage/search.jpg)

    

  - 下拉刷新和上拉加载更多:
  
  - ![](/readmeImage/refresh.jpg)
  	
  	
  	

  - ![](/readmeImage/loading.jpg)

- #### 详情页

  - 轮播图：用于展示商铺的相关图片
  
  - 详情:标注了商铺的各类详细信息
  
	- 评论:用于展示商铺的评论信息
  
	- 主界面:
   	- ![](/readmeImage/detail.jpg)
	
	  
	
	- 评论:
	- ![](/readmeImage/comments.jpg)
	
	  
	
	- 查看评论图片:
	- ![](/readmeImage/comments_image.jpg)
	

## 项目结构
### 前言 
  由于微信小程序只能支持js+wxss 所以经过转换后每一个ts和scss文件都会在同名文件夹下生成.js和.wxss,且在此先介绍项目模块中的公共结构
   - \*.ts:存放对应的逻辑页面 
   - \*.js:同名ts转换后生成的对应js逻辑页面
   - \*.scss:存放对应的样式列表页面 
   - \*.wxss:同名scss转换后生成的对应wxss页面
   - \*.wxml:存放对应页面的各类标签结构
### 一、根目录结构
- codes-snippets:存放为vscode+ts写的代码判断模板
- min...:项目代码页面
- typings：包含着各类*.d.ts文件，存放微信官方和项目自己定制的ts类型库，
- .eslinttrc.js,.eslintrc.js：存放eslint规范规则
- package.json,package-lock.json:存放项目的各种依赖信息
- tsconfig.json:存放项目ts的相关配置
### 二、小程序代码目录（在根目录/miniprogram下）
- assets:存放项目静态资源目录
- components：存放项目的各类组件
- components->:CartItem:购物车中每一个购物信息单元组件
- components->:GoodsCard:商品列表页面中每一个商品信息单元组件
- components->:SearchInput:首页及分类页面中搜索框组件
- pages:项目代码目录
- pages->cart:项目购物车页面
- pages->category:项目购物车页面
- pages->collect:项目商品收藏页面
- pages->goods_list:项目商品列表页面
- pages->goods_detail:项目商品详情页面
- pages->index:项目首页
- pages->login:项目用户登录页面
- pages->order:用户订单页面
- pages->pay:用户支付页面(由于个人账号无权开通所以未实现)
- pages->search:项目搜索中心页面
- pages->user:用户页面
- request->\*:存放封装的全局请求
- styles:存放公共样式
- styles->colors.scss 颜色库
- utils:存放项目所需的工具
- utils->wxSetting:封装的各类微信原生API
- app.scss:存放项目全局样式文件
- app.ts:存放项目逻辑文件
![](/readmeImage/object.jpg)

