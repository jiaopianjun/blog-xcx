module.exports = {
    isPhoneNumber: function(e) {
        return /0?(13|14|15|18|17)[0-9]{9}/.test(e) ? {
            result: !0,
            message: ""
        } : {
            result: !1,
            message: "请输入正确的手机号"
        };
    },
    isEmail: function(e) {
        return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(e) ? {
            result: !0,
            message: ""
        } : {
            result: !1,
            message: "请输入正确的邮箱"
        };
    },
    isIDCard: function(e) {
        return /\d{17}[\d|x]|\d{15}/.test(e) ? {
            result: !0,
            message: ""
        } : {
            result: !1,
            message: "请输入正确的身份证号"
        };
    },
    isIP: function(e) {
        return /(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)/.test(e) ? {
            result: !0,
            message: ""
        } : {
            result: !1,
            message: "请输入正确的IP"
        };
    }
};