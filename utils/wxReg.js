function n(n) {
  return function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return new Promise(function(e, o) {
          t.success = function(n) {
              e(n);
          }, t.fail = function(n) {
              o(n);
          }, n(t);
      });
  };
}

Promise.prototype.finally = function(n) {
  var t = this.constructor;
  return this.then(function(e) {
      return t.resolve(n()).then(function() {
          return e;
      });
  }, function(e) {
      return t.resolve(n()).then(function() {
          throw e;
      });
  });
}, module.exports = {
  wxPromisify: n,
  wxGetStorage: function() {
      return n(wx.getStorage);
  },
  wxLogin: function() {
      return n(wx.login);
  },
  wxCheckSession: function() {
      return n(wx.checkSession);
  },
  wxGetUserInfo: function() {
      return n(wx.getUserInfo);
  },
  wxGetSetting: function() {
      return n(wx.getSetting);
  },
  wxGetSystemInfo: function() {
      return n(wx.getSystemInfo);
  },
  wxRequestPayment: function() {
      return n(wx.requestPayment);
  },
  wxGetSavedFileList: function() {
      return n(wx.getSavedFileList);
  },
  wxGetSavedFileInfo: function() {
      return n(wx.getSavedFileInfo);
  },
  wxDownloadFile: function() {
      return n(wx.downloadFile);
  },
  wxSaveFile: function() {
      return n(wx.saveFile);
  },
  wxSaveImageToPhotosAlbum: function() {
      return n(wx.saveImageToPhotosAlbum);
  },
  wxPreviewImage: function() {
      return n(wx.previewImage);
  },
  wxOpenSetting: function() {
      return n(wx.openSetting);
  },
  wxShowModal: function() {
      return n(wx.showModal);
  },
  wxPlayBackgroundAudio: function() {
      return n(wx.playBackgroundAudio);
  },
  wxPauseBackgroundAudio: function() {
      return n(wx.pauseBackgroundAudio);
  },
  wxStopBackgroundAudio: function() {
      return n(wx.stopBackgroundAudio);
  },
  wxGetBackgroundAudioPlayerState: function() {
      return n(wx.getBackgroundAudioPlayerState);
  },
  wxGetShareInfo: function() {
      return n(wx.getShareInfo);
  },
  wxReportAnalytics: function() {
      return n(wx.reportAnalytics);
  }
};