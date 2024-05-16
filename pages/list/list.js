
var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');

var wxApi = require('../../utils/wxApi.js')
const Adapter = require('../../utils/adapter.js')
var wxRequest = require('../../utils/wxRequest.js')

import config from '../../utils/config.js'
var pageCount = config.getPageCount;
var webSiteName = config.getWebsiteName;
var domain = config.getDomain

Page({
  data: {
    title: '文章列表',
    postsList: {},
    pagesList: {},
    categoriesList: {},
    postsShowSwiperList: {},
    isLastPage: false,
    page: 1,
    search: '',
    categories: 0,
    categoriesName: '',
    categoriesImage: "",
    showerror: "none",
    isCategoryPage: "none",
    isSearchPage: "none",
    showallDisplay: "block",
    displaySwiper: "block",
    floatDisplay: "none",
    searchKey: "",
    webSiteName: webSiteName,
    domain: domain,
    listAdsuccess: true,
    isLoading: false
  },
  formSubmit: function (e) {
    var url = '../list/list'
    if (e.detail.value.input != '') {
      url = url + '?search=' + e.detail.value.input;
    }
    wx.navigateTo({
      url: url
    })
  },
  onShareAppMessage: function () {
    var title = "分享“" + webSiteName + "”";
    var path = ""
    if (this.data.categories && this.data.categories != 0) {
      title += "的专题：" + this.data.categoriesList.name;
      path = 'pages/list/list?categoryID=' + this.data.categoriesList.id;

    } else {
      title += "的搜索内容：" + this.data.searchKey;
      path = 'pages/list/list?search=' + this.data.searchKey;
    }
    return {
      title: title,
      path: path,
      appInfo: {
        'appId': config.appghId
      },
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onShareTimeline: function () {

    var path = ""
    var query = {};
    var title = "";
    if (this.data.categories && this.data.categories != 0) {
      title += this.data.categoriesList.name + "-" + this.data.categoriesList.description;
      query = {
        categoryID: this.data.categoriesList.id
      };

    } else {
      title += webSiteName + "的搜索内容：" + this.data.searchKey;
      query = {
        search: this.data.searchKey
      };
    }

    return {
      title: title,
      path: 'pages/list/list',
      query: query,
      imageUrl: this.data.categoriesImage

    }
  },
  onReachBottom: function () {
    var self = this;
    if (!self.data.isLastPage) {
      self.setData({
        page: self.data.page + 1
      });
      console.log('当前页' + self.data.page);
      this.fetchPostsData(self.data);
    } else {
      console.log('最后一页');
    }

  },
  reload: function (e) {
    var self = this;
    if (self.data.categories && self.data.categories != 0) {

      self.setData({
        isCategoryPage: "block",
        showallDisplay: "none",
        showerror: "none",

      });
      self.fetchCategoriesData(self.data.categories);
    }
    if (self.data.search && self.data.search != '') {
      self.setData({
        isSearchPage: "block",
        showallDisplay: "none",
        showerror: "none",
        searchKey: self.data.search
      })
    }
    self.fetchPostsData(self.data);
  },
  //加载分页
  loadMore: function (e) {
    var self = this;
    if (!self.data.isLastPage) {
      self.setData({
        page: self.data.page + 1
      });
      console.log('当前页' + self.data.page);
      this.fetchPostsData(self.data);
    } else {
      wx.showToast({
        title: '没有更多内容',
        mask: false,
        duration: 1000
      });
    }
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
    // 设置插屏广告
    Adapter.setInterstitialAd("enable_list_interstitial_ad");
    if (options.categoryID && options.categoryID != 0) {
      self.setData({
        categories: options.categoryID,
        isCategoryPage: "block"

      });
      self.fetchCategoriesData(options.categoryID);
    }
    if (options.search && options.search != '') {
      wx.setNavigationBarTitle({
        title: "搜索"
      });
      self.setData({
        search: options.search,
        isSearchPage: "block",
        searchKey: options.search
      })

      this.fetchPostsData(self.data);


    }
  },
  //获取文章列表数据
  fetchPostsData: function (data) {
    var self = this;
    if (!data) data = {};
    if (!data.page) data.page = 1;
    if (!data.categories) data.categories = 0;
    if (!data.search) data.search = '';
    if (data.page === 1) {
      self.setData({
        postsList: []
      });
    };
    self.setData({
      isLoading: true
    })
    var getPostsRequest = wxRequest.getRequest(Api.getPosts(data));
    getPostsRequest.then(response => {
        if (response.statusCode === 200) {
          if (response.data.length < pageCount) {
            self.setData({
              isLastPage: true,
              isLoading: false
            });
          };
          self.setData({
            floatDisplay: "block",
            showallDisplay: "block",
            postsList: self.data.postsList.concat(response.data.map(function (item) {
              var strdate = item.date
              item.categoryImage = "";
              if (item.post_medium_image == null || item.post_medium_image == '') {
                item.post_medium_image = item.meta.thumbnail;
              }
              item.date = util.cutstr(strdate, 10, 1);
              return item;
            })),
          });
          // setTimeout(function () {
          //     wx.hideLoading();
          // }, 1500);
        } else {
          if (response.data.code == "rest_post_invalid_page_number") {
            self.setData({
              isLastPage: true,
              isLoading: false
            });
          } else {
            wx.showToast({
              title: response.data.message,
              duration: 1500
            })
          }
        }
      })
      .catch(function () {
        if (data.page == 1) {
          self.setData({
            showerror: "block",
            floatDisplay: "none"
          });
        } else {
          wx.showModal({
            title: '加载失败',
            content: '加载数据失败,请重试.',
            showCancel: false,
          });
          self.setData({
            page: data.page - 1
          });
        }
      })
      .finally(function () {
        wx.hideLoading();
        self.setData({
          isLoading: false
        })

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

  //获取分类列表
  fetchCategoriesData: function (id) {
    var self = this;
    self.setData({
      categoriesList: []
    });

    var getCategoryRequest = wxRequest.getRequest(Api.getCategoryByID(id));

    getCategoryRequest.then(response => {

      var catImage = "";
      if (typeof (response.data.category_thumbnail_image) == "undefined" || response.data.category_thumbnail_image == "") {
        catImage = response.data.cover;
      } else {
        catImage = response.data.category_thumbnail_image;
      }

      self.setData({
        categoriesList: response.data,
        categoriesImage: catImage,
        categoriesName: response.data.name
      });

      wx.setNavigationBarTitle({
        title: response.data.name,
        success: function (res) {
          // success
        }
      });

      self.fetchPostsData(self.data);

    })
  },
  adbinderror: function (e) {
    var self = this;
    console.log(e.detail.errCode);
    console.log(e.detail.errMsg);
    if (e.detail.errCode) {
      self.setData({
        listAdsuccess: false
      })
    }

  }


})