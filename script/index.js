!function(e){e(".article").each(function(a){e(this).find("img").each(function(){var a;e(this).parent().hasClass("fancybox")||((a=this.alt)&&e(this).after('<span class="caption">'+a+"</span>"),e(this).wrap('<a href="'+this.src+'" title="'+a+'" class="fancybox"></a>'))}),e(this).find(".fancybox").each(function(){e(this).attr("rel","article"+a)})}),e.fancybox&&e(".fancybox").fancybox(),e(".article ul, .article ol").each(function(a,n){e(n).find("li").each(function(a,n){n=e(n);n.children().hasClass("li-inner")||n.wrapInner('<span class="li-inner"></span>')})}),e('.article input[type="checkbox"]').each(function(a,n){var c,s=e(n),n=n.checked,t='<span class="checkbox-wrap '+(n?"checked":"")+'"></span>';s.parent().hasClass("checkbox-wrap")||(c=(s=s.parent().parent()).text(),s.html(t+'<span class="check-content '+(n?"checked":"")+'">'+c+"</span>"))});var n=e(".about-me-mask"),c=(e(".avatar").on("click",function(){n.hasClass("open")||n.addClass("open")}),n.on("click",function(a){a.target.classList.contains("about-me-mask")&&n.removeClass("open")}),e("#backToTop"));e(document).on("scroll",function(){var a=e(document).scrollTop();100<a&&c.addClass("show"),a<=100&&c.removeClass("show")}),c.on("click",function(){e("html, body").animate({scrollTop:0},300)})}(jQuery);