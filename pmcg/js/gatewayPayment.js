/**
 * Created by xiaobei on 2017/2/14.
 */

window.onload= function () {
    var oGatewayList=document.getElementById("gateway_list");
    var aGatewayLi=oGatewayList.getElementsByTagName("li");
    var aWidth=aGatewayLi[0].offsetWidth;
    var aHeight=aGatewayLi[0].offsetHeight;
    oGatewayList.style.height=(aHeight+20)*Math.ceil(aGatewayLi.length/4)+'px';

    for(var i=0;i<aGatewayLi.length;i++){
        aGatewayLi[i].index=i;
        aGatewayLi[i].style.left=(aWidth+52)*(i%4)+"px";
        aGatewayLi[i].style.top=Math.floor(i/4)*(20+aHeight)+'px'
    }
}









































































