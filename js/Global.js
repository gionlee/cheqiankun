// const API = 'http://39.105.111.19:3340'
// const API = 'http://vmxrr9.natappfree.cc'
// const API = 'http://vdy7hs.natappfree.cc' 
const API = 'http://192.168.1.8:3340' 
// 

// 客户信息
var loadUserInfo = {
    customer: {
        id: 1
    },
    user: {
        id: 1
    }
}
var setSelectData = []
if (sessionStorage.loadUserInfo) {
    loadUserInfo = JSON.parse(sessionStorage.loadUserInfo)
}

// 公共方法
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

// 获取当前日期
function getDays() {
    let years = new Date().getFullYear()
    let mon = new Date().getMonth() + 1
    let day = new Date().getDate()
    let str = `${years}-${mon < 10 ? '0' + mon : mon}-${day < 10 ? '0' + day : day}`
    return str
}

// 毫米转年月日、时分秒
function msToDate(msNum, type) { // type == 1 转换为年/月/日 时:分:秒
    // type == 2 转换为年/月/日
    var date = new Date(msNum);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    var day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    var hour = date.getHours();
    if (hour < 10) {
        hour = '0' + hour;
    }
    var minute = date.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }
    var second = date.getSeconds();
    if (second < 10) {
        second = '0' + second;
    }
    if (type == 1) {
        return year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
    } else if (type == 2) {
        return year + '/' + month + '/' + day;
    }
}
// 去除空格
function trimStr(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
// 获取当前月的最后一天
function getCurrentMonthLast(){
    var date=new Date();
    var currentMonth=date.getMonth();
    var nextMonth=++currentMonth;
    var nextMonthFirstDay=new Date(date.getFullYear(),nextMonth,1);
    var oneDay=1000*60*60*24;
    var lastTime = new Date(nextMonthFirstDay-oneDay);
    var month = parseInt(lastTime.getMonth()+1);
    var day = lastTime.getDate();
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    return date.getFullYear() + '-' + month + '-' + day ;
}

// 获取当前月的第一天
function getCurrentMonthFirst(){
    var date=new Date();
    var currentMonth=date.getMonth() + 1;
    
    if (currentMonth < 10) {
        currentMonth = '0' + currentMonth
    }
    return date.getFullYear() + '-' + currentMonth + '-01' ;
}
