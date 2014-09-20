
// JScript 文件


String.prototype.TrimV=function(c){
  var reg=new RegExp("(^"+c+"*)|("+c+"*$)","g");
  return this.replace(reg,"");
}
function getLeft(id) {
    var obj=document.getElementById(id);

    if (obj == null)
        return null;
 
    return obj.getBoundingClientRect().left+document.documentElement.scrollLeft;

    
};
function getTop(id) {
    var obj=document.getElementById(id);
    if (obj == null)
        return null;
 
    return obj.getBoundingClientRect().top+document.documentElement.scrollTop;
};



function getLeftByObj(obj) {
 
    if (obj == null)
        return null;
 
     return obj.getBoundingClientRect().left+document.documentElement.scrollLeft;
};
function getTopByObj(obj) {
 
    if (obj == null)
        return null;
 
      return obj.getBoundingClientRect().top+document.documentElement.scrollTop;
};


function getWidth(id)
{
   var w;
   var o=document.getElementById(id);
   if(o!=null)
   {
        w=o.offsetWidth;
        if(w==null||w==0)
        {
            w=o.style.width;
        }
   }
   return w;

}


function getHeight(id)
{
   var h;
   var o=document.getElementById(id);
   if(o!=null)
   {
        h=o.offsetHeight;
        if(h==null||h==0)
        {
            h=o.style.height;
        }
   }
   return h;

}



//产生随机数
rnd.today=new Date();
rnd.seed=rnd.today.getTime();
function rnd() {
　　　　rnd.seed = (rnd.seed*9301+49297) % 233280;
　　　　return rnd.seed/(233280.0);
};
function rand(number) {
　　　　return Math.ceil(rnd()*number);
};


var getElementsByClassName = function(searchClass,node,tag) {
    if(document.getElementsByClassName){
        return  document.getElementsByClassName(searchClass)
    }else{   
        node = node || document;
        tag = tag || '*';
        var returnElements = []
        var els =  (tag === "*" && node.all)? node.all : node.getElementsByTagName(tag);
        //var i = els.length;
        var i = 0;
        searchClass = searchClass.replace(/\-/g, "\\-");
        var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
        while(++i < els.length){
            if (pattern.test(els[i].className) ) {
                returnElements.push(els[i]);
            }
        }
        return returnElements;
    }
}
//Request["qs"]
function QueryString(qs) { s = location.href; var SharpIndex=s.indexOf("#"); if (SharpIndex!=-1) { s=s.substring(0,SharpIndex); } s = s.replace("?","?&").split("&"); re = ""; for(i=1;i <s.length;i++) { if(s[i].indexOf(qs+"=")==0) { re = s[i].replace(qs+"=",""); } } return re; }

function QueryStringFromStr(s1,qs) 
{
    s = s1.replace("?","?&").split("&"); 
    re = ""; 
    for(var i=0;i <s.length;i++) 
    { 
		var p=s[i].split('=');
        if(p[0]==qs)
         {
            re = p[1]; 
         } 
    } return re; 
}

