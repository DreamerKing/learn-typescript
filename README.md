# TypeScript
视频教程
https://www.bilibili.com/video/av38379328/?p=10

[![Build Status](https://travis-ci.org/DreamerKing/learn-typescript.svg?branch=master)](https://travis-ci.org/DreamerKing/learn-typescript)  

为什么需要TypeScript？   
TypeScript较JavaScript有什么不同?

特点：
+ 兼容JavaScript
+ 拥有更多规则和类型限制，使编写的代码有更高的预测性和可控性，易于维护和测试
+ 支持模块、命名空间和面向对象，更容易组成代码，开发大型复杂应用程序
+ 支持静态语法检查

安装Typescript
```bash
sduo npm i typescript -g
```

生成配置文件
```bash
tsc --init
```
编译标记
+ --strictNullChecks 严格空检查模式 指示null和undefined只能赋值给void和它们各自。

基本数据类型
+ boolean
+ number
+ string
+ array
+ tuple
+ enum
+ any
+ symbol
+ undefined
+ null 默认情况下null和undefined是所有类型的子类型。
+ void void类型像是与any类型相反，它表示没有任何类型。只能接收undefined和null的赋值。
+ never never类型表示的是那些永不存在的值的类型。 never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

+ Object


变量声明
+ var
+ let 
+ const 

接口声明
interface
可选属性 ?
只读属性 readonly 
ReadonlyArray 只读数组
可索引的类型 
TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。
```ts
interface StringArray {
  [index: number]: string;
}
```

类型注解 记录变量或函数约束的简便方法，以供语法静态分析。

接口

类

函数类型接口

泛型 支持多种数据类型 解决类、接口和方法的复用性


+ Types
  + Implicit Types 隐式类型
  + Explicit Types 显式类型
+ Functions
+ Interfaces
+ Classes
+ Interface and classes together
+ Enums
+ Generics 泛型

# 声明空间
+ 类型声明空间 类型注解
  
  ```ts
  interface 
  type
  class
  ```
+ 变量声明空间
  
  ```ts
  const 
  var 
  let
  class
  ```

# 模块
+ 全局模块
+ 文件模块  
  文件中包含`export`或`import`会创建本地作用域。
  配置文件中的`module`选项可配置模块输出类型。 

  模块路径
  + 相对路径
  + 动态查找
    1. 文件
    2. 文件夹下的index.ts
    3. 文件夹下的package.json中`type`或`main`选项指定的文件
 
 # 命名空间 
 使用`namespace`来管理分组

 动态导入表达式  异步加载模块
 + import()
 + require.ensure()

在Node中使用TypeScript
```sh
npm init -y
npm install typescript -D
npm install @types/node -D
npx tsc --init
npm install ts-node -D
npm install nodemon -D
nodemon --watch 'src/**/*.ts' --exec ts-node 'src/index.ts'
```

# 依赖管理
+ devDependencies
+ peerDependencies 外部依赖 装包时不会自动安装
+ dependencies 

<hr/>   

# 类型系统  
+ 可选的 js可以认为就是ts
+ 不阻止运行 即使类型错误也不妨碍运行