;$(function(){
    //渲染页面
    function RenderPop(){};
    $.extend(RenderPop.prototype,{
        init(){
            this.box=$(".recommend-box");
            this.getDate();
        },
        getDate(){
            var options={
                url:'https://tuijian.suning.com/recommend-portal/recommend/paramsBiz.jsonp?parameters=000000000161786163&cityId=010&sceneIds=10-23&count=40&u=&c=154341515643283540&flag=',
                type:"GET",
                dataType:"jsonp",
            };
            $.ajax(options)
            .then(function(res){
                var json=res.sugGoods[0].skus;
                console.log(json)
                this.rendePage(json);
            }.bind(this))
        },
        rendePage(data){
            var html="";
            for(var i= 0;i<data.length;i++){
                html+=`
                <li class="product-box unlikeSign">
                <a href="javascriptL:void(0)" class="product-pic unlikeASign">
                    <img class="product-img lazy-loading" src="${data[i].pictureUrl}" alt="">
                </a>
                <p class="product-price-num"><span class="sn-price clearfix"><i class="price-icon l">¥</i><em class="price-big l">${data[i].price}</em></span><span class="product-num"><em>72.3万</em>人已购买</span></p>
                <p class="product-name">
                    <a href="javcascript:void(0)">
                            ${data[i].sugGoodsName}
                    </a>
                </p>
                <a href="javascript:void(0)" class="add-cart ">
                    <i></i>
                    加入购物车
                </a>
            </li>
                `
            }
            this.box.html(html);
        }
    });
    new RenderPop().init();
})
//# sourceMappingURL=cart.js.map
