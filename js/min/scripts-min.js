/**
 * fixim: default javascript
 * @license MIT
 */
function concatValues(e){var t="";for(var o in e)t+=e[o];return t}$(document).ready(function(){"use strict";return $("#tweecool").tweecool({username:"collis",limit:3}),!1}),$(function(){"use strict";function e(){var e=t.width(),i=t.height(),n=16,r=9,a=e/n,l=i/r,s=Math.max(a,l),c=Math.ceil(n*s),d=Math.ceil(r*s),u=0,p=0;c>e&&(u=.5*-(c-e)),d>i&&(p=.5*-(d-i)),o.css({width:c,height:d,top:p,left:u})}var t=$(".video-wrapper"),o=t.find("video");return $(window).resize(e),e(),!1}),$(function(){"use strict";return $(".element-border, .hello-element").typed({strings:["Hello.","Olá.","¡Hola!","Bonjour.","Ciao.","今日は.","Goddag.","Merhaba."],typeSpeed:30,backDelay:500,loop:!0,loopCount:!1}),!1}),$(function(){"use strict";return $(".element, .element-border").typed({strings:["awesome","inspired","incredible","classy","great","proffesional","popular"],typeSpeed:250,backDelay:500,loop:!1,loopCount:!1}),!1}),$(function(){"use strict";function e(e){e.addEventListener("click",function(e){e.preventDefault(),this.classList.contains("is-active")===!0?this.classList.remove("is-active"):this.classList.add("is-active")})}for(var t=document.querySelectorAll(".c-hamburger"),o=t.length-1;o>=0;o--){var i=t[o];e(i)}}),$(document).ready(function(){"use strict";return $("#fullpage").fullpage({menu:"#menu",lockAnchors:!1,anchors:["slide1","slide2","slide3"],navigation:!0,navigationPosition:"right",navigationTooltips:[""],showActiveTooltip:!0,slidesNavigation:!0,slidesNavPosition:"top",css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,scrollBar:!1,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:"#element1, #element2, #element3, #element4",scrollOverflow:!1,touchSensitivity:15,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,verticalCentered:!0,resize:!1,sectionsColor:["#ccc","#eee"],paddingTop:"3em",paddingBottom:"10px",fixedElements:"#header, .footer",responsiveWidth:1100,responsiveHeight:0,sectionSelector:".section",slideSelector:".slide",onLeave:function(e,t,o){},afterLoad:function(e,t){},afterRender:function(){},afterResize:function(){},afterSlideLoad:function(e,t,o,i){},onSlideLeave:function(e,t,o,i,n){}}),!1}),$(document).ready(function(){var e=$(".grid").isotope({itemSelector:".item"});e.imagesLoaded().progress(function(){e.isotope("layout")});var t={};$(".filters").on("click",".button",function(){var o=$(this),i=o.parents(".button-group"),n=i.attr("data-filter-group");t[n]=o.attr("data-filter");var r=concatValues(t);e.isotope({filter:r})}),$(".button-group").each(function(e,t){var o=$(t);o.on("click","button",function(){o.find(".is-checked").removeClass(".is-checked"),$(this).addClass(".is-checked")})})}),Royal_Preloader.config({mode:"logo",logo:"../../images/logo_400-c_outline.png",logo_size:[150,150],timeout:12,background:"#fff"}),$(document).ready(function(){"use strict";return $(".fancybox").fancybox(),!1}),(new WOW).init(),jQuery(document).ready(function($){var e=300,t=1200,o=700,i=$(".cd-top");$(window).scroll(function(){$(this).scrollTop()>e?i.addClass("cd-is-visible"):i.removeClass("cd-is-visible cd-fade-out"),$(this).scrollTop()>t&&i.addClass("cd-fade-out")}),i.on("click",function(e){e.preventDefault(),$("body,html").animate({scrollTop:0},o)})}),$(function(){var e=$("cooming");$(window).on("resize",function(){var t=Math.max($(window).height()-e.height(),0),o=Math.floor(t/2)+"px";e.css({"padding-top":o,"padding-bottom":o})}).trigger("resize"),$("#myCounter").mbComingsoon({expiryDate:new Date(2016,3,5,9,30),speed:100}),setTimeout(function(){$(window).resize()},200)});var initPhotoSwipeFromDOM=function(e){for(var t=function(e){for(var t=e.childNodes,o=t.length,i=[],n,r,a,l,s,c=0;o>c;c++)n=t[c],1===n.nodeType&&(a=n.children[0],l=a.getAttribute("data-size").split("x"),s={src:a.getAttribute("href"),w:parseInt(l[0],10),h:parseInt(l[1],10)},n.children.length>1&&(s.title=n.children[1].innerHTML),a.children.length>0&&(s.msrc=a.children[0].getAttribute("src")),s.el=n,i.push(s));return i},o=function d(e,t){return e&&(t(e)?e:d(e.parentNode,t))},i=function(e){e=e||window.event,e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.target||e.srcElement,i=o(t,function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()});if(i){for(var n=i.parentNode,a=i.parentNode.childNodes,l=a.length,s=0,c,d=0;l>d;d++)if(1===a[d].nodeType){if(a[d]===i){c=s;break}s++}return c>=0&&r(c,n),!1}},n=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var o=e.split("&"),i=0;i<o.length;i++)if(o[i]){var n=o[i].split("=");n.length<2||(t[n[0]]=n[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t.hasOwnProperty("pid")?(t.pid=parseInt(t.pid,10),t):t},r=function(e,o,i){var n=document.querySelectorAll(".pswp")[0],r,a,l;l=t(o),a={index:e,galleryUID:o.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=l[e].el.getElementsByTagName("img")[0],o=window.pageYOffset||document.documentElement.scrollTop,i=t.getBoundingClientRect();return{x:i.left,y:i.top+o,w:i.width}},history:!1,focus:!1},i&&(a.showAnimationDuration=0),r=new PhotoSwipe(n,PhotoSwipeUI_Default,l,a),r.init()},a=document.querySelectorAll(e),l=0,s=a.length;s>l;l++)a[l].setAttribute("data-pswp-uid",l+1),a[l].onclick=i;var c=n();c.pid>0&&c.gid>0&&r(c.pid-1,a[c.gid-1],!0)};initPhotoSwipeFromDOM(".my-simple-gallery"),$(".animsition").length&&$(".animsition").animsition({inClass:"fade-in",outClass:"fade-out",inDuration:800,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"});