//配置域名,域名只修改此处。
var DOMAIN = "cuixinxin.cn";
var WEBSITENAME = "Lodash"; //网站名称
var PAGECOUNT = "10"; //每页文章数目
var WECHAT = "微信号：Lecooe"; //客服联系方式,如 微信号：iamxjb 或 邮箱：iamxjb@sina.com

//是否启用小程序扫描二维码登录网站,  true 启用  false  不启用

const enableScanLogin = false;

//是否启用微慕视频号插件,  true 启用  false  不启用

const enableChannels = false;
// 上传图片的最大文件大小,单位是m,必须填整数,
// 同时必须修改php.ini文件 post_max_size 和 upload_max_filesize 具体修改请自行搜索
const uploadImageSize = 1;

//小程序原始id
const appghId = "gh_13602cebc3ac";
//微慕小程序端版本,请勿修改
const minapperVersion = 4.61;
const minapperSource = "free";

export default {
    getDomain: DOMAIN,
    getWebsiteName: WEBSITENAME,
    getPageCount: PAGECOUNT,
    getWecat: WECHAT,
    enableScanLogin,
    minapperVersion,
    minapperSource,
    enableChannels,
    appghId,
};
