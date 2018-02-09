const {login,getHeaders,get} = require('./report');
login({email:'jon521@yahoo.com',
        pass:'SamersameR888'
},function (c) {
    var fs = require('fs');
    fs.writeFile('user.json',JSON.stringify({email:'jon521@yahoo.com',
    pass:'SamersameR888',
        cookie:c
    }),null,4);
});

const request = require('request');
request.get('https://m.facebook.com//qp/action/redirect/?qp_id=1580094002061587&qp_nux_id=3382&qp_refresh_on_redirect=0&qp_action=secondary&qp_action_url=market%3A%2F%2Fdetails%3Fid%3Dcom.facebook.mlite%26referrer%3Dutm_source%253Dapps.facebook.com%2526utm_campaign%253DeyJjb250ZXh0X3N1cmZhY2VfaWQiOjMzODIsInFwX2V2ZW50IjoicHJpIiwicXBfZXZlbnRfdGltZSI6MTUxODE5NjkyOCwicXBfaWQiOjE1ODAwOTQwMDIwNjE1ODcsInV1aWQiOiJkNDc3MmYwMC0wNGM1LTZmNjEtZTNjZS1iZjM0NzNhYTU3NjYifQ%25253D%25253D%2526utm_content%253D%25257B%252522app%252522%25253A200424423651082%25252C%252522t%252522%25253A1518196929%25257D&qp_mac=AZKU1-rdWbzQoWw0&qp_instance_log_data%5Buuid%5D=d4772f00-04c5-6f61-e3ce-bf3473aa5766',
    function (err,res) {
        console.log(err);
    });
