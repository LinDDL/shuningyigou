;$(function(){
    //商品分类显示隐藏
    $(".index-all-hook").on("mouseenter",function(){
        $(".index-sort-list-wrapper").css("display","block");
    })
    setTimeout(function(){
        $(".index-all-hook").on("mouseleave",function(){
            $(".index-sort-list-wrapper").css("display","none");
        })
    },2000)
    $(".index-sort-list-wrapper").on("mouseenter",function(){
        $(".index-sort-list-wrapper").css("display","block");
    });
    $(".index-sort-list-wrapper").on("mouseleave",function(){
        $(".index-sort-list-wrapper").css("display","none");
    });
    //品牌特效
    $(".s-brand").hover(function(){
        $(this).addClass("active");
        $(this).children().children(".b-text").css({
            "top":3,
        });
    },function(){
        $(this).children().children(".b-text").css({
            "top":"100%",
        });
        $(this).removeClass("active");
    })
   
    //加载数据，渲染页面
    function PoP(){};
    $.extend(PoP.prototype,{
        init:function(){
            this.general=$(".general");
            this.getData();
            this.bindEvent();
        },
        getData:function(){
            var options={
                url:"http://localhost:8001/json/goods.json",
                type:"GET",
                dataType:"json",
            };
            $.ajax(options)
            .then(function(res){
                console.log(res);
                this.renderPages(res);
            }.bind(this))
        },
        renderPages:function(data){
            var html="";
            for(var i=0;i<data.length;i++){
                html+=`
                <li  class="item-wrap mobileProduct">
                <div class="item-bg ">
                    <div class="product-box">
                        <input type="hidden" class="hidenInfo">
                        <div class="res-img">
                            <div class="img-block">
                                <a href="" class="sellPoint">
                                <img alt="【热卖爆品】Apple iPhone XS Max 256GB 金色 移动联通电信4G手机 双卡双待" src="${data[i].adSrc}">
                                <i class="rt"><img src="//image.suning.cn/uimg/pcms/label05/199118557640820508210400_05.png"></i></a>
                            </div>
                            <div class="focus-box disable-scroll">
                                <a href="javascript:void(0);" class="btn-l disabled"><b></b></a> <a href="javascript:void(0);" class="btn-r"><b></b></a>
                                <div class="focus-img">
                                    <dl style="width: 120px;" class="10606649862subCode">
                                        <dd>
                                            <a href="javascript:void(0)">
                                            <img width="32" height="32" src="${data[i].adSrc}">
                                            </a>
                                        </dd>
                                        <dd>
                                            <a href="javascript:void(0)">
                                            <img width="32" height="32" src="${data[i].adSrc}">
                                            </a>
                                        </dd>
                                        <dd>
                                            <a href="javascript:void(0)"  class="select">
                                                <img width="32" height="32" src="${data[i].adSrc}">
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="res-info">
                            <div class="price-box">
                                <span class="def-price">
            <i>¥</i>${data[i].tPrice}</span>
                            </div>
                            <div class="title-selling-point">
                                <a title="${data[i].sellpoint}" href="">${data[i].sellpoint}
                                <em style="">${data[i].title}</em>
                                </a>
                            </div>
                            <div class="info-config" title=" 256GB |6.1英寸以上">
                                <em> 256GB <i>|</i>6.1英寸以上</em>
                            </div>
                            <div class="evaluate-old clearfix">
                                <div class="info-evaluate">
                                <a target="_blank"  href=""><i>7.1万+</i>评价</a>
                                </div>
                            </div>
                            <div class="store-stock">
                                <a href="javascript:void(0);" class="store-class zy">苏宁自营</a>
                            </div>
                            <div class="sales-label" ishotbrief="false">
                                <span><i>大聚惠</i></span>
                                <span class=""><i>赠品</i><em></em></span>
                            </div>
                        </div>
                        <div class="res-opt one-third">
                            <a href="javascript:void(0);" class="btn-db"><i></i><em>取消</em>对比</a>
                            <a  href="javascript:void(0);"  class="btn-sc"><i></i><em>已</em>收藏</a>
                            <input type="hidden" value="1" class="cart-ipt">
                            <input type="hidden" value="1" class="ajaxSuccess">
                            <a href="" class="btn-gwc"><i></i>加入购物车</a>
                        </div>
                    </div>
                </div>
            </li>
                `
            }
            this.general.html(html);
        },
        bindEvent:function(){
            //商品列表效果
            $(".general").on("mouseenter",".item-wrap",function(){
                $(this).addClass("on")
            });
            $(".general").on("mouseleave",".item-wrap",function(){
                $(this).removeClass("on")
            });
        }
    })
    new PoP().init();
})

 

