
/*! Lazy Load 2.0.0-rc.2 - MIT license - Copyright 2007-2019 Mika Tuupola */
!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";function e(t,e){this.settings=s(r,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}"function"==typeof define&&define.amd&&(t=window);const r={src:"data-src",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0},s=function(){let t={},e=!1,r=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);for(;r<o;r++)!function(r){for(let o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e&&"[object Object]"===Object.prototype.toString.call(r[o])?t[o]=s(!0,t[o],r[o]):t[o]=r[o])}(arguments[r]);return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();let e=this,r={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver(function(t){Array.prototype.forEach.call(t,function(t){if(t.isIntersecting){e.observer.unobserve(t.target);let r=t.target.getAttribute(e.settings.src),s=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(r&&(t.target.src=r),s&&(t.target.srcset=s)):t.target.style.backgroundImage="url("+r+")"}})},r),Array.prototype.forEach.call(this.images,function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;Array.prototype.forEach.call(this.images,function(e){let r=e.getAttribute(t.settings.src),s=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(r&&(e.src=r),s&&(e.srcset=s)):e.style.backgroundImage="url('"+r+"')"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,r){return new e(t,r)},t.jQuery){const r=t.jQuery;r.fn.lazyload=function(t){return t=t||{},t.attribute=t.attribute||"data-src",new e(r.makeArray(this),t),this}}return e});

$(document).ready(function($) {
    var style = '.featureditem img {background-image: url("../loader.gif"); background-repeat: no-repeat; background-position: center;}';
    // style     += 'img.loaded{background-image: none}';
    $('head').append('<style type="text/css"> ' + style + ' </style>');
    proccessLazyload();
});

