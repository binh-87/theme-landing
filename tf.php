<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
<script>
// console.log( window);
// console.log( parent );
// console.log( document);

// console.log(top);
// console.log(self);

// console.log(window.location.href);
// console.log( document.referrer);
// console.log(self.location.href);

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

var ref = '';
referrer = document.referrer;
var preview = referrer.match(/full_screen_preview(.?)+/);
if(preview){
    if(referrer.match(/full_screen_preview(.?)+_ga/)) preview = referrer.match(/full_screen_preview(.?)+_ga/);
    var id = preview[0].replace(/[^\d]/gi, '');
    if(id) ref = '?item=' + id; 
}
ref = '?item=12985435'; 
// if ( top !== self && ref) top.location.replace( self.location.href+ref );
// else {
    //var ref = getParameterByName('item', self.location.href);
    if(ref){
        var affiliate='?ref=alotheme';
        var url = 'http://alothemes.com/landing/envato.php' + ref;
        var urlstd = location.protocol + '//' + location.host + location.pathname;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                
                // console.log(xmlhttp.responseText);
                var obj = JSON.parse(xmlhttp.responseText);
                console.log(obj);
                // return;
                var obj = xmlhttp.responseText;
                var item = obj['item'];
                if(!item) return;
                // if(item['user'] !== 'alotheme') return;
                var linkRef = item['url'] + affiliate;
                // var linkRef = 'https://themeforest.net/cart/configure_before_adding/'+ref+'?license=regular&ref=alotheme';
                var urlStd = location.protocol + '//' + location.host + location.pathname;
                var html = '';
                html +=     '<div class="preview__envato-logo"><a href="'+ linkRef +'">Envato Market</a></div>';
                html +=         '<div class="preview__actions">';
                html +=             '<div class="preview__action--buy"><a class="e-btn--3d -color-primary" href="'+ linkRef +'">Buy now</a></div>';
                html +=             '<div class="preview__action--close"><a href="'+ urlStd +'"><span class="iframe-close">X</span><i class="e-icon -icon-cancel"></i><span>Remove Frame</span></a></div>';
                html +=         '</div>';
                html +=     '</div>';

                // var style = '<style type="text/css">.preview__header{display:block!important;font-size:12px;height:54px;background-color:#262626;z-index:99999;line-height:54px;margin-bottom:1px}.preview__envato-logo{float:left;padding:0 20px}.preview__envato-logo a{display:inline-block;position:absolute;top:18px;text-indent:-9999px;height:18px;width:152px;background:url(//public-assets.envato-static.com/assets/logos/envato_market-dee06317dbf75d406e29e1cd82fab4dd.svg);background-size:152px 18px}.preview__actions{float:right}.preview__action--buy,.preview__action--close{border-left:1px solid #333;display:inline-block;padding:0 20px}.e-btn--3d.-color-primary{box-shadow:0 2px 0 #6f9a37;position:relative}.-color-primary.e-btn--3d,.-color-primary.e-btn--outline,.e-btn.-color-primary{background-color:#82b440}.-size-s.e-btn--3d,.-size-s.e-btn--outline,.e-btn,.e-btn--3d,.e-btn--outline,.e-btn.-size-s{font-size:14px;line-height:1.5;padding:5px 20px}.e-btn,.e-btn--3d,.e-btn--outline{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;display:inline-block;border:none;border-radius:4px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;text-align:center;text-decoration:none;cursor:pointer;margin:0}.-color-primary.e-btn--3d:active,.-color-primary.e-btn--3d:focus,.-color-primary.e-btn--3d:hover,.-color-primary.e-btn--outline:active,.-color-primary.e-btn--outline:focus,.-color-primary.e-btn--outline:hover,.e-btn.-color-primary:active,.e-btn.-color-primary:focus,.e-btn.-color-primary:hover{background-color:#7aa93c}.-color-default.e-btn--3d,.-color-default.e-btn--outline,.e-btn,.e-btn--3d,.e-btn--outline,.e-btn.-color-default{background-color:gray;color:#fff}.preview__action--close a:hover,.preview__header a:focus,.preview__header a:hover,a{color:#fff}.preview__action--close .iframe-close{font-weight:700;font-size:12px;padding-right:10px}</style>';
                // document.getElementsByTagName('head')[0].innerHTML +=style;
                var style = document.createElement("style");
                style.innerHTML = '.header-sticker {position:fixed; width:100%;}.preview__header{font-size:12px;height:54px;background-color:#262626;z-index:100;line-height:54px;margin-bottom:1px}.preview__envato-logo{float:left;padding:0 20px}.preview__envato-logo a{display:inline-block;position:absolute;top:18px;text-indent:-9999px;height:18px;width:152px;background:url(//public-assets.envato-static.com/assets/logos/envato_market-dee06317dbf75d406e29e1cd82fab4dd.svg);background-size:152px 18px}.preview__actions{float:right}.preview__action--buy,.preview__action--close{border-left:1px solid #333;display:inline-block;padding:0 20px}.e-btn--3d.-color-primary{box-shadow:0 2px 0 #6f9a37;position:relative}.-color-primary.e-btn--3d,.-color-primary.e-btn--outline,.e-btn.-color-primary{background-color:#82b440}.-size-s.e-btn--3d,.-size-s.e-btn--outline,.e-btn,.e-btn--3d,.e-btn--outline,.e-btn.-size-s{font-size:14px;line-height:1.5;padding:5px 20px}.e-btn,.e-btn--3d,.e-btn--outline{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;display:inline-block;border:none;border-radius:4px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;text-align:center;text-decoration:none;cursor:pointer;margin:0}.-color-primary.e-btn--3d:active,.-color-primary.e-btn--3d:focus,.-color-primary.e-btn--3d:hover,.-color-primary.e-btn--outline:active,.-color-primary.e-btn--outline:focus,.-color-primary.e-btn--outline:hover,.e-btn.-color-primary:active,.e-btn.-color-primary:focus,.e-btn.-color-primary:hover{background-color:#7aa93c}.-color-default.e-btn--3d,.-color-default.e-btn--outline,.e-btn,.e-btn--3d,.e-btn--outline,.e-btn.-color-default{background-color:gray;color:#fff}.preview__action--close a:hover,.preview__header a:focus,.preview__header a:hover,a{color:#fff}.preview__action--close .iframe-close{font-weight:700;font-size:12px;padding-right:10px}';
                style.innerHTML += '.full-screen-preview{height:100%;padding:0px;margin:0px;overflow:hidden}.full-screen-preview__frame{width:100%;background-color:white}.full-screen-preview__frame.-ios-fix{width:10px;min-width:100%;-webkit-overflow-scrolling:touch;height:100% !important}.preview__header{font-size:12px;height:54px;background-color:#262626;z-index:100;line-height:54px;margin-bottom:1px}.preview__envato-logo{float:left;padding:0 20px}.preview__envato-logo a{display:inline-block;position:absolute;top:18px;text-indent:-9999px;height:18px;width:152px;background:url(//public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg);background-size:152px 18px}@media (max-width: 568px){.preview__envato-logo{padding:0 10px}.preview__envato-logo a{position:absolute;top:20px;left:15px;height:14px;width:118px;background-size:118px 14px}}.preview__actions{float:right}.preview__action--buy,.preview__action--close{display:inline-block;padding:0 20px}@media (max-width: 568px){.preview__action--buy{padding:0 10px}}.preview__action--purchase-form{display:inline-block}.preview__action--item-details{display:inline-block}.preview__action--close{border-left:1px solid #333333}.preview__action--close a{color:#999999;text-decoration:none}.preview__action--close a:hover{color:white}.preview__action--close a i{color:white;font-size:10px;margin-right:10px}@media (max-width: 568px){.preview__action--close a i{margin-right:0}}@media (max-width: 568px){.preview__action--close a span{display:none}}.screenshots{padding:80px 10px 25px}.screenshots__thumbnail{display:inline-block;margin:0 10px 20px 0;border:1px solid #333333;line-height:0}.screenshots__thumbnail:hover{border:1px solid #666666}.screenshots__fullsize{display:inline-block;margin:20px 0;border:1px solid #333333;line-height:0}.screenshots__fullsize>img{max-width:100%}.screenshots__description{max-width:1024px;margin-top:20px;color:white}';
                document.getElementsByTagName('head')[0].appendChild(style);

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

</script>
</body>
</html>