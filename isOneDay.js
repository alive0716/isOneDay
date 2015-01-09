/**
     * 判断是否是一天内的操作
     * @param cookie(string) -- 获取的cookie名称
     * @returns {boolean}
     */
    function appCookieDate(cookie){
        var nowDate = new Date();
        var now = nowDate.getFullYear() + "-" + (nowDate.getMonth()+1) + "-" + nowDate.getDate();
        var last = J.getCookie(cookie);
        if (!last) {
            return true;
        } else {
            if (now == last) {
                return false;
            } else {
                return true;
            }
        }
    }

    /**url参数解析**/
    function parseQueryString (url){
        var reg_url =/^[^\?]+\?([\w\W]+)$/,
            reg_para=/([^&=]+)=([\w\W]*?)(&|$)/g, //g is very important
            arr_url = reg_url.exec( url ),
            ret        = {};
        if( arr_url && arr_url[1] ){
            var str_para = arr_url[1],result;
            while((result = reg_para.exec(str_para)) != null){
                try{
                    ret[result[1]] = decodeURI(result[2]);
                }catch(e){
                }
            }
        }
        return ret;
    }
 