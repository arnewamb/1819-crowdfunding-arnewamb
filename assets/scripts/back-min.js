var closeBtn=$("#closeBtn"),openBtn=$("#openBtn"),backWindow=$(".backWindow"),customAmount=$(".customAmount"),radius=$(".form-check-input");radius.click(function(){1==customAmount.hasClass("hide")&&customAmount.removeClass("hide")}),openBtn.click(function(){!0===backWindow.hasClass("hide")?(backWindow.removeClass("hide"),openBtn.css("border-radius","0px 0px 30px 30px")):(backWindow.addClass("hide"),openBtn.css("border-radius","30px 30px 30px 30px"))}),closeBtn.click(function(){console.log(backWindow.hasClass("hide")),backWindow.addClass("hide"),openBtn.css("border-radius","30px 30px 30px 30px")});