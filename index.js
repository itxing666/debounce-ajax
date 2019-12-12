let requestKeyList = {}  // api 请求记录

function getKeyList() {
  return requestKeyList
}

function addKey(key) {
  requestKeyList[key] = true
}

function removeKey(key) {
  delete requestKeyList[key]
}

function hitKey(key) {
  return requestKeyList[key]
}

// 根据请求地址、参数组装成api请求的key
function getRequestKey(data) {
  let ajaxKey = 'Method:' + data.method + ',Url:' + data.url + ',Data:'
  try {
    ajaxKey += JSON.stringify(data.data)
  } catch (e) {
    ajaxKey += data.data
  }
  return ajaxKey
}

module.exports = {
  addKey,
  removeKey,
  hitKey,
  getRequestKey,
  getKeyList
}
