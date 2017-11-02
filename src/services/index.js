var Get = function (url) {
    return function () {
        return fetch(url, {
            method: 'GET',
        }).then(function (res) { return res.json(); }).then(function (res) {
            console.log('response', res);
            return res;
        });
    };
};
var services = {
    fetchPic: Get('http://gank.io/api/data/福利/10/1')
};
export default services;
//# sourceMappingURL=index.js.map