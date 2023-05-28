// JavaScript Document

function playGr(ref1)
{
  url = "http://www.egyptianarabicdictionary.com/online/getsound.php?language=grammar&sound_id=" + ref1;
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', url);
  audioElement.play(); 
  show (url);
  return true;
}

function playWord(ref1)
{
  url = "http://www.egyptianarabicdictionary.com/online/getsound.php?language=ar&sound_id=" + ref1;
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', url);
  audioElement.play(); 
  show (url);
  return true;
}


function setBoolCookie(c_name,value)
{
if (value)
  document.cookie=c_name + "=y";
else
  document.cookie=c_name + "=n";

}

function getBoolCookie(c_name, def)
{
var i,x,y,ARRcookies=document.cookie.split(";");

for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    r = y.charAt(0) == 'y';
    return r;
    }
  
  }
return def;  
}



function show_class(className, show) {

  els = document.getElementsByTagName("*");
  elsLen = els.length;
  
  pattern = new RegExp("(^|\\s)"+className+"(\\s|$)");

  for (var i = 0; i < elsLen; i++) {
    if ( pattern.test(els[i].className) ) {
       if(show) {
         if (els[i].style.textAlign.toString() == 'right')
          els[i].style.display = 'block';
        else  
         els[i].style.display = 'inline';
       } else {
         els[i].style.display = 'none';
       }
    }
  }
}  

function show_arabic () {
 setBoolCookie('show_ar',true);
 show_class ("ar", true);
 show_class ("sar", false);
 show_class ("har", true);
 }

function hide_arabic () {
 setBoolCookie('show_ar', false);
 show_class ("ar", false);
 show_class ("sar", true);
 show_class ("har", false);
 }
 
function show_pronounced () {
 setBoolCookie('show_pr',true);
 show_class ("pr", true);
 show_class ("tr", false);
 show_class ("spr", false);
 show_class ("str", true);
 }

function show_transliterated () {
 setBoolCookie('show_pr',false);
 show_class ("pr", false);
 show_class ("tr", true);
 show_class ("str", false);
 show_class ("spr", true);
 }

function startup () {
  
  show_ar = getBoolCookie('show_ar', true);
  show_pr = getBoolCookie('show_pr', true);

  if (show_ar)
    show_arabic ();
  else
    hide_arabic ();
    
  if (show_pr)
    show_pronounced ();
  else
    show_transliterated ();
      
  document.onkeydown=function(e){

    if(e.which == 65) {    // a
      show_ar = getBoolCookie('show_ar', true);
      if (show_ar)
        hide_arabic ();
      else 
        show_arabic ();
      }
    else if(e.which == 80)    // p
      show_pronounced ();

    else if(e.which == 84)    // t
      show_transliterated ();
          
  }  
      
} 