//把 /转成 <g>
function changetog(str)
{
    var _re=str.replace(/\//ig,'<g>');
    return _re;
}

//把<g>转回 /
function rechangetog(str)
{
    var _re=str.replace(/<g>/ig,'index.html');
    return _re;
}

 //取checkbox值(radio)
function getCheckBoxValue(InName)
{
	var _re='';
	var o=document.getElementsByName(InName);
	for(var i=0;i<o.length;i++)
	{
		if(o[i].checked==1)
		{
			_re=o[i].value;
		}
 
	}
	return(_re);
}
//给值(radio)
function setCheckBoxValue(InName,va)
{
	var o=document.getElementsByName(InName);
	for(var i=0;i<o.length;i++)
	{
		 if(o[i].value==va)
		 {
			o[i].checked=true;
		 }else
		 {
			o[i].checked=false;
		 }
	}
}

//邮className得到CheckBoxList值
function getCheckBoxListValue(ClassName)
{
    var _re="0";//容个错
    var o=getElementsByClassName(ClassName);
    for(var i=0;i<o.length;i++)
    {
        if(o[i].checked)_re+=','+o[i].value;
    }
    return _re;
}

//邮ClassName还原CheckBoxList
function setCheckBoxList(ClassName,va)
{
    var o=getElementsByClassName(ClassName);
    var arr=va.split(',');
    for(var i=0;i<o.length;i++)
    {
        for(var j=0;j<arr.length;j++)
        {
            if(o[i].value==arr[j])o[i].checked=true;
        }
    }
}
 

//写iframe 上标题
function setIFrameTitle(titlename)
{
    parent.document.getElementById('frametitle').innerText=titlename;
}


var getElementsByClassName = function(searchClass,node,tag) {
    if(document.getElementsByClassName){
        return  document.getElementsByClassName(searchClass)
    }else{   
        node = node || document;
        tag = tag || '*';
        var returnElements = []
        var els =  (tag === "*" && node.all)? node.all : node.getElementsByTagName(tag);
        //var i = els.length;
        var i = 0;
        searchClass = searchClass.replace(/\-/g, "\\-");
        var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
        while(++i < els.length){
            if (pattern.test(els[i].className) ) {
                returnElements.push(els[i]);
            }
        }
        return returnElements;
    }
}
function mbLine(){
    try
    {

             var o=getElementsByClassName("mbLine");
     
	        for(var i=0;i<o.length;i++)
	        {
	            o[i].style.display='';
    	    
	        }
 
   }catch(e){}
}

//关闭/隐
var mbLineS = 1;
function mbLineShow(){
  var mbLine = getElementsByClassName("mbLine");
  if(mbLineS==1){
   for(var i=0; i<mbLine.length; i++){
	mbLine[i].style.display = "none";
	}
	mbLineS = 0;
  }else{
   for(i=0; i<mbLine.length; i++){
	mbLine[i].style.display = "";
	}
	mbLineS = 1;
  }
}



// JScript 文件
 
 
window.onerror=fnErrorTrap; 
function fnErrorTrap(sMsg,sUrl,sLine){ 
//    var s=" <b>An error was thrown and caught. </b> <p>"; 
//    s+="Error: " + sMsg + " <br>"; 
//    s+="Line: " + sLine + " <br>"; 
//    s+="URL: " + sUrl + " <br>"; 
//    alert(s);
    return true; 
} 

 
 var divContent='<div class="mainblock" id="{0}" style="{2}">\
     <div class="noInherit">\
      <div class="mbPadding">\
        <div class="mbLine"></div>\
        <div class="mbContent" id="{1}">\
        \
        </div>\
        <div class="clear"></div>\
      </div>\
     </div>\
     </div>\r\n    '; 
     
//模板里加用这个
var tem_divContent='<div class="mainblock" id="{0}" style="{2}">\
     <div class="noInherit">\
      <div class="mbPadding">\
        <div class="mbLine"></div>\
        <div class="mbContent" id="{1}">\
        \
        </div>\
        <div class="clear"></div>\
      </div>\
     </div>\
     </div>\r\n'; 
     
     
     

var topID='';//定义当前选中的ID



function isTopID()
{
    {if(topID!='')return true; else return false;}
}

function getNumber()
{
    var t='<p class="num" id="spNumber{2}"  onclick="MainsetFocus({0},this);">{1}</p>';
    
    //区域
    var to='';
    //var o=getElementsByClassName("mbContent");
    
    var o=$('.mbContent').not($('.TabEditRegin').find('.mbContent'));

    for(var i=0;i<o.length;i++)
    {
            to+=t.replace('{1}',i+1).replace('{0}',i).replace('{2}',i);
    }

    if(parent!=null)
    parent.document.getElementById('toTd').innerHTML=to;
    
    //开始选项卡区域
    var tTab='<p class="num" onclick="MainsetFocusTab({0},this);">{1}</p>';
    //选项卡区域
    var Tabto='';
    var o2=$('.TabEditRegin');
    var _count=0;
    for(var p=0;p<o2.length;p++) //p总的大选项母数
    {
        var _tabitem=$(o2[p]).find('.mbContent'); //某个itemlist
        
        if(_tabitem.length>0)
        {
            var _titleTitle="<p style='float:left;width:15px;margin-right:15px;background-color:ccdfef; border:1px #aabbd1 solid;font-family: Verdana, Arial, Helvetica, sans-serif; font-size:12px; text-align:center;height:14px;'>"+(p+1)+"</p>";
             Tabto+=_titleTitle;
            for(var i=0;i<_tabitem.length;i++)
            {
                    Tabto+=tTab.replace('{1}',i+1).replace('{0}',_count).replace('{2}',i);
                    _count++;
            }
            Tabto+="<br /><br />";
        }
    }
    
    



    if(parent!=null)
    parent.document.getElementById('TabRegion').innerHTML=Tabto;
    
    
}
 

function FloatAll()
{
    HiAll();
    //var o=getElementsByClassName("mainblock");
    var o=$('.mainblock').not($('.TabEditRegin').find('.mainblock'));

    for(var i=0;i<o.length;i++)
    {

            if(o[i].id.indexOf('MAIN_')==-1)
            {
                (function(){ 
                    var temp = o[i]; 
                    var p = i; 
                    temp.onclick = function(){setFocus(p,parent.document.getElementById('spNumber'+p));} 
                    } 
                )();
            }
            else
            {

                (function(){ 
                    var temp = o[i]; 
                    var p = i; 
                    temp.onclick = function(){} 
                    } 
                )();
            }
    }
}


function getEditRegin()
{
    //普通内容区
    var o=getElementsByClassName("EditRegin");
    if(o!=null)
    {
        if(o.length!=0)
        {
            for(var i=0;i<o.length;i++)
             {     

                        (function(){ 
                            var temp = o[i]; 
                            temp.onmouseover = function(){
                                showEditGif(temp.id);
                                } 
                            } 
                        )();
                        
//                        (function(){ 
//                            var temp = o[i]; 
//                            temp.onmouseout = function(){HiEditGif(temp.id);} 
//                            } 
//                        )();
                        

                         
             }
         }
 
     }
     
     //Tab内容区
    var tabo=getElementsByClassName("TabEditRegin");
    if(tabo!=null)
    {
        if(tabo.length!=0)
        {
            for(var i=0;i<tabo.length;i++)
             {     

                        (function(){ 
                            var temp = tabo[i]; 
                            temp.onmouseover = function(){
                                showTabEditGif(temp.id);
                                } 
                            } 
                        )();
                        
//                        (function(){ 
//                            var temp = o[i]; 
//                            temp.onmouseout = function(){HiEditGif(temp.id);} 
//                            } 
//                        )();
                        

                         
             }
         }
 
     }
     
      
     
}



function getReginData()
{

    var o=getElementsByClassName("EditRegin");
    if(o!=null)
    {
        var sPath = document.location.pathname+document.location.search; //==by Leotiger
        var idStr='';
        if(sPath.indexOf("_id=")>-1){
            var re=sPath.match(/_id=\d+/);
            if(re!=null&&re!='')
            {
                idStr='&'+re;
            }
        }
        
        //代入当前地址里的pageid
        var pageid=QueryStringFromStr(sPath,"pageid");
        if(pageid!=null&&pageid!='')
        {
            idStr+='&pageid='+pageid;
        }
        
        //代入当前地址里的-temid 以示区pageid区别
        var temid=QueryStringFromStr(sPath,"temid");
        if(temid!=null&&temid!='')
        {
            idStr+='&pageid=-'+temid;
        }

        var _len=0;
        if(o.length!=0)
        {
            for(var i=0;i<o.length;i++)
             {     
                try
                {
                     getContent('../ProAjax/getReloadData.aspx?divName='+o[i].id+idStr,o[i].id,o.length);
                }catch(e){}
             }
             

   
         }
 
     }
     
     

     
}



function getDataByDivName(DivNameStr)
{
    var sPath = document.location.pathname+document.location.search; //==by Leotiger
    var idStr='';
        if(sPath.indexOf("_id=")>-1){
            var re=sPath.match(/_id=\d+/);
            if(re!=null&&re!='')
            {
                idStr='&'+re;
            }
        }
        //代入当前地址里的pageid
        var pageid=QueryStringFromStr(sPath,"pageid");
        if(pageid!=null&&pageid!='')
        {
            idStr+='&pageid='+pageid;
        }
        
        //代入当前地址里的-temid 以示区pageid区别
        var temid=QueryStringFromStr(sPath,"temid");
        if(temid!=null&&temid!='')
        {
            idStr+='&pageid=-'+temid;
        }
        var _len=0;
        
        var o=DivNameStr.split(',');
        if(o.length!=0)
        {
            for(var i=0;i<o.length;i++)
             {     
                try
                { 
                     getContent('../ProAjax/getReloadData.aspx?divName='+o[i]+idStr,o[i],0);
                }catch(e){}
             }
             
         }
}
//静态页异步获取函数
function getDataByDivNameForStatic(DivNameStr,param){
   var o=DivNameStr.split(',');
   var _par=document.location.search.TrimV("[\?]"); 
   //alert(_par); 
   if(_par.length>0){
      param=_par;
   }
   param="&"+param.TrimV("[\&]");
   if(o.length!=0)
   {
       for(var i=0;i<o.length;i++)
        {     
           try
           {
                getContent('../ProAjax/getReloadData.aspx?divName='+o[i]+param,o[i],0);
           }catch(e){}
        }
    }
}


function getLastChar(str)
{
    if(str!='')
    {
        var l=str.length;
        return str.substring(l-1)
    }
}

var _editdiv=null;

function showEditGif(id)
{
 
 try
 {
    //显示两个div
    //1用于拖动
    //2用于点击编辑
    
    var sPath = document.location.pathname; //==by Leotiger
    
    if(getLastChar(id)=='T'&&sPath.indexOf('TypeSetTep.aspx')==-1) //最后一个字符是T的是模板,则在非模板页不显示编辑
    {
        
    }
    else
    {
        var t=document.getElementById('DV_'+id);
        if(t!=null)
        {
            if(document.getElementById(id).style.position.toLowerCase()=='absolute')
            {
                t.style.display='';
                t.style.marginLeft='0px';
                t.style.marginRight='5px';
                FloatDiv(id);
                document.getElementById('Mov_'+id).style.display='';
            }else
            {
                var o=document.getElementById(id);
                var left=getLeft(id)+o.offsetWidth-40;
                var top=getTop(id);
             
                t.style.display='';
                t.style.left=left;
                t.style.top=top;
            }
        }
      
    }
    
    //if(_editdiv!=null)clearTimeout(_editdiv);
    
 }catch(e){}

}



function showTabEditGif(id)
{

    if((!document.getElementById('DV_'+id))||document.getElementById('DV_'+id).style.display=='none')
    {
        var sPath = document.location.pathname+document.location.search; //==by Leotiger
        
        if(getLastChar(id)=='T'&&sPath.indexOf('TypeSetTep.aspx')==-1) //最后一个字符是T的是模板,则在非模板页不显示编辑
        {
            
        }
        else
        {
            

            //代入当前地址里的pageid
            var pageid=QueryStringFromStr(sPath,"pageid");

        
            var _t='<font size=+0><div style="width:120px;height:10px;display:none;position:absolute;z-index:1000;" id="DV_'+id+'">\
    <a href="javascript:ShowTabMenu(\''+id+'\','+pageid+')" style="color:#CC3300; font-size:12px;background-color:#FFFF00;float:left;">编辑</a>\
    <div id="Mov_'+id+'" style="display:none; float:right;" class="MovClass"><img src="/images/moveico.gif" alt="" /></div></div>\
    </font>';
        
            //document.getElementById(id).innerHTML=_t+document.getElementById(id).innerHTML;

            //$('#'+id).children()
            //$('#'+id).append(_t);
            $(_t).insertBefore($('#'+id).children());
            var t=document.getElementById('DV_'+id);

            if(t!=null)
            {
                if(document.getElementById(id).style.position.toLowerCase()=='absolute')
                {
                    t.style.display='';
                    t.style.marginLeft='0px';
                    t.style.marginRight='5px';                                               
                    FloatDiv(id);
                    document.getElementById('Mov_'+id).style.display='';
                }else
                {
                    var o=document.getElementById(id);
                    var left=getLeft(id)+o.offsetWidth-40;
                    var top=getTop(id);
                 
                    t.style.display='';
                    t.style.left=left;
                    t.style.top=top;
                }
            }
          
        }
      }
}


function HiEditGif(id)
{
     var e='HiEditGifAct(\''+id+'\')'
     _editdiv=setTimeout(e,2000);
    
}

function HiEditGifAct(id)
{
    var _t=document.getElementById('DV_'+id);
    _t.style.display='none';
}


 
function setDiv(id,state)
{
    try
    {
	    var w=document.getElementById(id).offsetWidth;
    	
	    var BorderWidth=document.getElementById(id).style.borderWidth;
     
        var offsetLeft=getLeft(id);
        var offsetTop=getTop(id);
     
        
        var t='<span style="border:1px solid #CC99FF; background-color:#ccc;width:'+w+'px;z-index:101;text-align:center;position: absolute; top: '+offsetTop+'px; height: 5px; left: '+offsetLeft+'px;filter:alpha(opacity=50);opacity: 0.5;">'+w+'px</span>';
     
        if(state==0)
        {
            document.getElementById("Wstate").style.display='none';
        }
        else
        {
            document.getElementById("Wstate").style.display='';
            document.getElementById("Wstate").innerHTML=t;
        }
    }catch(e){}
}

function setFocus(id,thisobj)
{	    

    if(topID!='')
    {
        //判断是不是自已
        var _topID=$('.mbContent').not($('.TabEditRegin').find('.mbContent'))[id].id.replace('blockC_','block_');
        //var _topID=getElementsByClassName("mbContent")[id].id.replace('blockC_','block_');
        if(_topID==topID)//是自己 //隐藏所有
        {
            //document.getElementById("Wstate").style.display='none';
            //HiAll();
            //topID='';
            setDiv(topID,1);
        }else
        {
            HiAll();
            if(thisobj!=null){thisobj.style.cssText=thisobj.style.cssText+';background:blue';}

             var thisID=$('.mbContent').not($('.TabEditRegin').find('.mbContent'))[id].id;
             topID=thisID.replace('blockC_','block_');


             setDiv(topID,1);
             
           }  
    }else
    {
        HiAll();
        if(thisobj!=null){thisobj.style.cssText=thisobj.style.cssText+';background:blue';}

         var thisID=$('.mbContent').not($('.TabEditRegin').find('.mbContent'))[id].id;
         topID=thisID.replace('blockC_','block_');
         setDiv(topID,1);

    }
}

//选项卡的
function setFocusTab(id,thisobj)
{	    

    if(topID!='')
    {
        //判断是不是自已
        var _topID=$('.TabEditRegin').find('.mbContent')[id].id.replace('blockC_','block_');
        //var _topID=getElementsByClassName("mbContent")[id].id.replace('blockC_','block_');
        if(_topID==topID)//是自己 //隐藏所有
        {
            setDiv(topID,1);
        }else
        {
            HiAll();
            if(thisobj!=null){thisobj.style.cssText=thisobj.style.cssText+';background:blue';}

             var thisID=$('.TabEditRegin').find('.mbContent')[id].id;
             topID=thisID.replace('blockC_','block_');
             setDiv(topID,1);
             
        }
    }
    else
    {
        HiAll();
        if(thisobj!=null){thisobj.style.cssText=thisobj.style.cssText+';background:blue';}

         var thisID=$('.TabEditRegin').find('.mbContent')[id].id;
         topID=thisID.replace('blockC_','block_');
         setDiv(topID,1);

    }
}

//关闭所有高亮
function HiAll()
{

    $('.mbContent').css("border","0px");
    parent.hiAllNum();

    //var o=getElementsByClassName("mbContent");
//    var o=$('.mbContent');
//    for(var i=0;i<o.length;i++)
//    {
//        if(o[i]&&parent.document.getElementById('spNumber'+i))
//        {
//            o[i].style.borderWidth='0px';
//            o[i].style.borderColor='#eee';
//            parent.document.getElementById('spNumber'+i).style.backgroundColor="#EFEFEF";
//            
//         }   
//    }
}


 
    function ButAddDiv_onclick(typename) {
        
        var type=typename;
 
        var selWidth=document.getElementById(topID).offsetWidth;
        if(type=='上面'||type=='下面')
        {
            //改掉topID为,如上面则到_为1的id,如下面则到 最大的一个id
            
 
            //0 代表下面加时宽100%
            AddDivAction(0,typename);
        }else
        {
            if(type=='内部')
            {
                 ShowC1('../22.aspx?selWidth='+selWidth,600,420);
            }
            else
            {
                ShowC1('../222.aspx?type='+type,300,200);
            }
        }
        
    }
 
    
    function getRandDivID(divid)
    {
        var rdid=rand(1000);
        try
        {
            return divid.match(/\w+_(?=(\d+))/)[0]+rdid;
        }catch(e)
        {
            return "ID"+rdid;
        }    
    }
    
    function AddDivAction(Iwidth,typename)
    {
           var tdivContent='';
           var sPath = document.location.pathname; //==by Leotiger
           if(sPath.indexOf('TypeSetTep.aspx')==-1)//非模板方式
           {
                tdivContent=divContent;
           }else
           {
                tdivContent=tem_divContent;
           }
 
           var type=typename;
           
           var newDivID='';
            

           var seed = new Date().getTime();
           newDivID=topID+'_'+seed;
           
           newDivID=newDivID.replace('MAIN_','');
           if(document.getElementById(newDivID))
           {
                newDivID=getRandDivID(newDivID);
           }
           //换参数
           tdivContent=tdivContent.replace(/\{0\}/g,newDivID);
           tdivContent=tdivContent.replace(/\{1\}/g,newDivID.replace('block_','blockC_'));
           //tdivContent=tdivContent.replace(/\{2\}/g,'width:'+Iwidth+'px;');
           //换参数over
           tdivContent=tdivContent.replace(/<!--\{3\}-->/ig,'');
           
           var topWidth=document.getElementById(topID).offsetWidth;
           //左右加入的边框值
           var borderWidth=0;
           switch(type)
           {
                case '上面':
                {
                    tdivContent=tdivContent.replace(/\{2\}/g,'width:100%;');
                    document.getElementById(topID).outerHTML=tdivContent+''+document.getElementById(topID).outerHTML;

                    break;
                }
                case '下面':
                {
                    tdivContent=tdivContent.replace(/\{2\}/g,'width:100%;');
                    document.getElementById(topID).outerHTML=document.getElementById(topID).outerHTML+tdivContent+'';break;
                    
                }
                case '左面':
                { 
                    
                    tdivContent=tdivContent.replace(/\{2\}/g,'width:'+Iwidth+'px;');
                    //老的div减去相应的宽度
                    //旧宽度
                    var oW=document.getElementById(topID).style.width.replace('px','');
                    //新宽度
                    var nW=(document.getElementById(topID).offsetWidth-borderWidth-Iwidth);
                    
                    var thisrate=parseFloat(nW/oW);
 
                    document.getElementById(topID).style.width=nW;
                    document.getElementById(topID).outerHTML =tdivContent+''+document.getElementById(topID).outerHTML;
                    
                    if(topID.indexOf("MAIN_")>-1)
                    {
                        DiffWidthByParObj(topID,thisrate);
                    }
                    //new dialog().close();
                    break;
                
                }
                case '右面':
                {
//                    tdivContent=tdivContent.replace(/\{2\}/g,'width:'+Iwidth+'px;');
//                    //老的div减去相应的宽度
                     tdivContent=tdivContent.replace(/\{2\}/g,'width:'+Iwidth+'px;');
                    //老的div减去相应的宽度
                    //旧宽度
                    var oW=document.getElementById(topID).style.width.replace('px','');
                    //新宽度
                    var nW=(document.getElementById(topID).offsetWidth-borderWidth-Iwidth);
                    
                    var thisrate=parseFloat(nW/oW);
 
                    document.getElementById(topID).style.width=nW;
                    document.getElementById(topID).outerHTML=document.getElementById(topID).outerHTML+tdivContent+'';
                    
                    if(topID.indexOf("MAIN_")>-1)
                    {
                        DiffWidthByParObj(topID,thisrate);
                    }
                    break;

                }
                 case '内部':
                {
                     break;

                }
           
           }
           FloatAll();
           

            //设定当前选的为新加入的
           //topID=newDivID;
           mbLine();
           getNumber();
           SaveHTML();
        
    }
    

//在内部插入框架
function InsertInner(strVa,BorderWidth)
{
    var re='';
    
    var str=strVa.split(',');
    var topWidth=document.getElementById(topID.replace('block_','blockC_')).offsetWidth;
    //左右加入的边框值
    var borderWidth=2;
    
    //要减掉左右的padding值
    var InnerID=topID.replace('block_','blockC_');
    var pleft=(document.getElementById(InnerID).style.paddingLeft==null?'0px':document.getElementById(InnerID).style.paddingLeft);
        pleft=pleft.replace('px','');
        
    var pright=(document.getElementById(InnerID).style.paddingRight==null?'0px':document.getElementById(InnerID).style.paddingRight);
        pright=pright.replace('px','');   
    
    topWidth=topWidth-pleft-pright;
    
    

    var innerID=topID.replace('block','blockC');
    var newDivID=topID.replace('MAIN_','');
    for(var i=0;i<str.length;i++)

    {
         newDivID=getRandDivID(newDivID);
 
        if(str[i]<10){str[i]='0'+str[i];}
        var w='100%';
        if(str[i]=='100')
        {
             w=topWidth;
        }else
        {
             w=parseInt(parseFloat('0.'+str[i])*topWidth)-borderWidth;
        }
        
        //alert('0.'+str[i]);
        //换参数
       var t=''
       var sPath = document.location.pathname; //==by Leotiger
       if(sPath.indexOf('TypeSetTep.aspx')==-1)//非模板方式
       {
            t=divContent;
       }else
       {
            t=tem_divContent;
       }
 
        if(str.length>1)
            t=t.replace(/\{2\}/g,'width:'+w+'px;float:left;'); 
        else
            t=t.replace(/\{2\}/g,'width:'+w+'px;'); 
        
        t=t.replace(/\{0\}/g,newDivID);
        t=t.replace(/\{1\}/g,newDivID.replace('block_','blockC_'));
        re+=t;
    }
    
    if(str.length>1)
    {
        re+="<div class='clear'></div>";
    }
    
    document.getElementById(innerID).innerHTML=document.getElementById(innerID).innerHTML+re;
    
    if(topID.indexOf('MAIN_')==-1) //本是最终级
    {
        document.getElementById(topID).id='MAIN_'+document.getElementById(topID).id; 
        topID='MAIN_'+topID; //父级不再有事件
        document.getElementById(innerID).id='MAIN_'+document.getElementById(innerID).id;
        
    }
    SaveHTML();
    
    FloatAll();
    //设定当前选的为新加入的
    topID=newDivID;
    mbLine();
    try
    {
    getNumber();
    }catch(e){}
    
    closeContro1();
    
}    
//在内部插入容器用作拖动排版
function InsertContainer(strVa,BorderWidth)
{
    var re='<table id="{1}" width="{3}" cellpadding="{2}" border="1" class="EditContainer"  height="50" rel='+strVa+'><tr>';
    
    var str=strVa.split(',');
    var topWidth=document.getElementById(topID.replace('block_','blockC_')).offsetWidth;
    //左右加入的边框值
    var borderWidth=2;
    
    //要减掉左右的padding值
    var InnerID=topID.replace('block_','blockC_');
    var pleft=(document.getElementById(InnerID).style.paddingLeft==null?'0px':document.getElementById(InnerID).style.paddingLeft);
        pleft=pleft.replace('px','');
        
    var pright=(document.getElementById(InnerID).style.paddingRight==null?'0px':document.getElementById(InnerID).style.paddingRight);
        pright=pright.replace('px','');   
    
    topWidth=topWidth-pleft-pright;
    
    

    var innerID=topID.replace('block','blockC');
    var newDivID=topID.replace('MAIN_','');
    for(var i=0;i<str.length;i++)
    {
        newDivID=getRandDivID(newDivID);
 
        if(str[i]<10){str[i]='0'+str[i];}
        var w=str[i]+'%';
        
        //alert('0.'+str[i]);
        //换参数
       var t=''
       var sPath = document.location.pathname; //==by Leotiger
       if(sPath.indexOf('TypeSetTep.aspx')==-1)//非模板方式
       {
            t='<td {0} class="EditContainerUnit" valign="top"></td>';
       }else
       {
            t='<td {0} class="EditContainerUnit" valign="top"></td>';
       }
 
        if(str.length>1)
        {
            t=t.replace(/\{0\}/g,'width="'+w+'"');
        }
        else
        {
            t=t.replace(/\{0\}/g,'width:'+w+'px;'); 
        }
        
        re+=t;
    }
    
    re+='</tr></table>';
    re=re.replace(/\{1\}/g,newDivID);
    re=re.replace(/\{2\}/g,borderWidth); 
    re=re.replace(/\{3\}/g,topWidth); 

    document.getElementById(innerID).innerHTML=document.getElementById(innerID).innerHTML+re;    

    SaveHTML();
    reloadball();
}


//得到所有的可移动排版对象(等getReginData结束)
function getbaseball() //初始化时用
{

    var o=$('.EditContainer').find('.MovClass');
    if(o)
    {
        for(var i=0;i<o.length;i++)
        {
 
            o[i].style.display='';
            o[i].className='basebat';
        }
 
    }
}

//更新当前文档内的拖放排版内容(等getReginData结束或中间)
function reloadball() //"#left,#center,#right,#left2,#center2,#right2" 或 .ClassName 传进来
{
    if($(".EditContainerUnit").length>0)
    {
      $.baseball({
	    accepter:".EditContainerUnit",
	    target:".baseball",	
	    handle:".basebat"
	    })
	    
	 }   
    
}

function InitEditContainer()
{
    var ec=$('.EditContainer');
    if(ec)
    {
        for(var i=0;i<ec.length;i++)
        {
            //$(ec[i]).css("border","1px");
            ec[i].border='1px';
//            var tableid=ec[i].id;
//            
//            var tableobj=document.getElementById(tableid);
//            tableobj.onmouseover=function()
//            {
//                var rel="";
//                if(tableobj.rel!=undefined&&tableobj.rel!=""&&tableobj.rel!=null)
//                {
//                    rel=tableobj.rel;
//                }
// 
//                ShowEditContainerEdit(rel);
//            }
            
            
        }
    }
}

//关于容器表格
function ShowEditContainerEdit(rel)
{
    alert(rel);

}

try
{
    jQuery.fn.outerHTML = function(s) {
    return (s)
    ? this.before(s).remove()
    : jQuery("<p>").append(this.eq(0).clone()).html();
    }
}catch(e){}

//把某DivName内容放入容器
function InsertDivToContainer(DivName)
{
    var o=null;
    if(topID!=undefined&&topID!='')
    {
        o=$('#'+topID).find('.EditContainerUnit');
    }
    
    if(o==null||o.length==0)
    {
        o=$('#container').find('.EditContainerUnit');
    }
    
    if(o!=null&&o.length>0)
    {
    
        //把Div的abs属性等去掉
        if(document.getElementById(DivName).className=='EditRegin')
        {
            document.getElementById(DivName).className='baseball EditRegin';
        }

        
        //document.getElementById(DivName).in='1'; //给一个特别标识,现在用baseball
        var thisobj=document.getElementById(DivName);
        
        var _c=$(thisobj).outerHTML();
        //var _c=document.getElementById(DivName).outerHTML;
    
         
        document.getElementById(DivName).outerHTML='';
        //o[0].innerHTML=o[0].innerHTML+_c;
        
        
        $(o[0]).html($(o[0]).html()+_c);
        
        
        document.getElementById(DivName).style.styleFloat='left';
        document.getElementById(DivName).style.position='';
        document.getElementById(DivName).style.width='100%';
        document.getElementById(DivName).style.margin='0px';
        document.getElementById(DivName).style.border='0px';
        document.getElementById('DV_'+DivName).style.display='none';
        document.getElementById('menu_contaner').style.display='none';
 
        document.getElementById('Mov_'+DivName).style.display='';
        document.getElementById('Mov_'+DivName).style.styleFloat='left';
        document.getElementById('Mov_'+DivName).className='basebat';
        
//        document.getElementById(DivName).onmouseover=function()
//        {
//            showEditGif(DivName);
//        }
 
        //计算外框高度
        if(topID!=''&&topID!=undefined)
        {
            var EditContainerObj=$('#'+topID).find('.EditContainer');
            var _maxheight=0;
            if(EditContainerObj.length>0)
            {
                for(var i=0;i<EditContainerObj.length;i++)
                {
                   _maxheight=EditContainerObj[i].offsetHeight;
                }
            }
            if(_maxheight>0)
            
            setHeightByID(topID,_maxheight);
            //$('#'+topID).css('height',_maxheight);
        }
 
        
        
        SaveHTML();
        reloadball();
    }else
    {
        alert('当前没有容器,请在面板上先添加布局控件!');
    
    }
    
 
    
}

//把某DivName移出容器
function RemoveOutContainer(DivName)
{

    document.getElementById(DivName).className='EditRegin';
    
    document.getElementById(DivName).style.styleFloat='';
    document.getElementById(DivName).style.position='';
    document.getElementById(DivName).style.width='100%';
    document.getElementById(DivName).style.margin='0px';
    document.getElementById(DivName).style.border='0px';
    document.getElementById('DV_'+DivName).style.display='none';
    document.getElementById('menu_contaner').style.display='none';

    document.getElementById('Mov_'+DivName).style.display='none';

    document.getElementById('Mov_'+DivName).className='';

    var thisobj=document.getElementByid(DivName);
 
 
    var _Content=$(thisobj).outerHTML();
    
    //var _Content=document.getElementById(DivName).outerHTML;
    document.getElementById(DivName).outerHTML=''; //清空
    //$('#'+DivName).outerHTML(' ');
    

    
    AddHTMLContent(_Content);//重新加入
    
    
//    document.getElementById(DivName).onmouseover=function()
//    {
//        showEditGif(DivName);
//    }
    
    reloadball();
}


//加入选项卡

function AddtoTab(str)
{
    
    var InnerID=topID.replace('block_','blockC_');
    
    str=str.replace('<\/script>','</sc'+'ript>');
    str=str.replace(/\{\d+\}/,'');
    
    document.getElementById(InnerID).innerHTML=document.getElementById(InnerID).innerHTML+str;
    
    //document.getElementById(topID).id='MAIN_'+document.getElementById(topID).id; 
    //topID='MAIN_'+topID; //父级不再有事件
    
    FloatAll();


    //设定当前选的为新加入的
    //topID=newDivID;
    mbLine();
    getNumber();
    SaveHTML();
}

//编辑选项卡
function EditTab(tabid,str)
{

    str=str.replace('<\/script>','</sc'+'ript>');
    
    var ostr=document.getElementById(tabid).innerHTML;
    
    
    document.getElementById(tabid).outerHTML=str;

    
    FloatAll();


    //设定当前选的为新加入的
    //topID=newDivID;
    mbLine();
    getNumber();
    SaveHTML();
}
   

//删除当前的div
function Button1_onclick() {
    if(confirm('确认删除当前区域吗?'))
    {
        document.getElementById(topID).outerHTML='';
        mbLine();
        getNumber();
        //document.getElementById("ALL").value=document.body.innerHTML;
        FloatAll();
        SaveHTML();
    }
}

//整体换宽度
function ReSizeAll()
{
    var oriW=0;
    
    if(document.getElementById('container').width==null)
    {
        oriW=document.getElementById('container').offsetWidth;
    }else oriW=document.getElementById('container').width;
    
    document.getElementById('container').width=newW;
    
    var newW=document.getElementById('thisPageWidth').value;

    var rate=parseFloat(newW/oriW);
 
    var o=document.getElementsByTagName("div");
	    for(var i=0;i<o.length;i++)
	    {
	        if(o[i].className=='mainblock')
	        {
	            o[i].style.width=o[i].style.width.replace('px','')*rate+'px';
 
	        }
	    }
	 
    mbLine();
    SaveHTML();  
}

//由父宽变化得到所有子宽也相应变化
function DiffWidthByParObj(parID,thisrate)
{
    var ParObj=document.getElementById(parID);
    var ParinnserHTML=ParObj.innerHTML;
    
 
    var reSu=ParinnserHTML.match(/WIDTH: ?\d+(?=px)/ig);
    if (reSu!=null) {
        for (var i = 0; i < reSu.length; i++)   
        {   
            var tp=reSu[i];
            tp=tp.replace('WIDTH','').replace(':','').replace(' ','');
            
            var newWidth=parseInt(parseInt(tp)*thisrate);
            
            tp="WIDTH: "+newWidth;
            
            ParinnserHTML=ParinnserHTML.replace(reSu[i],tp);
        }  
      ParObj.innerHTML=ParinnserHTML;
    
    } 
    
}



//产生随机数
rnd.today=new Date();
rnd.seed=rnd.today.getTime();
function rnd() {
　　　　rnd.seed = (rnd.seed*9301+49297) % 233280;
　　　　return rnd.seed/(233280.0);
};
function rand(number) {
　　　　return Math.ceil(rnd()*number);
};


//统一向布局里加入html内容
 
function AddHTMLContent(inHtml)
{
    inHtml=inHtml.replace('<\/script>','</sc'+'ript>');
    var innertopID=topID.replace('block_','blockC_');
    
    
    //document.getElementById(innertopID).innerHTML=document.getElementById(innertopID).innerHTML+inHtml;
    
    var thisobj=document.getElementById(innertopID);
    
    $(thisobj).html($(thisobj).html()+inHtml);
    
    //内部的已有对像
    var InObj=$(thisobj).find('.EditRegin');
    if(InObj)
    {
        var absposition=''; //是否绝对定位
        var _maxtop=0; //如果有浮动,算到最大的高度 marginTop+offsetHeight
        
        if(InObj[0].style.marginTop!=null&&InObj[0].style.marginTop!='')
            _maxtop=parseInt(InObj[0].style.marginTop)+InObj[0].offsetHeight;
        else
            _maxtop=InObj[0].offsetHeight;
            
        
             for(var i=0;i<InObj.length-2;i=i+2)
             {
                if(InObj[i+2].style.marginTop!=null&&InObj[i+2].style.marginTop!='')
                {
                    if(_maxtop<parseInt(InObj[i+2].style.marginTop)+InObj[i+2].offsetHeight)
                    {
                        _maxtop=parseInt(InObj[i+2].style.marginTop)+InObj[i+2].offsetHeight;
                    }
                }
                
                if(InObj[i].style.position!=undefined&&InObj[i].style.position=='absolute')
                {
                    absposition='absolute';
                }
                        
             }
        
    
            if(absposition!='')
            {
                //找到DivName
                var reg=/<div id=.+?>/i;
                var result=inHtml.match(reg);
                if(result!=null)
                {
                    var resultStr=String(result);
                    var DivName=resultStr.replace('<DIV id=','').replace(' class=EditRegin>','');
                    if(DivName!='')
                    PreFloatDiv(DivName);
                    
                    if(_maxtop!=0)
                    {
                    
                        var _selfHeight=document.getElementById(DivName).offsetHeight;
                        
                        var thisDivName=document.getElementById(DivName);
                        
                        $(thisDivName).css('marginTop',parseInt(_maxtop)+4);
                    
                        //$('#'+innertopID).css("height", parseInt(_maxtop)+_selfHeight+4);
                        setHeightByID(innertopID,parseInt(_maxtop)+_selfHeight+4);
                    }
                }


            }
    

        }
        

    SaveHTML();
    reloadball();
}
 


//统一向布局里加入html内容
function EditHTMLContent(inHtml,DivName)
{
    inHtml=inHtml.replace('</script>','</sc'+'ript>');
    //inHtml=inHtml.replace("\'","\'\'");
    //document.getElementById(DivName).innerHTML=inHtml;
    
    var thisobj=document.getElementById(DivName);
    
    $(thisobj).html(inHtml);
    SetMaxHeightByDivName(DivName);
    
    //如果是在容器里的
    if(document.getElementById(DivName).className.toLowerCase().indexOf('baseball')>-1)//已是内容
    {
        //执行本Div是容器里的样式
                document.getElementById(DivName).style.styleFloat='left';
        document.getElementById(DivName).style.position='';
        document.getElementById(DivName).style.width='100%';
        document.getElementById(DivName).style.margin='0px';
        document.getElementById(DivName).style.border='0px';
        document.getElementById('DV_'+DivName).style.display='none';
        document.getElementById('menu_contaner').style.display='none';
 
        document.getElementById('Mov_'+DivName).style.display='';
        document.getElementById('Mov_'+DivName).style.styleFloat='left';
        document.getElementById('Mov_'+DivName).className='basebat';
 
        //计算外框高度
        if(topID!=''&&topID!=undefined)
        {
            var EditContainerObj=$('#'+topID).find('.EditContainer');
            var _maxheight=0;
            if(EditContainerObj.length>0)
            {
                for(var i=0;i<EditContainerObj.length;i++)
                {
                   _maxheight=EditContainerObj[i].offsetHeight;
                }
            }
            if(_maxheight>0)
            
            setHeightByID(topID,_maxheight);
            //$('#'+topID).css('height',_maxheight);
        }
    }
    
    
    SaveHTML();
    reloadball();
    
}

//邮一个DivName设置其外层高度
function SetMaxHeightByDivName(DivName)
{
    
    //找出父级
    var thisobj=document.getElementById(DivName);
    
    var ParObj=$(thisobj).parent()[0];
    //计算父级里所有的EditRegin
    if(ParObj)
    {
        var InObj=$(ParObj).find('.EditRegin');
        var absposition=''; //是否绝对定位
        var _maxtop=0; //如果有浮动,算到最大的高度 marginTop+offsetHeight
        
        if(InObj.length>0)
        {
        
            if(InObj[0].style.marginTop!=null&&InObj[0].style.marginTop!='')
                _maxtop=parseInt(InObj[0].style.marginTop)+InObj[0].offsetHeight;
            else
                _maxtop=InObj[0].offsetHeight;
            
            for(var i=0;i<InObj.length-2;i=i+2)
             {
                if(InObj[i+2].style.marginTop!=null&&InObj[i+2].style.marginTop!='')
                {
                    if(_maxtop<parseInt(InObj[i+2].style.marginTop)+InObj[i+2].offsetHeight)
                    {
                        _maxtop=parseInt(InObj[i+2].style.marginTop)+InObj[i+2].offsetHeight;
                    }
                }
                
                if(InObj[i].style.position!=undefined&&InObj[i].style.position=='absolute')
                {
                    absposition='absolute';
                }
                        
             }
             
             if(absposition!='')
                {
     
                    if(_maxtop!=0)
                    {
                        //算padding-bottom
                        if(ParObj.style.paddingBottom==null||ParObj.style.paddingBottom==undefined||ParObj.style.paddingBottom==""){}
                        else
                        _maxtop+=parseInt(ParObj.style.paddingBottom);
                    
                        //$(ParObj).css("height",_maxtop);
                        setHeightByObj(ParObj,_maxtop);
                    }
     

                }
             
         }
    
    }
}


function setAllMaxHeight()
{
    var obj=$('#container').find('.mbContent,.tem_mbContent');
    for(var i=0;i<obj.length;i++)
    {

            setMaxHeightByblockCID(obj[i]);

    }
    
}

//检测当前区域的浮动层的最大值是否比offsetHeight大,如果更大则给值,否则会自动撑开，但当外面有style.height值时不撑开，也移不动
function CheckthisBlockHeight()
{
    if(topID!=undefined&&topID!='')
    {
        var innertopID=topID.replace('block_','blockC_');
        var thisblockHeight=document.getElementById(topID).offsetHeight;
        
        var InObj=$('#'+topID).find('.EditRegin');
        var absposition=''; //是否绝对定位
        var _maxtop=0; //如果有浮动,算到最大的高度 marginTop+offsetHeight
        
        if(InObj.length>0)
        {
        
        
            if(InObj[0].style.position!=undefined&&InObj[0].style.position=='absolute')
            {
                if(InObj[0].style.marginTop!=null&&InObj[0].style.marginTop!='')
                    _maxtop=parseInt(InObj[0].style.marginTop)+InObj[0].offsetHeight;
                else
                    _maxtop=InObj[0].offsetHeight;
            }
        
            for(var i=0;i<InObj.length-1;i=i+1)
             {
                  if(InObj[i].style.position!=undefined&&InObj[i].style.position=='absolute'&&InObj[i].rel!='1')
                  {
                        var _mtop=0;
                        if(InObj[i].style.marginTop!=""&&InObj[i].style.marginTop!=null)_mtop=parseInt(InObj[i].style.marginTop);
                        
         
                        if(_maxtop<_mtop+InObj[i+1].offsetHeight)
                        {
                            _maxtop=_mtop+InObj[i+1].offsetHeight;
                        }
                     
                         absposition='absolute';
 
                   }         
             }
             
             //检有没有EditContainer //注意 EditContainer里面的不能算在上面
             var EditContainerObj=$('.EditContainer');
             if(EditContainerObj!=null&&EditContainerObj.length>0)
             {
                for(var i=0;i<EditContainerObj.length;i++)
                {
                    _maxtop+=EditContainerObj[i].offsetHeight;
                }
             
             }
             
             
             if(absposition!='')
            {
 
                //if(_maxtop!=0&&_maxtop>thisblockHeight)
                //{
                    //$(ParObj).css("height",_maxtop);
                    
                    
                    //算padding-bottom
                    var ParObj=document.getElementById(innertopID);
                    if(ParObj!=null)
                    {
                        if(ParObj.style.paddingBottom==null||ParObj.style.paddingBottom==undefined||ParObj.style.paddingBottom==""){}
                        else
                        _maxtop+=parseInt(ParObj.style.paddingBottom);
                    }
                    
                    setHeightByID(innertopID,_maxtop);
                //}
 

            }else
            {
                setHeightByID(innertopID,100);
            }
        }
        
    }
    
    
}

function setMaxHeightByblockCID(ParObj)
{
    //找出父级
    //var ParObj=$('#'+blockCID);
    //计算父级里所有的EditRegin
    if(ParObj)
    {
        var InObj=$(ParObj).find('.EditRegin');
        var absposition=''; //是否绝对定位
        var _maxtop=0; //如果有浮动,算到最大的高度 marginTop+offsetHeight
        
        if(InObj.length>0)
        {
 
        
            if(InObj[0].style.marginTop!=null&&InObj[0].style.marginTop!='')
                _maxtop=parseInt(InObj[0].style.marginTop)+InObj[0].offsetHeight;
            else
                _maxtop=InObj[0].offsetHeight;
            
            for(var i=0;i<InObj.length;i++)
             {
                
                //设置的内部高度先撑开
                var DivName=InObj[i].id;

                //if(DivName)AutoiHeight(DivName);
                
                try
                {
                        if(InObj[i+1].style.marginTop!=null&&InObj[i+1].style.marginTop!='')
                        {
                            if(_maxtop<parseInt(InObj[i+1].style.marginTop)+InObj[i+1].offsetHeight)
                            {
                                _maxtop=parseInt(InObj[i+1].style.marginTop)+InObj[i+1].offsetHeight;
                            }
                        }

                        
                        if(InObj[i].style.position!=undefined&&InObj[i].style.position=='absolute')
                        {
                            absposition='absolute';
                        }
                  }catch(e){}
                        
             }
             
             if(absposition!='')
                {
     
                    if(_maxtop!=0)
                    {
                       if(ParObj.style.paddingBottom==null||ParObj.style.paddingBottom==undefined||ParObj.style.paddingBottom==""){}
                        else
                        _maxtop+=parseInt(ParObj.style.paddingBottom);
                        
                        setHeightByObj(ParObj,_maxtop);
                    }
     

                }
             
         }
    
    }
}


function DelDiv(DivName,pageid)
{
 
    document.getElementById('DV_'+DivName).outerHTML='';
    document.getElementById(DivName).outerHTML='';
 
    setAllMaxHeight();
    
    
    var r=Math.random();
    var _t='&r='+String(r);
    
    //实际删除Div
    ExecuteNonQuery('../MContent/DivDel.aspx?DivName='+DivName+'&pageid='+pageid+_t);
    //
    SaveHTML();
    getNumber();
}


//复制控件
function CopyDiv(DivName,pageid)
{
    var DenyDivStr=""; //这些不允许复制

    lhgdialog.opendlg( '复制控件','/MContent/CopyDiv.aspx?DivName='+DivName+'&pageid='+pageid , 600, 450,true);
}

function SetPublicDiv(DivName,pageid)
{
    
    lhgdialog.opendlg( '定义公共控件','/MContent/SetPublicDiv.aspx?DivName='+DivName+'&pageid='+pageid , 400, 250,true);
   
    //alert('设定成功!');

}

function SetEasyDiv(DivName,pageid)
{
    
    lhgdialog.opendlg( '放入便捷面板','/MContent/SetEasyDiv.aspx?DivName='+DivName+'&pageid='+pageid , 400, 250,true);
   
    //alert('设定成功!');

}


function parent_getPublicControl()
{
    //alert('a');
    parent.getPublicControl();
}

//加入公区控件
function UserThisControl(DivName)
{
    if(topID==''||topID==null)
    {
        alert('请选择一个可编辑区域！');
        return false;
    }
    else
    {
        if(confirm('确认把当前公共控件加入当前区域吗?'))
        {
            
            if(document.getElementById(DivName))
            {
	                alert('本页已加载过此控件!');
	                return;
            }
            
            
        var sPath = document.location.pathname+document.location.search; //==by Leotiger
        var idStr='';
        //代入当前地址里的pageid
        var pageid=QueryStringFromStr(sPath,"pageid");
        if(pageid!=null&&pageid!='')
        {
            idStr+='&pageid='+pageid;
        }
        
        //代入当前地址里的-temid 以示区pageid区别
        var temid=QueryStringFromStr(sPath,"temid");
        if(temid!=null&&temid!='')
        {
            idStr+='&pageid=-'+temid;
        }
        
        var r=Math.random();
        idStr+='&r='+String(r);
            
            var url='../MContent/AjaxData/getPublicControlContentByDivName.ashx?DivName='+DivName+idStr;    
            $.ajax({
		        type: "get",
		        url: url,
			        success: function(data, textStatus){
			            AddHTMLContent(data);
			        },
			        error:function()
			        {
			            alert('error');
			        }
    			   
		        });
            
        }
    
    }
}


function AddEditRegion(iid,RegionName)
{

    var oHTML=document.getElementById(topID).outerHTML;
    oHTML=oHTML.replace('mainblock','mainblock style="borderWidth:0px;padding:0px"');
    oHTML=oHTML.replace('mbPadding','mbPadding style="borderWidth:0px;padding:0px"');
    oHTML=oHTML.replace('mbContent','mbContent style="borderWidth:0px;padding:0px"');
    
    document.getElementById(topID).outerHTML=oHTML;
    setTimeout('InHTML(\''+iid+'\',\''+RegionName+'\');',100);

}

                //廷时执行下面
                function InHTML(iid,RegionName)
                {
                    var innertopID=topID.replace('block_','blockC_');
                    var t='<span style=\'display:none;\'>a</span><!--RegionContent_S'+iid+'--><div style=\"width:100%; height:100%;background:aqua; vertical-align:middle;text-align:center;\">'+RegionName+'</div><!--RegionContent_O'+iid+'-->';
                    //alert(t);
                    document.getElementById(innertopID).innerHTML=t;
                    SaveHTML();
                }

function setBgColor(va)
{
    if(topID!='')
    {
        document.getElementById(topID).style.backgroundColor=va;
        //var innertopID=topID.replace('block_','blockC_');
        document.getElementById(topID).style.backgroundColor=va;
        SaveHTML();
        
    }
}


function setBorderBgColor(BorderWidthVa,BorderColor,BorderType,type)
{
    if(topID!='')
    {
        if(BorderColor.indexOf('#')==-1&&BorderColor!='')BorderColor='#'+BorderColor;
        
         var vastr='\''+ BorderWidthVa+'px'+' '+BorderType+ ' '+BorderColor+'\'';
         
         var exeStr='document.getElementById(\''+topID+'\').style.'+type+'='+vastr+';';
         //alert(exeStr);
         eval(exeStr);
//         
//        
//         document.getElementById(topID).style.borderTop=''+ BorderWidthVa+'px' BorderType;
//         document.getElementById(topID).style.borderColor=BorderColor;
//         document.getElementById(topID).style.borderStyle=BorderType;
         SaveHTML();
         
        
    }
}


//列表默认样式及鼠标样式
function OnDefaultStyle(o,defalutcss)
{
	if(defalutcss.indexOf('height')==-1)
	defalutcss+="height:100%;";
	
	
	var styleArr=defalutcss.split(';');
	for(var i=0;i<styleArr.length;i++)
	{
	    if(styleArr[i]!=''&&styleArr[i].indexOf('color')==0)
	    {
	        $(o).find("a").css('color',styleArr[i].replace('color:',''));
	        $(o).find("span").css('color',styleArr[i].replace('color:',''));
	        break;
	    }
	}
	o.style.cssText=defalutcss;
}
//移上去
function OnOverStyle(o,overcss)
{
	if(overcss.indexOf('height')==-1)
	overcss+="height:100%;";
	
	var styleArr=overcss.split(';');
	for(var i=0;i<styleArr.length;i++)
	{
	    if(styleArr[i]!=''&&styleArr[i].indexOf('color')==0)
	    {
	        $(o).find("a").css('color',styleArr[i].replace('color:',''));
	        $(o).find("span").css('color',styleArr[i].replace('color:',''));
	        break;
	    }
	}
	
	o.style.cssText=overcss;
}


//显示大图
function ShowThisForMainPic(tagid,o)
{
    document.getElementById(tagid).src=o.rel;
    //document.getElementById(tagid.replace('MainPic','MainPicLink')).href=o.rel;
    var _to=document.getElementById(tagid.replace('MainPic','MainPicLink'));
    _to.setAttribute("href",o.rel);
    _to.setAttribute("title",o.getAttribute("title"));
   // alert(o.getAttribute("title"));
}


 
//DivContainter中显示菜单
var _menuTimeOut=null;


function ShowContainerMenu(FileName,DivName,pageid)
{
 
    var _tmpWidth="850";
    var _tmpHeight="420";
    if(FileName.indexOf("flash")>-1){
      _tmpWidth="940"; 
      _tmpHeight="500";
    }
    var _t='<div style="width:120px;  border:#CCC 1px solid; margin:2px; text-align:left; line-height:20px;">\
        <div style="background-color:#efefef; padding-left:10px;" ><a href="javascript:ShowC1(\''+FileName+'?DivName='+DivName+'&pageid='+pageid+'\','+_tmpWidth+','+_tmpHeight+');">属性和边框</a></div>\
        <div style="background-color:#efefef;padding-left:10px;"><a onclick="return confirm(\'确认删除吗?\');" href="javascript:DelDiv(\''+DivName+'\',\''+pageid+'\');">删除...</a></div>\
        <div style="background-color:#efefef;padding-left:10px;"><a href="javascript:CopyDiv(\''+DivName+'\',\''+pageid+'\');">复制...</a></div>\
        <div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:SetPublicDiv(\''+DivName+'\',\''+pageid+'\');">设为共公控件</a></div>';
        
        if(DivName.indexOf('TextAndImg')>-1||DivName.indexOf('Nav')>-1||DivName.indexOf('Image')>-1||DivName.indexOf('Product_')>-1||DivName.indexOf('Info_')>-1)
        _t+='<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:SetEasyDiv(\''+DivName+'\',\''+pageid+'\');">放入便捷面板</a></div>';
        
        
      if(document.getElementById(DivName).className.toLowerCase().indexOf('baseball')>-1)//已是内容
      {
        _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:RemoveOutContainer(\''+DivName+'\');">移出容器</a></div>';
      }else
      {
        _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:InsertDivToContainer(\''+DivName+'\');">放入容器</a></div>';
      }
      
        
        if(document.getElementById(DivName).style.position.toLowerCase()=='absolute')
        {
           _t+= '<div style="background-color:#efefef;padding-left:10px;"><a onclick="return confirm(\'确认删除浮动吗?\');" href="javascript:RemoveFloatDiv(\''+DivName+'\');">删除浮动</a></div>';
           
           if(document.getElementById(DivName).rel)
           {
                if(document.getElementById(DivName).rel==0)
                {
                    _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:SetOverFlow(\''+DivName+'\',\'1\');">设全局浮动</a></div>';
                }else
                {
                    _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:SetOverFlow(\''+DivName+'\',\'0\');">设局部浮动</a></div>';
                }
           }else _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:SetOverFlow(\''+DivName+'\',\'1\');">设全局浮动</a></div>';
           
           //上置下置
            _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:SetDivNameZindex(\''+DivName+'\',\'0\');">上置一层</a></div>';
            _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:SetDivNameZindex(\''+DivName+'\',\'1\');">下置一层</a></div>';
           
           
        }
        else
        {
            if(document.getElementById(DivName).className.toLowerCase().indexOf('baseball')==-1)//容器内的不能浮动
            {
                _t+= '<div style="background-color:#efefef;padding-left:10px;"><a onclick="return confirm(\'确认设为浮动吗?\');" href="javascript:PreFloatDiv(\''+DivName+'\');">设为浮动</a></div>';
            }
        }
        
        _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:ShowSetDivNameHeight(\''+DivName+'\');">设置高度及滚动</a></div>';
        
        _t+= '</div>';
 
        var p_top=0;
        var p_left=0;
                
 
        if(document.getElementById(DivName).style.position.toLowerCase()=='absolute')
        {
            p_top=parseInt(document.getElementById(DivName).offsetTop);
            p_left=parseInt(document.getElementById(DivName).offsetLeft);
        }else
        {
            p_top=parseInt(document.getElementById('DV_'+DivName).offsetTop);
            p_left=parseInt(document.getElementById('DV_'+DivName).offsetLeft);
        }
        //alert(p_top);
        
 
        document.getElementById('menu_contaner').style.top=p_top;
        document.getElementById('menu_contaner').style.left=p_left;
        document.getElementById('menu_contaner').innerHTML=_t;
        document.getElementById('menu_contaner').style.display='';
        document.getElementById('menu_contaner').style.position='absolute';
        
        if(document.getElementById('menu_contaner'))
        {
            document.getElementById('menu_contaner').onmouseover=function()
            {
                if(_menuTimeOut!=null)
                {
                    clearTimeout(_menuTimeOut);
                }
            }
            
            document.getElementById('menu_contaner').onmouseout=function()
            {
                
                HimenuClass(DivName);
            }
        
        }
        
        return;
        
        
        
}

//显示Tab内容

function ShowTabMenu(TabID,pageid)
{
    
    var _tmpWidth="850";
    var _tmpHeight="420";
//    if(FileName.indexOf("flash")>-1){
//      _tmpWidth="940";
//      _tmpHeight="500";
//    }
     var _t='<div style="width:120px;  border:#CCC 1px solid; margin:2px; text-align:left; line-height:20px;">\
     <div style="background-color:#efefef; padding-left:10px;" ><a href="javascript:ShowC1(\'SelectTab.aspx?TabID='+TabID+'&pageid='+pageid+'\','+_tmpWidth+','+_tmpHeight+');">属性内容</a></div>\
     <div style="background-color:#efefef;padding-left:10px;"><a onclick="return confirm(\'确认删除吗?\');" href="javascript:DelDiv(\''+TabID+'\',0);">删除...</a></div>';

      if(document.getElementById(TabID).className.toLowerCase().indexOf('baseball')>-1)//已是内容
      {
        _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:RemoveOutContainer(\''+TabID+'\');">移出容器</a></div>';
      }else
      {
        _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:InsertDivToContainer(\''+TabID+'\');">放入容器</a></div>';
      }
      
        
        if(document.getElementById(TabID).style.position.toLowerCase()=='absolute')
        {
           _t+= '<div style="background-color:#efefef;padding-left:10px;"><a onclick="return confirm(\'确认删除浮动吗?\');" href="javascript:RemoveFloatDiv(\''+TabID+'\');">删除浮动</a></div>';
           
           if(document.getElementById(TabID).rel)
           {
                if(document.getElementById(TabID).rel==0)
                {
                    _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:SetOverFlow(\''+TabID+'\',\'1\');">设全局浮动</a></div>';
                }else
                {
                    _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:SetOverFlow(\''+TabID+'\',\'0\');">设局部浮动</a></div>';
                }
           }else _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:SetOverFlow(\''+TabID+'\',\'1\');">设全局浮动</a></div>';
           
           //上置下置
            _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:SetDivNameZindex(\''+TabID+'\',\'0\');">上置一层</a></div>';
            _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:SetDivNameZindex(\''+TabID+'\',\'1\');">下置一层</a></div>';
           
           
        }
        else
        {
            if(document.getElementById(TabID).className.toLowerCase().indexOf('baseball')==-1)//容器内的不能浮动
            {
                _t+= '<div style="background-color:#efefef;padding-left:10px;"><a onclick="return confirm(\'确认设为浮动吗?\');" href="javascript:PreFloatDiv(\''+TabID+'\');">设为浮动</a></div>';
            }
        }
        
        _t+= '<div style="background-color:#efefef;padding-left:10px;"><a  href="javascript:ShowSetDivNameHeight(\''+TabID+'\');">设置高度及滚动</a></div>';
        
        _t+= '</div>';
 
        var p_top=0;
        var p_left=0;
                
 
        if(document.getElementById(TabID).style.position.toLowerCase()=='absolute')
        {
            p_top=parseInt(document.getElementById(TabID).offsetTop);
            p_left=parseInt(document.getElementById(TabID).offsetLeft);
        }else
        {
            p_top=parseInt(document.getElementById('DV_'+TabID).offsetTop);
            p_left=parseInt(document.getElementById('DV_'+TabID).offsetLeft);
        }
        //alert(p_top);
        
 
        document.getElementById('menu_contaner').style.top=p_top;
        document.getElementById('menu_contaner').style.left=p_left;
        document.getElementById('menu_contaner').innerHTML=_t;
        document.getElementById('menu_contaner').style.display='';
        document.getElementById('menu_contaner').style.position='absolute';
        
        if(document.getElementById('menu_contaner'))
        {
            document.getElementById('menu_contaner').onmouseover=function()
            {
                if(_menuTimeOut!=null)
                {
                    clearTimeout(_menuTimeOut);
                }
            }
            
            document.getElementById('menu_contaner').onmouseout=function()
            {
                
                HimenuClass(TabID);
            }
        
        }
        
        return;

}


function ShowSetDivNameHeight(DivName)
{
    var url='/MContent/SetDivNameHeight.aspx?DivName='+DivName;
    var title='';
    if(document.getElementById(DivName).title!=''&&document.getElementById(DivName).title!=undefined) //能显示出来，不太好
    {
        title=document.getElementById(DivName).title;
    }
    
    var direction='';
    if(document.getElementById(DivName).direction!=''&&document.getElementById(DivName).direction!=undefined)
    {
        direction=document.getElementById(DivName).direction;
    }
    var scrollamount='';
    if(document.getElementById(DivName).scrollamount!=''&&document.getElementById(DivName).scrollamount!=undefined)
    {
        scrollamount=document.getElementById(DivName).scrollamount;
    }
    
    url+='&title='+title+'&direction='+direction+'&scrollamount='+scrollamount;
    
    lhgdialog.opendlg( '自定义高度',url , 400, 250,true);
}


function SetDivNameHeight(DivName,heightva,_direction,_scrollamount)
{

    var thisobj=document.getElementById(DivName);
 
 
     $(thisobj).find('.textBg_02').children().css("overflow","hidden");
     document.getElementById(DivName).title=String(heightva); //内部高度给个属性 兼容问题？

     document.getElementById(DivName).direction=_direction;
     
     document.getElementById(DivName).scrollamount=_scrollamount;
     //AutoiHeight(DivName);

    SaveHTML();
}



//由Divname自动计算内部高度>加滚动
function AutoiHeight(DivName)
{
    if(document.getElementById(DivName).title!=undefined&&document.getElementById(DivName).title!=''&&document.getElementById(DivName).title!=null)
    {
        var thisobj=document.getElementById(DivName);
        
        var _direction=document.getElementById(DivName).direction;
        if(_direction=='left'||_direction=='right')
        {
            $(thisobj).find('.textBg_02').find('#Panel').css("width",parseInt(document.getElementById(DivName).title));
            $(thisobj).find('.textBg_02').children().css("width",parseInt(document.getElementById(DivName).title));
        }    
        else
        {
            $(thisobj).find('.textBg_02').children().css("height",parseInt(document.getElementById(DivName).title));
        }
    
        $(thisobj).find('.textBg_02').children().css("overflow","hidden");
    }
 
}

function SetDivNameZindex(DivName,type)
{
       //上置下置
       if(document.getElementById(DivName).style.zIndex!=null||document.getElementById(DivName).style.zIndex!=undefined||document.getElementById(DivName).style.zIndex!='')
       {
            if(type==0)
                document.getElementById(DivName).style.zIndex=document.getElementById(DivName).style.zIndex+1;
            else if(type==1)document.getElementById(DivName).style.zIndex=(document.getElementById(DivName).style.zIndex==0?0:document.getElementById(DivName).style.zIndex-1);
            else document.getElementById(DivName).style.zIndex=0;
       }else
       {
            document.getElementById(DivName).style.zIndex=0;
       }
       SaveHTML();
       HimenuClass(DivName);
}
 

function HimenuClass(DivName)
{
    try
    {
        if(document.getElementById('menu_contaner'))
        {
            _menuTimeOut=setTimeout('document.getElementById(\'menu_contaner\').style.display=\'none\'',100);
        }
    }catch(e){}
}


//第一次浮动
function PreFloatDiv(id)
{
     var t=document.getElementById('DV_'+id);
        if(t!=null)
        {       
                //FloatAll();
                document.getElementById(id).style.width=getWidth(id);
                document.getElementById(id).style.position='absolute';
//                t.style.display='';
//                t.style.left='';
//                t.style.top='';
                
                t.style.cssText='width:240px;height:20px;position:absolute;z-index:1000;';
                
                FloatDiv(id);
                document.getElementById('Mov_'+id).style.display='';
                

                
  
         }    
}



//设为浮动
function FloatDiv(DivName)
{
    
 
    //document.getElementById(DivName).style.position='absolute';
    document.getElementById('Mov_'+DivName).style.cursor='move';
    document.getElementById('Mov_'+DivName).style.display='';
 
    var o=document.getElementById(DivName);
    
    $(o).hover(function() { 
            ShowRedLine(o,1);
        }, function() { 
           ShowRedLine(o,0);
        }); 
 
    
    document.getElementById(DivName).onmousemove=function()
    {
        obj_moveMa(DivName);
    }
    
    document.getElementById(DivName).onmouseup=function()
    {
        obj_upMa(DivName);
    }
    
    document.getElementById(DivName).onmousedown=function()
    {
        obj_lsdownMa(DivName);
    }
    
    
    document.getElementById('Mov_'+DivName).onmousedown=function()
    {
        obj_downMa(DivName);
    }
    
    //如何含有tab则里面的也要浮动
    if(DivName.indexOf('Tab')>-1)
    {
        var inDiv=$('#'+DivName).find(".EditRegin");
        for(var i=0;i<inDiv.length;i++)
        {
            var _inid=inDiv[i].id;
            FloatDiv(_inid);
            document.getElementById('DV_'+_inid).style.position='';
        }
    }
    
    CheckthisBlockHeight();
}


var _redline=null;
 
function ShowRedLine(o,type)
{
 
    if(type==0)
    {
        $(o).css("border","0px");
    }
    
    else
    {
        $(o).css("border","1px dashed #ff0000");
        //clearTimeout(_redline);
    }

}


function RemoveFloatDiv(DivName)
{
    document.getElementById(DivName).style.position='';
    
    document.getElementById(DivName).style.marginLeft=0;
    document.getElementById(DivName).style.marginTop=0;
    document.getElementById(DivName).style.width="100%";
    
    document.getElementById(DivName).style.cursor='default';
    document.getElementById('Mov_'+DivName).style.display='none';
    

    
    document.getElementById(DivName).onmousemove=function()
    {
        //javascript:void(0);
    }
    
    document.getElementById(DivName).onmouseup=function()
    {
        //javascript:void(0);
    }
    
    document.getElementById(DivName).onmousedown=function()
    {
        //javascript:void(0);
    }
    var thisobj=document.getElementById(DivName);
    $(thisobj).css("border","0px"); 
    CheckthisBlockHeight();
    
       //如何含有tab则里面的也要浮动
    if(DivName.indexOf('Tab')>-1)
    {
        var inDiv=$('#'+DivName).find(".EditRegin");
        for(var i=0;i<inDiv.length;i++)
        {
            var _inid=inDiv[i].id;
            RemoveFloatDiv(_inid);
        }
    }

    
    
    SaveHTML();
}

function SetOverFlow(DivName,type)
{
    document.getElementById(DivName).rel=type;
    document.getElementById('menu_contaner').style.display='none';
    
    if(type=='0')
    {
        document.getElementById(DivName).style.marginTop='0px';
        document.getElementById(DivName).style.marginLeft='0px';
    }
    
}

//给对象付高度的统一方法 //ie6,7,8,firefox
function setHeightByID(id,height) //height不带px
{
	var objCss=document.getElementById(id).style.cssText;
	var hasHeightReg=/;( +)?height ?: ?\d+/i;
	
	//如果有height则说明是调区域硬调的,不需要动态改高度了
	if(objCss!=undefined&&objCss!='')
	{
	    
	    if(objCss.match(hasHeightReg)!=null&&objCss.match(hasHeightReg)!='')
        {
            
        }else
        {
	
	        var regHeight=/MIN-HEIGHT: ?\d+px;?|_?height: ?\d+px;?/ig;
	        if(objCss!=undefined&&objCss!='')
	        {
		        objCss=objCss.replace(regHeight,'');
	        }

	        objCss=objCss+';min-height:'+height+'px;_height:'+height+'px;';
	        document.getElementById(id).style.cssText=objCss;
	     }   
	
	 }
	
	
	
}

function setHeightByObj(obj,height) //height不带px
{
    if(obj)
    {
	    var objCss=obj.style.cssText;
	    var hasHeightReg=/;( +)?height ?: ?\d+/i;
	    //如果有height则说明是调区域硬调的,不需要动态改高度了
	    if(objCss!=undefined&&objCss!='')
	    {
	        if(objCss.match(hasHeightReg)!=null&&objCss.match(hasHeightReg)!='')
	        {
	            
	        }else
	        {
        	    var regHeight=/MIN-HEIGHT: ?\d+px;?|_?height: ?\d+px;?/ig;
                objCss=objCss.replace(regHeight,'');
                objCss=objCss+';min-height:'+height+'px;_height:'+height+'px;';
                obj.style.cssText=objCss;
	        }
	    
	    }
	    

	}
}


function getTabEditRegin()
{
	var alltab=$('.TabEditRegin');
	//alert(alltab.length);
	for(var i=0;i<alltab.length;i++)
	{
		
		var thisid=alltab[i].id;
		
		var thisTab=$('#'+thisid).find(".tab,.acttab");
		var thisTabItem=$('#'+thisid).find(".TabContentItem,.TabContentItem_act");
			
		for(var j=0;j<thisTab.length;j++)
		{
			(function(){
					var tabid=thisid;
                    var temp1 = thisTab;
					var temp2=thisTabItem;
					var temp = temp1[j];
					var tempid=temp.id;
                    temp.onmouseover = function(){
						
						$(temp1).attr("class","tab");
						$(temp2).attr("class","TabContentItem");
						$('#'+temp.id).attr("class","acttab");
						
						var toid=tabid+'_TabItem'+tempid.replace(tabid+'_tab','');
						
						$('#'+toid).attr('class','TabContentItem_act');	
					
					} 
                    } 
                )();

		}
 
	}

}


 
function allMarquee()
 {

    //***测试滚动***//

    try
    {
        //向左
        var marobj=$("div[direction='left']");
        for(var i=0;i<marobj.length;i++)
        {
        
            $(marobj[i]).find("div").css("white-space","nowrap");
            var _htmlContent=$(marobj[i]).html();
            (function(){
	                    var thisid=$(marobj[i]).attr('id');
	                    var MarWidth=$(marobj[i]).attr("title");
	                    if(MarWidth=='') MarWidth=$(marobj[i]).css('width');
	                    if(MarWidth==''||MarWidth=='auto')MarWidth=$(marobj[i]).width();
    	                
	                    var ScrollSpeed=$(marobj[i]).attr("scrollamount");
        				
	                    var _html='<DIV id='+thisid+'0 style="width: '+parseInt(MarWidth)+'px;overflow: hidden;">\
        <TABLE id='+thisid+'_table cellSpacing=0 style="margin-left:0px;" cellPadding=0 border=0>\
        <TBODY>\
            <TR>\
            <TD id='+thisid+'1>'+_htmlContent+'</TD>\
            <TD id='+thisid+'2></TD></TR></TBODY></TABLE>\
        </DIV>';
        		
        		
                        document.getElementById(thisid).innerHTML=_html;
        		
	                    var speed3=parseInt(ScrollSpeed)*30;
        				
	                    document.getElementById(thisid+'2').innerHTML=document.getElementById(thisid+'1').innerHTML;
	                    
	                    var eTime=parseInt($("#"+thisid+"_table").width())/2;
	                    var bTime=0;
	                    function Marquee(){
	                        bTime++;
	                        if(bTime>=eTime){
	                            bTime=0;
	                        }
	                        document.getElementById(thisid+"_table").style.marginLeft=(-bTime+"px");
	                    }
        				
	                    var MyMar=setInterval(Marquee,speed3);
        				
	                    document.getElementById(thisid+'0').onmouseover=function() {clearInterval(MyMar)};
        				
	                    document.getElementById(thisid+'0').onmouseout=function() {MyMar=setInterval(Marquee,speed3)};

                      })();
        	
        }
        
        //向右
        var marobj2=$("div[direction='right']");
        for(var i=0;i<marobj2.length;i++)
        {
        
            $(marobj2[i]).find("div").css("white-space","nowrap");
            var _htmlContent=$(marobj2[i]).html();
            (function(){
	                    var thisid=$(marobj2[i]).attr('id');
	                    var MarWidth=$(marobj2[i]).attr("title");
	                    if(MarWidth=='') MarWidth=$(marobj2[i]).css('width');
	                    if(MarWidth==''||MarWidth=='auto')MarWidth=$(marobj2[i]).width();
	                    //var goWidth=$(marobj3[i]).width(); 
    	                
	                    var ScrollSpeed=$(marobj2[i]).attr("scrollamount");
        				
	                    var _html='<DIV id='+thisid+'0 style="width: '+parseInt(MarWidth)+'px;overflow: hidden;">\
        <TABLE id='+thisid+'_table cellSpacing=0 style="margin-left:0px;" cellPadding=0 border=0>\
        <TBODY>\
            <TR>\
            <TD id='+thisid+'1>'+_htmlContent+'</TD>\
            <TD id='+thisid+'2></TD></TR></TBODY></TABLE>\
        </DIV>';
        		
        		
                        document.getElementById(thisid).innerHTML=_html;
        		
	                    var speed3=parseInt(ScrollSpeed)*30;
        				
	                    document.getElementById(thisid+'2').innerHTML=document.getElementById(thisid+'1').innerHTML;
	                    
	                    var eTime=parseInt($("#"+thisid+"_table").width())/2;
	                    var bTime=eTime;
	                    function Marquee(){
	                        bTime--;
	                        if(bTime<=0){
	                            bTime=eTime;
	                        }
	                        document.getElementById(thisid+"_table").style.marginLeft=(-bTime+"px");
	                    }
        				
	                    var MyMar=setInterval(Marquee,speed3);
        				
	                    document.getElementById(thisid+'0').onmouseover=function() {clearInterval(MyMar)};
        				
	                    document.getElementById(thisid+'0').onmouseout=function() {MyMar=setInterval(Marquee,speed3)};

                      })();
        	
        }
        
        //向上 
        var marobj3=$("div[direction='up']");
        for(var i=0;i<marobj3.length;i++)
        {
            var _htmlContent=$(marobj3[i]).html();
            (function(){
	                    var thisid=$(marobj3[i]).attr('id');
	                    var MarWidth=$(marobj3[i]).attr("title");
	                    if(MarWidth=='') MarWidth=$(marobj3[i]).css('height');
	                    if(MarWidth==''||MarWidth=='auto')MarWidth=$(marobj3[i]).height(); 
	                    var goHeight=$(marobj3[i]).height(); 
	                    var ScrollSpeed=$(marobj3[i]).attr("scrollamount");  
	                    var _html='<DIV id='+thisid+'0 style="height: '+parseInt(MarWidth)+'px;overflow: hidden; ">\
        <div id='+thisid+'1 style="margin-top:0px;">'+_htmlContent+'</div>\
        <div id='+thisid+'2></div>\
        </DIV>';
        		 
        		
                document.getElementById(thisid).innerHTML=_html;
        		
	                    var speed3=parseInt(ScrollSpeed)*30;
        				
	                    document.getElementById(thisid+'2').innerHTML=document.getElementById(thisid+'1').innerHTML;
        				
        				        				
    				    var marginTop=0;
    				    var ptop=$(thisid).css("margin-top");
    				    if(ptop!=null)
    				    {
    				       try{ marginTop=parseInt(ptop);}catch(e){}
    				    } 
        				var _time=0;
        				var _mw=parseInt(goHeight);
	                    function Marquee(){ 
        				    _time++;
	                        if(_time>=_mw)  
	                        {
	                            _time=0;
            				}
	                        document.getElementById(thisid+'1').style.marginTop=-_time+"px";
	                    }
        				
	                    var MyMar=setInterval(Marquee,speed3);
        				
	                    document.getElementById(thisid+'0').onmouseover=function() {clearInterval(MyMar)};
        				
	                    document.getElementById(thisid+'0').onmouseout=function() {MyMar=setInterval(Marquee,speed3)};

                      })();
        	
        }
        
        //向下
        var marobj4=$("div[direction='down']");
        for(var i=0;i<marobj4.length;i++)
        {
            var _htmlContent=$(marobj4[i]).html();
            (function(){
	                    var thisid=$(marobj4[i]).attr('id');
	                    var MarWidth=$(marobj4[i]).attr("title");
	                    if(MarWidth=='') MarWidth=$(marobj4[i]).css('height');
	                    if(MarWidth==''||MarWidth=='auto')MarWidth=$(marobj4[i]).height();
	                    var goHeight=$(marobj3[i]).height(); 
    	                
	                    var ScrollSpeed=$(marobj4[i]).attr("scrollamount");
        				
	                    var _html='<DIV id='+thisid+'0 style="position:relative;height: '+parseInt(MarWidth)+'px;overflow: hidden;">\
        <div id='+thisid+'1 style="margin-top:0px;">'+_htmlContent+'</div>\
        <div id='+thisid+'2></div>\
        </DIV>';
        		
        		
                document.getElementById(thisid).innerHTML=_html;
        		
	                    var speed3=parseInt(ScrollSpeed)*30;
        				
	                    document.getElementById(thisid+'2').innerHTML=document.getElementById(thisid+'1').innerHTML;
    	                
    	                
        				var _time=-parseInt(goHeight);
	                    function Marquee(){ 
        				    _time++;
	                        if(_time>=0)  
	                        {
	                            _time=-parseInt(goHeight);
            				}
	                        document.getElementById(thisid+'1').style.marginTop=_time+"px";
	                    }
        				
	                    var MyMar=setInterval(Marquee,speed3);
        				
	                    document.getElementById(thisid+'0').onmouseover=function() {clearInterval(MyMar)};
        				
	                    document.getElementById(thisid+'0').onmouseout=function() {MyMar=setInterval(Marquee,speed3)};

                      })();
        	
        }
        //***//


    }catch(e)
    {
        //alert(e);
    }
     
 }
 
 /*------------------------------------------
Author: xujiwei
Website: http://www.xujiwei.cn
E-mail: vipxjw@163.com
Copyright (c) 2006, All Rights Reserved
------------------------------------------*/
function AJAXRequest() {
	var xmlObj = false;
	var CBfunc,ObjSelf;
	ObjSelf=this;
	try { xmlObj=new XMLHttpRequest; }
	catch(e) {
		try { xmlObj=new ActiveXObject("MSXML2.XMLHTTP"); }
		catch(e2) {
			try { xmlObj=new ActiveXObject("Microsoft.XMLHTTP"); }
			catch(e3) { xmlObj=false; }
		}
	}
	if (!xmlObj) return false;
	if(arguments[0]) this.url=arguments[0]; else this.url="";
	if(arguments[1]) this.callback=arguments[1]; else this.callback=function(obj){return};
	if(arguments[2]) this.content=arguments[2]; else this.content="";
	if(arguments[3]) this.method=arguments[3]; else this.method="POST";
	if(arguments[4]) this.async=arguments[4]; else this.async=true;
	this.send=function() {
		var purl,pcbf,pc,pm,pa;
		if(arguments[0]) purl=arguments[0]; else purl=this.url;
		if(arguments[1]) pc=arguments[1]; else pc=this.content;
		if(arguments[2]) pcbf=arguments[2]; else pcbf=this.callback;
		if(arguments[3]) pm=arguments[3]; else pm=this.method;
		if(arguments[4]) pa=arguments[4]; else pa=this.async;
		if(!pm||!purl||!pa) return false;
		xmlObj.open (pm, purl, pa);
		if(pm=="POST") xmlObj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlObj.onreadystatechange=function() {
			if(xmlObj.readyState==4) {
				if(xmlObj.status==200) {
					pcbf(xmlObj);
				}
				else {
					pcbf(null);
				}
			}
		}
		if(pm=="POST")
			xmlObj.send(pc);
		else
			xmlObj.send("");
	}
	this.get=function() {
		var purl,pcbf;
		if(arguments[0]) purl=arguments[0]; else purl=this.url;
		if(arguments[1]) pcbf=arguments[1]; else pcbf=this.callback;
		if(!purl&&!pcbf) return false;
		this.send(purl,"",pcbf,"GET",true);
	}
	this.post=function() {
		var fo,pcbf,purl,pc,pm;
		if(arguments[0]) fo=arguments[0]; else return false;
		if(arguments[1]) pcbf=arguments[1]; else pcbf=this.callback;
		if(arguments[2])
			purl=arguments[2];
		else if(fo.action)
			purl=fo.action;
		else
			purl=this.url;
		if(arguments[3])
			pm=arguments[3];
		else if(fo.method)
			pm=fo.method.toLowerCase();
		else
			pm="post";
		if(!pcbf&&!purl) return false;
		pc=this.formToStr(fo);
		if(!pc) return false;
		if(pm) {
			if(pm=="post")
				this.send(purl,pc,pcbf,"POST",true);
			else
				if(purl.indexOf("?")>0)
					this.send(purl+"&"+pc,"",pcbf,"GET",true);
				else
					this.send(purl+"?"+pc,"",pcbf,"GET",true);
		}
		else
			this.send(purl,pc,pcbf,"POST",true);
	}
	// formToStr
	// from SurfChen <surfchen@gmail.com>
	// @url     http://www.surfchen.org/
	// @license http://www.gnu.org/licenses/gpl.html GPL
	// modified by xujiwei
	// @url     http://www.xujiwei.cn/
	this.formToStr=function(fc) {
		var i,query_string="",and="";
		for(i=0;i<fc.length;i++) {
			e=fc[i];
			if (e.name!='') {
				if (e.type=='select-one') {
					element_value=e.options[e.selectedIndex].value;
				}
				else if (e.type=='checkbox' || e.type=='radio') {
					if (e.checked==false) {
						continue;	
					}
					element_value=e.value;
				}
				else {
					element_value=e.value;
				}
				element_value=encodeURIComponent(element_value);
				query_string+=and+e.name+'='+element_value;
				and="&";
			}
		}
		return query_string;
	}
}

var currenti=0;  
function getContent(url,divName,t) {
    $("#"+divName).html('loading ... ');
    if(document.getElementById(divName))
    {
        $.ajax({
		type: "post",
		url: url,
			success: function(data, textStatus){
					 var content=data;
		            // content=content.replace('script','scr'+'ipt');
		            // document.getElementById(divName).innerHTML=content;
                     $("#"+divName).html(content);
			},
			complete: function(XMLHttpRequest, textStatus){
			         currenti++;
			
			         AutoiHeight(divName); 
			            
			         if(currenti==t-1)
			         {
			             
                        InitEditContainer();

                        setTimeout("setAllMaxHeight();",0)
                        setTimeout("getbaseball();",0)
                        setTimeout("reloadball();",0)
  
			         
			         }
			         
			         
		    }
		});
    }

}
 
//由分页去取数据
function getContentP(PageNumber,divName) {

    try{
        setHeightByID(divName,document.getElementById(divName).offsetHeight);
    }catch(e){}
    
    document.getElementById(divName).innerHTML='loading ... ';
    
    var url='/ProAjax/getReloadData.aspx?divName='+divName;
    url+='&_pageNumber='+PageNumber;
    
    //alert(url);
    
    var searchStr=document.location.search;
    var _pid=QueryStringFromStr(searchStr,'_id');
    if(_pid!=null&&_pid!='')url+='&_id='+_pid;
    var _type=QueryStringFromStr(searchStr,'_type');
    if(_type!=null&&_type!='')url+='&_type='+_type;
    var _key=QueryStringFromStr(searchStr,'_key');
    if(_key!=null&&_key!='')url+='&_key='+_key;
 
    //alert(url);
    if(document.getElementById(divName))
    {
        $.ajax({
		type: "post",
		url: url,
			success: function(data, textStatus){
					 var content=data;
		             content=content.replace('script','scr'+'ipt');
		             document.getElementById(divName).innerHTML=content;
		             setAllMaxHeight();
			} 
		});
	}
	

}



function ExecuteNonQuery(url)
{
     $.ajax({
		type: "post",
		url: url,
			success: function(data, textStatus){
			    //alert(data);
			}
		});
}

(function(A, w) {
    function ma() {
        if (!c.isReady) {
            try {
                s.documentElement.doScroll("left")
            } catch(a) {
                setTimeout(ma, 1);
                return
            }
            c.ready()
        }
    }
    function Qa(a, b) {
        b.src ? c.ajax({
            url: b.src,
            async: false,
            dataType: "script"
        }) : c.globalEval(b.text || b.textContent || b.innerHTML || "");
        b.parentNode && b.parentNode.removeChild(b)
    }
    function X(a, b, d, f, e, j) {
        var i = a.length;
        if (typeof b === "object") {
            for (var o in b) X(a, o, b[o], f, e, d);
            return a
        }
        if (d !== w) {
            f = !j && f && c.isFunction(d);
            for (o = 0; o < i; o++) e(a[o], b, f ? d.call(a[o], o, e(a[o], b)) : d, j);
            return a
        }
        return i ? e(a[0], b) : w
    }
    function J() {
        return (new Date).getTime()
    }
    function Y() {
        return false
    }
    function Z() {
        return true
    }
    function na(a, b, d) {
        d[0].type = a;
        return c.event.handle.apply(b, d)
    }
    function oa(a) {
        var b, d = [],
        f = [],
        e = arguments,
        j,
        i,
        o,
        k,
        n,
        r;
        i = c.data(this, "events");
        if (! (a.liveFired === this || !i || !i.live || a.button && a.type === "click")) {
            a.liveFired = this;
            var u = i.live.slice(0);
            for (k = 0; k < u.length; k++) {
                i = u[k];
                i.origType.replace(O, "") === a.type ? f.push(i.selector) : u.splice(k--, 1)
            }
            j = c(a.target).closest(f, a.currentTarget);
            n = 0;
            for (r = j.length; n < r; n++) for (k = 0; k < u.length; k++) {
                i = u[k];
                if (j[n].selector === i.selector) {
                    o = j[n].elem;
                    f = null;
                    if (i.preType === "mouseenter" || i.preType === "mouseleave") f = c(a.relatedTarget).closest(i.selector)[0];
                    if (!f || f !== o) d.push({
                        elem: o,
                        handleObj: i
                    })
                }
            }
            n = 0;
            for (r = d.length; n < r; n++) {
                j = d[n];
                a.currentTarget = j.elem;
                a.data = j.handleObj.data;
                a.handleObj = j.handleObj;
                if (j.handleObj.origHandler.apply(j.elem, e) === false) {
                    b = false;
                    break
                }
            }
            return b
        }
    }
    function pa(a, b) {
        return "live." + (a && a !== "*" ? a + ".": "") + b.replace(/\./g, "`").replace(/ /g, "&")
    }
    function qa(a) {
        return ! a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function ra(a, b) {
        var d = 0;
        b.each(function() {
            if (this.nodeName === (a[d] && a[d].nodeName)) {
                var f = c.data(a[d++]),
                e = c.data(this, f);
                if (f = f && f.events) {
                    delete e.handle;
                    e.events = {};
                    for (var j in f) for (var i in f[j]) c.event.add(this, j, f[j][i], f[j][i].data)
                }
            }
        })
    }
    function sa(a, b, d) {
        var f, e, j;
        b = b && b[0] ? b[0].ownerDocument || b[0] : s;
        if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && b === s && !ta.test(a[0]) && (c.support.checkClone || !ua.test(a[0]))) {
            e = true;
            if (j = c.fragments[a[0]]) if (j !== 1) f = j
        }
        if (!f) {
            f = b.createDocumentFragment();
            c.clean(a, b, f, d)
        }
        if (e) c.fragments[a[0]] = j ? f: 1;
        return {
            fragment: f,
            cacheable: e
        }
    }
    function K(a, b) {
        var d = {};
        c.each(va.concat.apply([], va.slice(0, b)),
        function() {
            d[this] = a
        });
        return d
    }
    function wa(a) {
        return "scrollTo" in a && a.document ? a: a.nodeType === 9 ? a.defaultView || a.parentWindow: false
    }
    var c = function(a, b) {
        return new c.fn.init(a, b)
    },
    Ra = A.jQuery,
    Sa = A.$,
    s = A.document,
    T,
    Ta = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
    Ua = /^.[^:#\[\.,]*$/,
    Va = /\S/,
    Wa = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
    Xa = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
    P = navigator.userAgent,
    xa = false,
    Q = [],
    L,
    $ = Object.prototype.toString,
    aa = Object.prototype.hasOwnProperty,
    ba = Array.prototype.push,
    R = Array.prototype.slice,
    ya = Array.prototype.indexOf;
    c.fn = c.prototype = {
        init: function(a, b) {
            var d, f;
            if (!a) return this;
            if (a.nodeType) {
                this.context = this[0] = a;
                this.length = 1;
                return this
            }
            if (a === "body" && !b) {
                this.context = s;
                this[0] = s.body;
                this.selector = "body";
                this.length = 1;
                return this
            }
            if (typeof a === "string") if ((d = Ta.exec(a)) && (d[1] || !b)) if (d[1]) {
                f = b ? b.ownerDocument || b: s;
                if (a = Xa.exec(a)) if (c.isPlainObject(b)) {
                    a = [s.createElement(a[1])];
                    c.fn.attr.call(a, b, true)
                } else a = [f.createElement(a[1])];
                else {
                    a = sa([d[1]], [f]);
                    a = (a.cacheable ? a.fragment.cloneNode(true) : a.fragment).childNodes
                }
                return c.merge(this, a)
            } else {
                if (b = s.getElementById(d[2])) {
                    if (b.id !== d[2]) return T.find(a);
                    this.length = 1;
                    this[0] = b
                }
                this.context = s;
                this.selector = a;
                return this
            } else if (!b && /^\w+$/.test(a)) {
                this.selector = a;
                this.context = s;
                a = s.getElementsByTagName(a);
                return c.merge(this, a)
            } else return ! b || b.jquery ? (b || T).find(a) : c(b).find(a);
            else if (c.isFunction(a)) return T.ready(a);
            if (a.selector !== w) {
                this.selector = a.selector;
                this.context = a.context
            }
            return c.makeArray(a, this)
        },
        selector: "",
        jquery: "1.4.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return R.call(this, 0)
        },
        get: function(a) {
            return a == null ? this.toArray() : a < 0 ? this.slice(a)[0] : this[a]
        },
        pushStack: function(a, b, d) {
            var f = c();
            c.isArray(a) ? ba.apply(f, a) : c.merge(f, a);
            f.prevObject = this;
            f.context = this.context;
            if (b === "find") f.selector = this.selector + (this.selector ? " ": "") + d;
            else if (b) f.selector = this.selector + "." + b + "(" + d + ")";
            return f
        },
        each: function(a, b) {
            return c.each(this, a, b)
        },
        ready: function(a) {
            c.bindReady();
            if (c.isReady) a.call(s, c);
            else Q && Q.push(a);
            return this
        },
        eq: function(a) {
            return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments), "slice", R.call(arguments).join(","))
        },
        map: function(a) {
            return this.pushStack(c.map(this,
            function(b, d) {
                return a.call(b, d, b)
            }))
        },
        end: function() {
            return this.prevObject || c(null)
        },
        push: ba,
        sort: [].sort,
        splice: [].splice
    };
    c.fn.init.prototype = c.fn;
    c.extend = c.fn.extend = function() {
        var a = arguments[0] || {},
        b = 1,
        d = arguments.length,
        f = false,
        e,
        j,
        i,
        o;
        if (typeof a === "boolean") {
            f = a;
            a = arguments[1] || {};
            b = 2
        }
        if (typeof a !== "object" && !c.isFunction(a)) a = {};
        if (d === b) {
            a = this; --b
        }
        for (; b < d; b++) if ((e = arguments[b]) != null) for (j in e) {
            i = a[j];
            o = e[j];
            if (a !== o) if (f && o && (c.isPlainObject(o) || c.isArray(o))) {
                i = i && (c.isPlainObject(i) || c.isArray(i)) ? i: c.isArray(o) ? [] : {};
                a[j] = c.extend(f, i, o)
            } else if (o !== w) a[j] = o
        }
        return a
    };
    c.extend({
        noConflict: function(a) {
            A.$ = Sa;
            if (a) A.jQuery = Ra;
            return c
        },
        isReady: false,
        ready: function() {
            if (!c.isReady) {
                if (!s.body) return setTimeout(c.ready, 13);
                c.isReady = true;
                if (Q) {
                    for (var a, b = 0; a = Q[b++];) a.call(s, c);
                    Q = null
                }
                c.fn.triggerHandler && c(s).triggerHandler("ready")
            }
        },
        bindReady: function() {
            if (!xa) {
                xa = true;
                if (s.readyState === "complete") return c.ready();
                if (s.addEventListener) {
                    s.addEventListener("DOMContentLoaded", L, false);
                    A.addEventListener("load", c.ready, false)
                } else if (s.attachEvent) {
                    s.attachEvent("onreadystatechange", L);
                    A.attachEvent("onload", c.ready);
                    var a = false;
                    try {
                        a = A.frameElement == null
                    } catch(b) {}
                    s.documentElement.doScroll && a && ma()
                }
            }
        },
        isFunction: function(a) {
            return $.call(a) === "[object Function]"
        },
        isArray: function(a) {
            return $.call(a) === "[object Array]"
        },
        isPlainObject: function(a) {
            if (!a || $.call(a) !== "[object Object]" || a.nodeType || a.setInterval) return false;
            if (a.constructor && !aa.call(a, "constructor") && !aa.call(a.constructor.prototype, "isPrototypeOf")) return false;
            var b;
            for (b in a);
            return b === w || aa.call(a, b)
        },
        isEmptyObject: function(a) {
            for (var b in a) return false;
            return true
        },
        error: function(a) {
            throw a;
        },
        parseJSON: function(a) {
            if (typeof a !== "string" || !a) return null;
            a = c.trim(a);
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return A.JSON && A.JSON.parse ? A.JSON.parse(a) : (new Function("return " + a))();
            else c.error("Invalid JSON: " + a)
        },
        noop: function() {},
        globalEval: function(a) {
            if (a && Va.test(a)) {
                var b = s.getElementsByTagName("head")[0] || s.documentElement,
                d = s.createElement("script");
                d.type = "text/javascript";
                if (c.support.scriptEval) d.appendChild(s.createTextNode(a));
                else d.text = a;
                b.insertBefore(d, b.firstChild);
                b.removeChild(d)
            }
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        },
        each: function(a, b, d) {
            var f, e = 0,
            j = a.length,
            i = j === w || c.isFunction(a);
            if (d) if (i) for (f in a) {
                if (b.apply(a[f], d) === false) break
            } else for (; e < j;) {
                if (b.apply(a[e++], d) === false) break
            } else if (i) for (f in a) {
                if (b.call(a[f], f, a[f]) === false) break
            } else for (d = a[0]; e < j && b.call(d, e, d) !== false; d = a[++e]);
            return a
        },
        trim: function(a) {
            return (a || "").replace(Wa, "")
        },
        makeArray: function(a, b) {
            b = b || [];
            if (a != null) a.length == null || typeof a === "string" || c.isFunction(a) || typeof a !== "function" && a.setInterval ? ba.call(b, a) : c.merge(b, a);
            return b
        },
        inArray: function(a, b) {
            if (b.indexOf) return b.indexOf(a);
            for (var d = 0,
            f = b.length; d < f; d++) if (b[d] === a) return d;
            return - 1
        },
        merge: function(a, b) {
            var d = a.length,
            f = 0;
            if (typeof b.length === "number") for (var e = b.length; f < e; f++) a[d++] = b[f];
            else for (; b[f] !== w;) a[d++] = b[f++];
            a.length = d;
            return a
        },
        grep: function(a, b, d) {
            for (var f = [], e = 0, j = a.length; e < j; e++) ! d !== !b(a[e], e) && f.push(a[e]);
            return f
        },
        map: function(a, b, d) {
            for (var f = [], e, j = 0, i = a.length; j < i; j++) {
                e = b(a[j], j, d);
                if (e != null) f[f.length] = e
            }
            return f.concat.apply([], f)
        },
        guid: 1,
        proxy: function(a, b, d) {
            if (arguments.length === 2) if (typeof b === "string") {
                d = a;
                a = d[b];
                b = w
            } else if (b && !c.isFunction(b)) {
                d = b;
                b = w
            }
            if (!b && a) b = function() {
                return a.apply(d || this, arguments)
            };
            if (a) b.guid = a.guid = a.guid || b.guid || c.guid++;
            return b
        },
        uaMatch: function(a) {
            a = a.toLowerCase();
            a = /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || !/compatible/.test(a) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(a) || [];
            return {
                browser: a[1] || "",
                version: a[2] || "0"
            }
        },
        browser: {}
    });
    P = c.uaMatch(P);
    if (P.browser) {
        c.browser[P.browser] = true;
        c.browser.version = P.version
    }
    if (c.browser.webkit) c.browser.safari = true;
    if (ya) c.inArray = function(a, b) {
        return ya.call(b, a)
    };
    T = c(s);
    if (s.addEventListener) L = function() {
        s.removeEventListener("DOMContentLoaded", L, false);
        c.ready()
    };
    else if (s.attachEvent) L = function() {
        if (s.readyState === "complete") {
            s.detachEvent("onreadystatechange", L);
            c.ready()
        }
    }; (function() {
        c.support = {};
        var a = s.documentElement,
        b = s.createElement("script"),
        d = s.createElement("div"),
        f = "script" + J();
        d.style.display = "none";
        d.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var e = d.getElementsByTagName("*"),
        j = d.getElementsByTagName("a")[0];
        if (! (!e || !e.length || !j)) {
            c.support = {
                leadingWhitespace: d.firstChild.nodeType === 3,
                tbody: !d.getElementsByTagName("tbody").length,
                htmlSerialize: !!d.getElementsByTagName("link").length,
                style: /red/.test(j.getAttribute("style")),
                hrefNormalized: j.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(j.style.opacity),
                cssFloat: !!j.style.cssFloat,
                checkOn: d.getElementsByTagName("input")[0].value === "on",
                optSelected: s.createElement("select").appendChild(s.createElement("option")).selected,
                parentNode: d.removeChild(d.appendChild(s.createElement("div"))).parentNode === null,
                deleteExpando: true,
                checkClone: false,
                scriptEval: false,
                noCloneEvent: true,
                boxModel: null
            };
            b.type = "text/javascript";
            try {
                b.appendChild(s.createTextNode("window." + f + "=1;"))
            } catch(i) {}
            a.insertBefore(b, a.firstChild);
            if (A[f]) {
                c.support.scriptEval = true;
                delete A[f]
            }
            try {
                delete b.test
            } catch(o) {
                c.support.deleteExpando = false
            }
            a.removeChild(b);
            if (d.attachEvent && d.fireEvent) {
                d.attachEvent("onclick",
                function k() {
                    c.support.noCloneEvent = false;
                    d.detachEvent("onclick", k)
                });
                d.cloneNode(true).fireEvent("onclick")
            }
            d = s.createElement("div");
            d.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            a = s.createDocumentFragment();
            a.appendChild(d.firstChild);
            c.support.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked;
            c(function() {
                var k = s.createElement("div");
                k.style.width = k.style.paddingLeft = "1px";
                s.body.appendChild(k);
                c.boxModel = c.support.boxModel = k.offsetWidth === 2;
                s.body.removeChild(k).style.display = "none"
            });
            a = function(k) {
                var n = s.createElement("div");
                k = "on" + k;
                var r = k in n;
                if (!r) {
                    n.setAttribute(k, "return;");
                    r = typeof n[k] === "function"
                }
                return r
            };
            c.support.submitBubbles = a("submit");
            c.support.changeBubbles = a("change");
            a = b = d = e = j = null
        }
    })();
    c.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    var G = "jQuery" + J(),
    Ya = 0,
    za = {};
    c.extend({
        cache: {},
        expando: G,
        noData: {
            embed: true,
            object: true,
            applet: true
        },
        data: function(a, b, d) {
            if (! (a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
                a = a == A ? za: a;
                var f = a[G],
                e = c.cache;
                if (!f && typeof b === "string" && d === w) return null;
                f || (f = ++Ya);
                if (typeof b === "object") {
                    a[G] = f;
                    e[f] = c.extend(true, {},
                    b)
                } else if (!e[f]) {
                    a[G] = f;
                    e[f] = {}
                }
                a = e[f];
                if (d !== w) a[b] = d;
                return typeof b === "string" ? a[b] : a
            }
        },
        removeData: function(a, b) {
            if (! (a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
                a = a == A ? za: a;
                var d = a[G],
                f = c.cache,
                e = f[d];
                if (b) {
                    if (e) {
                        delete e[b];
                        c.isEmptyObject(e) && c.removeData(a)
                    }
                } else {
                    if (c.support.deleteExpando) delete a[c.expando];
                    else a.removeAttribute && a.removeAttribute(c.expando);
                    delete f[d]
                }
            }
        }
    });
    c.fn.extend({
        data: function(a, b) {
            if (typeof a === "undefined" && this.length) return c.data(this[0]);
            else if (typeof a === "object") return this.each(function() {
                c.data(this, a)
            });
            var d = a.split(".");
            d[1] = d[1] ? "." + d[1] : "";
            if (b === w) {
                var f = this.triggerHandler("getData" + d[1] + "!", [d[0]]);
                if (f === w && this.length) f = c.data(this[0], a);
                return f === w && d[1] ? this.data(d[0]) : f
            } else return this.trigger("setData" + d[1] + "!", [d[0], b]).each(function() {
                c.data(this, a, b)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                c.removeData(this, a)
            })
        }
    });
    c.extend({
        queue: function(a, b, d) {
            if (a) {
                b = (b || "fx") + "queue";
                var f = c.data(a, b);
                if (!d) return f || [];
                if (!f || c.isArray(d)) f = c.data(a, b, c.makeArray(d));
                else f.push(d);
                return f
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var d = c.queue(a, b),
            f = d.shift();
            if (f === "inprogress") f = d.shift();
            if (f) {
                b === "fx" && d.unshift("inprogress");
                f.call(a,
                function() {
                    c.dequeue(a, b)
                })
            }
        }
    });
    c.fn.extend({
        queue: function(a, b) {
            if (typeof a !== "string") {
                b = a;
                a = "fx"
            }
            if (b === w) return c.queue(this[0], a);
            return this.each(function() {
                var d = c.queue(this, a, b);
                a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                c.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = c.fx ? c.fx.speeds[a] || a: a;
            b = b || "fx";
            return this.queue(b,
            function() {
                var d = this;
                setTimeout(function() {
                    c.dequeue(d, b)
                },
                a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        }
    });
    var Aa = /[\n\t]/g,
    ca = /\s+/,
    Za = /\r/g,
    $a = /href|src|style/,
    ab = /(button|input)/i,
    bb = /(button|input|object|select|textarea)/i,
    cb = /^(a|area)$/i,
    Ba = /radio|checkbox/;
    c.fn.extend({
        attr: function(a, b) {
            return X(this, a, b, true, c.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                c.attr(this, a, "");
                this.nodeType === 1 && this.removeAttribute(a)
            })
        },
        addClass: function(a) {
            if (c.isFunction(a)) return this.each(function(n) {
                var r = c(this);
                r.addClass(a.call(this, n, r.attr("class")))
            });
            if (a && typeof a === "string") for (var b = (a || "").split(ca), d = 0, f = this.length; d < f; d++) {
                var e = this[d];
                if (e.nodeType === 1) if (e.className) {
                    for (var j = " " + e.className + " ",
                    i = e.className,
                    o = 0,
                    k = b.length; o < k; o++) if (j.indexOf(" " + b[o] + " ") < 0) i += " " + b[o];
                    e.className = c.trim(i)
                } else e.className = a
            }
            return this
        },
        removeClass: function(a) {
            if (c.isFunction(a)) return this.each(function(k) {
                var n = c(this);
                n.removeClass(a.call(this, k, n.attr("class")))
            });
            if (a && typeof a === "string" || a === w) for (var b = (a || "").split(ca), d = 0, f = this.length; d < f; d++) {
                var e = this[d];
                if (e.nodeType === 1 && e.className) if (a) {
                    for (var j = (" " + e.className + " ").replace(Aa, " "), i = 0, o = b.length; i < o; i++) j = j.replace(" " + b[i] + " ", " ");
                    e.className = c.trim(j)
                } else e.className = ""
            }
            return this
        },
        toggleClass: function(a, b) {
            var d = typeof a,
            f = typeof b === "boolean";
            if (c.isFunction(a)) return this.each(function(e) {
                var j = c(this);
                j.toggleClass(a.call(this, e, j.attr("class"), b), b)
            });
            return this.each(function() {
                if (d === "string") for (var e, j = 0,
                i = c(this), o = b, k = a.split(ca); e = k[j++];) {
                    o = f ? o: !i.hasClass(e);
                    i[o ? "addClass": "removeClass"](e)
                } else if (d === "undefined" || d === "boolean") {
                    this.className && c.data(this, "__className__", this.className);
                    this.className = this.className || a === false ? "": c.data(this, "__className__") || ""
                }
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0,
            d = this.length; b < d; b++) if ((" " + this[b].className + " ").replace(Aa, " ").indexOf(a) > -1) return true;
            return false
        },
        val: function(a) {
            if (a === w) {
                var b = this[0];
                if (b) {
                    if (c.nodeName(b, "option")) return (b.attributes.value || {}).specified ? b.value: b.text;
                    if (c.nodeName(b, "select")) {
                        var d = b.selectedIndex,
                        f = [],
                        e = b.options;
                        b = b.type === "select-one";
                        if (d < 0) return null;
                        var j = b ? d: 0;
                        for (d = b ? d + 1 : e.length; j < d; j++) {
                            var i = e[j];
                            if (i.selected) {
                                a = c(i).val();
                                if (b) return a;
                                f.push(a)
                            }
                        }
                        return f
                    }
                    if (Ba.test(b.type) && !c.support.checkOn) return b.getAttribute("value") === null ? "on": b.value;
                    return (b.value || "").replace(Za, "")
                }
                return w
            }
            var o = c.isFunction(a);
            return this.each(function(k) {
                var n = c(this),
                r = a;
                if (this.nodeType === 1) {
                    if (o) r = a.call(this, k, n.val());
                    if (typeof r === "number") r += "";
                    if (c.isArray(r) && Ba.test(this.type)) this.checked = c.inArray(n.val(), r) >= 0;
                    else if (c.nodeName(this, "select")) {
                        var u = c.makeArray(r);
                        c("option", this).each(function() {
                            this.selected = c.inArray(c(this).val(), u) >= 0
                        });
                        if (!u.length) this.selectedIndex = -1
                    } else this.value = r
                }
            })
        }
    });
    c.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function(a, b, d, f) {
            if (!a || a.nodeType === 3 || a.nodeType === 8) return w;
            if (f && b in c.attrFn) return c(a)[b](d);
            f = a.nodeType !== 1 || !c.isXMLDoc(a);
            var e = d !== w;
            b = f && c.props[b] || b;
            if (a.nodeType === 1) {
                var j = $a.test(b);
                if (b in a && f && !j) {
                    if (e) {
                        b === "type" && ab.test(a.nodeName) && a.parentNode && c.error("type property can't be changed");
                        a[b] = d
                    }
                    if (c.nodeName(a, "form") && a.getAttributeNode(b)) return a.getAttributeNode(b).nodeValue;
                    if (b === "tabIndex") return (b = a.getAttributeNode("tabIndex")) && b.specified ? b.value: bb.test(a.nodeName) || cb.test(a.nodeName) && a.href ? 0 : w;
                    return a[b]
                }
                if (!c.support.style && f && b === "style") {
                    if (e) a.style.cssText = "" + d;
                    return a.style.cssText
                }
                e && a.setAttribute(b, "" + d);
                a = !c.support.hrefNormalized && f && j ? a.getAttribute(b, 2) : a.getAttribute(b);
                return a === null ? w: a
            }
            return c.style(a, b, d)
        }
    });
    var O = /\.(.*)$/,
    db = function(a) {
        return a.replace(/[^\w\s\.\|`]/g,
        function(b) {
            return "\\" + b
        })
    };
    c.event = {
        add: function(a, b, d, f) {
            if (! (a.nodeType === 3 || a.nodeType === 8)) {
                if (a.setInterval && a !== A && !a.frameElement) a = A;
                var e, j;
                if (d.handler) {
                    e = d;
                    d = e.handler
                }
                if (!d.guid) d.guid = c.guid++;
                if (j = c.data(a)) {
                    var i = j.events = j.events || {},
                    o = j.handle;
                    if (!o) j.handle = o = function() {
                        return typeof c !== "undefined" && !c.event.triggered ? c.event.handle.apply(o.elem, arguments) : w
                    };
                    o.elem = a;
                    b = b.split(" ");
                    for (var k, n = 0,
                    r; k = b[n++];) {
                        j = e ? c.extend({},
                        e) : {
                            handler: d,
                            data: f
                        };
                        if (k.indexOf(".") > -1) {
                            r = k.split(".");
                            k = r.shift();
                            j.namespace = r.slice(0).sort().join(".")
                        } else {
                            r = [];
                            j.namespace = ""
                        }
                        j.type = k;
                        j.guid = d.guid;
                        var u = i[k],
                        z = c.event.special[k] || {};
                        if (!u) {
                            u = i[k] = [];
                            if (!z.setup || z.setup.call(a, f, r, o) === false) if (a.addEventListener) a.addEventListener(k, o, false);
                            else a.attachEvent && a.attachEvent("on" + k, o)
                        }
                        if (z.add) {
                            z.add.call(a, j);
                            if (!j.handler.guid) j.handler.guid = d.guid
                        }
                        u.push(j);
                        c.event.global[k] = true
                    }
                    a = null
                }
            }
        },
        global: {},
        remove: function(a, b, d, f) {
            if (! (a.nodeType === 3 || a.nodeType === 8)) {
                var e, j = 0,
                i, o, k, n, r, u, z = c.data(a),
                C = z && z.events;
                if (z && C) {
                    if (b && b.type) {
                        d = b.handler;
                        b = b.type
                    }
                    if (!b || typeof b === "string" && b.charAt(0) === ".") {
                        b = b || "";
                        for (e in C) c.event.remove(a, e + b)
                    } else {
                        for (b = b.split(" "); e = b[j++];) {
                            n = e;
                            i = e.indexOf(".") < 0;
                            o = [];
                            if (!i) {
                                o = e.split(".");
                                e = o.shift();
                                k = new RegExp("(^|\\.)" + c.map(o.slice(0).sort(), db).join("\\.(?:.*\\.)?") + "(\\.|$)")
                            }
                            if (r = C[e]) if (d) {
                                n = c.event.special[e] || {};
                                for (B = f || 0; B < r.length; B++) {
                                    u = r[B];
                                    if (d.guid === u.guid) {
                                        if (i || k.test(u.namespace)) {
                                            f == null && r.splice(B--, 1);
                                            n.remove && n.remove.call(a, u)
                                        }
                                        if (f != null) break
                                    }
                                }
                                if (r.length === 0 || f != null && r.length === 1) {
                                    if (!n.teardown || n.teardown.call(a, o) === false) Ca(a, e, z.handle);
                                    delete C[e]
                                }
                            } else for (var B = 0; B < r.length; B++) {
                                u = r[B];
                                if (i || k.test(u.namespace)) {
                                    c.event.remove(a, n, u.handler, B);
                                    r.splice(B--, 1)
                                }
                            }
                        }
                        if (c.isEmptyObject(C)) {
                            if (b = z.handle) b.elem = null;
                            delete z.events;
                            delete z.handle;
                            c.isEmptyObject(z) && c.removeData(a)
                        }
                    }
                }
            }
        },
        trigger: function(a, b, d, f) {
            var e = a.type || a;
            if (!f) {
                a = typeof a === "object" ? a[G] ? a: c.extend(c.Event(e), a) : c.Event(e);
                if (e.indexOf("!") >= 0) {
                    a.type = e = e.slice(0, -1);
                    a.exclusive = true
                }
                if (!d) {
                    a.stopPropagation();
                    c.event.global[e] && c.each(c.cache,
                    function() {
                        this.events && this.events[e] && c.event.trigger(a, b, this.handle.elem)
                    })
                }
                if (!d || d.nodeType === 3 || d.nodeType === 8) return w;
                a.result = w;
                a.target = d;
                b = c.makeArray(b);
                b.unshift(a)
            }
            a.currentTarget = d; (f = c.data(d, "handle")) && f.apply(d, b);
            f = d.parentNode || d.ownerDocument;
            try {
                if (! (d && d.nodeName && c.noData[d.nodeName.toLowerCase()])) if (d["on" + e] && d["on" + e].apply(d, b) === false) a.result = false
            } catch(j) {}
            if (!a.isPropagationStopped() && f) c.event.trigger(a, b, f, true);
            else if (!a.isDefaultPrevented()) {
                f = a.target;
                var i, o = c.nodeName(f, "a") && e === "click",
                k = c.event.special[e] || {};
                if ((!k._default || k._default.call(d, a) === false) && !o && !(f && f.nodeName && c.noData[f.nodeName.toLowerCase()])) {
                    try {
                        if (f[e]) {
                            if (i = f["on" + e]) f["on" + e] = null;
                            c.event.triggered = true;
                            f[e]()
                        }
                    } catch(n) {}
                    if (i) f["on" + e] = i;
                    c.event.triggered = false
                }
            }
        },
        handle: function(a) {
            var b, d, f, e;
            a = arguments[0] = c.event.fix(a || A.event);
            a.currentTarget = this;
            b = a.type.indexOf(".") < 0 && !a.exclusive;
            if (!b) {
                d = a.type.split(".");
                a.type = d.shift();
                f = new RegExp("(^|\\.)" + d.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            e = c.data(this, "events");
            d = e[a.type];
            if (e && d) {
                d = d.slice(0);
                e = 0;
                for (var j = d.length; e < j; e++) {
                    var i = d[e];
                    if (b || f.test(i.namespace)) {
                        a.handler = i.handler;
                        a.data = i.data;
                        a.handleObj = i;
                        i = i.handler.apply(this, arguments);
                        if (i !== w) {
                            a.result = i;
                            if (i === false) {
                                a.preventDefault();
                                a.stopPropagation()
                            }
                        }
                        if (a.isImmediatePropagationStopped()) break
                    }
                }
            }
            return a.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(a) {
            if (a[G]) return a;
            var b = a;
            a = c.Event(b);
            for (var d = this.props.length,
            f; d;) {
                f = this.props[--d];
                a[f] = b[f]
            }
            if (!a.target) a.target = a.srcElement || s;
            if (a.target.nodeType === 3) a.target = a.target.parentNode;
            if (!a.relatedTarget && a.fromElement) a.relatedTarget = a.fromElement === a.target ? a.toElement: a.fromElement;
            if (a.pageX == null && a.clientX != null) {
                b = s.documentElement;
                d = s.body;
                a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0);
                a.pageY = a.clientY + (b && b.scrollTop || d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0)
            }
            if (!a.which && (a.charCode || a.charCode === 0 ? a.charCode: a.keyCode)) a.which = a.charCode || a.keyCode;
            if (!a.metaKey && a.ctrlKey) a.metaKey = a.ctrlKey;
            if (!a.which && a.button !== w) a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
            return a
        },
        guid: 1E8,
        proxy: c.proxy,
        special: {
            ready: {
                setup: c.bindReady,
                teardown: c.noop
            },
            live: {
                add: function(a) {
                    c.event.add(this, a.origType, c.extend({},
                    a, {
                        handler: oa
                    }))
                },
                remove: function(a) {
                    var b = true,
                    d = a.origType.replace(O, "");
                    c.each(c.data(this, "events").live || [],
                    function() {
                        if (d === this.origType.replace(O, "")) return b = false
                    });
                    b && c.event.remove(this, a.origType, oa)
                }
            },
            beforeunload: {
                setup: function(a, b, d) {
                    if (this.setInterval) this.onbeforeunload = d;
                    return false
                },
                teardown: function(a, b) {
                    if (this.onbeforeunload === b) this.onbeforeunload = null
                }
            }
        }
    };
    var Ca = s.removeEventListener ?
    function(a, b, d) {
        a.removeEventListener(b, d, false)
    }: function(a, b, d) {
        a.detachEvent("on" + b, d)
    };
    c.Event = function(a) {
        if (!this.preventDefault) return new c.Event(a);
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type
        } else this.type = a;
        this.timeStamp = J();
        this[G] = true
    };
    c.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = Z;
            var a = this.originalEvent;
            if (a) {
                a.preventDefault && a.preventDefault();
                a.returnValue = false
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = Z;
            var a = this.originalEvent;
            if (a) {
                a.stopPropagation && a.stopPropagation();
                a.cancelBubble = true
            }
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = Z;
            this.stopPropagation()
        },
        isDefaultPrevented: Y,
        isPropagationStopped: Y,
        isImmediatePropagationStopped: Y
    };
    var Da = function(a) {
        var b = a.relatedTarget;
        try {
            for (; b && b !== this;) b = b.parentNode;
            if (b !== this) {
                a.type = a.data;
                c.event.handle.apply(this, arguments)
            }
        } catch(d) {}
    },
    Ea = function(a) {
        a.type = a.data;
        c.event.handle.apply(this, arguments)
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        c.event.special[a] = {
            setup: function(d) {
                c.event.add(this, b, d && d.selector ? Ea: Da, a)
            },
            teardown: function(d) {
                c.event.remove(this, b, d && d.selector ? Ea: Da)
            }
        }
    });
    if (!c.support.submitBubbles) c.event.special.submit = {
        setup: function() {
            if (this.nodeName.toLowerCase() !== "form") {
                c.event.add(this, "click.specialSubmit",
                function(a) {
                    var b = a.target,
                    d = b.type;
                    if ((d === "submit" || d === "image") && c(b).closest("form").length) return na("submit", this, arguments)
                });
                c.event.add(this, "keypress.specialSubmit",
                function(a) {
                    var b = a.target,
                    d = b.type;
                    if ((d === "text" || d === "password") && c(b).closest("form").length && a.keyCode === 13) return na("submit", this, arguments)
                })
            } else return false
        },
        teardown: function() {
            c.event.remove(this, ".specialSubmit")
        }
    };
    if (!c.support.changeBubbles) {
        var da = /textarea|input|select/i,
        ea, Fa = function(a) {
            var b = a.type,
            d = a.value;
            if (b === "radio" || b === "checkbox") d = a.checked;
            else if (b === "select-multiple") d = a.selectedIndex > -1 ? c.map(a.options,
            function(f) {
                return f.selected
            }).join("-") : "";
            else if (a.nodeName.toLowerCase() === "select") d = a.selectedIndex;
            return d
        },
        fa = function(a, b) {
            var d = a.target,
            f, e;
            if (! (!da.test(d.nodeName) || d.readOnly)) {
                f = c.data(d, "_change_data");
                e = Fa(d);
                if (a.type !== "focusout" || d.type !== "radio") c.data(d, "_change_data", e);
                if (! (f === w || e === f)) if (f != null || e) {
                    a.type = "change";
                    return c.event.trigger(a, b, d)
                }
            }
        };
        c.event.special.change = {
            filters: {
                focusout: fa,
                click: function(a) {
                    var b = a.target,
                    d = b.type;
                    if (d === "radio" || d === "checkbox" || b.nodeName.toLowerCase() === "select") return fa.call(this, a)
                },
                keydown: function(a) {
                    var b = a.target,
                    d = b.type;
                    if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (d === "checkbox" || d === "radio") || d === "select-multiple") return fa.call(this, a)
                },
                beforeactivate: function(a) {
                    a = a.target;
                    c.data(a, "_change_data", Fa(a))
                }
            },
            setup: function() {
                if (this.type === "file") return false;
                for (var a in ea) c.event.add(this, a + ".specialChange", ea[a]);
                return da.test(this.nodeName)
            },
            teardown: function() {
                c.event.remove(this, ".specialChange");
                return da.test(this.nodeName)
            }
        };
        ea = c.event.special.change.filters
    }
    s.addEventListener && c.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        function d(f) {
            f = c.event.fix(f);
            f.type = b;
            return c.event.handle.call(this, f)
        }
        c.event.special[b] = {
            setup: function() {
                this.addEventListener(a, d, true)
            },
            teardown: function() {
                this.removeEventListener(a, d, true)
            }
        }
    });
    c.each(["bind", "one"],
    function(a, b) {
        c.fn[b] = function(d, f, e) {
            if (typeof d === "object") {
                for (var j in d) this[b](j, f, d[j], e);
                return this
            }
            if (c.isFunction(f)) {
                e = f;
                f = w
            }
            var i = b === "one" ? c.proxy(e,
            function(k) {
                c(this).unbind(k, i);
                return e.apply(this, arguments)
            }) : e;
            if (d === "unload" && b !== "one") this.one(d, f, e);
            else {
                j = 0;
                for (var o = this.length; j < o; j++) c.event.add(this[j], d, i, f)
            }
            return this
        }
    });
    c.fn.extend({
        unbind: function(a, b) {
            if (typeof a === "object" && !a.preventDefault) for (var d in a) this.unbind(d, a[d]);
            else {
                d = 0;
                for (var f = this.length; d < f; d++) c.event.remove(this[d], a, b)
            }
            return this
        },
        delegate: function(a, b, d, f) {
            return this.live(b, d, f, a)
        },
        undelegate: function(a, b, d) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, d, a)
        },
        trigger: function(a, b) {
            return this.each(function() {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) {
                a = c.Event(a);
                a.preventDefault();
                a.stopPropagation();
                c.event.trigger(a, b, this[0]);
                return a.result
            }
        },
        toggle: function(a) {
            for (var b = arguments,
            d = 1; d < b.length;) c.proxy(a, b[d++]);
            return this.click(c.proxy(a,
            function(f) {
                var e = (c.data(this, "lastToggle" + a.guid) || 0) % d;
                c.data(this, "lastToggle" + a.guid, e + 1);
                f.preventDefault();
                return b[e].apply(this, arguments) || false
            }))
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Ga = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    c.each(["live", "die"],
    function(a, b) {
        c.fn[b] = function(d, f, e, j) {
            var i, o = 0,
            k, n, r = j || this.selector,
            u = j ? this: c(this.context);
            if (c.isFunction(f)) {
                e = f;
                f = w
            }
            for (d = (d || "").split(" "); (i = d[o++]) != null;) {
                j = O.exec(i);
                k = "";
                if (j) {
                    k = j[0];
                    i = i.replace(O, "")
                }
                if (i === "hover") d.push("mouseenter" + k, "mouseleave" + k);
                else {
                    n = i;
                    if (i === "focus" || i === "blur") {
                        d.push(Ga[i] + k);
                        i += k
                    } else i = (Ga[i] || i) + k;
                    b === "live" ? u.each(function() {
                        c.event.add(this, pa(i, r), {
                            data: f,
                            selector: r,
                            handler: e,
                            origType: i,
                            origHandler: e,
                            preType: n
                        })
                    }) : u.unbind(pa(i, r), e)
                }
            }
            return this
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
    function(a, b) {
        c.fn[b] = function(d) {
            return d ? this.bind(b, d) : this.trigger(b)
        };
        if (c.attrFn) c.attrFn[b] = true
    });
    A.attachEvent && !A.addEventListener && A.attachEvent("onunload",
    function() {
        for (var a in c.cache) if (c.cache[a].handle) try {
            c.event.remove(c.cache[a].handle.elem)
        } catch(b) {}
    }); (function() {
        function a(g) {
            for (var h = "",
            l, m = 0; g[m]; m++) {
                l = g[m];
                if (l.nodeType === 3 || l.nodeType === 4) h += l.nodeValue;
                else if (l.nodeType !== 8) h += a(l.childNodes)
            }
            return h
        }
        function b(g, h, l, m, q, p) {
            q = 0;
            for (var v = m.length; q < v; q++) {
                var t = m[q];
                if (t) {
                    t = t[g];
                    for (var y = false; t;) {
                        if (t.sizcache === l) {
                            y = m[t.sizset];
                            break
                        }
                        if (t.nodeType === 1 && !p) {
                            t.sizcache = l;
                            t.sizset = q
                        }
                        if (t.nodeName.toLowerCase() === h) {
                            y = t;
                            break
                        }
                        t = t[g]
                    }
                    m[q] = y
                }
            }
        }
        function d(g, h, l, m, q, p) {
            q = 0;
            for (var v = m.length; q < v; q++) {
                var t = m[q];
                if (t) {
                    t = t[g];
                    for (var y = false; t;) {
                        if (t.sizcache === l) {
                            y = m[t.sizset];
                            break
                        }
                        if (t.nodeType === 1) {
                            if (!p) {
                                t.sizcache = l;
                                t.sizset = q
                            }
                            if (typeof h !== "string") {
                                if (t === h) {
                                    y = true;
                                    break
                                }
                            } else if (k.filter(h, [t]).length > 0) {
                                y = t;
                                break
                            }
                        }
                        t = t[g]
                    }
                    m[q] = y
                }
            }
        }
        var f = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        e = 0,
        j = Object.prototype.toString,
        i = false,
        o = true; [0, 0].sort(function() {
            o = false;
            return 0
        });
        var k = function(g, h, l, m) {
            l = l || [];
            var q = h = h || s;
            if (h.nodeType !== 1 && h.nodeType !== 9) return [];
            if (!g || typeof g !== "string") return l;
            for (var p = [], v, t, y, S, H = true, M = x(h), I = g; (f.exec(""), v = f.exec(I)) !== null;) {
                I = v[3];
                p.push(v[1]);
                if (v[2]) {
                    S = v[3];
                    break
                }
            }
            if (p.length > 1 && r.exec(g)) if (p.length === 2 && n.relative[p[0]]) t = ga(p[0] + p[1], h);
            else for (t = n.relative[p[0]] ? [h] : k(p.shift(), h); p.length;) {
                g = p.shift();
                if (n.relative[g]) g += p.shift();
                t = ga(g, t)
            } else {
                if (!m && p.length > 1 && h.nodeType === 9 && !M && n.match.ID.test(p[0]) && !n.match.ID.test(p[p.length - 1])) {
                    v = k.find(p.shift(), h, M);
                    h = v.expr ? k.filter(v.expr, v.set)[0] : v.set[0]
                }
                if (h) {
                    v = m ? {
                        expr: p.pop(),
                        set: z(m)
                    }: k.find(p.pop(), p.length === 1 && (p[0] === "~" || p[0] === "+") && h.parentNode ? h.parentNode: h, M);
                    t = v.expr ? k.filter(v.expr, v.set) : v.set;
                    if (p.length > 0) y = z(t);
                    else H = false;
                    for (; p.length;) {
                        var D = p.pop();
                        v = D;
                        if (n.relative[D]) v = p.pop();
                        else D = "";
                        if (v == null) v = h;
                        n.relative[D](y, v, M)
                    }
                } else y = []
            }
            y || (y = t);
            y || k.error(D || g);
            if (j.call(y) === "[object Array]") if (H) if (h && h.nodeType === 1) for (g = 0; y[g] != null; g++) {
                if (y[g] && (y[g] === true || y[g].nodeType === 1 && E(h, y[g]))) l.push(t[g])
            } else for (g = 0; y[g] != null; g++) y[g] && y[g].nodeType === 1 && l.push(t[g]);
            else l.push.apply(l, y);
            else z(y, l);
            if (S) {
                k(S, q, l, m);
                k.uniqueSort(l)
            }
            return l
        };
        k.uniqueSort = function(g) {
            if (B) {
                i = o;
                g.sort(B);
                if (i) for (var h = 1; h < g.length; h++) g[h] === g[h - 1] && g.splice(h--, 1)
            }
            return g
        };
        k.matches = function(g, h) {
            return k(g, null, null, h)
        };
        k.find = function(g, h, l) {
            var m, q;
            if (!g) return [];
            for (var p = 0,
            v = n.order.length; p < v; p++) {
                var t = n.order[p];
                if (q = n.leftMatch[t].exec(g)) {
                    var y = q[1];
                    q.splice(1, 1);
                    if (y.substr(y.length - 1) !== "\\") {
                        q[1] = (q[1] || "").replace(/\\/g, "");
                        m = n.find[t](q, h, l);
                        if (m != null) {
                            g = g.replace(n.match[t], "");
                            break
                        }
                    }
                }
            }
            m || (m = h.getElementsByTagName("*"));
            return {
                set: m,
                expr: g
            }
        };
        k.filter = function(g, h, l, m) {
            for (var q = g,
            p = [], v = h, t, y, S = h && h[0] && x(h[0]); g && h.length;) {
                for (var H in n.filter) if ((t = n.leftMatch[H].exec(g)) != null && t[2]) {
                    var M = n.filter[H],
                    I,
                    D;
                    D = t[1];
                    y = false;
                    t.splice(1, 1);
                    if (D.substr(D.length - 1) !== "\\") {
                        if (v === p) p = [];
                        if (n.preFilter[H]) if (t = n.preFilter[H](t, v, l, p, m, S)) {
                            if (t === true) continue
                        } else y = I = true;
                        if (t) for (var U = 0; (D = v[U]) != null; U++) if (D) {
                            I = M(D, t, U, v);
                            var Ha = m ^ !!I;
                            if (l && I != null) if (Ha) y = true;
                            else v[U] = false;
                            else if (Ha) {
                                p.push(D);
                                y = true
                            }
                        }
                        if (I !== w) {
                            l || (v = p);
                            g = g.replace(n.match[H], "");
                            if (!y) return [];
                            break
                        }
                    }
                }
                if (g === q) if (y == null) k.error(g);
                else break;
                q = g
            }
            return v
        };
        k.error = function(g) {
            throw "Syntax error, unrecognized expression: " + g;
        };
        var n = k.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(g) {
                    return g.getAttribute("href")
                }
            },
            relative: {
                "+": function(g, h) {
                    var l = typeof h === "string",
                    m = l && !/\W/.test(h);
                    l = l && !m;
                    if (m) h = h.toLowerCase();
                    m = 0;
                    for (var q = g.length,
                    p; m < q; m++) if (p = g[m]) {
                        for (; (p = p.previousSibling) && p.nodeType !== 1;);
                        g[m] = l || p && p.nodeName.toLowerCase() === h ? p || false: p === h
                    }
                    l && k.filter(h, g, true)
                },
                ">": function(g, h) {
                    var l = typeof h === "string";
                    if (l && !/\W/.test(h)) {
                        h = h.toLowerCase();
                        for (var m = 0,
                        q = g.length; m < q; m++) {
                            var p = g[m];
                            if (p) {
                                l = p.parentNode;
                                g[m] = l.nodeName.toLowerCase() === h ? l: false
                            }
                        }
                    } else {
                        m = 0;
                        for (q = g.length; m < q; m++) if (p = g[m]) g[m] = l ? p.parentNode: p.parentNode === h;
                        l && k.filter(h, g, true)
                    }
                },
                "": function(g, h, l) {
                    var m = e++,
                    q = d;
                    if (typeof h === "string" && !/\W/.test(h)) {
                        var p = h = h.toLowerCase();
                        q = b
                    }
                    q("parentNode", h, m, g, p, l)
                },
                "~": function(g, h, l) {
                    var m = e++,
                    q = d;
                    if (typeof h === "string" && !/\W/.test(h)) {
                        var p = h = h.toLowerCase();
                        q = b
                    }
                    q("previousSibling", h, m, g, p, l)
                }
            },
            find: {
                ID: function(g, h, l) {
                    if (typeof h.getElementById !== "undefined" && !l) return (g = h.getElementById(g[1])) ? [g] : []
                },
                NAME: function(g, h) {
                    if (typeof h.getElementsByName !== "undefined") {
                        var l = [];
                        h = h.getElementsByName(g[1]);
                        for (var m = 0,
                        q = h.length; m < q; m++) h[m].getAttribute("name") === g[1] && l.push(h[m]);
                        return l.length === 0 ? null: l
                    }
                },
                TAG: function(g, h) {
                    return h.getElementsByTagName(g[1])
                }
            },
            preFilter: {
                CLASS: function(g, h, l, m, q, p) {
                    g = " " + g[1].replace(/\\/g, "") + " ";
                    if (p) return g;
                    p = 0;
                    for (var v; (v = h[p]) != null; p++) if (v) if (q ^ (v.className && (" " + v.className + " ").replace(/[\t\n]/g, " ").indexOf(g) >= 0)) l || m.push(v);
                    else if (l) h[p] = false;
                    return false
                },
                ID: function(g) {
                    return g[1].replace(/\\/g, "")
                },
                TAG: function(g) {
                    return g[1].toLowerCase()
                },
                CHILD: function(g) {
                    if (g[1] === "nth") {
                        var h = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2] === "even" && "2n" || g[2] === "odd" && "2n+1" || !/\D/.test(g[2]) && "0n+" + g[2] || g[2]);
                        g[2] = h[1] + (h[2] || 1) - 0;
                        g[3] = h[3] - 0
                    }
                    g[0] = e++;
                    return g
                },
                ATTR: function(g, h, l, m, q, p) {
                    h = g[1].replace(/\\/g, "");
                    if (!p && n.attrMap[h]) g[1] = n.attrMap[h];
                    if (g[2] === "~=") g[4] = " " + g[4] + " ";
                    return g
                },
                PSEUDO: function(g, h, l, m, q) {
                    if (g[1] === "not") if ((f.exec(g[3]) || "").length > 1 || /^\w/.test(g[3])) g[3] = k(g[3], null, null, h);
                    else {
                        g = k.filter(g[3], h, l, true ^ q);
                        l || m.push.apply(m, g);
                        return false
                    } else if (n.match.POS.test(g[0]) || n.match.CHILD.test(g[0])) return true;
                    return g
                },
                POS: function(g) {
                    g.unshift(true);
                    return g
                }
            },
            filters: {
                enabled: function(g) {
                    return g.disabled === false && g.type !== "hidden"
                },
                disabled: function(g) {
                    return g.disabled === true
                },
                checked: function(g) {
                    return g.checked === true
                },
                selected: function(g) {
                    return g.selected === true
                },
                parent: function(g) {
                    return !! g.firstChild
                },
                empty: function(g) {
                    return ! g.firstChild
                },
                has: function(g, h, l) {
                    return !! k(l[3], g).length
                },
                header: function(g) {
                    return /h\d/i.test(g.nodeName)
                },
                text: function(g) {
                    return "text" === g.type
                },
                radio: function(g) {
                    return "radio" === g.type
                },
                checkbox: function(g) {
                    return "checkbox" === g.type
                },
                file: function(g) {
                    return "file" === g.type
                },
                password: function(g) {
                    return "password" === g.type
                },
                submit: function(g) {
                    return "submit" === g.type
                },
                image: function(g) {
                    return "image" === g.type
                },
                reset: function(g) {
                    return "reset" === g.type
                },
                button: function(g) {
                    return "button" === g.type || g.nodeName.toLowerCase() === "button"
                },
                input: function(g) {
                    return /input|select|textarea|button/i.test(g.nodeName)
                }
            },
            setFilters: {
                first: function(g, h) {
                    return h === 0
                },
                last: function(g, h, l, m) {
                    return h === m.length - 1
                },
                even: function(g, h) {
                    return h % 2 === 0
                },
                odd: function(g, h) {
                    return h % 2 === 1
                },
                lt: function(g, h, l) {
                    return h < l[3] - 0
                },
                gt: function(g, h, l) {
                    return h > l[3] - 0
                },
                nth: function(g, h, l) {
                    return l[3] - 0 === h
                },
                eq: function(g, h, l) {
                    return l[3] - 0 === h
                }
            },
            filter: {
                PSEUDO: function(g, h, l, m) {
                    var q = h[1],
                    p = n.filters[q];
                    if (p) return p(g, l, h, m);
                    else if (q === "contains") return (g.textContent || g.innerText || a([g]) || "").indexOf(h[3]) >= 0;
                    else if (q === "not") {
                        h = h[3];
                        l = 0;
                        for (m = h.length; l < m; l++) if (h[l] === g) return false;
                        return true
                    } else k.error("Syntax error, unrecognized expression: " + q)
                },
                CHILD: function(g, h) {
                    var l = h[1],
                    m = g;
                    switch (l) {
                    case "only":
                    case "first":
                        for (; m = m.previousSibling;) if (m.nodeType === 1) return false;
                        if (l === "first") return true;
                        m = g;
                    case "last":
                        for (; m = m.nextSibling;) if (m.nodeType === 1) return false;
                        return true;
                    case "nth":
                        l = h[2];
                        var q = h[3];
                        if (l === 1 && q === 0) return true;
                        h = h[0];
                        var p = g.parentNode;
                        if (p && (p.sizcache !== h || !g.nodeIndex)) {
                            var v = 0;
                            for (m = p.firstChild; m; m = m.nextSibling) if (m.nodeType === 1) m.nodeIndex = ++v;
                            p.sizcache = h
                        }
                        g = g.nodeIndex - q;
                        return l === 0 ? g === 0 : g % l === 0 && g / l >= 0
                    }
                },
                ID: function(g, h) {
                    return g.nodeType === 1 && g.getAttribute("id") === h
                },
                TAG: function(g, h) {
                    return h === "*" && g.nodeType === 1 || g.nodeName.toLowerCase() === h
                },
                CLASS: function(g, h) {
                    return (" " + (g.className || g.getAttribute("class")) + " ").indexOf(h) > -1
                },
                ATTR: function(g, h) {
                    var l = h[1];
                    g = n.attrHandle[l] ? n.attrHandle[l](g) : g[l] != null ? g[l] : g.getAttribute(l);
                    l = g + "";
                    var m = h[2];
                    h = h[4];
                    return g == null ? m === "!=": m === "=" ? l === h: m === "*=" ? l.indexOf(h) >= 0 : m === "~=" ? (" " + l + " ").indexOf(h) >= 0 : !h ? l && g !== false: m === "!=" ? l !== h: m === "^=" ? l.indexOf(h) === 0 : m === "$=" ? l.substr(l.length - h.length) === h: m === "|=" ? l === h || l.substr(0, h.length + 1) === h + "-": false
                },
                POS: function(g, h, l, m) {
                    var q = n.setFilters[h[2]];
                    if (q) return q(g, l, h, m)
                }
            }
        },
        r = n.match.POS;
        for (var u in n.match) {
            n.match[u] = new RegExp(n.match[u].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            n.leftMatch[u] = new RegExp(/(^(?:.|\r|\n)*?)/.source + n.match[u].source.replace(/\\(\d+)/g,
            function(g, h) {
                return "\\" + (h - 0 + 1)
            }))
        }
        var z = function(g, h) {
            g = Array.prototype.slice.call(g, 0);
            if (h) {
                h.push.apply(h, g);
                return h
            }
            return g
        };
        try {
            Array.prototype.slice.call(s.documentElement.childNodes, 0)
        } catch(C) {
            z = function(g, h) {
                h = h || [];
                if (j.call(g) === "[object Array]") Array.prototype.push.apply(h, g);
                else if (typeof g.length === "number") for (var l = 0,
                m = g.length; l < m; l++) h.push(g[l]);
                else for (l = 0; g[l]; l++) h.push(g[l]);
                return h
            }
        }
        var B;
        if (s.documentElement.compareDocumentPosition) B = function(g, h) {
            if (!g.compareDocumentPosition || !h.compareDocumentPosition) {
                if (g == h) i = true;
                return g.compareDocumentPosition ? -1 : 1
            }
            g = g.compareDocumentPosition(h) & 4 ? -1 : g === h ? 0 : 1;
            if (g === 0) i = true;
            return g
        };
        else if ("sourceIndex" in s.documentElement) B = function(g, h) {
            if (!g.sourceIndex || !h.sourceIndex) {
                if (g == h) i = true;
                return g.sourceIndex ? -1 : 1
            }
            g = g.sourceIndex - h.sourceIndex;
            if (g === 0) i = true;
            return g
        };
        else if (s.createRange) B = function(g, h) {
            if (!g.ownerDocument || !h.ownerDocument) {
                if (g == h) i = true;
                return g.ownerDocument ? -1 : 1
            }
            var l = g.ownerDocument.createRange(),
            m = h.ownerDocument.createRange();
            l.setStart(g, 0);
            l.setEnd(g, 0);
            m.setStart(h, 0);
            m.setEnd(h, 0);
            g = l.compareBoundaryPoints(Range.START_TO_END, m);
            if (g === 0) i = true;
            return g
        }; (function() {
            var g = s.createElement("div"),
            h = "script" + (new Date).getTime();
            g.innerHTML = "<a name='" + h + "'/>";
            var l = s.documentElement;
            l.insertBefore(g, l.firstChild);
            if (s.getElementById(h)) {
                n.find.ID = function(m, q, p) {
                    if (typeof q.getElementById !== "undefined" && !p) return (q = q.getElementById(m[1])) ? q.id === m[1] || typeof q.getAttributeNode !== "undefined" && q.getAttributeNode("id").nodeValue === m[1] ? [q] : w: []
                };
                n.filter.ID = function(m, q) {
                    var p = typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id");
                    return m.nodeType === 1 && p && p.nodeValue === q
                }
            }
            l.removeChild(g);
            l = g = null
        })(); (function() {
            var g = s.createElement("div");
            g.appendChild(s.createComment(""));
            if (g.getElementsByTagName("*").length > 0) n.find.TAG = function(h, l) {
                l = l.getElementsByTagName(h[1]);
                if (h[1] === "*") {
                    h = [];
                    for (var m = 0; l[m]; m++) l[m].nodeType === 1 && h.push(l[m]);
                    l = h
                }
                return l
            };
            g.innerHTML = "<a href='#'></a>";
            if (g.firstChild && typeof g.firstChild.getAttribute !== "undefined" && g.firstChild.getAttribute("href") !== "#") n.attrHandle.href = function(h) {
                return h.getAttribute("href", 2)
            };
            g = null
        })();
        s.querySelectorAll &&
        function() {
            var g = k,
            h = s.createElement("div");
            h.innerHTML = "<p class='TEST'></p>";
            if (! (h.querySelectorAll && h.querySelectorAll(".TEST").length === 0)) {
                k = function(m, q, p, v) {
                    q = q || s;
                    if (!v && q.nodeType === 9 && !x(q)) try {
                        return z(q.querySelectorAll(m), p)
                    } catch(t) {}
                    return g(m, q, p, v)
                };
                for (var l in g) k[l] = g[l];
                h = null
            }
        } (); (function() {
            var g = s.createElement("div");
            g.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (! (!g.getElementsByClassName || g.getElementsByClassName("e").length === 0)) {
                g.lastChild.className = "e";
                if (g.getElementsByClassName("e").length !== 1) {
                    n.order.splice(1, 0, "CLASS");
                    n.find.CLASS = function(h, l, m) {
                        if (typeof l.getElementsByClassName !== "undefined" && !m) return l.getElementsByClassName(h[1])
                    };
                    g = null
                }
            }
        })();
        var E = s.compareDocumentPosition ?
        function(g, h) {
            return !! (g.compareDocumentPosition(h) & 16)
        }: function(g, h) {
            return g !== h && (g.contains ? g.contains(h) : true)
        },
        x = function(g) {
            return (g = (g ? g.ownerDocument || g: 0).documentElement) ? g.nodeName !== "HTML": false
        },
        ga = function(g, h) {
            var l = [],
            m = "",
            q;
            for (h = h.nodeType ? [h] : h; q = n.match.PSEUDO.exec(g);) {
                m += q[0];
                g = g.replace(n.match.PSEUDO, "")
            }
            g = n.relative[g] ? g + "*": g;
            q = 0;
            for (var p = h.length; q < p; q++) k(g, h[q], l);
            return k.filter(m, l)
        };
        c.find = k;
        c.expr = k.selectors;
        c.expr[":"] = c.expr.filters;
        c.unique = k.uniqueSort;
        c.text = a;
        c.isXMLDoc = x;
        c.contains = E
    })();
    var eb = /Until$/,
    fb = /^(?:parents|prevUntil|prevAll)/,
    gb = /,/;
    R = Array.prototype.slice;
    var Ia = function(a, b, d) {
        if (c.isFunction(b)) return c.grep(a,
        function(e, j) {
            return !! b.call(e, j, e) === d
        });
        else if (b.nodeType) return c.grep(a,
        function(e) {
            return e === b === d
        });
        else if (typeof b === "string") {
            var f = c.grep(a,
            function(e) {
                return e.nodeType === 1
            });
            if (Ua.test(b)) return c.filter(b, f, !d);
            else b = c.filter(b, f)
        }
        return c.grep(a,
        function(e) {
            return c.inArray(e, b) >= 0 === d
        })
    };
    c.fn.extend({
        find: function(a) {
            for (var b = this.pushStack("", "find", a), d = 0, f = 0, e = this.length; f < e; f++) {
                d = b.length;
                c.find(a, this[f], b);
                if (f > 0) for (var j = d; j < b.length; j++) for (var i = 0; i < d; i++) if (b[i] === b[j]) {
                    b.splice(j--, 1);
                    break
                }
            }
            return b
        },
        has: function(a) {
            var b = c(a);
            return this.filter(function() {
                for (var d = 0,
                f = b.length; d < f; d++) if (c.contains(this, b[d])) return true
            })
        },
        not: function(a) {
            return this.pushStack(Ia(this, a, false), "not", a)
        },
        filter: function(a) {
            return this.pushStack(Ia(this, a, true), "filter", a)
        },
        is: function(a) {
            return !! a && c.filter(a, this).length > 0
        },
        closest: function(a, b) {
            if (c.isArray(a)) {
                var d = [],
                f = this[0],
                e,
                j = {},
                i;
                if (f && a.length) {
                    e = 0;
                    for (var o = a.length; e < o; e++) {
                        i = a[e];
                        j[i] || (j[i] = c.expr.match.POS.test(i) ? c(i, b || this.context) : i)
                    }
                    for (; f && f.ownerDocument && f !== b;) {
                        for (i in j) {
                            e = j[i];
                            if (e.jquery ? e.index(f) > -1 : c(f).is(e)) {
                                d.push({
                                    selector: i,
                                    elem: f
                                });
                                delete j[i]
                            }
                        }
                        f = f.parentNode
                    }
                }
                return d
            }
            var k = c.expr.match.POS.test(a) ? c(a, b || this.context) : null;
            return this.map(function(n, r) {
                for (; r && r.ownerDocument && r !== b;) {
                    if (k ? k.index(r) > -1 : c(r).is(a)) return r;
                    r = r.parentNode
                }
                return null
            })
        },
        index: function(a) {
            if (!a || typeof a === "string") return c.inArray(this[0], a ? c(a) : this.parent().children());
            return c.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            a = typeof a === "string" ? c(a, b || this.context) : c.makeArray(a);
            b = c.merge(this.get(), a);
            return this.pushStack(qa(a[0]) || qa(b[0]) ? b: c.unique(b))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    c.each({
        parent: function(a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a: null
        },
        parents: function(a) {
            return c.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, d) {
            return c.dir(a, "parentNode", d)
        },
        next: function(a) {
            return c.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return c.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return c.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return c.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, d) {
            return c.dir(a, "nextSibling", d)
        },
        prevUntil: function(a, b, d) {
            return c.dir(a, "previousSibling", d)
        },
        siblings: function(a) {
            return c.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return c.sibling(a.firstChild)
        },
        contents: function(a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: c.makeArray(a.childNodes)
        }
    },
    function(a, b) {
        c.fn[a] = function(d, f) {
            var e = c.map(this, b, d);
            eb.test(a) || (f = d);
            if (f && typeof f === "string") e = c.filter(f, e);
            e = this.length > 1 ? c.unique(e) : e;
            if ((this.length > 1 || gb.test(f)) && fb.test(a)) e = e.reverse();
            return this.pushStack(e, a, R.call(arguments).join(","))
        }
    });
    c.extend({
        filter: function(a, b, d) {
            if (d) a = ":not(" + a + ")";
            return c.find.matches(a, b)
        },
        dir: function(a, b, d) {
            var f = [];
            for (a = a[b]; a && a.nodeType !== 9 && (d === w || a.nodeType !== 1 || !c(a).is(d));) {
                a.nodeType === 1 && f.push(a);
                a = a[b]
            }
            return f
        },
        nth: function(a, b, d) {
            b = b || 1;
            for (var f = 0; a; a = a[d]) if (a.nodeType === 1 && ++f === b) break;
            return a
        },
        sibling: function(a, b) {
            for (var d = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && d.push(a);
            return d
        }
    });
    var Ja = / jQuery\d+="(?:\d+|null)"/g,
    V = /^\s+/,
    Ka = /(<([\w:]+)[^>]*?)\/>/g,
    hb = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
    La = /<([\w:]+)/,
    ib = /<tbody/i,
    jb = /<|&#?\w+;/,
    ta = /<script|<object|<embed|<option|<style/i,
    ua = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ma = function(a, b, d) {
        return hb.test(d) ? a: b + "></" + d + ">"
    },
    F = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    };
    F.optgroup = F.option;
    F.tbody = F.tfoot = F.colgroup = F.caption = F.thead;
    F.th = F.td;
    if (!c.support.htmlSerialize) F._default = [1, "div<div>", "</div>"];
    c.fn.extend({
        text: function(a) {
            if (c.isFunction(a)) return this.each(function(b) {
                var d = c(this);
                d.text(a.call(this, b, d.text()))
            });
            if (typeof a !== "object" && a !== w) return this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(a));
            return c.text(this)
        },
        wrapAll: function(a) {
            if (c.isFunction(a)) return this.each(function(d) {
                c(this).wrapAll(a.call(this, d))
            });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var d = this; d.firstChild && d.firstChild.nodeType === 1;) d = d.firstChild;
                    return d
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).wrapInner(a.call(this, b))
            });
            return this.each(function() {
                var b = c(this),
                d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            return this.each(function() {
                c(this).wrapAll(a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, true,
            function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, true,
            function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false,
            function(b) {
                this.parentNode.insertBefore(b, this)
            });
            else if (arguments.length) {
                var a = c(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false,
            function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            else if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, c(arguments[0]).toArray());
                return a
            }
        },
        remove: function(a, b) {
            for (var d = 0,
            f; (f = this[d]) != null; d++) if (!a || c.filter(a, [f]).length) {
                if (!b && f.nodeType === 1) {
                    c.cleanData(f.getElementsByTagName("*"));
                    c.cleanData([f])
                }
                f.parentNode && f.parentNode.removeChild(f)
            }
            return this
        },
        empty: function() {
            for (var a = 0,
            b; (b = this[a]) != null; a++) for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(a) {
            var b = this.map(function() {
                if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
                    var d = this.outerHTML,
                    f = this.ownerDocument;
                    if (!d) {
                        d = f.createElement("div");
                        d.appendChild(this.cloneNode(true));
                        d = d.innerHTML
                    }
                    return c.clean([d.replace(Ja, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(V, "")], f)[0]
                } else return this.cloneNode(true)
            });
            if (a === true) {
                ra(this, b);
                ra(this.find("*"), b.find("*"))
            }
            return b
        },
        html: function(a) {
            if (a === w) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Ja, "") : null;
            else if (typeof a === "string" && !ta.test(a) && (c.support.leadingWhitespace || !V.test(a)) && !F[(La.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Ka, Ma);
                try {
                    for (var b = 0,
                    d = this.length; b < d; b++) if (this[b].nodeType === 1) {
                        c.cleanData(this[b].getElementsByTagName("*"));
                        this[b].innerHTML = a
                    }
                } catch(f) {
                    this.empty().append(a)
                }
            } else c.isFunction(a) ? this.each(function(e) {
                var j = c(this),
                i = j.html();
                j.empty().append(function() {
                    return a.call(this, e, i)
                })
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (c.isFunction(a)) return this.each(function(b) {
                    var d = c(this),
                    f = d.html();
                    d.replaceWith(a.call(this, b, f))
                });
                if (typeof a !== "string") a = c(a).detach();
                return this.each(function() {
                    var b = this.nextSibling,
                    d = this.parentNode;
                    c(this).remove();
                    b ? c(b).before(a) : c(d).append(a)
                })
            } else return this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a)
        },
        detach: function(a) {
            return this.remove(a, true)
        },
        domManip: function(a, b, d) {
            function f(u) {
                return c.nodeName(u, "table") ? u.getElementsByTagName("tbody")[0] || u.appendChild(u.ownerDocument.createElement("tbody")) : u
            }
            var e, j, i = a[0],
            o = [],
            k;
            if (!c.support.checkClone && arguments.length === 3 && typeof i === "string" && ua.test(i)) return this.each(function() {
                c(this).domManip(a, b, d, true)
            });
            if (c.isFunction(i)) return this.each(function(u) {
                var z = c(this);
                a[0] = i.call(this, u, b ? z.html() : w);
                z.domManip(a, b, d)
            });
            if (this[0]) {
                e = i && i.parentNode;
                e = c.support.parentNode && e && e.nodeType === 11 && e.childNodes.length === this.length ? {
                    fragment: e
                }: sa(a, this, o);
                k = e.fragment;
                if (j = k.childNodes.length === 1 ? (k = k.firstChild) : k.firstChild) {
                    b = b && c.nodeName(j, "tr");
                    for (var n = 0,
                    r = this.length; n < r; n++) d.call(b ? f(this[n], j) : this[n], n > 0 || e.cacheable || this.length > 1 ? k.cloneNode(true) : k)
                }
                o.length && c.each(o, Qa)
            }
            return this
        }
    });
    c.fragments = {};
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        c.fn[a] = function(d) {
            var f = [];
            d = c(d);
            var e = this.length === 1 && this[0].parentNode;
            if (e && e.nodeType === 11 && e.childNodes.length === 1 && d.length === 1) {
                d[b](this[0]);
                return this
            } else {
                e = 0;
                for (var j = d.length; e < j; e++) {
                    var i = (e > 0 ? this.clone(true) : this).get();
                    c.fn[b].apply(c(d[e]), i);
                    f = f.concat(i)
                }
                return this.pushStack(f, a, d.selector)
            }
        }
    });
    c.extend({
        clean: function(a, b, d, f) {
            b = b || s;
            if (typeof b.createElement === "undefined") b = b.ownerDocument || b[0] && b[0].ownerDocument || s;
            for (var e = [], j = 0, i; (i = a[j]) != null; j++) {
                if (typeof i === "number") i += "";
                if (i) {
                    if (typeof i === "string" && !jb.test(i)) i = b.createTextNode(i);
                    else if (typeof i === "string") {
                        i = i.replace(Ka, Ma);
                        var o = (La.exec(i) || ["", ""])[1].toLowerCase(),
                        k = F[o] || F._default,
                        n = k[0],
                        r = b.createElement("div");
                        for (r.innerHTML = k[1] + i + k[2]; n--;) r = r.lastChild;
                        if (!c.support.tbody) {
                            n = ib.test(i);
                            o = o === "table" && !n ? r.firstChild && r.firstChild.childNodes: k[1] === "<table>" && !n ? r.childNodes: [];
                            for (k = o.length - 1; k >= 0; --k) c.nodeName(o[k], "tbody") && !o[k].childNodes.length && o[k].parentNode.removeChild(o[k])
                        } ! c.support.leadingWhitespace && V.test(i) && r.insertBefore(b.createTextNode(V.exec(i)[0]), r.firstChild);
                        i = r.childNodes
                    }
                    if (i.nodeType) e.push(i);
                    else e = c.merge(e, i)
                }
            }
            if (d) for (j = 0; e[j]; j++) if (f && c.nodeName(e[j], "script") && (!e[j].type || e[j].type.toLowerCase() === "text/javascript")) f.push(e[j].parentNode ? e[j].parentNode.removeChild(e[j]) : e[j]);
            else {
                e[j].nodeType === 1 && e.splice.apply(e, [j + 1, 0].concat(c.makeArray(e[j].getElementsByTagName("script"))));
                d.appendChild(e[j])
            }
            return e
        },
        cleanData: function(a) {
            for (var b, d, f = c.cache,
            e = c.event.special,
            j = c.support.deleteExpando,
            i = 0,
            o; (o = a[i]) != null; i++) if (d = o[c.expando]) {
                b = f[d];
                if (b.events) for (var k in b.events) e[k] ? c.event.remove(o, k) : Ca(o, k, b.handle);
                if (j) delete o[c.expando];
                else o.removeAttribute && o.removeAttribute(c.expando);
                delete f[d]
            }
        }
    });
    var kb = /z-?index|font-?weight|opacity|zoom|line-?height/i,
    Na = /alpha\([^)]*\)/,
    Oa = /opacity=([^)]*)/,
    ha = /float/i,
    ia = /-([a-z])/ig,
    lb = /([A-Z])/g,
    mb = /^-?\d+(?:px)?$/i,
    nb = /^-?\d/,
    ob = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    pb = ["Left", "Right"],
    qb = ["Top", "Bottom"],
    rb = s.defaultView && s.defaultView.getComputedStyle,
    Pa = c.support.cssFloat ? "cssFloat": "styleFloat",
    ja = function(a, b) {
        return b.toUpperCase()
    };
    c.fn.css = function(a, b) {
        return X(this, a, b, true,
        function(d, f, e) {
            if (e === w) return c.curCSS(d, f);
            if (typeof e === "number" && !kb.test(f)) e += "px";
            c.style(d, f, e)
        })
    };
    c.extend({
        style: function(a, b, d) {
            if (!a || a.nodeType === 3 || a.nodeType === 8) return w;
            if ((b === "width" || b === "height") && parseFloat(d) < 0) d = w;
            var f = a.style || a,
            e = d !== w;
            if (!c.support.opacity && b === "opacity") {
                if (e) {
                    f.zoom = 1;
                    b = parseInt(d, 10) + "" === "NaN" ? "": "alpha(opacity=" + d * 100 + ")";
                    a = f.filter || c.curCSS(a, "filter") || "";
                    f.filter = Na.test(a) ? a.replace(Na, b) : b
                }
                return f.filter && f.filter.indexOf("opacity=") >= 0 ? parseFloat(Oa.exec(f.filter)[1]) / 100 + "": ""
            }
            if (ha.test(b)) b = Pa;
            b = b.replace(ia, ja);
            if (e) f[b] = d;
            return f[b]
        },
        css: function(a, b, d, f) {
            if (b === "width" || b === "height") {
                var e, j = b === "width" ? pb: qb;
                function i() {
                    e = b === "width" ? a.offsetWidth: a.offsetHeight;
                    f !== "border" && c.each(j,
                    function() {
                        f || (e -= parseFloat(c.curCSS(a, "padding" + this, true)) || 0);
                        if (f === "margin") e += parseFloat(c.curCSS(a, "margin" + this, true)) || 0;
                        else e -= parseFloat(c.curCSS(a, "border" + this + "Width", true)) || 0
                    })
                }
                a.offsetWidth !== 0 ? i() : c.swap(a, ob, i);
                return Math.max(0, Math.round(e))
            }
            return c.curCSS(a, b, d)
        },
        curCSS: function(a, b, d) {
            var f, e = a.style;
            if (!c.support.opacity && b === "opacity" && a.currentStyle) {
                f = Oa.test(a.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "": "";
                return f === "" ? "1": f
            }
            if (ha.test(b)) b = Pa;
            if (!d && e && e[b]) f = e[b];
            else if (rb) {
                if (ha.test(b)) b = "float";
                b = b.replace(lb, "-$1").toLowerCase();
                e = a.ownerDocument.defaultView;
                if (!e) return null;
                if (a = e.getComputedStyle(a, null)) f = a.getPropertyValue(b);
                if (b === "opacity" && f === "") f = "1"
            } else if (a.currentStyle) {
                d = b.replace(ia, ja);
                f = a.currentStyle[b] || a.currentStyle[d];
                if (!mb.test(f) && nb.test(f)) {
                    b = e.left;
                    var j = a.runtimeStyle.left;
                    a.runtimeStyle.left = a.currentStyle.left;
                    e.left = d === "fontSize" ? "1em": f || 0;
                    f = e.pixelLeft + "px";
                    e.left = b;
                    a.runtimeStyle.left = j
                }
            }
            return f
        },
        swap: function(a, b, d) {
            var f = {};
            for (var e in b) {
                f[e] = a.style[e];
                a.style[e] = b[e]
            }
            d.call(a);
            for (e in b) a.style[e] = f[e]
        }
    });
    if (c.expr && c.expr.filters) {
        c.expr.filters.hidden = function(a) {
            var b = a.offsetWidth,
            d = a.offsetHeight,
            f = a.nodeName.toLowerCase() === "tr";
            return b === 0 && d === 0 && !f ? true: b > 0 && d > 0 && !f ? false: c.curCSS(a, "display") === "none"
        };
        c.expr.filters.visible = function(a) {
            return ! c.expr.filters.hidden(a)
        }
    }
    var sb = J(),
    tb = /<script(.|\s)*?\/script>/gi,
    ub = /select|textarea/i,
    vb = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
    N = /=\?(&|$)/,
    ka = /\?/,
    wb = /(\?|&)_=.*?(&|$)/,
    xb = /^(\w+:)?\/\/([^\/?#]+)/,
    yb = /%20/g,
    zb = c.fn.load;
    c.fn.extend({
        load: function(a, b, d) {
            if (typeof a !== "string") return zb.call(this, a);
            else if (!this.length) return this;
            var f = a.indexOf(" ");
            if (f >= 0) {
                var e = a.slice(f, a.length);
                a = a.slice(0, f)
            }
            f = "GET";
            if (b) if (c.isFunction(b)) {
                d = b;
                b = null
            } else if (typeof b === "object") {
                b = c.param(b, c.ajaxSettings.traditional);
                f = "POST"
            }
            var j = this;
            c.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: b,
                complete: function(i, o) {
                    if (o === "success" || o === "notmodified") j.html(e ? c("<div />").append(i.responseText.replace(tb, "")).find(e) : i.responseText);
                    d && j.each(d, [i.responseText, o, i])
                }
            });
            return this
        },
        serialize: function() {
            return c.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? c.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ub.test(this.nodeName) || vb.test(this.type))
            }).map(function(a, b) {
                a = c(this).val();
                return a == null ? null: c.isArray(a) ? c.map(a,
                function(d) {
                    return {
                        name: b.name,
                        value: d
                    }
                }) : {
                    name: b.name,
                    value: a
                }
            }).get()
        }
    });
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(a, b) {
        c.fn[b] = function(d) {
            return this.bind(b, d)
        }
    });
    c.extend({
        get: function(a, b, d, f) {
            if (c.isFunction(b)) {
                f = f || d;
                d = b;
                b = null
            }
            return c.ajax({
                type: "GET",
                url: a,
                data: b,
                success: d,
                dataType: f
            })
        },
        getScript: function(a, b) {
            return c.get(a, null, b, "script")
        },
        getJSON: function(a, b, d) {
            return c.get(a, b, d, "json")
        },
        post: function(a, b, d, f) {
            if (c.isFunction(b)) {
                f = f || d;
                d = b;
                b = {}
            }
            return c.ajax({
                type: "POST",
                url: a,
                data: b,
                success: d,
                dataType: f
            })
        },
        ajaxSetup: function(a) {
            c.extend(c.ajaxSettings, a)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: A.XMLHttpRequest && (A.location.protocol !== "file:" || !A.ActiveXObject) ?
            function() {
                return new A.XMLHttpRequest
            }: function() {
                try {
                    return new A.ActiveXObject("Microsoft.XMLHTTP")
                } catch(a) {}
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        etag: {},
        ajax: function(a) {
            function b() {
                e.success && e.success.call(k, o, i, x);
                e.global && f("ajaxSuccess", [x, e])
            }
            function d() {
                e.complete && e.complete.call(k, x, i);
                e.global && f("ajaxComplete", [x, e]);
                e.global && !--c.active && c.event.trigger("ajaxStop")
            }
            function f(q, p) { (e.context ? c(e.context) : c.event).trigger(q, p)
            }
            var e = c.extend(true, {},
            c.ajaxSettings, a),
            j,
            i,
            o,
            k = a && a.context || e,
            n = e.type.toUpperCase();
            if (e.data && e.processData && typeof e.data !== "string") e.data = c.param(e.data, e.traditional);
            if (e.dataType === "jsonp") {
                if (n === "GET") N.test(e.url) || (e.url += (ka.test(e.url) ? "&": "?") + (e.jsonp || "callback") + "=?");
                else if (!e.data || !N.test(e.data)) e.data = (e.data ? e.data + "&": "") + (e.jsonp || "callback") + "=?";
                e.dataType = "json"
            }
            if (e.dataType === "json" && (e.data && N.test(e.data) || N.test(e.url))) {
                j = e.jsonpCallback || "jsonp" + sb++;
                if (e.data) e.data = (e.data + "").replace(N, "=" + j + "$1");
                e.url = e.url.replace(N, "=" + j + "$1");
                e.dataType = "script";
                A[j] = A[j] ||
                function(q) {
                    o = q;
                    b();
                    d();
                    A[j] = w;
                    try {
                        delete A[j]
                    } catch(p) {}
                    z && z.removeChild(C)
                }
            }
            if (e.dataType === "script" && e.cache === null) e.cache = false;
            if (e.cache === false && n === "GET") {
                var r = J(),
                u = e.url.replace(wb, "$1_=" + r + "$2");
                e.url = u + (u === e.url ? (ka.test(e.url) ? "&": "?") + "_=" + r: "")
            }
            if (e.data && n === "GET") e.url += (ka.test(e.url) ? "&": "?") + e.data;
            e.global && !c.active++&&c.event.trigger("ajaxStart");
            r = (r = xb.exec(e.url)) && (r[1] && r[1] !== location.protocol || r[2] !== location.host);
            if (e.dataType === "script" && n === "GET" && r) {
                var z = s.getElementsByTagName("head")[0] || s.documentElement,
                C = s.createElement("script");
                C.src = e.url;
                if (e.scriptCharset) C.charset = e.scriptCharset;
                if (!j) {
                    var B = false;
                    C.onload = C.onreadystatechange = function() {
                        if (!B && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            B = true;
                            b();
                            d();
                            C.onload = C.onreadystatechange = null;
                            z && C.parentNode && z.removeChild(C)
                        }
                    }
                }
                z.insertBefore(C, z.firstChild);
                return w
            }
            var E = false,
            x = e.xhr();
            if (x) {
                e.username ? x.open(n, e.url, e.async, e.username, e.password) : x.open(n, e.url, e.async);
                try {
                    if (e.data || a && a.contentType) x.setRequestHeader("Content-Type", e.contentType);
                    if (e.ifModified) {
                        c.lastModified[e.url] && x.setRequestHeader("If-Modified-Since", c.lastModified[e.url]);
                        c.etag[e.url] && x.setRequestHeader("If-None-Match", c.etag[e.url])
                    }
                    r || x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    x.setRequestHeader("Accept", e.dataType && e.accepts[e.dataType] ? e.accepts[e.dataType] + ", */*": e.accepts._default)
                } catch(ga) {}
                if (e.beforeSend && e.beforeSend.call(k, x, e) === false) {
                    e.global && !--c.active && c.event.trigger("ajaxStop");
                    x.abort();
                    return false
                }
                e.global && f("ajaxSend", [x, e]);
                var g = x.onreadystatechange = function(q) {
                    if (!x || x.readyState === 0 || q === "abort") {
                        E || d();
                        E = true;
                        if (x) x.onreadystatechange = c.noop
                    } else if (!E && x && (x.readyState === 4 || q === "timeout")) {
                        E = true;
                        x.onreadystatechange = c.noop;
                        i = q === "timeout" ? "timeout": !c.httpSuccess(x) ? "error": e.ifModified && c.httpNotModified(x, e.url) ? "notmodified": "success";
                        var p;
                        if (i === "success") try {
                            o = c.httpData(x, e.dataType, e)
                        } catch(v) {
                            i = "parsererror";
                            p = v
                        }
                        if (i === "success" || i === "notmodified") j || b();
                        else c.handleError(e, x, i, p);
                        d();
                        q === "timeout" && x.abort();
                        if (e.async) x = null
                    }
                };
                try {
                    var h = x.abort;
                    x.abort = function() {
                        x && h.call(x);
                        g("abort")
                    }
                } catch(l) {}
                e.async && e.timeout > 0 && setTimeout(function() {
                    x && !E && g("timeout")
                },
                e.timeout);
                try {
                    x.send(n === "POST" || n === "PUT" || n === "DELETE" ? e.data: null)
                } catch(m) {
                    c.handleError(e, x, null, m);
                    d()
                }
                e.async || g();
                return x
            }
        },
        handleError: function(a, b, d, f) {
            if (a.error) a.error.call(a.context || a, b, d, f);
            if (a.global)(a.context ? c(a.context) : c.event).trigger("ajaxError", [b, a, f])
        },
        active: 0,
        httpSuccess: function(a) {
            try {
                return ! a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 || a.status === 304 || a.status === 1223 || a.status === 0
            } catch(b) {}
            return false
        },
        httpNotModified: function(a, b) {
            var d = a.getResponseHeader("Last-Modified"),
            f = a.getResponseHeader("Etag");
            if (d) c.lastModified[b] = d;
            if (f) c.etag[b] = f;
            return a.status === 304 || a.status === 0
        },
        httpData: function(a, b, d) {
            var f = a.getResponseHeader("content-type") || "",
            e = b === "xml" || !b && f.indexOf("xml") >= 0;
            a = e ? a.responseXML: a.responseText;
            e && a.documentElement.nodeName === "parsererror" && c.error("parsererror");
            if (d && d.dataFilter) a = d.dataFilter(a, b);
            if (typeof a === "string") if (b === "json" || !b && f.indexOf("json") >= 0) a = c.parseJSON(a);
            else if (b === "script" || !b && f.indexOf("javascript") >= 0) c.globalEval(a);
            return a
        },
        param: function(a, b) {
            function d(i, o) {
                if (c.isArray(o)) c.each(o,
                function(k, n) {
                    b || /\[\]$/.test(i) ? f(i, n) : d(i + "[" + (typeof n === "object" || c.isArray(n) ? k: "") + "]", n)
                });
                else ! b && o != null && typeof o === "object" ? c.each(o,
                function(k, n) {
                    d(i + "[" + k + "]", n)
                }) : f(i, o)
            }
            function f(i, o) {
                o = c.isFunction(o) ? o() : o;
                e[e.length] = encodeURIComponent(i) + "=" + encodeURIComponent(o)
            }
            var e = [];
            if (b === w) b = c.ajaxSettings.traditional;
            if (c.isArray(a) || a.jquery) c.each(a,
            function() {
                f(this.name, this.value)
            });
            else for (var j in a) d(j, a[j]);
            return e.join("&").replace(yb, "+")
        }
    });
    var la = {},
    Ab = /toggle|show|hide/,
    Bb = /^([+-]=)?([\d+-.]+)(.*)$/,
    W, va = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    c.fn.extend({
        show: function(a, b) {
            if (a || a === 0) return this.animate(K("show", 3), a, b);
            else {
                a = 0;
                for (b = this.length; a < b; a++) {
                    var d = c.data(this[a], "olddisplay");
                    this[a].style.display = d || "";
                    if (c.css(this[a], "display") === "none") {
                        d = this[a].nodeName;
                        var f;
                        if (la[d]) f = la[d];
                        else {
                            var e = c("<" + d + " />").appendTo("body");
                            f = e.css("display");
                            if (f === "none") f = "block";
                            e.remove();
                            la[d] = f
                        }
                        c.data(this[a], "olddisplay", f)
                    }
                }
                a = 0;
                for (b = this.length; a < b; a++) this[a].style.display = c.data(this[a], "olddisplay") || "";
                return this
            }
        },
        hide: function(a, b) {
            if (a || a === 0) return this.animate(K("hide", 3), a, b);
            else {
                a = 0;
                for (b = this.length; a < b; a++) {
                    var d = c.data(this[a], "olddisplay"); ! d && d !== "none" && c.data(this[a], "olddisplay", c.css(this[a], "display"))
                }
                a = 0;
                for (b = this.length; a < b; a++) this[a].style.display = "none";
                return this
            }
        },
        _toggle: c.fn.toggle,
        toggle: function(a, b) {
            var d = typeof a === "boolean";
            if (c.isFunction(a) && c.isFunction(b)) this._toggle.apply(this, arguments);
            else a == null || d ? this.each(function() {
                var f = d ? a: c(this).is(":hidden");
                c(this)[f ? "show": "hide"]()
            }) : this.animate(K("toggle", 3), a, b);
            return this
        },
        fadeTo: function(a, b, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, d)
        },
        animate: function(a, b, d, f) {
            var e = c.speed(b, d, f);
            if (c.isEmptyObject(a)) return this.each(e.complete);
            return this[e.queue === false ? "each": "queue"](function() {
                var j = c.extend({},
                e),
                i,
                o = this.nodeType === 1 && c(this).is(":hidden"),
                k = this;
                for (i in a) {
                    var n = i.replace(ia, ja);
                    if (i !== n) {
                        a[n] = a[i];
                        delete a[i];
                        i = n
                    }
                    if (a[i] === "hide" && o || a[i] === "show" && !o) return j.complete.call(this);
                    if ((i === "height" || i === "width") && this.style) {
                        j.display = c.css(this, "display");
                        j.overflow = this.style.overflow
                    }
                    if (c.isArray(a[i])) { (j.specialEasing = j.specialEasing || {})[i] = a[i][1];
                        a[i] = a[i][0]
                    }
                }
                if (j.overflow != null) this.style.overflow = "hidden";
                j.curAnim = c.extend({},
                a);
                c.each(a,
                function(r, u) {
                    var z = new c.fx(k, j, r);
                    if (Ab.test(u)) z[u === "toggle" ? o ? "show": "hide": u](a);
                    else {
                        var C = Bb.exec(u),
                        B = z.cur(true) || 0;
                        if (C) {
                            u = parseFloat(C[2]);
                            var E = C[3] || "px";
                            if (E !== "px") {
                                k.style[r] = (u || 1) + E;
                                B = (u || 1) / z.cur(true) * B;
                                k.style[r] = B + E
                            }
                            if (C[1]) u = (C[1] === "-=" ? -1 : 1) * u + B;
                            z.custom(B, u, E)
                        } else z.custom(B, u, "")
                    }
                });
                return true
            })
        },
        stop: function(a, b) {
            var d = c.timers;
            a && this.queue([]);
            this.each(function() {
                for (var f = d.length - 1; f >= 0; f--) if (d[f].elem === this) {
                    b && d[f](true);
                    d.splice(f, 1)
                }
            });
            b || this.dequeue();
            return this
        }
    });
    c.each({
        slideDown: K("show", 1),
        slideUp: K("hide", 1),
        slideToggle: K("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        }
    },
    function(a, b) {
        c.fn[a] = function(d, f) {
            return this.animate(b, d, f)
        }
    });
    c.extend({
        speed: function(a, b, d) {
            var f = a && typeof a === "object" ? a: {
                complete: d || !d && b || c.isFunction(a) && a,
                duration: a,
                easing: d && b || b && !c.isFunction(b) && b
            };
            f.duration = c.fx.off ? 0 : typeof f.duration === "number" ? f.duration: c.fx.speeds[f.duration] || c.fx.speeds._default;
            f.old = f.complete;
            f.complete = function() {
                f.queue !== false && c(this).dequeue();
                c.isFunction(f.old) && f.old.call(this)
            };
            return f
        },
        easing: {
            linear: function(a, b, d, f) {
                return d + f * a
            },
            swing: function(a, b, d, f) {
                return ( - Math.cos(a * Math.PI) / 2 + 0.5) * f + d
            }
        },
        timers: [],
        fx: function(a, b, d) {
            this.options = b;
            this.elem = a;
            this.prop = d;
            if (!b.orig) b.orig = {}
        }
    });
    c.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this); (c.fx.step[this.prop] || c.fx.step._default)(this);
            if ((this.prop === "height" || this.prop === "width") && this.elem.style) this.elem.style.display = "block"
        },
        cur: function(a) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            return (a = parseFloat(c.css(this.elem, this.prop, a))) && a > -10000 ? a: parseFloat(c.curCSS(this.elem, this.prop)) || 0
        },
        custom: function(a, b, d) {
            function f(j) {
                return e.step(j)
            }
            this.startTime = J();
            this.start = a;
            this.end = b;
            this.unit = d || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var e = this;
            f.elem = this.elem;
            if (f() && c.timers.push(f) && !W) W = setInterval(c.fx.tick, 13)
        },
        show: function() {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            c(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b = J(),
            d = true;
            if (a || b >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var f in this.options.curAnim) if (this.options.curAnim[f] !== true) d = false;
                if (d) {
                    if (this.options.display != null) {
                        this.elem.style.overflow = this.options.overflow;
                        a = c.data(this.elem, "olddisplay");
                        this.elem.style.display = a ? a: this.options.display;
                        if (c.css(this.elem, "display") === "none") this.elem.style.display = "block"
                    }
                    this.options.hide && c(this.elem).hide();
                    if (this.options.hide || this.options.show) for (var e in this.options.curAnim) c.style(this.elem, e, this.options.orig[e]);
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                e = b - this.startTime;
                this.state = e / this.options.duration;
                a = this.options.easing || (c.easing.swing ? "swing": "linear");
                this.pos = c.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || a](this.state, e, 0, 1, this.options.duration);
                this.now = this.start + (this.end - this.start) * this.pos;
                this.update()
            }
            return true
        }
    };
    c.extend(c.fx, {
        tick: function() {
            for (var a = c.timers,
            b = 0; b < a.length; b++) a[b]() || a.splice(b--, 1);
            a.length || c.fx.stop()
        },
        stop: function() {
            clearInterval(W);
            W = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                c.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                if (a.elem.style && a.elem.style[a.prop] != null) a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit;
                else a.elem[a.prop] = a.now
            }
        }
    });
    if (c.expr && c.expr.filters) c.expr.filters.animated = function(a) {
        return c.grep(c.timers,
        function(b) {
            return a === b.elem
        }).length
    };
    c.fn.offset = "getBoundingClientRect" in s.documentElement ?
    function(a) {
        var b = this[0];
        if (a) return this.each(function(e) {
            c.offset.setOffset(this, a, e)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        var d = b.getBoundingClientRect(),
        f = b.ownerDocument;
        b = f.body;
        f = f.documentElement;
        return {
            top: d.top + (self.pageYOffset || c.support.boxModel && f.scrollTop || b.scrollTop) - (f.clientTop || b.clientTop || 0),
            left: d.left + (self.pageXOffset || c.support.boxModel && f.scrollLeft || b.scrollLeft) - (f.clientLeft || b.clientLeft || 0)
        }
    }: function(a) {
        var b = this[0];
        if (a) return this.each(function(r) {
            c.offset.setOffset(this, a, r)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        c.offset.initialize();
        var d = b.offsetParent,
        f = b,
        e = b.ownerDocument,
        j, i = e.documentElement,
        o = e.body;
        f = (e = e.defaultView) ? e.getComputedStyle(b, null) : b.currentStyle;
        for (var k = b.offsetTop,
        n = b.offsetLeft; (b = b.parentNode) && b !== o && b !== i;) {
            if (c.offset.supportsFixedPosition && f.position === "fixed") break;
            j = e ? e.getComputedStyle(b, null) : b.currentStyle;
            k -= b.scrollTop;
            n -= b.scrollLeft;
            if (b === d) {
                k += b.offsetTop;
                n += b.offsetLeft;
                if (c.offset.doesNotAddBorder && !(c.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(b.nodeName))) {
                    k += parseFloat(j.borderTopWidth) || 0;
                    n += parseFloat(j.borderLeftWidth) || 0
                }
                f = d;
                d = b.offsetParent
            }
            if (c.offset.subtractsBorderForOverflowNotVisible && j.overflow !== "visible") {
                k += parseFloat(j.borderTopWidth) || 0;
                n += parseFloat(j.borderLeftWidth) || 0
            }
            f = j
        }
        if (f.position === "relative" || f.position === "static") {
            k += o.offsetTop;
            n += o.offsetLeft
        }
        if (c.offset.supportsFixedPosition && f.position === "fixed") {
            k += Math.max(i.scrollTop, o.scrollTop);
            n += Math.max(i.scrollLeft, o.scrollLeft)
        }
        return {
            top: k,
            left: n
        }
    };
    c.offset = {
        initialize: function() {
            var a = s.body,
            b = s.createElement("div"),
            d,
            f,
            e,
            j = parseFloat(c.curCSS(a, "marginTop", true)) || 0;
            c.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            a.insertBefore(b, a.firstChild);
            d = b.firstChild;
            f = d.firstChild;
            e = d.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = f.offsetTop !== 5;
            this.doesAddBorderForTableAndCells = e.offsetTop === 5;
            f.style.position = "fixed";
            f.style.top = "20px";
            this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15;
            f.style.position = f.style.top = "";
            d.style.overflow = "hidden";
            d.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5;
            this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== j;
            a.removeChild(b);
            c.offset.initialize = c.noop
        },
        bodyOffset: function(a) {
            var b = a.offsetTop,
            d = a.offsetLeft;
            c.offset.initialize();
            if (c.offset.doesNotIncludeMarginInBodyOffset) {
                b += parseFloat(c.curCSS(a, "marginTop", true)) || 0;
                d += parseFloat(c.curCSS(a, "marginLeft", true)) || 0
            }
            return {
                top: b,
                left: d
            }
        },
        setOffset: function(a, b, d) {
            if (/static/.test(c.curCSS(a, "position"))) a.style.position = "relative";
            var f = c(a),
            e = f.offset(),
            j = parseInt(c.curCSS(a, "top", true), 10) || 0,
            i = parseInt(c.curCSS(a, "left", true), 10) || 0;
            if (c.isFunction(b)) b = b.call(a, d, e);
            d = {
                top: b.top - e.top + j,
                left: b.left - e.left + i
            };
            "using" in b ? b.using.call(a, d) : f.css(d)
        }
    };
    c.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
            b = this.offsetParent(),
            d = this.offset(),
            f = /^body|html$/i.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            }: b.offset();
            d.top -= parseFloat(c.curCSS(a, "marginTop", true)) || 0;
            d.left -= parseFloat(c.curCSS(a, "marginLeft", true)) || 0;
            f.top += parseFloat(c.curCSS(b[0], "borderTopWidth", true)) || 0;
            f.left += parseFloat(c.curCSS(b[0], "borderLeftWidth", true)) || 0;
            return {
                top: d.top - f.top,
                left: d.left - f.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || s.body; a && !/^body|html$/i.test(a.nodeName) && c.css(a, "position") === "static";) a = a.offsetParent;
                return a
            })
        }
    });
    c.each(["Left", "Top"],
    function(a, b) {
        var d = "scroll" + b;
        c.fn[d] = function(f) {
            var e = this[0],
            j;
            if (!e) return null;
            if (f !== w) return this.each(function() {
                if (j = wa(this)) j.scrollTo(!a ? f: c(j).scrollLeft(), a ? f: c(j).scrollTop());
                else this[d] = f
            });
            else return (j = wa(e)) ? "pageXOffset" in j ? j[a ? "pageYOffset": "pageXOffset"] : c.support.boxModel && j.document.documentElement[d] || j.document.body[d] : e[d]
        }
    });
    c.each(["Height", "Width"],
    function(a, b) {
        var d = b.toLowerCase();
        c.fn["inner" + b] = function() {
            return this[0] ? c.css(this[0], d, false, "padding") : null
        };
        c.fn["outer" + b] = function(f) {
            return this[0] ? c.css(this[0], d, false, f ? "margin": "border") : null
        };
        c.fn[d] = function(f) {
            var e = this[0];
            if (!e) return f == null ? null: this;
            if (c.isFunction(f)) return this.each(function(j) {
                var i = c(this);
                i[d](f.call(this, j, i[d]()))
            });
            return "scrollTo" in e && e.document ? e.document.compatMode === "CSS1Compat" && e.document.documentElement["client" + b] || e.document.body["client" + b] : e.nodeType === 9 ? Math.max(e.documentElement["client" + b], e.body["scroll" + b], e.documentElement["scroll" + b], e.body["offset" + b], e.documentElement["offset" + b]) : f === w ? c.css(e, d) : this.css(d, typeof f === "string" ? f: f + "px")
        }
    });
    A.jQuery = A.$ = c
})(window);

/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

(function($) {
    /**
     * Creates a carousel for all matched elements.
     *
     * @example $("#mycarousel").jcarousel();
     * @before <ul id="mycarousel" class="jcarousel-skin-name"><li>First item</li><li>Second item</li></ul>
     * @result
     *
     * <div class="jcarousel-skin-name">
     *   <div class="jcarousel-container">
     *     <div class="jcarousel-clip">
     *       <ul class="jcarousel-list">
     *         <li class="jcarousel-item-1">First item</li>
     *         <li class="jcarousel-item-2">Second item</li>
     *       </ul>
     *     </div>
     *     <div disabled="disabled" class="jcarousel-prev jcarousel-prev-disabled"></div>
     *     <div class="jcarousel-next"></div>
     *   </div>
     * </div>
     *
     * @method jcarousel
     * @return jQuery
     * @param o {Hash|String} A set of key/value pairs to set as configuration properties or a method name to call on a formerly created instance.
     */
    $.fn.jcarousel = function(o) {
        if (typeof o == 'string') {
            var instance = $(this).data('jcarousel'), args = Array.prototype.slice.call(arguments, 1);
            return instance[o].apply(instance, args);
        } else
            return this.each(function() {
                $(this).data('jcarousel', new $jc(this, o));
            });
    };

    // Default configuration properties.
    var defaults = {
        vertical: false,
        start: 1,
        offset: 1,
        size: null,
        scroll: 3,
        visible: null,
        animation: 'normal',
        easing: 'swing',
        auto: 0,
        wrap: null,
        initCallback: null,
        reloadCallback: null,
        itemLoadCallback: null,
        itemFirstInCallback: null,
        itemFirstOutCallback: null,
        itemLastInCallback: null,
        itemLastOutCallback: null,
        itemVisibleInCallback: null,
        itemVisibleOutCallback: null,
        buttonNextHTML: '<div></div>',
        buttonPrevHTML: '<div></div>',
        buttonNextEvent: 'click',
        buttonPrevEvent: 'click',
        buttonNextCallback: null,
        buttonPrevCallback: null
    };

    /**
     * The jCarousel object.
     *
     * @constructor
     * @class jcarousel
     * @param e {HTMLElement} The element to create the carousel for.
     * @param o {Object} A set of key/value pairs to set as configuration properties.
     * @cat Plugins/jCarousel
     */
    $.jcarousel = function(e, o) {
        this.options    = $.extend({}, defaults, o || {});

        this.locked     = false;

        this.container  = null;
        this.clip       = null;
        this.list       = null;
        this.buttonNext = null;
        this.buttonPrev = null;

        this.wh = !this.options.vertical ? 'width' : 'height';
        this.lt = !this.options.vertical ? 'left' : 'top';

        // Extract skin class
        var skin = '', split = e.className.split(' ');

        for (var i = 0; i < split.length; i++) {
            if (split[i].indexOf('jcarousel-skin') != -1) {
                $(e).removeClass(split[i]);
                skin = split[i];
                break;
            }
        }

        if (e.nodeName == 'UL' || e.nodeName == 'OL') {
            this.list = $(e);
            this.container = this.list.parent();

            if (this.container.hasClass('jcarousel-clip')) {
                if (!this.container.parent().hasClass('jcarousel-container'))
                    this.container = this.container.wrap('<div></div>');

                this.container = this.container.parent();
            } else if (!this.container.hasClass('jcarousel-container'))
                this.container = this.list.wrap('<div></div>').parent();
        } else {
            this.container = $(e);
            this.list = this.container.find('ul,ol').eq(0);
        }

        if (skin != '' && this.container.parent()[0].className.indexOf('jcarousel-skin') == -1)
            this.container.wrap('<div class=" '+ skin + '"></div>');

        this.clip = this.list.parent();

        if (!this.clip.length || !this.clip.hasClass('jcarousel-clip'))
            this.clip = this.list.wrap('<div></div>').parent();

        this.buttonNext = $('.jcarousel-next', this.container);

        if (this.buttonNext.size() == 0 && this.options.buttonNextHTML != null)
            this.buttonNext = this.clip.after(this.options.buttonNextHTML).next();

        this.buttonNext.addClass(this.className('jcarousel-next'));

        this.buttonPrev = $('.jcarousel-prev', this.container);

        if (this.buttonPrev.size() == 0 && this.options.buttonPrevHTML != null)
            this.buttonPrev = this.clip.after(this.options.buttonPrevHTML).next();

        this.buttonPrev.addClass(this.className('jcarousel-prev'));

        this.clip.addClass(this.className('jcarousel-clip')).css({
            overflow: 'hidden',
            position: 'relative'
        });
        this.list.addClass(this.className('jcarousel-list')).css({
            overflow: 'hidden',
            position: 'relative',
            top: 0,
            left: 0,
            margin: 0,
            padding: 0
        });
        this.container.addClass(this.className('jcarousel-container')).css({
            position: 'relative'
        });

        var di = this.options.visible != null ? Math.ceil(this.clipping() / this.options.visible) : null;
        var li = this.list.children('li');

        var self = this;

        if (li.size() > 0) {
            var wh = 0, i = this.options.offset;
            li.each(function() {
                self.format(this, i++);
                wh += self.dimension(this, di);
            });

            this.list.css(this.wh, wh + 'px');

            // Only set if not explicitly passed as option
            if (!o || o.size === undefined)
                this.options.size = li.size();
        }

        // For whatever reason, .show() does not work in Safari...
        this.container.css('display', 'block');
        this.buttonNext.css('display', 'block');
        this.buttonPrev.css('display', 'block');

        this.funcNext   = function() { self.next(); };
        this.funcPrev   = function() { self.prev(); };
        this.funcResize = function() { self.reload(); };

        if (this.options.initCallback != null)
            this.options.initCallback(this, 'init');

        if ($.browser.safari) {
            this.buttons(false, false);
            $(window).bind('load.jcarousel', function() { self.setup(); });
        } else
            this.setup();
    };

    // Create shortcut for internal use
    var $jc = $.jcarousel;

    $jc.fn = $jc.prototype = {
        jcarousel: '0.2.4'
    };

    $jc.fn.extend = $jc.extend = $.extend;

    $jc.fn.extend({
        /**
         * Setups the carousel.
         *
         * @method setup
         * @return undefined
         */
        setup: function() {
            this.first     = null;
            this.last      = null;
            this.prevFirst = null;
            this.prevLast  = null;
            this.animating = false;
            this.timer     = null;
            this.tail      = null;
            this.inTail    = false;

            if (this.locked)
                return;

            this.list.css(this.lt, this.pos(this.options.offset) + 'px');
            var p = this.pos(this.options.start);
            this.prevFirst = this.prevLast = null;
            this.animate(p, false);

            $(window).unbind('resize.jcarousel', this.funcResize).bind('resize.jcarousel', this.funcResize);
        },

        /**
         * Clears the list and resets the carousel.
         *
         * @method reset
         * @return undefined
         */
        reset: function() {
            this.list.empty();

            this.list.css(this.lt, '0px');
            this.list.css(this.wh, '10px');

            if (this.options.initCallback != null)
                this.options.initCallback(this, 'reset');

            this.setup();
        },

        /**
         * Reloads the carousel and adjusts positions.
         *
         * @method reload
         * @return undefined
         */
        reload: function() {
            if (this.tail != null && this.inTail)
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + this.tail);

            this.tail   = null;
            this.inTail = false;

            if (this.options.reloadCallback != null)
                this.options.reloadCallback(this);

            if (this.options.visible != null) {
                var self = this;
                var di = Math.ceil(this.clipping() / this.options.visible), wh = 0, lt = 0;
                $('li', this.list).each(function(i) {
                    wh += self.dimension(this, di);
                    if (i + 1 < self.first)
                        lt = wh;
                });

                this.list.css(this.wh, wh + 'px');
                this.list.css(this.lt, -lt + 'px');
            }

            this.scroll(this.first, false);
        },

        /**
         * Locks the carousel.
         *
         * @method lock
         * @return undefined
         */
        lock: function() {
            this.locked = true;
            this.buttons();
        },

        /**
         * Unlocks the carousel.
         *
         * @method unlock
         * @return undefined
         */
        unlock: function() {
            this.locked = false;
            this.buttons();
        },

        /**
         * Sets the size of the carousel.
         *
         * @method size
         * @return undefined
         * @param s {Number} The size of the carousel.
         */
        size: function(s) {
            if (s != undefined) {
                this.options.size = s;
                if (!this.locked)
                    this.buttons();
            }

            return this.options.size;
        },

        /**
         * Checks whether a list element exists for the given index (or index range).
         *
         * @method get
         * @return bool
         * @param i {Number} The index of the (first) element.
         * @param i2 {Number} The index of the last element.
         */
        has: function(i, i2) {
            if (i2 == undefined || !i2)
                i2 = i;

            if (this.options.size !== null && i2 > this.options.size)
                i2 = this.options.size;

            for (var j = i; j <= i2; j++) {
                var e = this.get(j);
                if (!e.length || e.hasClass('jcarousel-item-placeholder'))
                    return false;
            }

            return true;
        },

        /**
         * Returns a jQuery object with list element for the given index.
         *
         * @method get
         * @return jQuery
         * @param i {Number} The index of the element.
         */
        get: function(i) {
            return $('.jcarousel-item-' + i, this.list);
        },

        /**
         * Adds an element for the given index to the list.
         * If the element already exists, it updates the inner html.
         * Returns the created element as jQuery object.
         *
         * @method add
         * @return jQuery
         * @param i {Number} The index of the element.
         * @param s {String} The innerHTML of the element.
         */
        add: function(i, s) {
            var e = this.get(i), old = 0, add = 0;

            if (e.length == 0) {
                var c, e = this.create(i), j = $jc.intval(i);
                while (c = this.get(--j)) {
                    if (j <= 0 || c.length) {
                        j <= 0 ? this.list.prepend(e) : c.after(e);
                        break;
                    }
                }
            } else
                old = this.dimension(e);

            e.removeClass(this.className('jcarousel-item-placeholder'));
            typeof s == 'string' ? e.html(s) : e.empty().append(s);

            var di = this.options.visible != null ? Math.ceil(this.clipping() / this.options.visible) : null;
            var wh = this.dimension(e, di) - old;

            if (i > 0 && i < this.first)
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - wh + 'px');

            this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) + wh + 'px');

            return e;
        },

        /**
         * Removes an element for the given index from the list.
         *
         * @method remove
         * @return undefined
         * @param i {Number} The index of the element.
         */
        remove: function(i) {
            var e = this.get(i);

            // Check if item exists and is not currently visible
            if (!e.length || (i >= this.first && i <= this.last))
                return;

            var d = this.dimension(e);

            if (i < this.first)
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + d + 'px');

            e.remove();

            this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) - d + 'px');
        },

        /**
         * Moves the carousel forwards.
         *
         * @method next
         * @return undefined
         */
        next: function() {
            this.stopAuto();

            if (this.tail != null && !this.inTail)
                this.scrollTail(false);
            else
                this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'last') && this.options.size != null && this.last == this.options.size) ? 1 : this.first + this.options.scroll);
        },

        /**
         * Moves the carousel backwards.
         *
         * @method prev
         * @return undefined
         */
        prev: function() {
            this.stopAuto();

            if (this.tail != null && this.inTail)
                this.scrollTail(true);
            else
                this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'first') && this.options.size != null && this.first == 1) ? this.options.size : this.first - this.options.scroll);
        },

        /**
         * Scrolls the tail of the carousel.
         *
         * @method scrollTail
         * @return undefined
         * @param b {Boolean} Whether scroll the tail back or forward.
         */
        scrollTail: function(b) {
            if (this.locked || this.animating || !this.tail)
                return;

            var pos  = $jc.intval(this.list.css(this.lt));

            !b ? pos -= this.tail : pos += this.tail;
            this.inTail = !b;

            // Save for callbacks
            this.prevFirst = this.first;
            this.prevLast  = this.last;

            this.animate(pos);
        },

        /**
         * Scrolls the carousel to a certain position.
         *
         * @method scroll
         * @return undefined
         * @param i {Number} The index of the element to scoll to.
         * @param a {Boolean} Flag indicating whether to perform animation.
         */
        scroll: function(i, a) {
            if (this.locked || this.animating)
                return;

            this.animate(this.pos(i), a);
        },

        /**
         * Prepares the carousel and return the position for a certian index.
         *
         * @method pos
         * @return {Number}
         * @param i {Number} The index of the element to scoll to.
         */
        pos: function(i) {
            var pos  = $jc.intval(this.list.css(this.lt));

            if (this.locked || this.animating)
                return pos;

            if (this.options.wrap != 'circular')
                i = i < 1 ? 1 : (this.options.size && i > this.options.size ? this.options.size : i);

            var back = this.first > i;

            // Create placeholders, new list width/height
            // and new list position
            var f = this.options.wrap != 'circular' && this.first <= 1 ? 1 : this.first;
            var c = back ? this.get(f) : this.get(this.last);
            var j = back ? f : f - 1;
            var e = null, l = 0, p = false, d = 0, g;

            while (back ? --j >= i : ++j < i) {
                e = this.get(j);
                p = !e.length;
                if (e.length == 0) {
                    e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));
                    c[back ? 'before' : 'after' ](e);

                    if (this.first != null && this.options.wrap == 'circular' && this.options.size !== null && (j <= 0 || j > this.options.size)) {
                        g = this.get(this.index(j));
                        if (g.length)
                            this.add(j, g.children().clone(true));
                    }
                }

                c = e;
                d = this.dimension(e);

                if (p)
                    l += d;

                if (this.first != null && (this.options.wrap == 'circular' || (j >= 1 && (this.options.size == null || j <= this.options.size))))
                    pos = back ? pos + d : pos - d;
            }

            // Calculate visible items
            var clipping = this.clipping();
            var cache = [];
            var visible = 0, j = i, v = 0;
            var c = this.get(i - 1);

            while (++visible) {
                e = this.get(j);
                p = !e.length;
                if (e.length == 0) {
                    e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));
                    // This should only happen on a next scroll
                    c.length == 0 ? this.list.prepend(e) : c[back ? 'before' : 'after' ](e);

                    if (this.first != null && this.options.wrap == 'circular' && this.options.size !== null && (j <= 0 || j > this.options.size)) {
                        g = this.get(this.index(j));
                        if (g.length)
                            this.add(j, g.find('>*').clone(true));
                    }
                }

                c = e;
                var d = this.dimension(e);
                if (d == 0) {
                    //alert('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');
                    //return 0;
                    return 1;
                }

                if (this.options.wrap != 'circular' && this.options.size !== null && j > this.options.size)
                    cache.push(e);
                else if (p)
                    l += d;

                v += d;

                if (v >= clipping)
                    break;

                j++;
            }

             // Remove out-of-range placeholders
            for (var x = 0; x < cache.length; x++)
                cache[x].remove();

            // Resize list
            if (l > 0) {
                this.list.css(this.wh, this.dimension(this.list) + l + 'px');

                if (back) {
                    pos -= l;
                    this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - l + 'px');
                }
            }

            // Calculate first and last item
            var last = i + visible - 1;
            if (this.options.wrap != 'circular' && this.options.size && last > this.options.size)
                last = this.options.size;

            if (j > last) {
                visible = 0, j = last, v = 0;
                while (++visible) {
                    var e = this.get(j--);
                    if (!e.length)
                        break;
                    v += this.dimension(e);
                    if (v >= clipping)
                        break;
                }
            }

            var first = last - visible + 1;
            if (this.options.wrap != 'circular' && first < 1)
                first = 1;

            if (this.inTail && back) {
                pos += this.tail;
                this.inTail = false;
            }

            this.tail = null;
            if (this.options.wrap != 'circular' && last == this.options.size && (last - visible + 1) >= 1) {
                var m = $jc.margin(this.get(last), !this.options.vertical ? 'marginRight' : 'marginBottom');
                if ((v - m) > clipping)
                    this.tail = v - clipping - m;
            }

            // Adjust position
            while (i-- > first)
                pos += this.dimension(this.get(i));

            // Save visible item range
            this.prevFirst = this.first;
            this.prevLast  = this.last;
            this.first     = first;
            this.last      = last;

            return pos;
        },

        /**
         * Animates the carousel to a certain position.
         *
         * @method animate
         * @return undefined
         * @param p {Number} Position to scroll to.
         * @param a {Boolean} Flag indicating whether to perform animation.
         */
        animate: function(p, a) {
            if (this.locked || this.animating)
                return;

            this.animating = true;

            var self = this;
            var scrolled = function() {
                self.animating = false;

                if (p == 0)
                    self.list.css(self.lt,  0);

                if (self.options.wrap == 'circular' || self.options.wrap == 'both' || self.options.wrap == 'last' || self.options.size == null || self.last < self.options.size)
                    self.startAuto();

                self.buttons();
                self.notify('onAfterAnimation');
            };

            this.notify('onBeforeAnimation');

            // Animate
            if (!this.options.animation || a == false) {
                this.list.css(this.lt, p + 'px');
                scrolled();
            } else {
                var o = !this.options.vertical ? {'left': p} : {'top': p};
                this.list.animate(o, this.options.animation, this.options.easing, scrolled);
            }
        },

        /**
         * Starts autoscrolling.
         *
         * @method auto
         * @return undefined
         * @param s {Number} Seconds to periodically autoscroll the content.
         */
        startAuto: function(s) {
            if (s != undefined)
                this.options.auto = s;

            if (this.options.auto == 0)
                return this.stopAuto();

            if (this.timer != null)
                return;

            var self = this;
            this.timer = setTimeout(function() { self.next(); }, this.options.auto * 3000);
        },

        /**
         * Stops autoscrolling.
         *
         * @method stopAuto
         * @return undefined
         */
        stopAuto: function() {
            if (this.timer == null)
                return;

            clearTimeout(this.timer);
            this.timer = null;
        },

        /**
         * Sets the states of the prev/next buttons.
         *
         * @method buttons
         * @return undefined
         */
        buttons: function(n, p) {
            if (n == undefined || n == null) {
                var n = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'first') || this.options.size == null || this.last < this.options.size);
                if (!this.locked && (!this.options.wrap || this.options.wrap == 'first') && this.options.size != null && this.last >= this.options.size)
                    n = this.tail != null && !this.inTail;
            }

            if (p == undefined || p == null) {
                var p = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'last') || this.first > 1);
                if (!this.locked && (!this.options.wrap || this.options.wrap == 'last') && this.options.size != null && this.first == 1)
                    p = this.tail != null && this.inTail;
            }

            var self = this;

            this.buttonNext[n ? 'bind' : 'unbind'](this.options.buttonNextEvent + '.jcarousel', this.funcNext)[n ? 'removeClass' : 'addClass'](this.className('jcarousel-next-disabled')).attr('disabled', n ? false : true);
            this.buttonPrev[p ? 'bind' : 'unbind'](this.options.buttonPrevEvent + '.jcarousel', this.funcPrev)[p ? 'removeClass' : 'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled', p ? false : true);

            if (this.buttonNext.length > 0 && (this.buttonNext[0].jcarouselstate == undefined || this.buttonNext[0].jcarouselstate != n) && this.options.buttonNextCallback != null) {
                this.buttonNext.each(function() { self.options.buttonNextCallback(self, this, n); });
                this.buttonNext[0].jcarouselstate = n;
            }

            if (this.buttonPrev.length > 0 && (this.buttonPrev[0].jcarouselstate == undefined || this.buttonPrev[0].jcarouselstate != p) && this.options.buttonPrevCallback != null) {
                this.buttonPrev.each(function() { self.options.buttonPrevCallback(self, this, p); });
                this.buttonPrev[0].jcarouselstate = p;
            }
        },

        /**
         * Notify callback of a specified event.
         *
         * @method notify
         * @return undefined
         * @param evt {String} The event name
         */
        notify: function(evt) {
            var state = this.prevFirst == null ? 'init' : (this.prevFirst < this.first ? 'next' : 'prev');

            // Load items
            this.callback('itemLoadCallback', evt, state);

            if (this.prevFirst !== this.first) {
                this.callback('itemFirstInCallback', evt, state, this.first);
                this.callback('itemFirstOutCallback', evt, state, this.prevFirst);
            }

            if (this.prevLast !== this.last) {
                this.callback('itemLastInCallback', evt, state, this.last);
                this.callback('itemLastOutCallback', evt, state, this.prevLast);
            }

            this.callback('itemVisibleInCallback', evt, state, this.first, this.last, this.prevFirst, this.prevLast);
            this.callback('itemVisibleOutCallback', evt, state, this.prevFirst, this.prevLast, this.first, this.last);
        },

        callback: function(cb, evt, state, i1, i2, i3, i4) {
            if (this.options[cb] == undefined || (typeof this.options[cb] != 'object' && evt != 'onAfterAnimation'))
                return;

            var callback = typeof this.options[cb] == 'object' ? this.options[cb][evt] : this.options[cb];

            if (!$.isFunction(callback))
                return;

            var self = this;

            if (i1 === undefined)
                callback(self, state, evt);
            else if (i2 === undefined)
                this.get(i1).each(function() { callback(self, this, i1, state, evt); });
            else {
                for (var i = i1; i <= i2; i++)
                    if (i !== null && !(i >= i3 && i <= i4))
                        this.get(i).each(function() { callback(self, this, i, state, evt); });
            }
        },

        create: function(i) {
            return this.format('<li></li>', i);
        },

        format: function(e, i) {
            var $e = $(e).addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-' + i)).css({
                'float': 'left',
                'list-style': 'none'
            });
            $e.attr('jcarouselindex', i);
            return $e;
        },

        className: function(c) {
            return c + ' ' + c + (!this.options.vertical ? '-horizontal' : '-vertical');
        },

        dimension: function(e, d) {
            var el = e.jquery != undefined ? e[0] : e;

            var old = !this.options.vertical ?
                el.offsetWidth + $jc.margin(el, 'marginLeft') + $jc.margin(el, 'marginRight') :
                el.offsetHeight + $jc.margin(el, 'marginTop') + $jc.margin(el, 'marginBottom');

            if (d == undefined || old == d)
                return old;

            var w = !this.options.vertical ?
                d - $jc.margin(el, 'marginLeft') - $jc.margin(el, 'marginRight') :
                d - $jc.margin(el, 'marginTop') - $jc.margin(el, 'marginBottom');

            $(el).css(this.wh, w + 'px');

            return this.dimension(el);
        },

        clipping: function() {
            return !this.options.vertical ?
                this.clip[0].offsetWidth - $jc.intval(this.clip.css('borderLeftWidth')) - $jc.intval(this.clip.css('borderRightWidth')) :
                this.clip[0].offsetHeight - $jc.intval(this.clip.css('borderTopWidth')) - $jc.intval(this.clip.css('borderBottomWidth'));
        },

        index: function(i, s) {
            if (s == undefined)
                s = this.options.size;

            return Math.round((((i-1) / s) - Math.floor((i-1) / s)) * s) + 1;
        }
    });

    $jc.extend({
        /**
         * Gets/Sets the global default configuration properties.
         *
         * @method defaults
         * @return {Object}
         * @param d {Object} A set of key/value pairs to set as configuration properties.
         */
        defaults: function(d) {
            return $.extend(defaults, d || {});
        },

        margin: function(e, p) {
            if (!e)
                return 0;

            var el = e.jquery != undefined ? e[0] : e;

            if (p == 'marginRight' && $.browser.safari) {
                var old = {'display': 'block', 'float': 'none', 'width': 'auto'}, oWidth, oWidth2;

                $.swap(el, old, function() { oWidth = el.offsetWidth; });

                old['marginRight'] = 0;
                $.swap(el, old, function() { oWidth2 = el.offsetWidth; });

                return oWidth2 - oWidth;
            }

            return $jc.intval($.css(el, p));
        },

        intval: function(v) {
            v = parseInt(v);
            return isNaN(v) ? 0 : v;
        }
    });

})(jQuery);





(function(b) {
    function d(a) {
        var f = [].slice.call(arguments, 1),
        e = 0;
        a = b.event.fix(a || window.event);
        a.type = "mousewheel";
        if (a.wheelDelta) e = a.wheelDelta / 120;
        if (a.detail) e = -a.detail / 3;
        f.unshift(a, e);
        return b.event.handle.apply(this, f)
    }
    var c = ["DOMMouseScroll", "mousewheel"];
    b.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) for (var a = c.length; a;) this.addEventListener(c[--a], d, false);
            else this.onmousewheel = d
        },
        teardown: function() {
            if (this.removeEventListener) for (var a = c.length; a;) this.removeEventListener(c[--a], d, false);
            else this.onmousewheel = null
        }
    };
    b.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
})(jQuery);

(function($) {

	var tmp, loading, overlay, wrap, outer, inner, close, nav_left, nav_right,

		selectedIndex = 0, selectedOpts = {}, selectedArray = [], currentIndex = 0, currentOpts = {}, currentArray = [],

		ajaxLoader = null, imgPreloader = new Image(), imgRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, swfRegExp = /[^\.]\.(swf)\s*$/i,

		loadingTimer, loadingFrame = 1,

		start_pos, final_pos, busy = false, shadow = 20, fx = $.extend($('<div/>')[0], { prop: 0 }), titleh = 0, 

		isIE6 = !$.support.opacity && !window.XMLHttpRequest,

		/*
		 * Private methods 
		 */

		fancybox_abort = function() {
			loading.hide();

			imgPreloader.onerror = imgPreloader.onload = null;

			if (ajaxLoader) {
				ajaxLoader.abort();
			}

			tmp.empty();
		},

		fancybox_error = function() {
			$.fancybox('<p id="fancybox_error">The requested content cannot be loaded.<br />Please try again later.</p>', {
				'scrolling'		: 'no',
				'padding'		: 20,
				'transitionIn'	: 'none',
				'transitionOut'	: 'none'
			});
		},

		fancybox_get_viewport = function() {
			return [ $(window).width(), $(window).height(), $(document).scrollLeft(), $(document).scrollTop() ];
		},

		fancybox_get_zoom_to = function () {
			var view	= fancybox_get_viewport(),
				to		= {},

				margin = currentOpts.margin,
				resize = currentOpts.autoScale,

				horizontal_space	= (shadow + margin) * 2,
				vertical_space		= (shadow + margin) * 2,
				double_padding		= (currentOpts.padding * 2),
				
				ratio;

			if (currentOpts.width.toString().indexOf('%') > -1) {
				to.width = ((view[0] * parseFloat(currentOpts.width)) / 100) - (shadow * 2) ;
				resize = false;

			} else {
				to.width = currentOpts.width + double_padding;
			}

			if (currentOpts.height.toString().indexOf('%') > -1) {
				to.height = ((view[1] * parseFloat(currentOpts.height)) / 100) - (shadow * 2);
				resize = false;

			} else {
				to.height = currentOpts.height + double_padding;
			}

			if (resize && (to.width > (view[0] - horizontal_space) || to.height > (view[1] - vertical_space))) {
				if (selectedOpts.type == 'image' || selectedOpts.type == 'swf') {
					horizontal_space	+= double_padding;
					vertical_space		+= double_padding;

					ratio = Math.min(Math.min( view[0] - horizontal_space, currentOpts.width) / currentOpts.width, Math.min( view[1] - vertical_space, currentOpts.height) / currentOpts.height);

					to.width	= Math.round(ratio * (to.width	- double_padding)) + double_padding;
					to.height	= Math.round(ratio * (to.height	- double_padding)) + double_padding;

				} else {
					to.width	= Math.min(to.width,	(view[0] - horizontal_space));
					to.height	= Math.min(to.height,	(view[1] - vertical_space));
				}
			}

			to.top	= view[3] + ((view[1] - (to.height	+ (shadow * 2 ))) * 0.5);
			to.left	= view[2] + ((view[0] - (to.width	+ (shadow * 2 ))) * 0.5);

			if (currentOpts.autoScale === false) {
				to.top	= Math.max(view[3] + margin, to.top);
				to.left	= Math.max(view[2] + margin, to.left);
			}

			return to;
		},

		fancybox_format_title = function(title) {
			if (title && title.length) {
				switch (currentOpts.titlePosition) {
					case 'inside':
						return title;
					case 'over':
						return '<span id="fancybox-title-over">' + title + '</span>';
					default:
						return '<span id="fancybox-title-wrap"><span id="fancybox-title-left"></span><span id="fancybox-title-main">' + title + '</span><span id="fancybox-title-right"></span></span>';
				}
			}

			return false;
		},

		fancybox_process_title = function() {
			var title	= currentOpts.title,
				width	= final_pos.width - (currentOpts.padding * 2),
				titlec	= 'fancybox-title-' + currentOpts.titlePosition;
				
			$('#fancybox-title').remove();

			titleh = 0;

			if (currentOpts.titleShow === false) {
				return;
			}

			title = $.isFunction(currentOpts.titleFormat) ? currentOpts.titleFormat(title, currentArray, currentIndex, currentOpts) : fancybox_format_title(title);

			if (!title || title === '') {
				return;
			}

			$('<div id="fancybox-title" class="' + titlec + '" />').css({
				'width'			: width,
				'paddingLeft'	: currentOpts.padding,
				'paddingRight'	: currentOpts.padding
			}).html(title).appendTo('body');

			switch (currentOpts.titlePosition) {
				case 'inside':
					titleh = $("#fancybox-title").outerHeight(true) - currentOpts.padding;
					final_pos.height += titleh;
				break;

				case 'over':
					$('#fancybox-title').css('bottom', currentOpts.padding);
				break;

				default:
					$('#fancybox-title').css('bottom', $("#fancybox-title").outerHeight(true) * -1);
				break;
			}

			$('#fancybox-title').appendTo( outer ).hide();
		},

		fancybox_set_navigation = function() {
			$(document).unbind('keydown.fb').bind('keydown.fb', function(e) {
				if (e.keyCode == 27 && currentOpts.enableEscapeButton) {
					e.preventDefault();
					$.fancybox.close();

				} else if (e.keyCode == 37) {
					e.preventDefault();
					$.fancybox.prev();

				} else if (e.keyCode == 39) {
					e.preventDefault();
					$.fancybox.next();
				}
			});

			if ($.fn.mousewheel) {
				wrap.unbind('mousewheel.fb');

				if (currentArray.length > 1) {
					wrap.bind('mousewheel.fb', function(e, delta) {
						e.preventDefault();

						if (busy || delta === 0) {
							return;
						}

						if (delta > 0) {
							$.fancybox.prev();
						} else {
							$.fancybox.next();
						}
					});
				}
			}

			if (!currentOpts.showNavArrows) { return; }

			if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex !== 0) {
				nav_left.show();
			}

			if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex != (currentArray.length -1)) {
				nav_right.show();
			}
		},

		fancybox_preload_images = function() {
			var href, 
				objNext;
				
			if ((currentArray.length -1) > currentIndex) {
				href = currentArray[ currentIndex + 1 ].href;

				if (typeof href !== 'undefined' && href.match(imgRegExp)) {
					objNext = new Image();
					objNext.src = href;
				}
			}

			if (currentIndex > 0) {
				href = currentArray[ currentIndex - 1 ].href;

				if (typeof href !== 'undefined' && href.match(imgRegExp)) {
					objNext = new Image();
					objNext.src = href;
				}
			}
		},

		_finish = function () {
			inner.css('overflow', (currentOpts.scrolling == 'auto' ? (currentOpts.type == 'image' || currentOpts.type == 'iframe' || currentOpts.type == 'swf' ? 'hidden' : 'auto') : (currentOpts.scrolling == 'yes' ? 'auto' : 'visible')));

			if (!$.support.opacity) {
				inner.get(0).style.removeAttribute('filter');
				wrap.get(0).style.removeAttribute('filter');
			}

			$('#fancybox-title').show();

			if (currentOpts.hideOnContentClick)	{
				inner.one('click', $.fancybox.close);
			}
			if (currentOpts.hideOnOverlayClick)	{
				overlay.one('click', $.fancybox.close);
			}

			if (currentOpts.showCloseButton) {
				close.show();
			}

			fancybox_set_navigation();

			$(window).bind("resize.fb", $.fancybox.center);

			if (currentOpts.centerOnScroll) {
				$(window).bind("scroll.fb", $.fancybox.center);
			} else {
				$(window).unbind("scroll.fb");
			}

			if ($.isFunction(currentOpts.onComplete)) {
				currentOpts.onComplete(currentArray, currentIndex, currentOpts);
			}

			busy = false;

			fancybox_preload_images();
		},

		fancybox_draw = function(pos) {
			var width	= Math.round(start_pos.width	+ (final_pos.width	- start_pos.width)	* pos),
				height	= Math.round(start_pos.height	+ (final_pos.height	- start_pos.height)	* pos),

				top		= Math.round(start_pos.top	+ (final_pos.top	- start_pos.top)	* pos),
				left	= Math.round(start_pos.left	+ (final_pos.left	- start_pos.left)	* pos);

			wrap.css({
				'width'		: width		+ 'px',
				'height'	: height	+ 'px',
				'top'		: top		+ 'px',
				'left'		: left		+ 'px'
			});

			width	= Math.max(width - currentOpts.padding * 2, 0);
			height	= Math.max(height - (currentOpts.padding * 2 + (titleh * pos)), 0);

			inner.css({
				'width'		: width		+ 'px',
				'height'	: height	+ 'px'
			});

			if (typeof final_pos.opacity !== 'undefined') {
				wrap.css('opacity', (pos < 0.5 ? 0.5 : pos));
			}
		},

		fancybox_get_obj_pos = function(obj) {
			var pos		= obj.offset();

			pos.top		+= parseFloat( obj.css('paddingTop') )	|| 0;
			pos.left	+= parseFloat( obj.css('paddingLeft') )	|| 0;

			pos.top		+= parseFloat( obj.css('border-top-width') )	|| 0;
			pos.left	+= parseFloat( obj.css('border-left-width') )	|| 0;

			pos.width	= obj.width();
			pos.height	= obj.height();

			return pos;
		},

		fancybox_get_zoom_from = function() {
			var orig = selectedOpts.orig ? $(selectedOpts.orig) : false,
				from = {},
				pos,
				view;

			if (orig && orig.length) {
				pos = fancybox_get_obj_pos(orig);

				from = {
					width	: (pos.width	+ (currentOpts.padding * 2)),
					height	: (pos.height	+ (currentOpts.padding * 2)),
					top		: (pos.top		- currentOpts.padding - shadow),
					left	: (pos.left		- currentOpts.padding - shadow)
				};
				
			} else {
				view = fancybox_get_viewport();

				from = {
					width	: 1,
					height	: 1,
					top		: view[3] + view[1] * 0.5,
					left	: view[2] + view[0] * 0.5
				};
			}

			return from;
		},

		fancybox_show = function() {
			loading.hide();

			if (wrap.is(":visible") && $.isFunction(currentOpts.onCleanup)) {
				if (currentOpts.onCleanup(currentArray, currentIndex, currentOpts) === false) {
					$.event.trigger('fancybox-cancel');

					busy = false;
					return;
				}
			}

			currentArray	= selectedArray;
			currentIndex	= selectedIndex;
			currentOpts		= selectedOpts;

			inner.get(0).scrollTop	= 0;
			inner.get(0).scrollLeft	= 0;

			if (currentOpts.overlayShow) {
				if (isIE6) {
					$('select:not(#fancybox-tmp select)').filter(function() {
						return this.style.visibility !== 'hidden';
					}).css({'visibility':'hidden'}).one('fancybox-cleanup', function() {
						this.style.visibility = 'inherit';
					});
				}

				overlay.css({
					'background-color'	: currentOpts.overlayColor,
					'opacity'			: currentOpts.overlayOpacity
				}).unbind().show();
			}

			final_pos = fancybox_get_zoom_to();

			fancybox_process_title();

			if (wrap.is(":visible")) {
				$( close.add( nav_left ).add( nav_right ) ).hide();

				var pos = wrap.position(),
					equal;

				start_pos = {
					top		:	pos.top ,
					left	:	pos.left,
					width	:	wrap.width(),
					height	:	wrap.height()
				};

				equal = (start_pos.width == final_pos.width && start_pos.height == final_pos.height);

				inner.fadeOut(currentOpts.changeFade, function() {
					var finish_resizing = function() {
						inner.html( tmp.contents() ).fadeIn(currentOpts.changeFade, _finish);
					};
					
					$.event.trigger('fancybox-change');

					inner.empty().css('overflow', 'hidden');

					if (equal) {
						inner.css({
							top			: currentOpts.padding,
							left		: currentOpts.padding,
							width		: Math.max(final_pos.width	- (currentOpts.padding * 2), 1),
							height		: Math.max(final_pos.height	- (currentOpts.padding * 2) - titleh, 1)
						});
						
						finish_resizing();

					} else {
						inner.css({
							top			: currentOpts.padding,
							left		: currentOpts.padding,
							width		: Math.max(start_pos.width	- (currentOpts.padding * 2), 1),
							height		: Math.max(start_pos.height	- (currentOpts.padding * 2), 1)
						});
						
						fx.prop = 0;

						$(fx).animate({ prop: 1 }, {
							 duration	: currentOpts.changeSpeed,
							 easing		: currentOpts.easingChange,
							 step		: fancybox_draw,
							 complete	: finish_resizing
						});
					}
				});

				return;
			}

			wrap.css('opacity', 1);

			if (currentOpts.transitionIn == 'elastic') {
				start_pos = fancybox_get_zoom_from();

				inner.css({
						top			: currentOpts.padding,
						left		: currentOpts.padding,
						width		: Math.max(start_pos.width	- (currentOpts.padding * 2), 1),
						height		: Math.max(start_pos.height	- (currentOpts.padding * 2), 1)
					})
					.html( tmp.contents() );

				wrap.css(start_pos).show();

				if (currentOpts.opacity) {
					final_pos.opacity = 0;
				}

				fx.prop = 0;

				$(fx).animate({ prop: 1 }, {
					 duration	: currentOpts.speedIn,
					 easing		: currentOpts.easingIn,
					 step		: fancybox_draw,
					 complete	: _finish
				});

			} else {
				inner.css({
						top			: currentOpts.padding,
						left		: currentOpts.padding,
						width		: Math.max(final_pos.width	- (currentOpts.padding * 2), 1),
						height		: Math.max(final_pos.height	- (currentOpts.padding * 2) - titleh, 1)
					})
					.html( tmp.contents() );

				wrap.css( final_pos ).fadeIn( currentOpts.transitionIn == 'none' ? 0 : currentOpts.speedIn, _finish );
			}
		},

		fancybox_process_inline = function() {
			tmp.width(	selectedOpts.width );
			tmp.height(	selectedOpts.height );

			if (selectedOpts.width	== 'auto') {
				selectedOpts.width = tmp.width();
			}
			if (selectedOpts.height	== 'auto') {
				selectedOpts.height	= tmp.height();
			}

			fancybox_show();
		},
		
		fancybox_process_image = function() {
			busy = true;

			selectedOpts.width	= imgPreloader.width;
			selectedOpts.height	= imgPreloader.height;

			$("<img />").attr({
				'id'	: 'fancybox-img',
				'src'	: imgPreloader.src,
				'alt'	: selectedOpts.title
			}).appendTo( tmp );

			fancybox_show();
		},

		fancybox_start = function() {
			fancybox_abort();

			var obj	= selectedArray[ selectedIndex ],
				href, 
				type, 
				title,
				str,
				emb,
				selector,
				data;

			selectedOpts = $.extend({}, $.fn.fancybox.defaults, (typeof $(obj).data('fancybox') == 'undefined' ? selectedOpts : $(obj).data('fancybox')));
			title = obj.title || $(obj).title || selectedOpts.title || '';
			
			if (obj.nodeName && !selectedOpts.orig) {
				selectedOpts.orig = $(obj).children("img:first").length ? $(obj).children("img:first") : $(obj);
			}

			if (title === '' && selectedOpts.orig) {
				title = selectedOpts.orig.attr('alt');
			}

			if (obj.nodeName && (/^(?:javascript|#)/i).test(obj.href)) {
				href = selectedOpts.href || null;
			} else {
				href = selectedOpts.href || obj.href || null;
			}

			if (selectedOpts.type) {
				type = selectedOpts.type;

				if (!href) {
					href = selectedOpts.content;
				}
				
			} else if (selectedOpts.content) {
				type	= 'html';

			} else if (href) {
				if (href.match(imgRegExp)) {
					type = 'image';

				} else if (href.match(swfRegExp)) {
					type = 'swf';

				} else if ($(obj).hasClass("iframe")) {
					type = 'iframe';

				} else if (href.match(/#/)) {
					obj = href.substr(href.indexOf("#"));

					type = $(obj).length > 0 ? 'inline' : 'ajax';
				} else {
					type = 'ajax';
				}
			} else {
				type = 'inline';
			}

			selectedOpts.type	= type;
			selectedOpts.href	= href;
			selectedOpts.title	= title;

			if (selectedOpts.autoDimensions && selectedOpts.type !== 'iframe' && selectedOpts.type !== 'swf') {
				selectedOpts.width		= 'auto';
				selectedOpts.height		= 'auto';
			}

			if (selectedOpts.modal) {
				selectedOpts.overlayShow		= true;
				selectedOpts.hideOnOverlayClick	= false;
				selectedOpts.hideOnContentClick	= false;
				selectedOpts.enableEscapeButton	= false;
				selectedOpts.showCloseButton	= false;
			}

			if ($.isFunction(selectedOpts.onStart)) {
				if (selectedOpts.onStart(selectedArray, selectedIndex, selectedOpts) === false) {
					busy = false;
					return;
				}
			}


			tmp.css('padding', (shadow + selectedOpts.padding + selectedOpts.margin));

			$('.fancybox-inline-tmp').unbind('fancybox-cancel').bind('fancybox-change', function() {
				$(this).replaceWith(inner.children());
			});

			switch (type) {
				case 'html' :
					tmp.html( selectedOpts.content );
					fancybox_process_inline();
				break;

				case 'inline' :
					$('<div class="fancybox-inline-tmp" />').hide().insertBefore( $(obj) ).bind('fancybox-cleanup', function() {
						$(this).replaceWith(inner.children());
					}).bind('fancybox-cancel', function() {
						$(this).replaceWith(tmp.children());
					});

					$(obj).appendTo(tmp);

					fancybox_process_inline();
				break;

				case 'image':
					busy = false;

					$.fancybox.showActivity();

					imgPreloader = new Image();

					imgPreloader.onerror = function() {
						fancybox_error();
					};

					imgPreloader.onload = function() {
						imgPreloader.onerror = null;
						imgPreloader.onload = null;
						fancybox_process_image();
					};

					imgPreloader.src = href;
		
				break;

				case 'swf':
					str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"><param name="movie" value="' + href + '"></param>';
					emb = '';
					
					$.each(selectedOpts.swf, function(name, val) {
						str += '<param name="' + name + '" value="' + val + '"></param>';
						emb += ' ' + name + '="' + val + '"';
					});

					str += '<embed src="' + href + '" type="application/x-shockwave-flash" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"' + emb + '></embed></object>';

					tmp.html(str);

					fancybox_process_inline();
				break;

				case 'ajax':
					selector	= href.split('#', 2);
					data		= selectedOpts.ajax.data || {};

					if (selector.length > 1) {
						href = selector[0];

						if (typeof data == "string") {
							data += '&selector=' + selector[1];
						} else {
							data.selector = selector[1];
						}
					}

					busy = false;
					$.fancybox.showActivity();

					ajaxLoader = $.ajax($.extend(selectedOpts.ajax, {
						url		: href,
						data	: data,
						error	: fancybox_error,
						success : function(data, textStatus, XMLHttpRequest) {
							if (ajaxLoader.status == 200) {
								tmp.html( data );
								fancybox_process_inline();
							}
						}
					}));

				break;

				case 'iframe' :
					$('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" scrolling="' + selectedOpts.scrolling + '" src="' + selectedOpts.href + '"></iframe>').appendTo(tmp);
					fancybox_show();
				break;
			}
		},

		fancybox_animate_loading = function() {
			if (!loading.is(':visible')){
				clearInterval(loadingTimer);
				return;
			}

			$('div', loading).css('top', (loadingFrame * -40) + 'px');

			loadingFrame = (loadingFrame + 1) % 12;
		},

		fancybox_init = function() {
			if ($("#fancybox-wrap").length) {
				return;
			}

			$('body').append(
				tmp			= $('<div id="fancybox-tmp"></div>'),
				loading		= $('<div id="fancybox-loading"><div></div></div>'),
				overlay		= $('<div id="fancybox-overlay"></div>'),
				wrap		= $('<div id="fancybox-wrap"></div>')
			);

			if (!$.support.opacity) {
				wrap.addClass('fancybox-ie');
				loading.addClass('fancybox-ie');
			}

			outer = $('<div id="fancybox-outer"></div>')
				.append('<div class="fancy-bg" id="fancy-bg-n"></div><div class="fancy-bg" id="fancy-bg-ne"></div><div class="fancy-bg" id="fancy-bg-e"></div><div class="fancy-bg" id="fancy-bg-se"></div><div class="fancy-bg" id="fancy-bg-s"></div><div class="fancy-bg" id="fancy-bg-sw"></div><div class="fancy-bg" id="fancy-bg-w"></div><div class="fancy-bg" id="fancy-bg-nw"></div>')
				.appendTo( wrap );

			outer.append(
				inner		= $('<div id="fancybox-inner"></div>'),
				close		= $('<a id="fancybox-close"></a>'),

				nav_left	= $('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),
				nav_right	= $('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')
			);

			close.click($.fancybox.close);
			loading.click($.fancybox.cancel);

			nav_left.click(function(e) {
				e.preventDefault();
				$.fancybox.prev();
			});

			nav_right.click(function(e) {
				e.preventDefault();
				$.fancybox.next();
			});

			if (isIE6) {
				overlay.get(0).style.setExpression('height',	"document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px'");
				loading.get(0).style.setExpression('top',		"(-20 + (document.documentElement.clientHeight ? document.documentElement.clientHeight/2 : document.body.clientHeight/2 ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop )) + 'px'");

				outer.prepend('<iframe id="fancybox-hide-sel-frame" src="javascript:\'\';" scrolling="no" frameborder="0" ></iframe>');
			}
		};

	/*
	 * Public methods 
	 */

	$.fn.fancybox = function(options) {
		$(this)
			.data('fancybox', $.extend({}, options, ($.metadata ? $(this).metadata() : {})))
			.unbind('click.fb').bind('click.fb', function(e) {
				e.preventDefault();

				if (busy) {
					return;
				}

				busy = true;

				$(this).blur();

				selectedArray	= [];
				selectedIndex	= 0;

				var rel = $(this).attr('rel') || '';

				if (!rel || rel == '' || rel === 'nofollow') {
					selectedArray.push(this);

				} else {
					selectedArray	= $("a[rel=" + rel + "], area[rel=" + rel + "]");
					selectedIndex	= selectedArray.index( this );
				}

				fancybox_start();

				return false;
			});

		return this;
	};

	$.fancybox = function(obj) {
		if (busy) {
			return;
		}

		busy = true;

		var opts = typeof arguments[1] !== 'undefined' ? arguments[1] : {};

		selectedArray	= [];
		selectedIndex	= opts.index || 0;

		if ($.isArray(obj)) {
			for (var i = 0, j = obj.length; i < j; i++) {
				if (typeof obj[i] == 'object') {
					$(obj[i]).data('fancybox', $.extend({}, opts, obj[i]));
				} else {
					obj[i] = $({}).data('fancybox', $.extend({content : obj[i]}, opts));
				}
			}

			selectedArray = jQuery.merge(selectedArray, obj);

		} else {
			if (typeof obj == 'object') {
				$(obj).data('fancybox', $.extend({}, opts, obj));
			} else {
				obj = $({}).data('fancybox', $.extend({content : obj}, opts));
			}

			selectedArray.push(obj);
		}

		if (selectedIndex > selectedArray.length || selectedIndex < 0) {
			selectedIndex = 0;
		}

		fancybox_start();
	};

	$.fancybox.showActivity = function() {
		clearInterval(loadingTimer);

		loading.show();
		loadingTimer = setInterval(fancybox_animate_loading, 66);
	};

	$.fancybox.hideActivity = function() {
		loading.hide();
	};

	$.fancybox.next = function() {
		return $.fancybox.pos( currentIndex + 1);
	};
	
	$.fancybox.prev = function() {
		return $.fancybox.pos( currentIndex - 1);
	};

	$.fancybox.pos = function(pos) {
		if (busy) {
			return;
		}

		pos = parseInt(pos, 10);

		if (pos > -1 && currentArray.length > pos) {
			selectedIndex = pos;
			fancybox_start();
		}

		if (currentOpts.cyclic && currentArray.length > 1 && pos < 0) {
			selectedIndex = currentArray.length - 1;
			fancybox_start();
		}

		if (currentOpts.cyclic && currentArray.length > 1 && pos >= currentArray.length) {
			selectedIndex = 0;
			fancybox_start();
		}

		return;
	};

	$.fancybox.cancel = function() {
		if (busy) {
			return;
		}

		busy = true;

		$.event.trigger('fancybox-cancel');

		fancybox_abort();

		if (selectedOpts && $.isFunction(selectedOpts.onCancel)) {
			selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts);
		}

		busy = false;
	};

	// Note: within an iframe use - parent.$.fancybox.close();
	$.fancybox.close = function() {
		if (busy || wrap.is(':hidden')) {
			return;

		}

		busy = true;

		if (currentOpts && $.isFunction(currentOpts.onCleanup)) {
			if (currentOpts.onCleanup(currentArray, currentIndex, currentOpts) === false) {
				busy = false;
				return;
			}
		}

		fancybox_abort();

		$(close.add( nav_left ).add( nav_right )).hide();

		$('#fancybox-title').remove();

		wrap.add(inner).add(overlay).unbind();

		$(window).unbind("resize.fb scroll.fb");
		$(document).unbind('keydown.fb');

		function _cleanup() {
			overlay.fadeOut('fast');

			wrap.hide();

			$.event.trigger('fancybox-cleanup');

			inner.empty();

			if ($.isFunction(currentOpts.onClosed)) {
				currentOpts.onClosed(currentArray, currentIndex, currentOpts);
			}

			currentArray	= selectedOpts	= [];
			currentIndex	= selectedIndex	= 0;
			currentOpts		= selectedOpts	= {};

			busy = false;
		}

		inner.css('overflow', 'hidden');

		if (currentOpts.transitionOut == 'elastic') {
			start_pos = fancybox_get_zoom_from();

			var pos = wrap.position();

			final_pos = {
				top		:	pos.top ,
				left	:	pos.left,
				width	:	wrap.width(),
				height	:	wrap.height()
			};

			if (currentOpts.opacity) {
				final_pos.opacity = 1;
			}

			fx.prop = 1;

			$(fx).animate({ prop: 0 }, {
				 duration	: currentOpts.speedOut,
				 easing		: currentOpts.easingOut,
				 step		: fancybox_draw,
				 complete	: _cleanup
			});

		} else {
			wrap.fadeOut( currentOpts.transitionOut == 'none' ? 0 : currentOpts.speedOut, _cleanup);
		}
	};

	$.fancybox.resize = function() {
		var c, h;
		
		if (busy || wrap.is(':hidden')) {
			return;
		}

		busy = true;

		c = inner.wrapInner("<div style='overflow:auto'></div>").children();
		h = c.height();

		wrap.css({height:	h + (currentOpts.padding * 2) + titleh});
		inner.css({height:	h});

		c.replaceWith(c.children());

		$.fancybox.center();
	};

	$.fancybox.center = function() {
		busy = true;

		var view	= fancybox_get_viewport(),
			margin	= currentOpts.margin,
			to		= {};

		to.top	= view[3] + ((view[1] - ((wrap.height() - titleh) + (shadow * 2 ))) * 0.5);
		to.left	= view[2] + ((view[0] - (wrap.width() + (shadow * 2 ))) * 0.5);

		to.top	= Math.max(view[3] + margin, to.top);
		to.left	= Math.max(view[2] + margin, to.left);

		wrap.css(to);

		busy = false;
	};

	$.fn.fancybox.defaults = {
		padding				:	10,
		margin				:	20,
		opacity				:	false,
		modal				:	false,
		cyclic				:	false,
		scrolling			:	'auto',	// 'auto', 'yes' or 'no'

		width				:	560,
		height				:	340,

		autoScale			:	true,
		autoDimensions		:	true,
		centerOnScroll		:	false,

		ajax				:	{},
		swf					:	{ wmode: 'transparent' },

		hideOnOverlayClick	:	true,
		hideOnContentClick	:	false,

		overlayShow			:	true,
		overlayOpacity		:	0.3,
		overlayColor		:	'#666',

		titleShow			:	true,
		titlePosition		:	'outside',	// 'outside', 'inside' or 'over'
		titleFormat			:	null,

		transitionIn		:	'fade',	// 'elastic', 'fade' or 'none'
		transitionOut		:	'fade',	// 'elastic', 'fade' or 'none'

		speedIn				:	300,
		speedOut			:	300,

		changeSpeed			:	300,
		changeFade			:	'fast',

		easingIn			:	'swing',
		easingOut			:	'swing',

		showCloseButton		:	true,
		showNavArrows		:	true,
		enableEscapeButton	:	true,

		onStart				:	null,
		onCancel			:	null,
		onComplete			:	null,
		onCleanup			:	null,
		onClosed			:	null
	};

	$(document).ready(function() {
		fancybox_init();
	});

})(jQuery);

/*
 * JQZoom Evolution 1.0.1 - Javascript Image magnifier
 *
 * Copyright (c) Engineer Renzi Marco(www.mind-projects.it)
 *
 * $Date: 12-12-2008
 *
 *	ChangeLog:
 *  
 * $License : GPL,so any change to the code you should copy and paste this section,and would be nice to report this to me(renzi.mrc@gmail.com).
 */
(function($)
{
    $.fn.jqzoom = function(options)
    {
        var settings = {
            zoomType: 'standard', //standard/reverse/innerzoom
            zoomWidth: 200,		//zoomed width default width
            zoomHeight: 200,		//zoomed div default width
            xOffset: 10,		//zoomed div default offset
            yOffset: 0,
            position: "right" ,//zoomed div default position,offset position is to the right of the image
            lens:true, //zooming lens over the image,by default is 1;
			lensReset : false,
			imageOpacity: 0.2,
			title : true,
			alwaysOn: false,
			showEffect: 'show',
			hideEffect: 'hide',
			fadeinSpeed: 'fast',
			fadeoutSpeed: 'slow',
			preloadImages :false,
			showPreload: false,
			preloadText : 'Loading zoom',
			preloadPosition : 'center'   //bycss
        };

			//extending options
			options = options || {};
        	$.extend(settings, options);


		return this.each(function()
		{
			var a = $(this);
			var aTitle = a.attr('title'); //variabile per memorizzare il titolo href
			$(a).removeAttr('title');
			$(a).css('outline-style','none');


			var img = $("img", this);
			var imageTitle = img.attr('title');
			img.removeAttr('title');	//variabile per memorizzare il titolo immagine


			var smallimage = new Smallimage( img );
			var smallimagedata = {};
			//imageborder
			var btop = 0;
			var bleft = 0;

			var loader = null;     //variabile per memorizzare oggetto loader
			loader = new Loader();

			var ZoomTitle = (trim(aTitle).length > 0) ? aTitle :
			(trim(imageTitle).length > 0) ? imageTitle : null;  //setting zoomtitle
			var ZoomTitleObj = new zoomTitle();

			var largeimage = new Largeimage( a[0].href );

			var lens = new Lens();
			var lensdata = {};
			//lensborder



			var largeimageloaded = false;
			var scale = {}; //rapporto tra immagine grande e piccola scale.x/scale.y
			var stage = null; // quadrato che mostra l'immagine ingrandita
			var running = false; // running = true quando si verifica l'evento che mostra lo zoom(adesso mouseover).
			var mousepos = {};
			var firstime = 0;
			var preloadshow = false;
			var isMouseDown = false;
			var dragstatus = false
			//loading smallimagedata
			smallimage.loadimage();

			//ritorna false al click dell href
			$(this).click(function(){return false;});

			//se settato alwaysOn attivo lo Zoom e lo mostro.

			//attivo al mouseover
			$(this).hover(function(e)
			{
				mousepos.x = e.pageX;
				mousepos.y	= e.pageY;
				activate();
			},function()
			{
				deactivate();
			});


			//ALWAYS ON
			if(settings.alwaysOn)
			{
				setTimeout(function(){activate();},150);
			}
 
  
			function activate()
			{ 
			    largeimage = new Largeimage( a[0].href );
				if ( !running ) {

					//finding border
					smallimage.findborder();

					running = true;

					//rimuovo il titolo al mouseover
					imageTitle = img.attr('title');
					img.removeAttr('title');
					aTitle = a.attr('title');
					$(a).removeAttr('title');

					//se non c?creo l'oggetto largeimage
					if (!largeimage || $.browser.safari) {
						largeimage = new Largeimage( a[0].href );
					}

					//se l'immagine grande non ?stata caricata la carico
					if(!largeimageloaded || $.browser.safari)
					{
						largeimage.loadimage();
					}else
					{
					//after preload
						if(settings.zoomType != 'innerzoom')
						{
							stage = new Stage();
							stage.activate();
						}
						lens = new Lens;
						lens.activate();
					}
					a[0].blur();
//					//alert($('div.jqZoomPup').length);
					return false;
				}




			}

			function deactivate()
			{
				if(settings.zoomType == 'reverse' &&  !settings.alwaysOn)
				{
					img.css({'opacity' : 1});
				}

				if(!settings.alwaysOn)
				{
					//resetting parameters
					running = false;
					largeimageloaded = false;
					$(lens.node).unbind('mousemove');
					lens.remove();
					if($('div.jqZoomWindow').length >0)
					{
						stage.remove();
					}
					if($('div.jqZoomTitle').length > 0)
					{
						ZoomTitleObj.remove();
					}
					//resetting title
					img.attr('title',imageTitle);
					a.attr('title',aTitle);
					$().unbind();

					a.unbind('mousemove');
					//resetto il parametro che mi dice che ?la prima volta che mostor lo zoom
					firstime = 0;
					//remove ieiframe
					if(jQuery('.zoom_ieframe').length > 0)
					{
						jQuery('.zoom_ieframe').remove();
					}
				}else
				{
					if(settings.lensReset)
					{
						switch(settings.zoomType)
						{
							case 'innerzoom':
							largeimage.setcenter();
							break;
							default:
							lens.center();
							break;
						}
					}
				}

				//non so se serve da provare
				if(settings.alwaysOn)
				{
					activate();
				}
			};





		//smallimage
		function Smallimage( image )
		{
			this.node = image[0];

			this.loadimage = function() {
				this.node.src = image[0].src;
			};
			this.findborder = function()
			{
				var bordertop = '';
				bordertop = $(img).css('border-top-width');
				btop = '';
				var borderleft = '';
				borderleft = $(img).css('border-left-width');
				bleft = '';
				/*if($.browser.msie)
				{
					var temp = bordertop.split(' ');

					bordertop = temp[1];
					var temp = borderleft.split(' ');
					borderleft = temp[1];
				}*/

				if(bordertop)
				{
					for(i=0;i<3;i++)
					{
						var x = [];
						x = bordertop.substr(i,1);

						if(isNaN(x) == false)
						{
							btop = btop +''+ bordertop.substr(i,1);
						}else
						{
							break;
						}
					}
				}

				if(borderleft)
				{
					for(i=0;i<3;i++)
					{
						if(!isNaN(borderleft.substr(i,1)))
						{
							bleft = bleft + borderleft.substr(i,1)
						}else
						{
							break;
						}
					}
				}
				btop = (btop.length > 0) ? eval(btop) : 0;
				bleft = (bleft.length > 0) ? eval(bleft) : 0;


			}
			this.node.onload = function()
			{
				//setto il cursor e la posizione dell'href


				a.css({'cursor':'crosshair','display':'block'});

				if(a.css('position')!= 'absolute' && a.parent().css('position'))
				{
					a.css({'cursor':'crosshair','position':'relative','display':'block'});
				}
				if(a.parent().css('position') != 'absolute')
				{
					a.parent().css('position','relative');
					//a.css('position','relative');
				}
				else{
				//a.css('position','relative');
				}
				if($.browser.safari || $.browser.opera)
				{
					$(img).css({position:'absolute',top:'0px',left:'0px'});
				}
				
				//al docuemnt ready viene caricato l'src quindi viene azionato l'onload e carico tutti i dati
				smallimagedata.w = $( this ).width();
				smallimagedata.h = $( this ).height();


				//non viene fatta assegnazione alla variabile globale
				smallimagedata.h = $( this ).height();
				smallimagedata.pos = $( this ).offset();
				smallimagedata.pos.l = $( this ).offset().left;
				smallimagedata.pos.t = $( this ).offset().top;
				smallimagedata.pos.r = smallimagedata.w + smallimagedata.pos.l;
				smallimagedata.pos.b = smallimagedata.h + smallimagedata.pos.t;

				//per sicurezza setto l'altezza e la width dell'href
				a.height(smallimagedata.h);
				a.width(smallimagedata.w);


				//PRELOAD IMAGES
				if(settings.preloadImages)
				{
					largeimage.loadimage();
				}



			};



			return this;
		};



		//Lens
		function Lens()
		{


			//creating element and adding class
			this.node = document.createElement("div");
			$(this.node).addClass('jqZoomPup');

			this.node.onerror = function() {
				$( lens.node ).remove();
				lens = new Lens();
				lens.activate() ;
			};




			//funzione privata per il caricamento dello zoom
			this.loadlens = function()
			{


				switch(settings.zoomType)
				{
					case 'reverse':
						this.image = new Image();
						this.image.src = smallimage.node.src; // fires off async
						this.node.appendChild( this.image );
						$( this.node ).css({'opacity' : 1});
					break;
					case 'innerzoom':

						this.image = new Image();
						this.image.src = largeimage.node.src; // fires off async
						this.node.appendChild( this.image );
						$( this.node ).css({'opacity' : 1});
					break
					default:
					break;
				}



				switch(settings.zoomType)
				{
					case 'innerzoom':
						lensdata.w = smallimagedata.w;
						lensdata.h = smallimagedata.h;
					break;
					default:
						lensdata.w = (settings.zoomWidth)/scale.x;
						lensdata.h = (settings.zoomHeight)/scale.y;
					break;
				}

			$( this.node ).css({
					width: lensdata.w + 'px',
					height: lensdata.h + 'px',
					position: 'absolute',
					display: 'none',
					//border: '1px solid blue'
					borderWidth: 1+'px'
				});
			a.append(this.node);
			}
			return this; 
		};

		Lens.prototype.activate = function()
		{
			//carico la lente
			this.loadlens();

			switch(settings.zoomType)
			{
				case 'reverse':
					img.css({'opacity' : settings.imageOpacity});

					(settings.alwaysOn) ? lens.center() : lens.setposition(null);
					//lens.center();
					//bindo ad a il mousemove della lente
					a.bind( 'mousemove', function(e)
					{
						mousepos.x = e.pageX;
						mousepos.y = e.pageY;
						lens.setposition( e );
					});
				break;
				case 'innerzoom':

					//	lens = new Lens();
					//	lens.activate();

					$( this.node ).css({top : 0 ,left: 0});
				   	if(settings.title)
					{
						ZoomTitleObj.loadtitle();
					}

					largeimage.setcenter();

				   	a.bind( 'mousemove', function(e)
				   	{
						mousepos.x = e.pageX;
						mousepos.y = e.pageY;
						largeimage.setinner( e );

					/*if(settings.zoomType == 'innerzoom' && running)
					{
						$(a).mousemove(function(){
							if($('div.jqZoomPup').length <= 0)
							{
								lens = new Lens();
								lens.activate();
							}
						});
					}*/

						/*if($('div.jqZoomPup').length <= 0)
							{
								lens = new Lens();
								lens.activate();
							}*/

					});
				break;
				default:
					/*$(document).mousemove(function(e){
					if(isMouseDown && dragstatus != false){
					lens.setposition( e );
					}
					});
					lens.center()


					dragstatus = 'on'
					$(document).mouseup(function(e){
					if(isMouseDown && dragstatus != false){
						isMouseDown = false;
						dragstatus = false;

					}
					});

					$(this.node).mousedown(function(e){
					$('div.jqZoomPup').css("cursor", "move");
					$(this.node).css("position", "absolute");

				// set z-index
					$(this.node).css("z-index", parseInt( new Date().getTime()/1000 ));
					if($.browser.safari)
					{
						$(a).css("cursor", "move");
					}
					isMouseDown    = true;
					dragstatus = 'on';
					lens.setposition( e );
					});
					*/


					(settings.alwaysOn) ? lens.center() : lens.setposition(null);

					//bindo ad a il mousemove della lente
					$(a).bind( 'mousemove', function(e)
					{

						mousepos.x = e.pageX;
						mousepos.y = e.pageY;
						lens.setposition( e );
					});

				break;
			}


			return this;
		};

		Lens.prototype.setposition = function( e)
		{


			if(e)
			{
				mousepos.x = e.pageX;
				mousepos.y	= e.pageY;
			}

			if(firstime == 0)
			{
			 	var lensleft = (smallimagedata.w)/2 - (lensdata.w)/2 ;
			 	var lenstop = (smallimagedata.h)/2 - (lensdata.h)/2 ;
				//ADDED

				$('div.jqZoomPup').show()
				if(settings.lens)
				{
					this.node.style.visibility = 'visible';
				}
				else
				{
					this.node.style.visibility = 'hidden';
					$('div.jqZoomPup').hide();
				}
				//ADDED
				firstime = 1;

			}else
			{
				var lensleft = mousepos.x - smallimagedata.pos.l - (lensdata.w)/2 ;
				var lenstop = mousepos.y - smallimagedata.pos.t -(lensdata.h)/2 ;
			}


				//a sinistra
				if(overleft())
				{
					lensleft = 0  + bleft;
				}else
				//a destra
				if(overright())
				{
					if($.browser.msie)
					{
					lensleft = smallimagedata.w - lensdata.w  + bleft + 1  ;
					}else
					{
					lensleft = smallimagedata.w - lensdata.w  + bleft - 1  ;
					}


				}

				//in alto
				if(overtop())
				{
					lenstop = 0 + btop ;
				}else
				//sotto
				if(overbottom())
				{

					if($.browser.msie)
					{
					lenstop = smallimagedata.h - lensdata.h  + btop + 1 ;
					}else
					{
					lenstop = smallimagedata.h - lensdata.h - 1 + btop  ;
					}

				}
				lensleft = parseInt(lensleft);
				lenstop = parseInt(lenstop);

				//setto lo zoom ed un eventuale immagine al centro
				$('div.jqZoomPup',a).css({top: lenstop,left: lensleft });

				if(settings.zoomType == 'reverse')
				{
					$('div.jqZoomPup img',a).css({'position': 'absolute','top': -( lenstop - btop +1) ,'left': -(lensleft - bleft +1)  });
				}

				this.node.style.left = lensleft + 'px';
				this.node.style.top = lenstop + 'px';

				//setto l'immagine grande
				largeimage.setposition();

				function overleft() {
					return mousepos.x - (lensdata.w +2*1)/2  - bleft < smallimagedata.pos.l;
				}

				function overright() {

					return mousepos.x + (lensdata.w + 2* 1)/2  > smallimagedata.pos.r + bleft ;
				}

				function overtop() {
					return mousepos.y - (lensdata.h + 2* 1)/2  - btop < smallimagedata.pos.t;
				}

				function overbottom() {
					return mousepos.y + (lensdata.h + 2* 1)/2    > smallimagedata.pos.b + btop;
				}

			return this;
		};


		//mostra la lente al centro dell'immagine
		Lens.prototype.center = function()
		{
			$('div.jqZoomPup',a).css('display','none');
			var lensleft = (smallimagedata.w)/2 - (lensdata.w)/2 ;
			var lenstop = (smallimagedata.h)/2 - (lensdata.h)/2;
			this.node.style.left = lensleft + 'px';
			this.node.style.top = lenstop + 'px';
			$('div.jqZoomPup',a).css({top: lenstop,left: lensleft });

			if(settings.zoomType == 'reverse')
			{
				/*if($.browser.safari){
					alert('safari');
					alert(2*bleft);
					$('div.jqZoomPup img',a).css({'position': 'absolute','top': -( lenstop - btop +1) ,'left': -(lensleft - 2*bleft)  });
				}else
				{*/
					$('div.jqZoomPup img',a).css({'position': 'absolute','top': -(lenstop - btop + 1) ,'left': -( lensleft  - bleft +1)   });
				//}
			}

			largeimage.setposition();
			if($.browser.msie)
			{
				$('div.jqZoomPup',a).show();
			}else
			{
				setTimeout(function(){$('div.jqZoomPup').fadeIn('fast');},10);
			}
		};


		//ritorna l'offset
		Lens.prototype.getoffset = function() {
			var o = {};
			o.left = parseInt(this.node.style.left) ;
			o.top =  parseInt(this.node.style.top) ;
			return o;
		};

		//rimuove la lente
		Lens.prototype.remove = function()
		{

			if(settings.zoomType == 'innerzoom')
			{
				$('div.jqZoomPup',a).fadeOut('fast',function(){/*$('div.jqZoomPup img').remove();*/$(this).remove();});
			}else
			{
				//$('div.jqZoomPup img').remove();
				$('div.jqZoomPup',a).remove();
			}
		};

		Lens.prototype.findborder = function()
		{
			var bordertop = '';
			bordertop = $('div.jqZoomPup').css('borderTop');
			//alert(bordertop);
			lensbtop = '';
			var borderleft = '';
			borderleft = $('div.jqZoomPup').css('borderLeft');
			lensbleft = '';
			if($.browser.msie)
			{
				var temp = bordertop.split(' ');

				bordertop = temp[1];
				var temp = borderleft.split(' ');
				borderleft = temp[1];
			}

			if(bordertop)
			{
				for(i=0;i<3;i++)
				{
					var x = [];
					x = bordertop.substr(i,1);

					if(isNaN(x) == false)
					{
						lensbtop = lensbtop +''+ bordertop.substr(i,1);
					}else
					{
						break;
					}
				}
			}

			if(borderleft)
			{
				for(i=0;i<3;i++)
				{
					if(!isNaN(borderleft.substr(i,1)))
					{
						lensbleft = lensbleft + borderleft.substr(i,1)
					}else
					{
						break;
					}
				}
			}


			lensbtop = (lensbtop.length > 0) ? eval(lensbtop) : 0;
			lensbleft = (lensbleft.length > 0) ? eval(lensbleft) : 0;
		}
 
		//LARGEIMAGE
		function Largeimage( url )
		{
			this.url = url;
			this.node = new Image();

			/*if(settings.preloadImages)
			{
			 	preload.push(new Image());
				preload.slice(-1).src = url ;
			}*/

			this.loadimage = function()
			{

				if(!this.node)
				this.node = new Image();

				this.node.style.position = 'absolute';
				this.node.style.display = 'none';
				this.node.style.left = '-5000px';
				this.node.style.top = '10px';
				loader = new Loader();

				if(settings.showPreload && !preloadshow)
				{
					loader.show();
					preloadshow = true;
				}

				document.body.appendChild( this.node );
				this.node.src = this.url; // fires off async
			}

			this.node.onload = function()
			{
				this.style.display = 'block';
				var w = Math.round($(this).width());
				var	h = Math.round($(this).height());

				this.style.display = 'none';

				//setting scale
				scale.x = (w / smallimagedata.w);
				scale.y = (h / smallimagedata.h);





				if($('div.preload').length > 0)
				{
					$('div.preload').remove();
				}

				largeimageloaded = true;

				if(settings.zoomType != 'innerzoom' && running){
					stage = new Stage();
					stage.activate();
				}

				if(running)
				{
				//alert('in');
				lens = new Lens();

				lens.activate() ;

				}
				//la attivo

				if($('div.preload').length > 0)
				{
					$('div.preload').remove();
				}
			}
			return this;
		}


		Largeimage.prototype.setposition = function()
		{
          	this.node.style.left = Math.ceil( - scale.x * parseInt(lens.getoffset().left) + bleft) + 'px';
			this.node.style.top = Math.ceil( - scale.y * parseInt(lens.getoffset().top) +btop) + 'px';
		};

		//setto la posizione dell'immagine grande nel caso di innerzoom
		Largeimage.prototype.setinner = function(e) {
          	this.node.style.left = Math.ceil( - scale.x * Math.abs(e.pageX - smallimagedata.pos.l)) + 'px';
			this.node.style.top = Math.ceil( - scale.y * Math.abs(e.pageY - smallimagedata.pos.t)) + 'px';
			$('div.jqZoomPup img',a).css({'position': 'absolute','top': this.node.style.top,'left': this.node.style.left  });
		};


		Largeimage.prototype.setcenter = function() {
          	this.node.style.left = Math.ceil(- scale.x * Math.abs((smallimagedata.w)/2)) + 'px';
			this.node.style.top = Math.ceil( - scale.y * Math.abs((smallimagedata.h)/2)) + 'px';


			$('div.jqZoomPup img',a).css({'position': 'absolute','top': this.node.style.top,'left': this.node.style.left  });
		};


		//STAGE
		function Stage()
		{

			var leftpos = smallimagedata.pos.l;
			var toppos = smallimagedata.pos.t;
			//creating element and class
			this.node = document.createElement("div");
			$(this.node).addClass('jqZoomWindow');

			$( this.node )
				.css({
					position: 'absolute',
					width: Math.round(settings.zoomWidth) + 'px',
					height: Math.round(settings.zoomHeight) + 'px',
					display: 'none',
					zIndex: 10000,
					overflow: 'hidden'
				});

			//fa il positionamento
		    switch(settings.position)
		    {
		    	case "right":

				leftpos = (smallimagedata.pos.r + Math.abs(settings.xOffset) + settings.zoomWidth < screen.width)
				? (smallimagedata.pos.l + smallimagedata.w + Math.abs(settings.xOffset))
				: (smallimagedata.pos.l - settings.zoomWidth - Math.abs(settings.xOffset));

				topwindow = smallimagedata.pos.t + settings.yOffset + settings.zoomHeight;
				toppos = (topwindow < screen.height && topwindow > 0)
				?  smallimagedata.pos.t + settings.yOffset
				:  smallimagedata.pos.t;

		    	break;
		    	case "left":

				leftpos = (smallimagedata.pos.l - Math.abs(settings.xOffset) - settings.zoomWidth > 0)
				? (smallimagedata.pos.l - Math.abs(settings.xOffset) - settings.zoomWidth)
				: (smallimagedata.pos.l + smallimagedata.w + Math.abs(settings.xOffset));

				topwindow = smallimagedata.pos.t + settings.yOffset + settings.zoomHeight;
				toppos = (topwindow < screen.height && topwindow > 0)
				?  smallimagedata.pos.t + settings.yOffset
				:  smallimagedata.pos.t;

		    	break;
		    	case "top":

				toppos = (smallimagedata.pos.t - Math.abs(settings.yOffset) - settings.zoomHeight > 0)
				? (smallimagedata.pos.t - Math.abs(settings.yOffset) - settings.zoomHeight)
				: (smallimagedata.pos.t + smallimagedata.h + Math.abs(settings.yOffset));


				leftwindow = smallimagedata.pos.l + settings.xOffset + settings.zoomWidth;
				leftpos = (leftwindow < screen.width && leftwindow > 0)
				? smallimagedata.pos.l + settings.xOffset
				: smallimagedata.pos.l;

		    	break;
		    	case "bottom":


				toppos = (smallimagedata.pos.b + Math.abs(settings.yOffset) + settings.zoomHeight < $('body').height())
				? (smallimagedata.pos.b + Math.abs(settings.yOffset))
				: (smallimagedata.pos.t - settings.zoomHeight - Math.abs(settings.yOffset));


				leftwindow = smallimagedata.pos.l + settings.xOffset + settings.zoomWidth;
				leftpos = (leftwindow < screen.width && leftwindow > 0)
				? smallimagedata.pos.l + settings.xOffset
				: smallimagedata.pos.l;

		    	break;
		    	default:

				leftpos = (smallimagedata.pos.l + smallimagedata.w + settings.xOffset + settings.zoomWidth < screen.width)
				? (smallimagedata.pos.l + smallimagedata.w + Math.abs(settings.xOffset))
				: (smallimagedata.pos.l - settings.zoomWidth - Math.abs(settings.xOffset));

				toppos = (smallimagedata.pos.b + Math.abs(settings.yOffset) + settings.zoomHeight < screen.height)
				? (smallimagedata.pos.b + Math.abs(settings.yOffset))
				: (smallimagedata.pos.t - settings.zoomHeight - Math.abs(settings.yOffset));

		    	break;
		    }

			this.node.style.left = leftpos + 'px';
			this.node.style.top = toppos + 'px';
			return this;
		}


		Stage.prototype.activate = function()
		{

			if ( !this.node.firstChild )
					this.node.appendChild( largeimage.node );


			if(settings.title)
			{
				ZoomTitleObj.loadtitle();
			}



			document.body.appendChild( this.node );


			switch(settings.showEffect)
			{
				case 'show':
					$(this.node).show();
				break;
				case 'fadein':
					$(this.node).fadeIn(settings.fadeinSpeed);
				break;
				default:
					$(this.node).show();
				break;
			}

			$(this.node).show();

            if ($.browser.msie && $.browser.version < 7) {
	        this.ieframe = $('<iframe class="zoom_ieframe" frameborder="0" src="#"></iframe>')
	          .css({ position: "absolute", left:this.node.style.left,top:this.node.style.top,zIndex: 99,width:settings.zoomWidth,height:settings.zoomHeight })
	          .insertBefore(this.node);
	     	 };


			largeimage.node.style.display = 'block';
		}

		Stage.prototype.remove = function() {
			switch(settings.hideEffect)
			{
				case 'hide':
					$('.jqZoomWindow').remove();
				break;
				case 'fadeout':
					$('.jqZoomWindow').fadeOut(settings.fadeoutSpeed);
				break;
				default:
					$('.jqZoomWindow').remove();
				break;
			}
		}

		function zoomTitle()
		{

			this.node =  jQuery('<div />')
				.addClass('jqZoomTitle')
				.html('' + ZoomTitle +'');

			this.loadtitle = function()
			{
				if(settings.zoomType == 'innerzoom')
				{
					$(this.node)
					.css({position: 'absolute',
						  top: smallimagedata.pos.b +3,
						  left: (smallimagedata.pos.l+1),
						  width:smallimagedata.w
						  })
					.appendTo('body');
				}else
				{
					$(this.node).appendTo(stage.node);
				}
			};
		}

		zoomTitle.prototype.remove = function() {
			$('.jqZoomTitle').remove();
		}


		function Loader()
		{

			this.node = document.createElement("div");
			$(this.node).addClass('preload');
			$(this.node).html(settings.preloadText);//appendo il testo

			$(this.node )
				.appendTo("body")
				.css('visibility','hidden');



			this.show = function()
			{
				switch(settings.preloadPosition)
				{
					case 'center':
						loadertop =  smallimagedata.pos.t + (smallimagedata.h - $(this.node ).height())/2;
						loaderleft = smallimagedata.pos.l + (smallimagedata.w - $(this.node ).width())/2;
					break;
					default:
					var loaderoffset = this.getoffset();
					loadertop = !isNaN(loaderoffset.top) ? smallimagedata.pos.t + loaderoffset.top : smallimagedata.pos.t + 0;
					loaderleft = !isNaN(loaderoffset.left) ? smallimagedata.pos.l + loaderoffset.left : smallimagedata.pos.l + 0;
					break;
				}

				//setting position
				$(this.node).css({
							top: loadertop  ,
							left: loaderleft ,
							position: 'absolute',
							visibility:'visible'
					    	});
			}
			return this;
		}

		Loader.prototype.getoffset = function()
		{
			var o = null;
			o = $('div.preload').offset();
			return o;
		}

		});
	}
})(jQuery);

function trim(stringa)
{
    while (stringa.substring(0,1) == ' '){
        stringa = stringa.substring(1, stringa.length);
    }
    while (stringa.substring(stringa.length-1, stringa.length) == ' '){
        stringa = stringa.substring(0,stringa.length-1);
    }
    return stringa;
}


function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

 /**
  * @author [sina]zhangping1@
  * @version v1.1.3
  * Date:2006-9-8 2006-12-15
  */
if(typeof(sina)!="object"){var sina={}}
sina.$=function(objId){if(!objId){throw new Error("sina.$(String objId)参数必须")}
if(document.getElementById){return eval('document.getElementById("'+objId+'")')}else if(document.layers){return eval("document.layers['"+objId+"']")}else{return eval('document.all.'+objId)}}
sinaFlash=function(C,v,x,V,c,X,i,O,I,l,o){var z=this;if(!document.createElement||!document.getElementById){return}
z.id=v?v:"";z.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";z.codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version="+(c?c:"7")+",0,0,0";z.width=x;z.height=V;z.movie=C;z.bgcolor=X?X:null;z.quality=O?O:"high";z.src=z.movie;z.pluginspage="http://www.macromedia.com/go/getflashplayer";z.type="application/x-shockwave-flash";z.useExpressInstall=i?i:null;z.xir=(I)?I:window.location;z.redirectUrl=l?l:null;z.detectKey=o?o:null;z.escapeIs=false;z.objAttrs={};z.params={};z.flashVars=[];z.flashVarsStr="";z.embedAttrs={};z.forSetAttribute("id",z.id);z.objAttrs["classid"]=z.classid;z.forSetAttribute("codebase",z.codebase);z.forSetAttribute("width",z.width);z.forSetAttribute("height",z.height);z.forSetAttribute("movie",z.movie);z.forSetAttribute("quality",z.quality);z.forSetAttribute("pluginspage",z.pluginspage);z.forSetAttribute("type",z.type);z.forSetAttribute("bgcolor",z.bgcolor)}
sinaFlash.prototype={getFlashHtml:function(){var I=this,i='<object ';for(var l in I.objAttrs){i+=l+'="'+I.objAttrs[l]+'" '}
i+='>';for(var l in I.params){i+='<param name="'+l+'" value="'+I.params[l]+'" /> '}
if(I.flashVarsStr!=""){i+='<param name="FlashVars" value="'+I.flashVarsStr+'" /> '}
i+='<embed ';for(var l in I.embedAttrs){i+=l+'="'+I.embedAttrs[l]+'" '}
i+=' ></embed></object>';return i},forSetAttribute:function(I,i){var l=this;I=I.toLowerCase();switch(I){case "classid":break;case "pluginspage":l.embedAttrs["pluginspage"]=i;break;case "src":l.embedAttrs["src"]=i;l.params["movie"]=i;break;case "movie":l.params["movie"]=i;l.embedAttrs["src"]=i;break;case "onafterupdate":case "onbeforeupdate":case "onblur":case "oncellchange":case "onclick":case "ondblClick":case "ondrag":case "ondragend":case "ondragenter":case "ondragleave":case "ondragover":case "ondrop":case "onfinish":case "onfocus":case "onhelp":case "onmousedown":case "onmouseup":case "onmouseover":case "onmousemove":case "onmouseout":case "onkeypress":case "onkeydown":case "onkeyup":case "onload":case "onlosecapture":case "onpropertychange":case "onreadystatechange":case "onrowsdelete":case "onrowenter":case "onrowexit":case "onrowsinserted":case "onstart":case "onscroll":case "onbeforeeditfocus":case "onactivate":case "onbeforedeactivate":case "ondeactivate":case "type":l.embedAttrs["type"]=i;break;case "codebase":l.objAttrs["codebase"]=i;break;case "width":l.objAttrs["width"]=i;l.embedAttrs["width"]=i;break;case "height":l.objAttrs["height"]=i;l.embedAttrs["height"]=i;break;case "align":l.objAttrs["align"]=i;l.embedAttrs["align"]=i;break;case "vspace":l.objAttrs["vspace"]=i;l.embedAttrs["vspace"]=i;break;case "hspace":l.objAttrs["hspace"]=i;l.embedAttrs["hspace"]=i;break;case "class":l.objAttrs["class"]=i;l.embedAttrs["class"]=i;break;case "title":l.objAttrs["title"]=i;break;case "accesskey":l.objAttrs["accesskey"]=i;break;case "name":l.objAttrs["name"]=i;l.embedAttrs["name"]=i;break;case "id":l.objAttrs["id"]=i;l.embedAttrs["name"]=i;break;case "tabindex":l.objAttrs["tabindex"]=i;break;default:l.params[I]=l.embedAttrs[I]=i}},forGetAttribute:function(i){var I=this;i=i.toLowerCase();if(I.objAttrs[i]!=undefined){return I.objAttrs[i]}else if(I.embedAttrs[i]!=undefined){return I.embedAttrs[i]}else if(I.embedAttrs!=undefined){return I.embedAttrs[i]}else{return null}},setAttribute:function(I,i){this.forSetAttribute(I,i)},getAttribute:function(i){return this.forGetAttribute(i)},addVariable:function(I,i){var l=this;if(l.escapeIs){I=escape(I);i=escape(i)}
if(l.flashVarsStr==""){l.flashVarsStr=I+"="+i}else{l.flashVarsStr+="&"+I+"="+i}
l.embedAttrs["FlashVars"]=l.flashVarsStr},getVariable:function(I){var o=this,i=o.flashVarsStr;if(o.escapeIs){I=escape(I)}
var l=new RegExp(I+"=([^\\&]*)(\\&?)","i").exec(i);if(o.escapeIs){return unescape(RegExp.$1)}
return RegExp.$1},addParam:function(I,i){this.forSetAttribute(I,i)},getParam:function(){return this.forGetAttribute(name)},write:function(i){var I=this;if(typeof i=="string"){sina.$(i).innerHTML=I.getFlashHtml()}else if(typeof i=="object"){i.innerHTML=I.getFlashHtml()}}}



//-------------优惠劵页面下载到手机js设置---------------/

function SendToMobile(PreID)
{
    var _Pwidth=screen.width;
    var _Pheight=document.body.clientHeight;
    
    var _loading='<div id="SmsDivContainer"><style type="text/css">#divLoadingPre{position:absolute; top:0px; left:0px;background-color:#eeeeee; width:'+String(_Pwidth)+'px; height:'+_Pheight+'px;filter:alpha(opacity=50); z-index:50001;}#divLoading{position:absolute;font-size:30px;width:520px; font-weight:bold;color:#C30;left:'+String((_Pwidth/2)-260)+'px; top:'+String((_Pheight/2)-200)+'px;filter:alpha(opacity=90); z-index:50002; border:2px solid #000;}</style><div id="divLoadingPre"></div><div id="divLoading"><div style="text-align:right; background-color:#ffffff;"><a href="javascript:closeSms()">关闭</a></div><iframe src="/ProAjax/Preferential/SendSms.aspx?PreID='+PreID+'&rid=<%=Des.Encode(System.DateTime.Now.ToString())%>" frameborder=0 width="520" height="409"></iframe></div></div>';
 $('body').append(_loading);
}

function closeSms()
{
    document.getElementById('SmsDivContainer').outerHTML='';

}
 
//-------------优惠劵页面下载到手机js设置---------------/


//--------------------------权限
function checkRightUrl(url){
    $.get("/ProAjax/UserLogin/IsCookie.aspx?"+new Date().getTime(),null,function(d){
        //alert(d);
        if(d=="false"){//无权限
            top.location=url.replace("WebSite/index.html","");
        }
    });
}

