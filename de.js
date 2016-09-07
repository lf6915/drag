/**
 * Created by LF on 2016/9/7.
 */
window.onload=function()
{
    var oDiv=document.getElementById('box');
    oDiv.onmousedown=function(ev)
    {
        var oEvent=ev||event;
        var disX=oEvent.clientX-oDiv.offsetLeft;
        var disY=oEvent.clientY-oDiv.offsetTop;
        document.onmouseover=function(ev)
        {
            var oEvent=ev||event;
            var left=oEvent.clientX-disX;
            var top=oEvent.clientY-disY;
            oDiv.style.left=left+'px';
            oDiv.style.top=top+'px';
        };
        document.onmouseup=function()
        {
            document.onmousemove=null;
            document.onmouseup=null;
           
        };
        oDiv.setCapture&&oDiv.setCapture();
        return false;
    };
};