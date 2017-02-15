/**
 * Created by xiaobei on 2017/2/10.
 */
    //下拉菜单->订单详情
window.onload= function () {
    var oClick=document.getElementById("click");
    var oDtlDown=document.getElementById("dtl_down");
    var bReady=false;
    var oBlance=document.getElementById("blance");
    var oPayment=document.getElementById("payment");
    var oWxPay=document.getElementById("wx_pay");
    var oEnsurPsw=document.getElementById("ensure_psw");
    var oLineBank=document.getElementById("online_bk");
    var oCountBla=document.getElementById("count_bla");
    var oDiscountH=document.getElementById("discount_h");
    var oLous=document.getElementById("lous");
    var oLousTit=document.getElementById("lous_tit");
    var oQuick=document.getElementById("quick");
    var oAltQuick=document.getElementById("alt_quickPay");
    var oAddCard=document.getElementById("addCard");
    var oInputCard=document.getElementById("input_card");
    var oInputClose=document.getElementById("input_close");
    var oInputEnsure=document.getElementById("input_ensure");
    var oDebitCard=document.getElementById("debit_card");
    var oCreditCard=document.getElementById("credit_card");
    var oEnsureAddCard=document.getElementById("entrue_addcard");
    var oCancelAddCard=document.getElementById("cancel_addcard");
    var oQuickPayTit=document.getElementById("quickPay_tit");
    var oBkTit=document.getElementById("bk_tit");
    var aBkTitLi=oBkTit.getElementsByTagName("li");
    var oBkShowTit=document.getElementById("bk_show_tit");
    var oBkShowRadio=oBkShowTit.getElementsByTagName("input");
    var aShowLik=document.getElementById("or_show_lik");


    oClick.onclick= function () {
        bReady=!bReady;
        if(bReady){
            oDtlDown.style.display="block";
        }
        else{
            oDtlDown.style.display="none";
        }
    }
    oPayment.onclick= function () {
        if(oPayment.checked==true){
            oLineBank.style.display="block";
        }
        if(oPayment.checked==false){
            oLineBank.style.display="none";
        }
        if(oPayment.checked==true&&oBlance.checked==false){
            oLineBank.style.display="block";
        }
    }
    
    //B2C页面的优惠点击按钮
    var bOk=false;
    oCountBla.onclick= function () {
        if(oDiscountH.style.display=="block") {
            oDiscountH.style.display = "none"
        }
        else{
            oDiscountH.style.display="block"
        }
    }
    //分期付款下拉菜单
    oLous.onclick= function () {
        if(oLous.checked == true){
            oLousTit.style.display='block';
        }
        else{
            oLousTit.style.display='none';
        }
    }
    //快捷支付下拉菜单
    oQuick.onclick= function () {
        if(oQuick.checked == true){
            oAltQuick.style.display="block";
        }
        else{
            oAltQuick.style.display="none";
        }
    }
    //添加银行卡
    oAddCard.onclick= function () {
        oInputCard.style.display="block";
    }
    //关闭按钮
    oInputClose.onclick= function () {
        oInputCard.style.display="none";
    }
    //下一步
    oInputEnsure.onclick= function () {
        oInputCard.style.display="none";
        oDebitCard.style.display="block";
    }
    //确定添加
    oEnsureAddCard.onclick= function () {
        oDebitCard.style.display="none";
        var aQuickPayLi=document.createElement("li");
        aQuickPayLi.innerHTML='<input type="radio" name="quickPayment"/>'+
        '<img src="images/bank_jiaotong.jpg" alt="银行卡"/>'+
            <!--通过判断银行卡是16还是19来判断是借记卡还是信用卡，同时截取后四位，放入span中-->
        '&nbsp;<span>信用卡(4311)</span>'+
        '<b>|单笔限额5千</b>';
        oQuickPayTit.appendChild(aQuickPayLi);
    }
    //取消添加
    //网银支付切换企业银行和个人银行
    for(var i=0;i<aBkTitLi.length;i++){
        aBkTitLi[i].index=i;
        aBkTitLi[i].onclick= function () {
            for(var j=0;j<aBkTitLi.length;j++){
                aBkTitLi[j].className="cell2";
            }
            this.className="cell2 active";
        }
    }
    //未选择银行卡则确认付款按钮的样式
        for(var i=0;i<oBkShowRadio.length;i++){
            if(!oBkShowRadio[i].checked){
                oEnsurPsw.onclick= function () {
                    oEnsurPsw.style.background="#ccc"
                    oEnsurPsw.innerHTML="登录到网上银行进行付款";
                    aShowLik.style.display="block";
                    aShowLik.innerHTML="请选择银行";
                }
            }
            oBkShowRadio[i].onclick= function () {
                oEnsurPsw.style.background="#f00";
                oEnsurPsw.innerHTML="确认付款";
                aShowLik.style.display="none";
                oEnsurPsw.onclick= function () {
                    oEnsurPsw.style.background="#f00";
                    oEnsurPsw.innerHTML="确认付款";
                    aShowLik.style.display="none";
                }
            }
        }
}








