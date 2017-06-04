/**
 * Created by windab on 2017/4/2.
 */
$(function () {
    //游戏列表
    var gameList = my$("gamelists");
    gameList.onclick = function () {
        if (this.firstElementChild.style.backgroundColor != "rgb(40, 43, 45)") {
            this.firstElementChild.style.backgroundColor = "rgb(40, 43, 45)";
            this.firstElementChild.firstElementChild.style.background = "url('images/topbar_1_z_e7632fe.png') no-repeat -34px 2px";
            this.firstElementChild.children[1].style.display = "none";
            $("#gamelink").show();
            console.log(1);
        } else {
            this.firstElementChild.style.backgroundColor = "#cf1132";
            this.firstElementChild.firstElementChild.style.background = "url('images/topbar_1_z_e7632fe.png') no-repeat";
            this.firstElementChild.children[1].style.display = "block";
            $("#gamelink").hide();
        }

    };
    //获取广告右下角红点
    var point = my$("redDian").getElementsByTagName("a");
    //中间广告图片div
    var middleImg = my$("middleImg").children;
    //广告文字
    var bannerText = my$("bannerText").children;
    //点注册点击事件函数
    //自动播放
    var timeId = setInterval(rightOnclick, 3000);
    //停止播放
    //var bannerObj = document.getElementsByClassName("banner")[0].firstElementChild;
    //bannerObj.onmouseover = function () {
    //    clearInterval(timeId);
    //};
    //bannerObj.onmouseout = function () {
    //    timeId = setInterval(rightOnclick, 2000);
    //};

    var count = 0;
    for (var i = 0; i < point.length; i++) {
        point[i].index = i;
        point[i].onmouseover = function () {
            for (var j = 0; j < point.length; j++) {
                point[j].className = "";
                animate(middleImg[j], {"opacity": 0});
                animate(bannerText[j], {"opacity": 0});
            }
            count = this.index;
            this.className = "red";
            //背景图改变
            animate(middleImg[this.index], {"opacity": 1});
            //广告文字改变
            animate(bannerText[this.index], {"opacity": 1})

        }
    }
    //左侧按钮
    var leftBtn = my$("leftbtn");
    leftBtn.onclick = leftOnclick;
    function leftOnclick() {
        if (count == 0) {
            count = 5;
        }
        for (var i = 0; i < point.length; i++) {
            point[i].className = "";
            animate(middleImg[i], {"opacity": 0});
            animate(bannerText[i], {"opacity": 0});
        }
        count--;
        point[count].className = "red";

        animate(middleImg[count], {"opacity": 1});
        animate(bannerText[count], {"opacity": 1});
        switch (count){
            case 0:$("#small").find("img").attr("src","images/a555.gif");$("#small").find("h2").text("坦克连·今日热血公测");$("#small").find("p").text("钢铁与热血的指尖碰撞！");break;
            case 1:$("#small").find("img").attr("src","images/a11.gif");$("#small").find("h2").text("光明大陆·今日iOS公测");$("#small").find("p").text("让我们再一次，改变世界");break;
            case 2:$("#small").find("img").attr("src","images/a22.gif");$("#small").find("h2").text("坦克连·今日热血公测");$("#small").find("p").text("绑架者电影火力支援");break;
            case 3:$("#small").find("img").attr("src","images/a33.gif");$("#small").find("h2").text("大航海之路一千零一夜");$("#small").find("p").text("探索百慕大沉船未解之谜");break;
            case 4:$("#small").find("img").attr("src","images/a444.gif");$("#small").find("h2").text("网易东方幻想巨制");$("#small").find("p").text("双节新版即将来袭");break;
        }
    };
    $("#leftbtn").mouseenter(function () {
        $(this).css("backgroundColor","#3c3d3f");
        $("#small").show();
        clearInterval(timeId);
        switch (count){
            case 0:$("#small").find("img").attr("src","images/a555.gif");$("#small").find("h2").text("坦克连·今日热血公测");$("#small").find("p").text("钢铁与热血的指尖碰撞！");break;
            case 1:$("#small").find("img").attr("src","images/a11.gif");$("#small").find("h2").text("光明大陆·今日iOS公测");$("#small").find("p").text("让我们再一次，改变世界");break;
            case 2:$("#small").find("img").attr("src","images/a22.gif");$("#small").find("h2").text("坦克连·今日热血公测");$("#small").find("p").text("绑架者电影火力支援");break;
            case 3:$("#small").find("img").attr("src","images/a33.gif");$("#small").find("h2").text("大航海之路一千零一夜");$("#small").find("p").text("探索百慕大沉船未解之谜");break;
            case 4:$("#small").find("img").attr("src","images/a444.gif");$("#small").find("h2").text("网易东方幻想巨制");$("#small").find("p").text("双节新版即将来袭");break;
        }

    }).mouseleave(function () {
        $(this).css("backgroundColor","#cf0f32");
        $("#small").hide();
        timeId = setInterval(rightOnclick, 3000);
    });

    //右按钮
    var rightBtn = my$("rightbtn");
    rightBtn.onclick = rightOnclick;
    function rightOnclick() {
        if (count == 4) {
            count = -1;
        }
        for (var i = 0; i < point.length; i++) {
            point[i].className = "";
            animate(middleImg[i], {"opacity": 0});
            animate(bannerText[i], {"opacity": 0});
        }
        count++;
        point[count].className = "red";

        animate(middleImg[count], {"opacity": 1});
        animate(bannerText[count], {"opacity": 1});

        switch (count){
            case 0:$("#small2").find("img").attr("src","images/a22.gif");$("#small2").find("h2").text("坦克连·今日热血公测");$("#small2").find("p").text("绑架者电影火力支援");break;
            case 1:$("#small2").find("img").attr("src","images/a33.gif");$("#small2").find("h2").text("大航海之路一千零一夜");$("#small2").find("p").text("探索百慕大沉船未解之谜");break;
            case 2:$("#small2").find("img").attr("src","images/a444.gif");$("#small2").find("h2").text("网易东方幻想巨制");$("#small2").find("p").text("双节新版即将来袭");break;
            case 3:$("#small2").find("img").attr("src","images/a555.gif");$("#small2").find("h2").text("坦克连·今日热血公测");$("#small2").find("p").text("钢铁与热血的指尖碰撞！");break;
            case 4:$("#small2").find("img").attr("src","images/a11.gif");$("#small2").find("h2").text("光明大陆·今日iOS公测");$("#small2").find("p").text("让我们再一次，改变世界");break;
        }
    }
    $("#rightbtn").mouseenter(function () {
        $(this).css("backgroundColor","#3c3d3f");
        $("#small2").show();
        clearInterval(timeId);
        switch (count){
            case 0:$("#small2").find("img").attr("src","images/a22.gif");$("#small2").find("h2").text("坦克连·今日热血公测");$("#small2").find("p").text("绑架者电影火力支援");break;
            case 1:$("#small2").find("img").attr("src","images/a33.gif");$("#small2").find("h2").text("大航海之路一千零一夜");$("#small2").find("p").text("探索百慕大沉船未解之谜");break;
            case 2:$("#small2").find("img").attr("src","images/a444.gif");$("#small2").find("h2").text("网易东方幻想巨制");$("#small2").find("p").text("双节新版即将来袭");break;
            case 3:$("#small2").find("img").attr("src","images/a555.gif");$("#small2").find("h2").text("坦克连·今日热血公测");$("#small2").find("p").text("钢铁与热血的指尖碰撞！");break;
            case 4:$("#small2").find("img").attr("src","images/a11.gif");$("#small2").find("h2").text("光明大陆·今日iOS公测");$("#small2").find("p").text("让我们再一次，改变世界");break;
        }
    }).mouseleave(function () {
        $(this).css("backgroundColor","#cf0f32");
        $("#small2").hide();
        timeId = setInterval(rightOnclick, 3000);
    });

    //主体左侧点击注册事件
    //左侧li标签
    var liObj = my$("gameName").children[0].children;
    //游戏图片
    var gameImg = my$("gameImg").children[0].children;
    for (var i = 0; i < liObj.length; i++) {
        liObj[i].index = i;
        //鼠标点击
        liObj[i].onclick = function () {
            for (var j = 0; j < liObj.length; j++) {
                liObj[j].className = "";
                gameImg[j].className = "";
                liObj[j].removeAttribute("down");
            }
            gameImg[this.index].className = "show";
            this.className = "click";
            this.setAttribute("down", "9");
        };
        //鼠标进入离开
        liObj[i].onmouseenter = function () {
            this.className = "click";
        };
        liObj[i].onmouseleave = function () {
            console.log(this.getAttribute("down"));
            for (var j = 0; j < liObj.length; j++) {
                if (liObj[j].getAttribute("down")=="9") {
                    liObj[j].className = "click";
                }else{
                    liObj[j].className = "";
                }
            }
        }
    }
    ;
//姜娜出品=================================================================================================================
//活动部分开始
    //活动部分开始
    var ulObj = my$("uu");
    var liObjs = ulObj.children;
    var iObjs = ulObj.getElementsByTagName("i");
    var iWidth = iObjs.offsetWidth;
    for (var i = 0; i < liObjs.length; i++) {
        liObjs[i].setAttribute("index", i);
        liObjs[i].onmouseover = mouseoverHandle;
        liObjs[i].onmouseout = mouseoutHandle;
    }
    function mouseoverHandle() {
        var index = parseInt(this.getAttribute("index"));
        animate(iObjs[index], {"width": 40});
        this.style.opacity = 0.7;

    }

    function mouseoutHandle() {
        var index = parseInt(this.getAttribute("index"));
        animate(iObjs[index], {"width": 20});
        this.style.opacity = 1;
    }

    //活动部分结束
    //公告部分开始
    ////获取大的div
    //var bigObj = my$("hot-box");
    ////获取里边的图片
    //var imgObjs = bigObj.getElementsByTagName("img");
    //var imgHeight = imgObjs.offsetHeight;
    ////获取里边的div
    //var smallObjs = bigObj.getElementsByClassName("hot-font");
    //for (var i = 0; i < imgObjs.length; i++) {
    //    imgObjs[i].setAttribute("index", i);
    //    imgObjs[i].onmouseover = function () {
    //        var index = parseInt(this.getAttribute("index"));
    //        animate(smallObjs[index], {"top": 0,"opacity":1});
    //        //注册鼠标进入离开
    //        smallObjs[index].onmouseout = function () {
    //            animate(this, {"top": -176 ,"opacity":0});
    //        }
    //        smallObjs[index].onmouseover = function () {
    //            animate(this, {"top": 0,"opacity":1});
    //        }
    //    }
    //    imgObjs[i].onmouseout = function () {
    //        //this.style.display="block";
    //        var index = parseInt(this.getAttribute("index"));
    //        animate(smallObjs[index], {"top": -176,"opacity":0});
    //    }
    //
    //}
    $(".hot-font").slideUp();
    $(".hot-bg-img").mouseenter(function(){
        //console.log( $(".hot-bg-img"));
        var index=$(this).parent().parent().index();
        //$(".hot-font:eq("+index+")").css("opacity",1);
        $(".hot-font:eq("+index+")").stop().slideDown();

    }).mouseleave(function(){
        var index=$(this).parent().parent().index();
        $(".hot-font:eq("+index+")").stop().slideUp();
        //$(".hot-font:eq("+index+")").css("opacity",1);
    });

    //公告右侧开始
    var uuObj = my$("uu1");
    var liObjs = uuObj.getElementsByTagName("li");
    for (var i = 0; i < liObjs.length; i++) {
        liObjs[i].onmouseover = overHandle;
        liObjs[i].onmouseout = outHandle;
    }
    function overHandle() {
        for (var j = 0; j < liObjs.length; j++) {
            liObjs[j].style.backgroundColor = "white"
        }
        this.style.backgroundColor = "#CBE6EF";
    }

    function outHandle() {
        for (var j = 0; j < liObjs.length; j++) {
            liObjs[j].style.backgroundColor = "white"
        }
    }
    //查看更多
    //$(".con-wrap3").slideUp(455);
    $("#morelook").click(function () {
        if($(this).children("a").text()=="查看更多"){
            $(".con-wrap3").animate({"height":730}, function () {
                $("#morelook").children("a").text("收起");
            });
        }else{
            $(".con-wrap3").animate({"height":450}, function () {
                $("#morelook").children("a").text("查看更多");
            });
        }

    });

    //公告右侧结束
//底部开始
    var footer = my$("footer");
    var aObjs = footer.getElementsByTagName("a");
    var txt1s = footer.getElementsByClassName("txt1");
    var txt2s = footer.getElementsByClassName("txt2");
    for (var i = 0; i < aObjs.length; i++) {
        aObjs[i].setAttribute("index", i);
        aObjs[i].onmouseover = mouseoverHandle1;
        aObjs[i].onmouseout = mouseoutHandle1;
    }
    function mouseoverHandle1() {
        for (var j = 0; j < txt1s.length; j++) {
            var index = parseInt(this.getAttribute("index"));
            txt1s[index].style.color = "white";
        }
        for (var j = 0; j < txt2s.length; j++) {
            var index = parseInt(this.getAttribute("index"));
            txt2s[index].style.color = "white";
        }
    };
    function mouseoutHandle1() {
        for (var j = 0; j < txt1s.length; j++) {
            var index = parseInt(this.getAttribute("index"));
            txt1s[index].style.color = "#000";
        }
        for (var j = 0; j < txt2s.length; j++) {
            var index = parseInt(this.getAttribute("index"));
            txt2s[index].style.color = "gray";
        }
    }

    //底部结束
});

