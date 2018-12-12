;$(function(){
    //二维码的显示
    $(".q-bottom").on("mouseenter",function(){
        $(".qrc-wrapper").addClass("extend-up")
        $(this).find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up")
    })
    $(".q-bottom").on("mouseleave",function(){
        $(".qrc-wrapper").removeClass("extend-up")
        $(this).find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down")
    })
    //颜色选中
    $(".proattr-radio ul").on("click","li",function(){
        $(this).addClass("selected")
        .siblings("li").removeClass("selected")
    })
    //选项卡

    var obj={
        "tabareaIndex":0
    }
    $(".tabarea-items li").on("click",function(){
        $(this).addClass("current").siblings("li").removeClass("current");
        obj.tabareaIndex=$(this).index();
        $(".box img").eq(obj.tabareaIndex).addClass("showimg").siblings("img").removeClass("showimg")
    })
    //选择小图改变大图
    $(".imgzoom-thumb-main ul").on("mouseenter","li",function(){
        var src=$(this).find("img").attr("src");
        $(this).addClass("current").siblings("li").removeClass("current")
        $(".view-img img").attr("src",src);
        $(".imgzoom-pop img").attr("src",src);
        console.log($(this).find("img"),src)
    })
    //放大镜
    function Tobig(){};
    $.extend(Tobig.prototype,{
        init(){
            this.box=$(".imgzoom-main");
            this.small=$(".view-img");
            this.mark=$(".imgzoom-shot");
            this.big=$(".imgzoom-pop");
            this.bindEvent();
        },
        bindEvent(){
            this.box.on("mouseover",this.showPop.bind(this));
            this.box.on("mouseleave",this.hidePop.bind(this));
            
            this.mark.on("mousemove",this.move.bind(this))
        },
        showPop(){
            this.mark.css("opacity",".3");
            this.big.css("display","block");
        },
        hidePop(){
            this.mark.css("opacity","0");
            this.big.css("display","none");
        },
        move(event){
            let e=event||window.event;
            let left=e.pageX - this.box.offset().left- this.mark.width() /2;
            let top=e.pageY - this.box.offset().top - this.mark.height() /2;
            if(left<0){
                left=0;
            }else if(left >= this.small.width()-this.mark.width()){
                left=this.small.width()-this.mark.width();
                console.log(left)
            }else{
                left=left;
            }
            if(top<0){
                top=0;
            }else if(top >= this.small.height() - this.mark.height()){
                top=this.small.height() - this.mark.height();
            }else{
                top=top;
            }
            this.mark.css({"left":left})
            this.mark.css({"top":top})

            var x=left*2;
            var y=top*2;
            this.big.children().css({"left": -x +"px"});
            this.big.children().css({"top": -y +"px"});
        }

    })
    new Tobig().init();
})
//# sourceMappingURL=detail.js.map
