/**
 * Created by luohao on 2017/5/26.
 */
const request = require("request");
const queryString = require("querystring");
const uri = "https://suggest.taobao.com/sug";

class transfer {
    constructor(query) {
        this.query = query;
    }

    get() {
        let queryStr = queryString.stringify(this.query, null, null, { encodeURIComponent: function(a){
            return encodeURIComponent(a);
        }});
        request(uri + '?' + queryStr, (error, response, body) => {
            log.info('body:', body);
            log.info('body:', ctx.request.rawBody);
            resolve(body);
        });
    }
}