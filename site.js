(function(){
  "use strict";

  /* ---------- theme button: its label is the theme it switches to ---------- */
  var root=document.documentElement;
  var toggle=document.getElementById("themeToggle");
  var tlabel=toggle.querySelector(".tlabel");
  function stored(){try{return localStorage.getItem("theme");}catch(e){return null;}}
  function systemDark(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches;}
  function isDark(){var t=root.getAttribute("data-theme");return t?t==="dark":systemDark();}
  function reflect(){tlabel.textContent=isDark()?"Light":"Dark";} /* never writes data-theme: "unset" stays unset */
  function apply(t){root.setAttribute("data-theme",t);reflect();}
  var init=stored();if(init){apply(init);}else{reflect();}
  toggle.addEventListener("click",function(){
    var next=isDark()?"light":"dark";apply(next);
    try{localStorage.setItem("theme",next);}catch(e){}
  });
  var mqScheme=window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)");
  if(mqScheme){
    var onScheme=function(){if(!root.getAttribute("data-theme"))reflect();};
    if(mqScheme.addEventListener)mqScheme.addEventListener("change",onScheme);
    else if(mqScheme.addListener)mqScheme.addListener(onScheme);
  }

  /* ---------- active section bracket in the header ---------- */
  var navLinks=Array.prototype.slice.call(document.querySelectorAll(".bar-nav a"));
  var map={};navLinks.forEach(function(a){map[a.getAttribute("href").slice(1)]=a;});
  var sections=navLinks.map(function(a){return document.getElementById(a.getAttribute("href").slice(1));}).filter(Boolean);
  if("IntersectionObserver" in window){
    var visible={},current=null;
    var so=new IntersectionObserver(function(entries){
      entries.forEach(function(e){visible[e.target.id]=e.isIntersecting;});
      for(var i=0;i<sections.length;i++){if(visible[sections[i].id]){current=sections[i].id;break;}}
      navLinks.forEach(function(a){a.classList.remove("active");a.removeAttribute("aria-current");});
      var link=current&&map[current];
      if(link){link.classList.add("active");link.setAttribute("aria-current","true");}
    },{rootMargin:"-45% 0px -50% 0px",threshold:0});
    sections.forEach(function(s){so.observe(s);});
  }
})();
