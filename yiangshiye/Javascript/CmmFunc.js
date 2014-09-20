
/*
  时间的格式验证
*/
function doTimeFormat(objValue){
 var pattern=/^(([0]{1}[0-9]{1}[:]{1}|[1]{1}[0-9]{1}[:]{1}|[2]{1}[0-3]{1}[:]{1})([0-5]{1}[0-9]{1}|[6]{1}[0]{1})|[2]{1}[4]{1}[:]{1}[0]{1}[0]{1})$/;
 if(pattern.test(objValue)){
 	return true;
 }else{
    return false;
 	}
}
//计算字节数
function getTotalByte(obj) {
    var t = 0;
    for (var i = 0; i < obj.length; i++) {
        if (obj.substring(i, i + 1).charCodeAt() > 255) {
            t += 2;
        }
        else {
            t += 1;
        }
    }
    return t;
}
//获取对象
function $g(id)
{
    return document.getElementById(id);
}
//去除字符串两边空格
function trims(sInput) {
    var sInput=String(sInput);
    var sReturn;
    sReturn = sInput.replace(/(^\s*)|(\s*$)/g, "");
    return sReturn;
}
/*
转换成大写
参数：一个元素对象
*/
function toUpperCaseObj(obj)
{
    if(obj)
    {
       obj.value=String(obj.value).toUpperCase();
    }
}

/*
转换成大写
参数：一个元素名称
*/
function toUpperCaseTxt(txtElem)
{
    var obj=$getObj(txtElem);
    if(obj)
    {
        obj.value=String(obj.value).toUpperCase();
    }
}

/** 
isValidDate: 用于判断一个字符串是否是日期格式的字符串
 
返回值： 
true或false
 
参数： 
DateString： 判断的字符串 
Dilimeter ： 日期的分隔符，缺省值为'-' 
*/ 
function isValidDate(DateString , Dilimeter) 
{ 
		if (DateString==null) return false; 

		if (Dilimeter=='' || Dilimeter==null) 
			Dilimeter = '-'; 
			
		var tempy=''; 
		var tempm=''; 
		var tempd=''; 
		
		var tempArray; 
		
		if (DateString.length<8 && DateString.length>10) 
			return false;  
			
		tempArray = DateString.split(Dilimeter); 
		
		if (tempArray.length!=3) 
			return false; 
		if (tempArray[0].length==4) 
			{ 
				tempy = tempArray[0]; 
				tempd = tempArray[2]; 
			} 
		else 
			{ 
				tempy = tempArray[2]; 
				tempd = tempArray[1]; 
			} 
		tempm = tempArray[1]; 
		
		var tDateString = tempy + '/'+tempm + '/'+tempd+' 8:0:0';//加八小时是因为我们处于东八区 
		
		var tempDate = new Date(tDateString); 
		if (isNaN(tempDate)) 
			return false; 
		if (((tempDate.getUTCFullYear()).toString()==tempy) && (tempDate.getMonth()==parseInt(tempm, 10)-1) && (tempDate.getDate()==parseInt(tempd, 10))) 
			{ 
				return true; 
			} 
			else 
			{ 
				
				return false; 
			} 
}

