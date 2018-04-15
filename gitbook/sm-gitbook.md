# gitbook使用

## 安装

```
npm install -g gitbook
```

## 使用

```
gitbook init + 你要创建书的名称  #初始化你要写的书籍目录 
gitbook serve  #编译你已经写的书籍
```

## gitbook init + projectName

```
book/
├── README.md #关于此本书的简介
└── SUMMARY.md #书籍的目录结构

#书籍的架构你可以自己创建成如下：
├── README.md
├── SUMMARY.md
├── chapter1
│   ├── README.md
│   ├── section1.1.md
│   └── section1.2.md
└── chapter2
    └── README.md
```

## gitbook serve

```
gitbook serve #编译书籍成html
# 在本地localhost:4000预览

gitbook serve ./ --log=debug --debug #测试
```

## 配置

修改`book.json`：gitbook 在编译书籍的时候会读取书籍源码顶层目录中的 `book.js` 或者 `book.json`。

- 修改书籍的名称
- 修改显示的效果

```
{
  "author":"AdleyTales",
  "title" : "M-gitbook",
  "description" : "我的gitbook生成的书",
  "language":"zh-hans",
  "plugins": [
    "github",
    "splitter"
  ],
  "pluginsConfig": {
      "github": {
          "url": "https://github.com/AdleyTales"
      }
  }
}
```

## 安装插件

```
gitbook install #首先在book.json的plugins写上要用的插件
```

## 更新gitbook

```
#首先卸载
npm uninstall -g gitbook

#安装
npm install -g gitbook-cli

#查看当前版本
gitbook -V
```

