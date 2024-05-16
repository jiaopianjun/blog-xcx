
import config from '../../utils/config.js'
var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var webSiteName= config.getWebsiteName;
var domain =config.getDomain

Page({
  data: {
    title: '页面内容',
    pageData: {},
    pagesList: {},
    hidden: false,
  
    webSiteName:webSiteName,
    domain:domain
  },
  onLoad: function (options) {
    this.fetchData(options.id);
    wx.showShareMenu({
      withShareTicket:true,
      menus:['shareAppMessage','shareTimeline'],
      success:function(e)
      {
        //console.log(e);
      }
    })
     
  },
  onShareTimeline: function() {
    let imageUrl = this.data.pageData.post_full_image
    if(imageUrl=='')
    {
      imageUrl=this.data.pageData.postImageUrl
    }
    return {
      title: this.data.pageData.title.rendered,
      query: {
        id: this.data.pageData.id
      },
      imageUrl
    }
  },
  
  fetchData: function (id) {
    var self = this;
    self.setData({
      hidden: false
    });
    wx.request({
      url: Api.getPageByID(id, { mdrender: false }),
      success: function (response) {
        console.log(response);
        self.setData({
          pageData: response.data,         
        });
        setTimeout(function () {
          self.setData({
            hidden: true
          });
        }, 300);
      }
    });
  },
  fetchPagesData: function () {
    var self = this;
    wx.request({
      url: Api.getPages(),
      success: function (response) {
        self.setData({
          pagesList: response.data
        });
        setTimeout(function () {
          self.setData({
            hidden: true
          });
        }, 300);
      }
    });
  }
})
