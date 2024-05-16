
var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var wxApi = require('../../utils/wxApi.js')
var wxRequest = require('../../utils/wxRequest.js')
const Adapter = require('../../utils/adapter.js')
import config from '../../utils/config.js'
var pageCount = config.getPageCount;
var webSiteName= config.getWebsiteName;
var domain =config.getDomain
Page({
    data: {
        title: '最新评论列表',
        showerror: "none",
        showallDisplay: "block",
        readLogs: [],
        webSiteName:webSiteName,
        domain:domain 

    },
    onShareAppMessage: function () {
        var title = "分享" + config.getWebsiteName + "的最新评论";
        var path = "pages/comments/comments";
        return {
            title: title,
            path: path,
            appInfo:{
                'appId':config.appghId
              },
            success: function (res) {
                // 转发成功
            },
            fail: function (res) {
                // 转发失败
            }
        }
    },
    // 自定义分享朋友圈
    onShareTimeline: function () {
        return {
            title: '“' + config.getWebsiteName + '”最新评论',
            path: 'pages/comments/comments' 
        }
    },
    reload: function (e) {
        var self = this;
        this.setData({
            readLogs: []
        });
        self.setData({
            showallDisplay: "none",
            showerror: "none",

        });
        self.fetchCommentsData();
    },
    onLoad: function (options) {
        var self = this;
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline'],
            success: function (e) {
                //console.log(e);
            }
        })
        Adapter.setInterstitialAd("enable_comments_interstitial_ad");
        self.fetchCommentsData();
    },
    //获取文章列表数据
    fetchCommentsData: function () {
        var self = this;
        wx.showLoading({
            title: '正在加载',
            mask: true
        });
        var getNewComments = wxRequest.getRequest(Api.getNewComments());
        getNewComments.then(response => {
                if (response.statusCode == 200) {
                    this.setData({
                        readLogs: self.data.readLogs.concat(response.data.map(function (item) {
                            item[0] = item.post;
                            //  item[1] = util.removeHTML(item.content.rendered + '(' + item.author_name + ')');
                            item[1] = util.removeHTML(item.content.rendered);
                            item[2] = util.cutstr(item.date, 10, 1);
                            return item;
                        }))
                    });
                    self.setData({

                        showallDisplay: "block"
                    });

                } else {
                    console.log(response);
                    this.setData({
                        showerror: 'block'
                    });

                }
            }).catch(function () {
                self.setData({
                    showerror: "block",
                    floatDisplay: "none"
                });

            })
            .finally(function () {
                wx.hideLoading();
            })
    },
    // 跳转至查看文章详情
    redictDetail: function (e) {
        // console.log('查看文章');
        var id = e.currentTarget.id,
            url = '../detail/detail?id=' + id;
        wx.navigateTo({
            url: url
        })
    },
    onPullDownRefresh: function () {
        var self = this;
        this.setData({
            readLogs: []
        });
        self.setData({
            showallDisplay: "none",
            showerror: "none",

        });
        self.fetchCommentsData();
        //消除下刷新出现空白矩形的问题。
        wx.stopPullDownRefresh();

    }
})