  // globals
  var h,w;
  var withpx = ["width","height","top","bottom","left","right"];
  var world  = 
  {
	left:"w",
	right:"w",
	top:"h",
	bottom:"h",
	width:"w",
	height:"h"
  }

  function resize() {
    console.log("resize...");
    h=window.innerHeight-marginH;
    w=window.innerWidth-marginW;
    c("w",w);
	  c("h",h);
    
    var x = document.querySelectorAll('[data-resize]'); 
    x.forEach(resize1);
  }
  function resize1(el1) {
    var list=el1.getAttribute("data-resize");
    var listv=list.split(";");
    listv.forEach(resize2,el1);
  }
  function resize2(attrib)  {
    //console.log(attrib);
    var vv=attrib.split(":");
    var vvvar = vv[0] ;
    var vvval = vv[1] ;
    //console.log("this:"); 
    //console.log(vvvar); 
    //console.log(vvval); 

    var prefix="";
    var sufix="";
    if( withpx.includes(vvvar) ) {
      prefix="px(";
      sufix=")";
    }
    eval("this.style."+vvvar+" = "+prefix+vvval+sufix); 
  }
  function c(nam1,val1) { 
    if( (typeof debug1 ) =="undefined" ) return ;
	console.log(nam1+":"+val1);
	};
  // return computed style
  function ss(id,st) {
    var element = document.getElementById(id);
    let computedStyle = getComputedStyle(element);
    // var x = eval("computedStyle."+st);
	var x = computedStyle.getPropertyValue(st);
    return nn(x);
  }  
  function fix(id,st,vl) {
    var element = document.getElementById(id);
    eval("element.style."+st+" = vl");
  }

function conv2precent()
{
	var h=window.innerHeight;
	var w=window.innerWidth;

	Object.keys(resizer.px2pre).forEach(function(id1)
	{
		var el = document.getElementById(id1);
		Object.values(resizer.px2pre[id1]).forEach(function(st1)
		{
			c("id1",id1);
			parent = resizer.tree[id1];
			c("parent",parent);
			var desW = ss(parent,"width");
			var desH = ss(parent,"height");
			var des = desW ; if (world[st1]=="h") des=desH ; 
			c("St1",st1);
			c("des",des);
			kk = ss(id1,st1);
			c("kk",kk);
			newkk = (parseFloat(kk)/parseFloat(des)*100).toFixed(3);
      c("newkk",newkk);
			el.style[st1] = pr(newkk);	
		});
	});

}
  
  function px(a){ return String(a)+"px";   }; 
  function pr(a){ return String(a)+"%";   }; 
  function nn(a){ return parseInt(a.split("p")[0]); };//  "340px" --> 340 
  

  // convert design UI pixel to %
  // on the styles that can handle %
  ////////////////////////////////// 
  conv2precent();
  
  // init:
  
  desW = ss("main","width");
  desH = ss("main","height");
  h=window.innerHeight;
  w=window.innerWidth;

  c("desW",desW);
  c("desH",desH);
  c("w",w);
  c("h",h);
  
  resize();
  
  window.addEventListener("resize", resize);