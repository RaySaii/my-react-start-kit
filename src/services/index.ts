const Get = (url) => {
  return function () {
    return fetch(url, {
      method: 'GET',
    }).then(res => res.json()).then(res => {
      console.log('response', res)
      return res
    })
  }
}
const services = {
  fetchPic: Get('http://gank.io/api/data/福利/10/1')
}
export default services
