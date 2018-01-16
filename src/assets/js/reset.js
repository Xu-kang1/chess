/*
 <reference path="这里填写其他引用文档地址" />
 /** @define {boolean} */
//var JSCOMPRESS_DEBUG = true;
(function () {
  window.phone = {};
  window.bombbox = {};
  var fixEvent = function (e) {
    /// <summary>事件对象兼容处理</summary>
    e = e || event;
    e.target = e.target || e.srcElement;
    e.preventDefault = function () {
      return e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    };
    e.stopPropagation = function () {
      return e.stopPropagation ? stopPropagation() : e.cancelBubble = !0;
    };
    e.hoat = function () {
      this.preventDefault();
      this.stopPropagation();
    };
    return e
  };
  var ParseOrientation = function () {
    /// <summary>解析方向</summary>
    /// <field name="designWidth" type="Number">设计宽度</field>
    /// <field name="htmlWidth" type="Number">网页实际宽度</field>
    /// <field name="htmlHeight" type="Number">网页实际高度</field>
    /// <field name="ratioWidth" type="Number">网页实际宽度同设计宽度比</field>
    /// <field name="isOpenForceWindow" type="Bool">是否开启强制横竖屏</field>
    var html = document.documentElement;
    this.designWidth = 1080;
    this.htmlWidth = html.offsetWidth;
    this.htmlHeight = html.offsetHeight;
    this.ratioWidth = html.clientWidth / this.designWidth;
    this.isOpenForceWindow = false;
    html = null;
  };
  ParseOrientation.prototype.isOrientation = function () {
    /// <summary>是否是竖屏</summary>
    return this.htmlWidth < this.htmlHeight;
  };
  ParseOrientation.prototype.getWindowWidth = function () {
    /// <summary>获取当前窗口宽度</summary>
    var self = this;
    var html = document.documentElement;
    self.htmlWidth = html.clientWidth;
    self.htmlHeight = html.clientHeight;
    if (self.isOrientation() && self.isOpenForceWindow) {
      return self.htmlHeight;
    } else {
      return self.htmlWidth;
    }
  };
  ParseOrientation.prototype.change = function () {

    /// <summary>窗口改变后计算</summary>
    var self = this;
    /// <var type="Element">当前页面</var>
    var html = document.documentElement;
    /// <var type="Number">当前窗口物理分辨率和显示清晰度</var>
    var dpr = Math.round(window.devicePixelRatio || 1);
    /// <var type="Element">获取style标签</var>
    var fontEl = document.querySelector("#styleHtml");
    /// <var type="Number">当前宽度</var>
    var width = self.getWindowWidth();
    if (!fontEl) {
      fontEl = document.createElement('style');
      fontEl.id = "styleHtml";
      html.firstElementChild.appendChild(fontEl);
    }
    ;
    //写入高清倍数
    html.setAttribute('data-dpr', dpr);
    //动态写入样式
    // fontEl.innerHTML = 'html{font-size:' + (width / 10) + 'px!important;}';
//        if()
//        {
//
//        }

    fontEl.innerHTML = 'html{font-size:' + (width / 10) + 'px!important;}';


    //强制横竖屏
    if (self.isOpenForceWindow) {
      if (!self.isOrientation()) {
        //已经是竖屏
        document.body.style.cssText += "width:" + self.htmlWidth + "px;height:" + self.htmlHeight + "px;-webkit-transform: rotate(0);transform: rotate(0);";
      } else {
        //横屏
        var x = -((self.htmlHeight - self.htmlWidth) / 2);
        document.body.style.cssText += "width:" + self.htmlHeight + "px;height:" + self.htmlWidth + "px;-webkit-transform: rotate(-90deg) translate(" + x + "px," + x + "px);transform: rotate(-90deg) translate(" + x + "px," + x + "px);";
      }
    }
    dpr = html = metaEl = self = fontEl = null;
  };
  var Phone = function () {
    /// <summary>手机端扩展</summary>
  };
  Phone.prototype.hasClass = function (element, className) {
    /// <summary>识别dom元素的是否具有指定的class</summary>
    /// <param name="element" type="HTMLElement">dom</param>
    /// <param name="className" type="String">class</param>
    /// <returns type="Boolean" />
    if (!element) return !1;
    return RegExp("( " + className + "$)|(^" + className + " )|( " + className + " )|(^" + className + "$)", "ig").test(element.className);
  };
  Phone.prototype.addClass = function (element, className) {
    /// <summary>添加dom元素的class</summary>
    /// <param name="element" type="HTMLElement">dom</param>
    /// <param name="className" type="String">class</param>
    if (!element) return;
    var c = RegExp("( " + className + "$)|(^" + className + " )|( " + className + " )|(^" + className + "$)", "ig");
    var f = element.className;
    c.test(f) || (element.className = (f.trim() + " " + className).trim());
  };
  Phone.prototype.removeClass = function (element, className) {
    /// <summary>移除dom元素的class</summary>
    /// <param name="element" type="HTMLElement">dom</param>
    /// <param name="className" type="String">class</param>
    if (!element) return;
    className = RegExp("( " + className + "$)|(^" + className + " )|( " + className + " )|(^" + className + "$)", "ig");
    element.className = (element.className || "").replace(className, " ").replace(/[ ]{2,}/ig, " ").trim();
  };
  Phone.prototype.parseOrientation = new ParseOrientation;
  phone = new Phone;
  !String.prototype.trim && (String.prototype.trim = function () {
    /// <summary>移除字符串首尾空白</summary>
    return this.replace(/(^\s*)|(\s*$)/g, "")
  });
  (function () {
    /// <summary>屏幕改变</summary>
    var handle;
    window.addEventListener("resize", function () {
      window.clearTimeout(handle);
      handle = window.setTimeout(function () {
        phone.parseOrientation.change();
      });
    }, false);

    phone.parseOrientation.change();
  })();

  var Bombbox = function () {
    /// <summary>弹框</summary>
  };
  /// <summary>普通弹框</summary>
  /// <param name="title" type="HTMLElement">弹框标题</param>
  /// <param name="con" type="String">弹框内容</param>
  /// <param name="btnnum" type="num">按钮数量</param>
  Bombbox.prototype.init = function (title, con, btnnum, callback) {
    if ($(".app-dialog1").length > 0) {
      $(".app-dialog1").remove();
    }
    var result = "";
    result += '<section  class="app-dialog1" style="display: block">';
    result += '    <div class="success">';
    result += '        <div class="d-title">';
    result += '            <p id="title">' + title + '</p>';
    result += '        </div>';
    result += '        <div class="d-content">';
    result += '            <p style="padding-top: 0.5rem">' + con + '</p>';
    result += '        </div>';
    if (btnnum == 1) {
      result += '        <a  class="btn-ok" id="box-ok">确定</a>';
    }
    else {
      result += '        <a  class="btn-cancel fl" id="box-cancel">取消</a>';
      result += '        <a  class="btn-ok1 fl" id="box-ok">确定</a>';
    }
    result += '    </div>';
    result += '</section>';
    $("body").append(result);
    callback && callback(result);

  };
  /// <summary>个别弹框</summary>
  /// <param name="title" type="HTMLElement">弹框标题</param>
  /// <param name="con" type="html">弹框内容</param>
  /// <param name="btnnum" type="num">按钮数量</param>
  /// <param name="btnname" type="num">确认按钮名字</param>
  Bombbox.prototype.initnew = function (title, con, btnnum, btnname, callback) {
    if ($(".app-dialog1").length > 0) {
      $(".app-dialog1").remove();
    }
    var result = "";
    result += '<section  class="app-dialog1" style="display: block">';
    result += '    <div class="success">';
    result += '        <a  class="Close"  id="Close"></a>';

    result += '        <div class="d-title" style="font-size: 0.5rem;height: 1rem;line-height: 1rem">';
    result += '            <p id="title">' + title + '</p>';
    result += '        </div>';
    result += '        <div class="d-content" style="min-height: 3rem; ">';
    result += con;
    result += '        </div>';
    if (btnnum == 1) {
      result += '        <a  class="btn-ok" id="box-ok">' + btnname + '</a>';
    }
    else {
      result += '        <a  class="btn-cancel fl" id="box-cancel">取消</a>';
      result += '        <a  class="btn-ok1 fl" id="box-ok">' + btnname + '</a>';
    }
    result += '    </div>';
    result += '</section>';
    $("body").append(result);
    callback && callback(result);

  };
  bombbox = new Bombbox;
})();