function proccessLazyload()
{
    var imgLazy = $('img').not(".notlazy, .loaded"); 
    imgLazy.lazyload();
    // imgLazy.on('load',function(){$(this).addClass('loaded')});
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

var ref         = '';
var username    = 'alotheme';
var ref_url     = 'https://1.envato.market/c/1314680/275988/4415';
var api_url     = '//alothemes.com/envato/api.envato.php';   
referrer = document.referrer;
var preview = referrer.match(/full_screen_preview(.?)+/);
if(preview){
    console.log('preview');
    if(referrer.match(/full_screen_preview(.?)+_ga/)) preview = referrer.match(/full_screen_preview(.?)+_ga/);
    var id = preview[0].replace(/[^\d]/gi, '');
    if(id) ref = '?item=' + id; 
}
// if ( top !== self && ref) top.location.replace( self.location.href+ref );
// if ( top !== self) top.location.replace( self.location.href+ref );
// else {
    var ref = getParameterByName('item', self.location.href);
    var isInIFrame = (window.location != window.parent.location);
    if(ref){
        var affiliate='?ref=' + username;
        var url = api_url + '?item=' + ref;
        var urlstd = location.protocol + '//' + location.host + location.pathname;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                // console.log(typeof xmlhttp.responseText);
                // console.log(xmlhttp.responseText);
                var item = JSON.parse(xmlhttp.responseText);
                if(!item) return;
                // if(item['user'] !== username) return;
                // var linkRef = item['url'] + affiliate;
                var linkRef = ref_url + '?u=' + item['url'];
                var linkRef = ref_url + '?u=' + 'https://themeforest.net/cart/add_items?item_ids=' + id;
                // var linkRef = 'https://themeforest.net/cart/configure_before_adding/'+ref+'?license=regular&ref=alotheme';
                var urlStd = location.protocol + '//' + location.host + location.pathname;
                if(isInIFrame){
                    var html = '';
                    html +=         '<div class="preview__actions">';
                    html +=         '<div class="purchase-form__button">';
                    html +=         '<a class="btn js-purchase__add-to-cart e-btn--3d -color-primary -size-m -width-full" target="_blank" href="' + linkRef + '"><i class="e-icon -icon-cart -margin-right"></i> <strong>Add to Cart</strong></a>';
                    html +=         '</div>';
                    // html +=         '<div class="purchase-now-effect"></div>';
                    html +=         '</div>';
                    var style = document.createElement("style");
                    style.innerHTML = '.preview__header{z-index:999999999;display:block;position:fixed;right:0;top:0}.preview__header .purchase-form__button{margin-bottom:12px}.preview__header .purchase-now-effect{position:absolute;top:5px;border:none;border-radius:4px;color:#fff;cursor:pointer;display:inline-block;background:#7ca81f;font-size:14px;line-height:2.5;margin:0;padding:5px 20px;text-align:center;text-decoration:none;min-width:260px;min-height:40px;animation:nasa_pulsate 5s linear infinite}.preview__header .e-btn--3d.-color-primary{-webkit-box-shadow:0 2px 0 #6f9a37;box-shadow:0 2px 0 #6f9a37;position:relative}.preview__header .-color-primary.e-btn--3d,.preview__header .-color-primary.e-btn--outline,.preview__header .e-btn.-color-primary{background-color:#82b440}.preview__header .btn,.preview__header [role=button],.preview__header [type=submit],.preview__header button{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:gray;border:none;border-radius:4px;color:#fff;cursor:pointer;display:inline-block;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:2.5;margin:0;padding:5px 20px;text-align:center;text-decoration:none;min-width:260px;min-height:40px}@keyframes nasa_pulsate{0%{transform:scale(1);opacity:0}50%{transform:scale(1.1);opacity:.5}100%{transform:scale(1.2);opacity:0}}';
                    document.getElementsByTagName('head')[0].appendChild(style);
                } else {
                    var html = '';
                    html +=     '<div class="preview__envato-logo"><a href="'+ linkRef +'">Envato Market</a></div>';
                    html +=         '<div class="preview__actions">';
                    html +=             '<div class="preview__action--buy"><a class="e-btn--3d -color-primary" href="'+ linkRef +'">Buy now</a></div>';
                    html +=             '<div class="preview__action--close"><a href="'+ urlStd +'"><span class="iframe-close">X</span><i class="e-icon -icon-cancel"></i><span>Remove Frame</span></a></div>';
                    html +=         '</div>';
                    html +=     '</div>';

                    var style = document.createElement("style");
                    style.innerHTML = '.preview__header{position:fixed; width:100%;font-size:12px;height:54px;background-color:#262626;z-index:100;line-height:54px;margin-bottom:1px}.preview__envato-logo{float:left;padding:0 20px}.preview__envato-logo a{display:inline-block;position:absolute;top:18px;text-indent:-9999px;height:18px;width:152px;background:url(//public-assets.envato-static.com/assets/logos/envato_market-dee06317dbf75d406e29e1cd82fab4dd.svg);background-size:152px 18px}.preview__actions{float:right}.preview__action--buy,.preview__action--close{border-left:1px solid #333;display:inline-block;padding:0 20px}.e-btn--3d.-color-primary{box-shadow:0 2px 0 #6f9a37;position:relative}.-color-primary.e-btn--3d,.-color-primary.e-btn--outline,.e-btn.-color-primary{background-color:#82b440}.-size-s.e-btn--3d,.-size-s.e-btn--outline,.e-btn,.e-btn--3d,.e-btn--outline,.e-btn.-size-s{font-size:14px;line-height:1.5;padding:5px 20px}.e-btn,.e-btn--3d,.e-btn--outline{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;display:inline-block;border:none;border-radius:4px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;text-align:center;text-decoration:none;cursor:pointer;margin:0}.-color-primary.e-btn--3d:active,.-color-primary.e-btn--3d:focus,.-color-primary.e-btn--3d:hover,.-color-primary.e-btn--outline:active,.-color-primary.e-btn--outline:focus,.-color-primary.e-btn--outline:hover,.e-btn.-color-primary:active,.e-btn.-color-primary:focus,.e-btn.-color-primary:hover{background-color:#7aa93c}.-color-default.e-btn--3d,.-color-default.e-btn--outline,.e-btn,.e-btn--3d,.e-btn--outline,.e-btn.-color-default{background-color:gray;color:#fff}.preview__action--close a:hover,.preview__header a:focus,.preview__header a:hover,a{color:#fff}.preview__action--close .iframe-close{font-weight:700;font-size:12px;padding-right:10px}';
                    style.innerHTML += '.full-screen-preview{height:100%;padding:0px;margin:0px;overflow:hidden}.full-screen-preview__frame{width:100%;background-color:white}.full-screen-preview__frame.-ios-fix{width:10px;min-width:100%;-webkit-overflow-scrolling:touch;height:100% !important}.preview__header{font-size:12px;height:54px;background-color:#262626;z-index:100;line-height:54px;margin-bottom:1px}.preview__envato-logo{float:left;padding:0 20px}.preview__envato-logo a{display:inline-block;position:absolute;top:18px;text-indent:-9999px;height:18px;width:152px;background:url(//public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg);background-size:152px 18px}@media (max-width: 568px){.preview__envato-logo{padding:0 10px}.preview__envato-logo a{position:absolute;top:20px;left:15px;height:14px;width:118px;background-size:118px 14px}}.preview__actions{float:right}.preview__action--buy,.preview__action--close{display:inline-block;padding:0 20px}@media (max-width: 568px){.preview__action--buy{padding:0 10px}}.preview__action--purchase-form{display:inline-block}.preview__action--item-details{display:inline-block}.preview__action--close{border-left:1px solid #333333}.preview__action--close a{color:#999999;text-decoration:none}.preview__action--close a:hover{color:white}.preview__action--close a i{color:white;font-size:10px;margin-right:10px}@media (max-width: 568px){.preview__action--close a i{margin-right:0}}@media (max-width: 568px){.preview__action--close a span{display:none}}.screenshots{padding:80px 10px 25px}.screenshots__thumbnail{display:inline-block;margin:0 10px 20px 0;border:1px solid #333333;line-height:0}.screenshots__thumbnail:hover{border:1px solid #666666}.screenshots__fullsize{display:inline-block;margin:20px 0;border:1px solid #333333;line-height:0}.screenshots__fullsize>img{max-width:100%}.screenshots__description{max-width:1024px;margin-top:20px;color:white}';
                    document.getElementsByTagName('head')[0].appendChild(style);                    
                }


                var preview__header = document.createElement("div");
                preview__header.innerHTML = html;
                preview__header.className = "preview__header";
                preview__header.id = "preview__header";
                var body = document.getElementsByTagName('body')[0];
                body.insertBefore(preview__header, body.childNodes[0]);
                preview__header = document.getElementById("preview__header");
                var body = document.body;
                document.addEventListener("scroll", function(){
                    if(body.scrollTop > 0) preview__header.className = "preview__header header-sticker";
                    else preview__header.className = "preview__header";
                });
                // document.addEventListener("DOMContentLoaded", function(event) { 
                //     var purchased = document.getElementsByClassName("btn-buy");
                //     if(purchased.length){
                //         for (var i = purchased.length - 1; i >= 0; i--) {
                //             var btn = purchased[i];
                //             btn.href = linkRef;
                //             btn.target = "blank";
                //         };

                //     }
                // });

                setTimeout( function(){ 
                    var purchased = document.getElementsByClassName("btn-buy");
                    if(purchased.length){
                        for (var i = purchased.length - 1; i >= 0; i--) {
                            var btn = purchased[i];
                            btn.href = linkRef;
                            btn.target = "blank";
                        };

                    }
                    var purchased = document.getElementsByClassName("buy-now");
                    if(purchased.length){
                        for (var i = purchased.length - 1; i >= 0; i--) {
                            var btn = purchased[i];
                            btn.href = linkRef;
                            btn.target = "blank";
                        };

                    }
                }, 1000); 

            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        // document.addEventListener("DOMSubtreeModified", function() {
        //     console.log("DOMSubtreeModified fired!");
        // }, false);

        // $("#someDiv").bind("DOMSubtreeModified", function() {
        //     alert("tree changed");
        // });

    }
// }

jQuery(document).ready(function($) {
    (function($) {
        "use strict";
        $.fn.feed = function(options) {
            var defaults = {
                hostname    : '//alothemes.com/',
                username    : 'alotheme',
                feedSelector: 'footer',
                showLoader  : true,
            };
            var options = $.extend({}, defaults, options);
            if (this.length > 1) {
                this.each(function() { $(this).feed(options) });
                return this;
            }

            this.initialize = function() {
                this._initFeed();
                return this;
            };

            this._initFeed = function () {
                var self = this;
                var elementFeed = $(options.feedSelector);
                if(!elementFeed.length) return;
                var style = ".slick-slider {position: relative; display: block; box-sizing: border-box; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-touch-callout: none; -khtml-user-select: none; -ms-touch-action: pan-y; touch-action: pan-y; -webkit-tap-highlight-color: transparent; } .slick-list {position: relative; display: block; overflow: hidden; margin: 0; padding: 0; } .slick-list:focus {outline: none; } .slick-list.dragging {cursor: pointer; cursor: hand; } .slick-slider .slick-track, .slick-slider .slick-list {-webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0); -ms-transform: translate3d(0, 0, 0); -o-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } .slick-track {position: relative; top: 0; left: 0; display: block; } .slick-track:before, .slick-track:after {display: table; content: ''; } .slick-track:after {clear: both; } .slick-loading .slick-track {visibility: hidden; } .slick-slide {display: none; float: left; height: 100%; min-height: 1px; } [dir='rtl'] .slick-slide {float: right; } .slick-slide img {display: block; } .slick-slide.slick-loading img {display: none; } .slick-slide.dragging img {pointer-events: none; } .slick-initialized .slick-slide {display: block; } .slick-loading .slick-slide {visibility: hidden; } .slick-vertical .slick-slide {display: block; height: auto; border: 1px solid transparent; } .slick-arrow.slick-hidden {display: none; }";
                style    += '.slick-dots button {padding:0} .featureditem h2.title{color: #333;font-size:30px;font-family: Arial,sans-serif; font-weight: 700;text-transform: uppercase;} .featureditem p{color: #101010;margin-top: 10px;font-weight: normal; font-size: 18px;} .featureditem{background-color: #f6f6f6; padding: 50px; text-align: center;} .magicslider .item{padding-left: 15px;padding-right: 15px;} .magicslider .item img{width: 100%;} .item-box{position:relative;} .glare{position: absolute; top: 0px;height: 30px;line-height: 28px;} .hot-sale,.trending{background-color: #0084B4;left: 0px;} .new-sale{background-color: #709c36;right: 0px;} .glare span{padding: 0 10px;color: #ffffff;font-size: 17px;} .trending:after {background-color: transparent;border: 15px solid #0084B4;border-right-color: transparent;bottom: 0;content: "";position: absolute;right: -20px;z-index: 9;} .item-box a{margin: 30px 0 0;display: block;outline: none;text-decoration: none !important ;} .item-box a span{font-size: 18px;text-transform: capitalize;font-family: Arial,sans-serif;color: #000;} .item-box a span.name{display:block;} .item-box a span.price{font-size: 25px;font-weight: normal;color: #f36;} .item-box a span.sales{color: #999;} .slick-dots{margin-top: 20px;} .slick-dots li{display: inline-block;margin:0; padding: 0 3px;} .slick-dots li button {border-radius: 90%; background-color: transparent;border: 1px solid #999;color: #666;font-size: 12px;height: 25px;width: 25px;} .slick-dots li.slick-active button,.slick-dots li button:hover {background-color: #ff3366;border-color: #ff3366;color: #ffffff;} .slick-arrow{-moz-transition: all .45s ease;-webkit-transition: all .45s ease;-o-transition: all .45s ease;-ms-transition: all .45s ease;transition: all .45s ease;-webkit-transform: translate(0,-50%);-ms-transform: translate(0,-50%);transform: translate(0,-50%);opacity: 0;visibility: hidden;} .slick-arrow:hover{background-color: #ff3366;border-color: #ff3366;color: #ffffff;} .slick-next{right:-50px;} .slick-prev {left: -50px;} .slick-prev:before, .slick-next:before {font-family: FontAwesome;font-size: 14px;line-height: 22px;} .slick-prev:before {content: "\f104";} .slick-next:before {content: "\f105";} .slick-arrow {border-radius: 0;-moz-border-radius: 0;-webkit-border-radius: 0;-ms-border-radius: 0;-o-border-radius: 0;border-style: solid;border-width: 1px;border-color: #ddd;font-size: 0;line-height: 24px;position: absolute;top: 40%;display: block;width: 24px;height: 24px;padding: 0;margin-top: -10px;cursor: pointer;color: #727272;outline: 0;background: #eaeaea;z-index: 1;} .magicslider:hover .slick-next{right: 0;opacity: 1;visibility: inherit;} .magicslider:hover .slick-prev{left: 0;opacity: 1;visibility: inherit;}';
                $('head').append('<style type="text/css">'+style+'</style>');
                
                self.themeforestFeed();

                var queryService =  JSON.stringify({ query:`{
                                          products (
                                             search:"service"
                                             pageSize: 10
                                           ) {
                                             items {
                                               sku
                                               name
                                               image {
                                                 label
                                                 url
                                               }
                                               thumbnail {
                                                 label
                                                 url
                                               }
                                               small_image {
                                                 label
                                                 url
                                               }
                                               url_key
                                               price {
                                                 regularPrice {
                                                   amount {
                                                     value
                                                     currency
                                                   }
                                                 }
                                               }
                                               special_price
                                             }
                                           }
                                         }`
                                      });


                self.magentoGraphql(options.hostname, {query: queryService}, 'feed', "YOU MAY ALSO LIKE SERVICES!");
                self.magentoGraphql(options.hostname, {search: 'extension'}, 'feed', "YOU MAY ALSO LIKE EXTENSIONS!");
            };

            this.themeforestFeed = function () {
                var self = this;
                var ref         = '';
                var username    = options.username;
                var ref_url     = 'https://1.envato.market/c/1314680/275988/4415';
                var api_url     = options.hostname + 'feed.php';
                var featureditem = $(options.feedSelector);
                if(!featureditem.length) return;
                var xmlhttp = new XMLHttpRequest();
                //var url = "http://marketplace.envato.com/api/v1/new-files-from-user:alotheme,themeforest.json";
                // var url = "http://marketplace.envato.com/api/edge/new-files-from-user:alotheme,themeforest.json";
                var url = api_url + '?list=' + username;
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var obj = JSON.parse(xmlhttp.responseText);
                        var item = obj['new-files-from-user'];
                        var html = '<div class="section featureditem">';
                        html    += '<h2 class="section-title title">You may also like themes!</h2>';
                        html    += '<p class="section-des">More powerful &amp; premium themes from us. Please take a look from our items below!</p>';
                        html    += '<ul class="magicslider">';
                        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
                        var today = new Date();
                        var i = item.length - 1;
                        var placeholder = 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22' + '590' + '%22%20height%3D%22' + '300' + '%22%20viewBox%3D%220%200%20225%20265%22%3E%3C%2Fsvg%3E';
                        for(i; i > 0; i--) {
                            var upload = new Date(item[i].uploaded_on);
                            var ago = Math.round(Math.abs((today.getTime() - upload.getTime())/(oneDay)));
                            var sales = item[i].sales;
                            if(sales/ago < 0.15 ) continue;
                            var label = '';
                            if(ago < 90) label += '<span class="glare new-sale"><span>New</span></span>';
                            // if(sales/ago >= 0.5) label += '<span class="glare hot-sale"><span>Hot</span></span>';
                            if(sales/ago >= 0.5) label += '<span class="glare trending"><span>Trending</span></span>';
                            html += '<li class="item">';
                            html += '<div class="item-box">';
                            html += label;
                            html += '<div class="img">';
                            var linkRef = ref_url + '?u=' + item[i].url;
                            html += '<a target="_blank" href="' + linkRef + '"><img alt="' + item[i].item + '" src="' + item[i].live_preview_url + '" title="' + item[i].item + '" /></a>';
                            html += '</div>';
                            html += '<a target="_blank" href="' + linkRef + '"><span class="name">' + item[i].item + '</span><span class="price">$' + parseInt(item[i].cost) + ' </span><span class="sales">Sales ' + item[i].sales + ' </span></a>';
                            html += '</div>';
                            html += '</li>';
                        }
                        html += '</ul>';
                        html += '</div>';
                        featureditem.before(html);
                        var slidecfg = {"autoplay":true,"arrows":false,"autoplayspeed":1000,"dots":true,"infinite":true,"vertical":false,"verticalSwiping":false,"responsive":[{'breakpoint': 1200, 'settings': {'slidesToShow': 4, 'slidesToScroll': 4}},{'breakpoint': 992, 'settings': {'slidesToShow': 3, 'slidesToScroll': 3}},{'breakpoint': 768, 'settings': {'slidesToShow': 2, 'slidesToScroll': 2}},{'breakpoint': 361, 'settings': {'slidesToShow': 1, 'slidesToScroll': 1}}],"rows":1,"slidesToShow":4, "slidesToScroll": 4, "swipeToSlide":true,"speed":300};
                        $('.magicslider').not( '.slick-initialized' ).slick(slidecfg);
                    }
                };
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
            };
            this.magentoFeed = function (url, data) {

            };

            this.magentoGraphql = function (host_name, query, ref='themeforest', title="YOU MAY ALSO LIKE!") {
                /* example host_name: '//alothemes.com/'; */
                var self = this;
                var el = $(options.feedSelector);
                $.ajax({
                    url: host_name +'feed.php',
                    // headers: {  'Access-Control-Allow-Origin': '*' },
                    // crossDomain: true,
                    type:'POST',
                    data: query,
                    success: function(result) {
                        result = JSON.parse(result);
                        if(result.errors) return;
                        var items= result.data.products.items;
                        self.sliderGraphql(host_name, el, items, ref, title)

                  }
               });
            };

            this.sliderGraphql = function (host_name, el, items, ref, title){
                var html = '<div class="section featureditem">';
                html    += '<p class="section-des">' + title + '</p>';
                html    += '<ul class="magicslider">';
                var placeholder = 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22' + '800' + '%22%20height%3D%22' + '600' + '%22%20viewBox%3D%220%200%20225%20265%22%3E%3C%2Fsvg%3E';
                $.each( items, function( key, item ) {
                    html += '<li class="item">';
                    html += '<div class="item-box">';
                    html += '<div class="img">';
                    var linkRef =  host_name + item.url_key + '.html?ref=' +  ref;
                    html += '<a target="_blank" href="' + linkRef + '"><img alt="' + item.image.label + '" src="' + item.image.url + '" title="' + item.image.label + '" /></a>';
                    html += '</div>';
                    var price = ( item.special_price != null ) ? parseInt(item.special_price) : parseInt(item.price.regularPrice.amount.value);
                    if(price == 0) price = 'Free';
                    html += '<a target="_blank" href="' + linkRef + '"><span class="name">' + item.name + '</span><span class="price">$' + price + ' </span></a>';
                    html += '</div>';
                    html += '</li>';
                });
                html += '</ul>';
                html += '</div>';
                el.before(html);
                var slidecfg = {"autoplay":true,"arrows":false,"autoplayspeed":1000,"dots":true,"infinite":true,"vertical":false,"verticalSwiping":false,"responsive":[{'breakpoint': 1200, 'settings': {'slidesToShow': 4}},{'breakpoint': 992, 'settings': {'slidesToShow': 3}},{'breakpoint': 768, 'settings': {'slidesToShow': 2}},{'breakpoint': 361, 'settings': {'slidesToShow': 1}}],"rows":1,"slidesToShow":4,"swipeToSlide":true,"speed":300};
                $('.magicslider').not( '.slick-initialized' ).slick(slidecfg);              
            };

            return this.initialize();
        }
    })($);

    $('body').feed();
});
