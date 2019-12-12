let keyList = {}  // api 请求记录

function getKeyList() {
  return keyList
}

function addKey(key) {
  keyList[key] = true
}

function removeKey(key) {
  delete keyList[key]
}

function hitKey(key) {
  return keyList[key]
}

// 根据请求地址、参数组装成api请求的key
function getKey(data) {
  let key = 'Method:' + data.method + ',Url:' + data.url + ',Data:'
  try {
    key += JSON.stringify(data.data)
  } catch (e) {
    key += data.data
  }
  return key
}

module.exports = {
  addKey,
  removeKey,
  hitKey,
  getKey,
  getKeyList
}