/*
获取指定页面元素的位置(x,y)
*/
function getElementPosition(elementId)
{      
    var ua = navigator.userAgent.toLowerCase();     
    var isOpera = (ua.indexOf('opera') != -1);     
    var isIE = (ua.indexOf('msie') != -1 && !isOpera); // not opera spoof      
    var el = document.getElementById(elementId);      
    if(el.parentNode === null || el.style.display == 'none')
    {         
        return false;     
    }      
    var parent = null;     
    var pos = [];     
    var box;      
    if(el.getBoundingClientRect)         
    {   
        //IE
        box = el.getBoundingClientRect();         
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);         
        var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);         
        return {x:box.left + scrollLeft, y:box.top + scrollTop};     
    }     
    else if(document.getBoxObjectFor)    // gecko     
    {         
        box = document.getBoxObjectFor(el);                     
        var borderLeft = (el.style.borderLeftWidth)?parseInt(el.style.borderLeftWidth):0;         
        var borderTop = (el.style.borderTopWidth)?parseInt(el.style.borderTopWidth):0;          
        pos = [box.x - borderLeft, box.y - borderTop];     
    }     
    else        
    {   
        //safari & opera
        pos = [el.offsetLeft, el.offsetTop];         
        parent = el.offsetParent;        
        if (parent != el) 
        {             
           while (parent) 
           {                
            pos[0] += parent.offsetLeft;                
            pos[1] += parent.offsetTop;                 
            parent = parent.offsetParent;             
           }         
        }        
        if (ua.indexOf('opera') != -1  || ( ua.indexOf('safari') != -1 && el.style.position == 'absolute' ))          
        {
               pos[0] -= document.body.offsetLeft;                 
               pos[1] -= document.body.offsetTop;         
        }      
    }             
    if (el.parentNode) 
    { 
        parent = el.parentNode;
    }
    else 
    { 
        parent = null; 
    }        
    while (parent && parent.tagName != 'BODY' && parent.tagName != 'HTML')      
    {   
        //account for any scrolled ancestors        
        pos[0] -= parent.scrollLeft;        
        pos[1] -= parent.scrollTop;           
        if (parent.parentNode) 
        { 
            parent = parent.parentNode; 
        }          
        else 
        { 
            parent = null; 
        }     
    }     
 return {x:pos[0], y:pos[1]};
}


/*
得到QueryString值
------调用方法-------
var Request=new QueryString();
sID=Request["strID"];
*/
function QueryString()
{
    var name,value,i;
    var str=location.href;
    var num=str.indexOf("?")
    str=str.substr(num+1);
    var arrtmp=str.split("&");
    for(i=0;i < arrtmp.length;i++)
    {
        num=arrtmp[i].indexOf("=");
        if(num>0)
        {
            name=arrtmp[i].substring(0,num);
            value=arrtmp[i].substr(num+1);
            this[name]=value;
        }
    }
} 

/*
判断是否为空
*/
function checkIsEmpty(val)
{
    if(trim(String(val))=="")
        return true;
    else
        return false;
}

/*
sDate1和sDate2是2002-12-18格式
*/
function DateDiff(sDate1, sDate2)
{ 
    var aDate, oDate1, oDate2, iDays;
    aDate = sDate1.split("-")
    oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]) //转换为12-18-2002格式
    aDate = sDate2.split("-")
    oDate2 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0])
    iDays = parseInt((oDate1 - oDate2) / 1000 / 60 / 60 /24) //把相差的毫秒数转换为天数
    return iDays
}
/*
调用日历函数
*/
function showJrCalendar(v,checkIn,checkOut){
   
    if(v=="CHK_IN"){
        showCalendar(checkIn,true,checkIn,checkOut,checkOut,'','','','','','','');
    }else{
        showCalendar(checkOut,true,checkOut,null,null,'','','','','','','')
    }
}

/*
设置居中
*/
function setLayoutCenter(layerName){
    document.getElementById(layerName).style.left=(document.body.clientWidth-240)/2;
    var x = (document.getElementById(layerName).style.left).replace("px","");//浮动层固定于浏览器的x方向位置(从左往右)
    var y = 150;//浮动层固定于浏览器的y方向位置(从上往下)
    var diff = (parent.frames['mainFrame'].document.body.scrollTop + y - document.getElementById(layerName).style.posTop)*.20;
    var y = parent.frames['mainFrame'].document.body.scrollTop + y - diff;
    eval("document.all." + layerName + ".style.posTop = y");
    eval("document.all." + layerName + ".style.posLeft = x");//移动层
}

