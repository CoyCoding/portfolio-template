function getWindowWidth(){
let viewportwidth;

// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

if (typeof window.innerWidth != 'undefined')
{
     viewportwidth = window.innerWidth;
}

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

else if (typeof document.documentElement != 'undefined'
    && typeof document.documentElement.clientWidth !=
    'undefined' && document.documentElement.clientWidth != 0)
{
      viewportwidth = document.documentElement.clientWidth;
}

// older versions of IE

else
{
      viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
}
return viewportwidth;
}

export {getWindowWidth};
