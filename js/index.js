function overfunction(element_name)
{
    element = document.getElementById(element_name);
    element.style["box-shadow"] = "0px 15px 10px -15px #DDDDDD";
}

function outfunction(element_name)
{
    element = document.getElementById(element_name);
    element.style["box-shadow"] = "0px 0px 0px 0px #DDDDDD";
}

function clickfunction(name)
{
    window.open(name, "_blank");
}

function clickfunctioninput()
{
    val = document.getElementById("input-text");
    alert("值是" + val.value);
}

function enterfunction(e)
{
    theEvent = e;
    keyCode = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (keyCode == 13) {
        val = document.getElementById("input-text");
        alert("值是" + val.value);
    }
}