/*
滚动条顶部高度
*/
function getScrollTopHeight() {    
    var scrollTopHeight = 0;     
    if (typeof window.pageYOffset != 'undefined') {     
        scrollTopHeight = window.pageYOffset;     
    }     
    else if (typeof window.document.compatMode != 'undefined' &&     
       window.document.compatMode != 'BackCompat') {     
       scrollTopHeight = window.document.documentElement.scrollTop;     
    }     
    else if (typeof window.document.body != 'undefined') {     
       scrollTopHeight = window.document.body.scrollTop;     
    }     
    return scrollTopHeight;    
}
function getScrolls() 
{     
		var sTop = 0, sLeft = 0, sWidth = 0, sHeight = 0; 
        
		sTop = (document.body.scrollTop > document.documentElement.scrollTop)? document.body.scrollTop:document.documentElement.scrollTop;
		if( isNaN(sTop) || sTop <0 ){ sTop = 0 ;}
        
		sLeft = (document.body.scrollLeft > document.documentElement.scrollLeft )? document.body.scrollLeft:document.documentElement.scrollLeft;
		if( isNaN(sLeft) || sLeft <0 ){ sLeft = 0 ;}
		
		return { sTop:sTop, sLeft: sLeft, sWidth: sWidth, sHeight: sHeight }; 
}
/*层居中*/
function setCenter(name){
   var sc=getScrolls();
   var h1 = document.body.clientHeight;
   var h2 = document.documentElement.clientHeight;
   var isXhtml = (h2<=h1&&h2!=0)?true:false; //判断当前页面的Doctype是否为Xhtml
   var myBody = isXhtml?document.documentElement:document.body;
   var yy=myBody.clientHeight;
   var xx=myBody.clientWidth;
   var myobj=document.getElementById(name);
   var objhh=myobj.offsetHeight;
   var objww=myobj.offsetWidth;
   if(self!=top){
       if(objhh>yy)
         yy+=Math.abs(objhh-yy)+10;
   }
   myobj.style.position = "absolute";
   myobj.style.top=(yy-objhh)/2 + sc.sTop + "px";
   myobj.style.left=(xx-objww)/2 + "px";
}   
        
/*
鼠标拖动层(可任意绑定DIV标签)
联系方式:1034555083/zhanghuiguoanlige@126.com
调用方法:var myDrag=new Endrag(source,target,offSetX, offSetY);
参数说明:source--鼠标动作绑定对象;target--操作目标对象(要移动的对象);offSetX--横坐标偏移;offSetY--纵坐标偏移
说明:通过多次调用本方法绑定多个对象的拖动
*/
funs={
    index:1001,  
    getFocus:function (target){  
        if(target.style.zIndex!=this.index){  
            this.index += 2;  
            var idx = this.index;  
            target.style.zIndex=idx;  
        }  
    },
    abs:function (element) {
        var result = { x: element.offsetLeft, y: element.offsetTop};
        element = element.offsetParent;
        while (element) {
            result.x += element.offsetLeft;
            result.y += element.offsetTop;
            element = element.offsetParent;
        }
        return result;
    }
};
function dragDialog(source,target,offSetX, offSetY){
    source=typeof(source)=="object" ? source:document.getElementById(source);
    target=typeof(target)=="object" ? target:document.getElementById(target);
    var x0=0,y0=0,x1=0,y1=0,moveable=false,index=100,NS=(navigator.appName=='Netscape');
    offSetX=typeof offSetX== "undefined" ? 0:offSetX;
    offSetY=typeof offSetY== "undefined" ? 0:offSetY;
    source.onmousedown=function(e){
        e = e ? e : (window.event ? window.event : null);
        funs.getFocus(target); 
        if(e.button==(NS)?0 :1)  { 
            if(!NS){this.setCapture()}
            x0 = e.clientX ;  
            y0 = e.clientY ;  
            x1 = parseInt(funs.abs(target).x);  
            y1 = parseInt(funs.abs(target).y);    
            moveable = true;  
        }  
    };  
    //拖动;  
    source.onmousemove=function(e){
        e = e ? e : (window.event ? window.event : null);  
        if(moveable){  
            target.style.left = (x1 + e.clientX - x0 - offSetX) + "px";  
            target.style.top  = (y1 + e.clientY - y0 - offSetY) + "px";  
        }  
    }; 
    //停止拖动;  
    source.onmouseup=function (e){ 
        if(moveable)  {  
            if(!NS){this.releaseCapture();}
            moveable = false;  
        }  
    };
}

mask= function(){
    var mybg;
    return {
        show:function(){
            if(!mybg){
                mybg = document.createElement("div"); 
                mybg.setAttribute("id","maskBodyBg"); 
                mybg.style.background = "#000"; 
                mybg.style.width = "100%"; 
                mybg.style.height = document.body.clientHeight + "px"; 
                mybg.style.position = "absolute"; 
                mybg.style.top = "0"; 
                mybg.style.left = "0"; 
                mybg.style.zIndex = "1000"; 
                mybg.style.opacity = "0.3"; 
                mybg.style.filter = "Alpha(opacity=30)";
                document.body.style.overflow = "hidden"; 
                document.body.appendChild(mybg);
            }
            mybg.style.display="block"; 
        },
        hide:function(){
            var oBg=document.getElementById("maskBodyBg");
            if(oBg)
                oBg.style.display="none";
        }
    }
}();

