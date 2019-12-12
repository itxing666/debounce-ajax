# debounce-ajax

#### 防重复提交请求工具

## 开发使用说明

```bash
# 项目安装
npm install debounce-ajax -S

# 引入
import debounceAjax from 'debounce-ajax'

# 请求方法中运用
let params = {method: 'post', url, data}
function request(params) {
  let ajaxKey = debounceAjax.getKey(params)
  if (debounceAjax.hitKey(ajaxKey)) return
  debounceAjax.addKey(ajaxKey)
  
  ...请求中
  
  请求完成
  
  debounceAjax.removeKey(ajaxKey)  
}
```

## 方法总结

getKey:  根据请求信息生成key

hitKey:  检查该请求是否正在进行 true：正在进行  false: 未进行

addKey: 将生成的key添加到keyList

getKeyList: 获取所有正在请求的key列表