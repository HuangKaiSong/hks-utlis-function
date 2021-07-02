---
title: hks-function
date: 2021-06-28
tags:
- vue
- npm
isTimeLine: true
sidebar: true 
sticky: 1 
subSidebar: true
---

:::tip
一个简单好用，想给 🌟🌟🌟 的库
:::right
[GitHub](https://github.com/HuangKaiSong/hks-utlis-function)
:::

## 开发指南

### 安装

使用 `cli` 安装:

```shell
yarn add hks-function

# or use npm

npm i hks-function
```

### 引入 `hks-function`

在 主入口文件 `main.js` 中

```vue
import Vue from 'vue'
import App from './App'
import hks from 'hks-function'

Vue.use(hks)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## 使用方法

### 节流

:::tip
#### 何谓节流和防抖？

##### 节流
节流的意思是，规定时间内，只触发一次。比如我们设定500ms，在这个时间内，无论点击按钮多少次，它都只会触发一次。具体场景可以是抢购时候，由于有无数人 快速点击按钮，如果每次点击都发送请求，就会给服务器造成巨大的压力，但是我们进行节流后，就会大大减少请求的次数。

##### 防抖
防抖的意思是，在连续的操作中，无论进行了多长时间，只有某一次的操作后在指定的时间内没有再操作，这一次才被判定有效。具体场景可以搜索框输入关键字过程中实时 请求服务器匹配搜索结果，如果不进行处理，那么就是输入框内容一直变化，导致一直发送请求。如果进行防抖处理，结果就是当我们输入内容完成后，一定时间(比如500ms)没有再 输入内容，这时再触发请求。

结合以上两种情况，回到我们最实际的场景，比如防止表单提交按钮被多次触发，我们应该选择使用节流而不是防抖方案。
:::

```js
// 规定时间内，只触发一次，可以通过设置immediate来决定触发的时机在这个时间的开始，还是结束的时候执行。

throttle(func, wait = 500, immediate = true)
    @param func Function 触发回调执行的函数
    @param wait Number 时间间隔，单位ms
    @parms immediate Bool 在开始还是结束处触发
```

```vue
<template>
    <div class="">
		<!-- 此处用法为在模板中使用，无需写this，直接$hks.throttle()即可 -->
    	<div class="throttle" @click="$hks.throttle(btnAClick, 500)">
    		露从今夜白
    	</div>
    	<div class="throttle" @click="btnBClick">
    		月是故乡明
    	</div>
    </div>
</template>
<script>
  export default {
    methods: {
        btnAClick() {
            console.log('btnClick');
        },
        btnBClick() {
            // 此处用法为在js中调用，需要写this.$hks.throttle()
            this.$hks.throttle(this.toNext, 500)
        },
        toNext() {
            console.log('btnBClick');
        }
    }
}
</script>
```

### 防抖

```js
在连续的操作中，无论进行了多长时间，只有某一次的操作后在指定的时间内没有再操作，这一次才被判定有效
    debounce(func, wait = 500, immediate = false)
    
    @param func <Function> 触发回调执行的函数
    @param wait <Number> 时间间隔，单位ms
    @parms immediate <Bool> 在开始还是结束处触发
```

```vue
<template>
    <div class="">
		<!-- 此处用法为在模板中使用，无需写this，直接$hks.debounce()即可 -->
    	<div class="throttle" @click="$hks.debounce(btnAClick, 500)">
    		露从今夜白
    	</div>
    	<div class="throttle" @click="btnBClick">
    		月是故乡明
    	</div>
    </div>
</template>
<script>
  export default {
    methods: {
        btnAClick() {
            console.log('btnClick');
        },
        btnBClick() {
            // 此处用法为在js中调用，需要写this.$hks.debounce()
            this.$hks.debounce(this.toNext, 500)
        },
        toNext() {
            console.log('btnBClick');
        }
    }
}
</script>
```

### 时间格式化

```vue
<template>
  <view>
    <view>
      时间为：{{$hks.timeFormat(timestamp, 'yyyy年mm月dd日')}}
    </view>
    <view>
      时间为：{{time}}
    </view>
  </view>
</template>

<script>
export default{
  data() {
    return {
      time: null,
      timestamp: '1581170184'
    }
  },
  mounted() {
    this.time = this.$hks.timeFormat(this.timestamp, 'yyyy-mm-dd');
  }
}
</script>
```

### 多久之前

```vue
<template>
  <view>
    <view>
      时间为：{{$hks.timeFrom(timestamp, 'yyyy年mm月dd日')}}
    </view>
    <view>
      时间为：{{time}}
    </view>
  </view>
</template>

<script>
export default{
  data() {
    return {
      time: null,
      timestamp: '1581170184'
    }
  },
  mounted() {
    this.time = this.$hks.timeFrom(this.timestamp, 'yyyy-mm-dd');
  }
}
</script>
```

### 数组去重

```js
  let arr1 = [1,2,3,1,23,123,1]
  console.log(this.$hks.uniq(arr1)) // [1, 2, 3, 23, 123]
```

### 数组分组

```js
    let arr1 = [
      {id: 2, group: 'admin', name: 'xxx'},
      {id: 3, group: 'web', name: 'xxx'},
      {id: 4, group: 'admin', name: 'xxx'},
    ]
    console.log(this.$hks.group(arr1, 'group')) // {admin: Array(2), web: Array(1)}
```


### 将多维数组转化为一维

```js
    let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
    console.log(this.$hks.flatMap(arr)) // [0, 1, 2, 3, 4, 5, 6, 7]
```

### 对象里的属性求和

```js
    let arr = [
      {
        subject: 'math',
        score: 10
      },
      {
        subject: 'chinese',
        score: 20
      },
      {
        subject: 'english',
        score: 30
      }
    ];
    console.log(this.$hks.objSum(arr, 'score')) // 60
```