//验证正整数
var isInteger=function(num){
    var r= /^[1-9][0-9]*$/;　　//正整数
    return r.test(num);
}

//验证整数
var isNumber=function(num){
    var r= /^\d+$/;　　//整数
    return r.test(num);
}

var isDigital=function(num){
    var r= /^\d+(\.[0-9]{0,2})?%?$/;　　//整数
    return r.test(num);
}

function clearDecimalSuffix(strValue,n){
    if(strValue.indexOf(".")>-1)
    {
        var cmm1=strValue.split(".")[0];
        var cmm2=strValue.split(".")[1];
        if(cmm2.length>=n)
        {
            cmm2=cmm2.substring(0,n);
        }
        else
        {
            for(var k=1;k<=n-cmm2.length;k++){
                cmm2+='0';
            }
        }
        strValue=cmm1 + "." + cmm2;
    }
    else
    {
        for(var p=1;p<=n;p++){
                if(p==1)
                    strValue=strValue + ".0";
                else
                    strValue=strValue + "0";
        }
    }
    return strValue;
}
        

/*初始化加载*/
function loadingInfo(msg){
    return "<table style='width:100%;border-collapse:collapse;' cellpadding='0' border='1' bordercolor='#999999' cellspacing='0'><tr><td style='text-align:center;color:Green;font-weight:bold; height:64px;line-height:64px;font-size:12px;'>" + msg + "</td></tr></table>";
}
/*显示处理中对话框*/
function displayDialogDoing(dialogId,btnnmlId,btntmpId)
{    
    showCenterDialog(dialogId);
  
    var oBtnnml=document.getElementById(btnnmlId);
    var oBtntmp=document.getElementById(btntmpId);
    if(oBtnnml)
    {
        oBtnnml.style.display='none';
    }
    if(oBtntmp)
    {
        oBtntmp.style.display='';
    }
    return true;   
}
/*显示居中对话框*/
function showCenterDialog(id)
{
    var oDialog=document.getElementById(id);
    if(oDialog)
    {
        oDialog.style.display="block";
        setCenter(id);
    }
}
//关闭层
function CloseDiv(id)
{
 $("#"+id).css("display","none");
 $("#gb").css("display","none");
}
//动态添加遮盖页面的层
function MaskDiv()
{
    var h=document.documentElement.scrollHeight; //可见元素高度
    var h1=document.documentElement.clientHeight;//浏览器高度
    var h2=h<h1?h1:h;
    var gb = $("<div/>").attr("id","gb") 
    .css({top:"0",left:"0",zIndex:"1",position:"absolute",filter:"alpha(opacity=10)",opacity:"0.3",background:"#CCC"}) 
    .css("width","100%").css("height",h2).css("display","none").appendTo(document.body ) ;  
}
//显示层居中
function ShowCenterDiv(divId)
{
    var divLeft =  document.documentElement.clientWidth/2-$("#"+divId).width()/2;
    var divTop =  document.documentElement.clientHeight/2-$("#"+divId).height()/2; 
    var divScrollTop = document.documentElement.scrollTop + divTop; //当前浏览器可见元素的TOP
    var divScrollLeft = divLeft - document.documentElement.scrollLeft/2; 
    $("#"+divId).animate({   top: divScrollTop + "px",    left: divScrollLeft + "px" },10); 
//    if( $("#gb").css("display")==undefined){
//       MaskDiv();
//    }
   // $("#gb").css("display","");
    
    $("#"+divId).fadeIn(600);
}
//获取keyCode
function getKeyCode(e) {
       var code;
       if (!e) var e = window.event;
       if (e.keyCode) code = e.keyCode;
       else if (e.which) code = e.which;
       return code;
}
//获取事件源ID
function GeteventId(e)
{
  var eid;
  if(e.target){
       eid=e.target.id;
    }else if(e.srcElement){
       eid=e.srcElement.id;
  }
  return eid;
}
//阻止事件冒泡
function EventBubbling(e)
{
  e = e ? e : (window.event ? window.event : null);
       if(e){
	      e.cancelBubble=true;
    }
}