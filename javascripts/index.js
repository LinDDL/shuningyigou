$(function(){
    /********  顶部广告位start  ********/
        $TOP_ACTIVE=$("#TOP_ACTIVE");
        $TOP_ACTIVE_WRAP=$("#TOP_ACTIVE_WRAP");
        $TOP_ACTIVE.on("click",function(){
            $TOP_ACTIVE.hide();
            $TOP_ACTIVE_WRAP.hide();
        })
    /******** 顶部广告位end ********/


    /******** 轮播图 start ********/
        var index=0;
        //获取轮播图的每个li
        var $slide=$(".banner").children().children("li");
        //获取图的数量，作为最大数index
        var MaxLength=$slide.length-1;
        //前面一个显示的图
        var prevIndex=0;
        //点击切换图片
        $(".btn-left").on("click",prev)
        $(".btn-right").on("click",next)
        //封装函数
        //向右切换
        function next(){
            if(index==MaxLength){
                index=0;
                changeClass()
                return false;
            }
            index++;
            changeClass()
        }
        //向左切换
        function prev(){
            if(index==0){
                index=MaxLength;
                changeClass()
                return false
            }
            index--;
            changeClass()
        }
        //动画
        function changeClass(){
            $slide.eq(index)
            .fadeIn()
            .siblings("li")
            .fadeOut() 
            
            $(".banner-nav").children("span").eq(index)
            .addClass("current")
            .siblings("span")
            .removeClass("current")
            
        }
        //渲染按钮
        function initPagination(){
            for(var i=0;i<MaxLength+1;i++){
                var $span=$("<span class='page-item'></span>")
                if(i==index){
                    $span.addClass("current");
                }
                $(".banner-nav").append($span)
            }
        }
        //事件委托，给按钮添加事件
        $(".banner-nav").on("mouseover","span",toIndex);
        function toIndex(event){
            var e=event||window.event;
            var target=e.target||e.srcElement;
            prevIndex=index;
            index=$(".banner-nav").children().index(target)
            changeClass()
        }
        initPagination()
        //自动循环播放
        var banner_timer=setInterval(function(){
            $(".btn-right").trigger('click')
        },3000)
        //性能优化，当鼠标移入时停止动画，移出开始
        $(".banner-wrapper").on("mouseover",function(){
            $(".banner-wrapper .btn").css("display","block");
            clearInterval(banner_timer)
        })
        $(".banner-wrapper").on("mouseout",function(){
            $(".banner-wrapper .btn").css("display","none");
             banner_timer=setInterval(function(){
                $(".btn-right").trigger('click')
            },3000)
        })

    /******** 轮播图 end ********/

    /******** 头条向上轮播 start*******/
        var $ul=$(".toutiao ul");
        var $li=$ul.children();
        // var $marginTop=$ul.css("margin-top")
        function changeMarginTop(){
                $ul.css({
                    "margin-top":"0"
                })
                .stop()
                .animate({
                    "margin-top":-$li.height()*3
                })               
        }
        setInterval(changeMarginTop,4000)
        
    /******** 头条向上轮播 end*******/
    
    /******** bn-hc start *******/
        var options={
            url: 'https://tuijian.suning.com/recommend-portal/dyBase.jsonp?u=&c=154341515643283540&cityId=010&sceneIds=19-84&count=4&viewCount=4&parameter=1984',
                type: 'GET',
                dataType: "jsonp",
                context:this
        }
        $.ajax(options)
        .then(function(res){
            var data=res.sugGoods[0].skus;
            //前端art-template模板
            var html=template.render($("#four-hc").html(),data);
            $(".four-hc").html(html);
            // $(".animate-hc ul").html(html1);
            // var html1="";
            // for(var i=0;i<data.length;i++){
            //     html1+=`<li class="item" style="width: 655px;">
            //         <div class="label label-bg1">
            //             <p style="color: #EF4124">电脑办公</p>
            //         </div>
            //         <div class="hclist">
            //             <div class="hc-con">
            //                 <a href="javascript:void(0)">
            //                     <p class="title">电脑办公</p>
            //                     <p class="des">最高直降1000</p>
            //                     <img class="pro" src="https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000767968141.jpg?ver=2000&format=80w_80h_4e" alt="">
            //                 </a>
            //             </div>
            //             <ul>
            //                 <li class="item1">
            //                     <a href="javascript:void(0)">
            //                         <p class="hc-title" style="color: #ef4124">台式主机</p>
            //                         <img class="pro" src="https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000010613652486.jpg?ver=2000&amp;format=80w_80h_4e">
            //                         <div class="desc-wrapper">
            //                             <p class="desc" style="background-color: #FC917E">1499元起</p>
            //                             <i class="angle angle-left"></i>
            //                             <i class="angle angle-right"></i>
            //                         </div>
            //                     </a>
            //                 </li>
                        
            //             </ul>
            //         </div>
            //     </li>`
            // }
            // $(".animate-hc ul").html(html1);
           
        })
        //原生跨域方法
    //     function _jsonp(url,cb){
    //         cb=cb?cb:"callback"
    //         var random_name="zh"+Date.now();
    //         return new Promise(function(resolve,reject){
    //             var _script=document.createElement("script");
    //             url+=(/\?/.test(url)?"&":"?")+cb+"="+random_name;
    //             _script.src=url;
    //             console.log(_script)
    //             document.body.appendChild(_script);
    //             window[random_name]=function(res){
    //                 resolve(res)
    //             }
    //             _script.onload=function(){
    //                 this.remove();
    //             }
    //         })
    //     }
    //     _jsonp("https://tuijian.suning.com/recommend-portal/dyBase.jsonp?u=&c=154341515643283540&cityId=010&sceneIds=19-84&count=4&viewCount=4&parameter=1984")
    //     .then(function(res){
    //   console.log(res)
    // })

        
    /******** bn-hc end *******/



    
})
// $(function(){
//     $("ul li").mousemove(function(){
//         $(this).stop().animate({
//             width:540
//         })
//         .siblings()
//         .stop()
//         .animate({
//             width:220
//         })
//     })
        
//     })
