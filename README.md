# hks-function

-----

一个基于 `vue` 的封装函数

### 安装

使用 npm:

```shell
$ num install hks-function
$ npm i hks-function
```

使用 yarn:

```shell
$ num add hks-function
```

### 用法
在 `main.js` 中

```js
import Vue from 'vue'
import App from './App'
import hksFunction from 'hks-function'

Vue.use(hksFunction)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
```

### 使用示例

1. 节流

```
规定时间内，只触发一次，可以通过设置immediate来决定触发的时机在这个时间的开始，还是结束的时候执行。

throttle(func, wait = 500, immediate = true)
@param func <Function> 触发回调执行的函数
@param wait <Number> 时间间隔，单位ms
@parms immediate <Bool> 在开始还是结束处触发
```

```jsx
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

2. 防抖

```
在连续的操作中，无论进行了多长时间，只有某一次的操作后在指定的时间内没有再操作，这一次才被判定有效
debounce(func, wait = 500, immediate = false)

@param func <Function> 触发回调执行的函数
@param wait <Number> 时间间隔，单位ms
@parms immediate <Bool> 在开始还是结束处触发
```

```jsx
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

3. 时间格式化

```js
timeFormat(timestamp, format = "yyyy-mm-dd")
@parms timestamp <String> 任何合法的时间格式、秒或毫秒的时间戳
@pparm <String> 时间格式，可选。默认为yyyy-mm-dd
```

4. 多久之前

```js
timeFrom(time, format = String | false)
@param timestamp <String> 时间戳
@param format <String / false> 时间格式，默认为yyyy-mm-dd，年为"yyyy"，月为"mm"，日为"dd"，时为"hh"，分为"MM"，秒为"ss"，

```

```jsx
<template>
	<div>
		<div>
			时间为：{{$hks.timeFrom(new Date().getTime(), 'yyyy年mm月dd日')}}
		</div>
	</div>
</template>
```