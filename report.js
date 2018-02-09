
const request = require('request');
var Cookie = require('request-cookies').Cookie;
var Cookies;





function get(url,call) {
    var headers = getHeaders(url);
    request.get(url,{
        headers:headers
    },call);
}


function login(ob,call) {
    console.log('login ...');
    if (ob.cookie)
    {
        Cookies = ob.cookie;
        return call(ob.cookie);
    }
    var email = ob.email,
        pass = ob.pass;
    var url = 'https://m.facebook.com/login';
    var headers = getHeaders(url);
    var form = {
        email:email,
        pass:pass
    };
    request.post({
            url:url,
            headers:headers,
            form:form
        },
        function (err,res,body) {
            var cookies = res.headers['set-cookie'];
            var txt = '';
            for (var i in cookies) {
                var cookie = new Cookie(cookies[i]);
                txt += cookie.key +'='+cookie.value+'; ';
            }
            if (txt.indexOf('xs') == -1) txt = null;
            Cookies = txt;
            call(txt);
        });
}

function getHeaders(url) {
    var headers = {

        'Host': url.replace(/(https|http):\/\//,'').split('/')[0],
        'Connection': 'keep-alive',
        'Origin': url.match(/((https|http):\/\/[a-zA-Z0-9._-]+)/)[0] ,
        'User-Agent': 'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Accept': '*/*',
        'Referer': url,
        'Accept-Language': 'en;q=0.9,en-US;q=0.8',
    };
    if (Cookies) headers.Cookie = Cookies;

    return headers;
}

module.exports = {
    getHeaders:getHeaders,
    get:get,
    login:login,
};