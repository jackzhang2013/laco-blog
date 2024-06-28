function overfunction(element_name)
{
    var element = document.getElementById(element_name);
    element.style["box-shadow"] = "0px 15px 10px -15px #DDDDDD";
}

function outfunction(element_name)
{
    var element = document.getElementById(element_name);
    element.style["box-shadow"] = "0px 0px 0px 0px #DDDDDD";
}

function clickfunction(name)
{
    window.open(name, "_blank");
}

function clickfunctioninput()
{
    var val = document.getElementById("input-text");
    alert("值是" + val.value);
}

$.getJSON("/config.json", function(data) {
    var dataname = data.name;
    var postcount = data.post.count;
    var postnamelist = data.post.name;
    var theme = data.theme;
    var auto = data.auto_dark;

    const VueApp = {
        data() {
            return {
                name: dataname
            }
        }
    }
    
    Vue.createApp(VueApp).mount('#title')
    Vue.createApp(VueApp).mount('#name')
    Vue.createApp(VueApp).mount('#logo')

    for(var index = 0; index < postcount; index++) {
        var postname = postnamelist[index];
        template = `
        <div id="post${index}" class="postcard" onmouseover="overfunction('post${index}')" onmouseout="outfunction('post${index}')" onclick="clickfunction('post/index.html?name=${postname}')">
            <p>${postname}</p>
        </div>
        `;
        $("#post").append(template);
    }

    var storage = window.localStorage;
    if(auto)
    {
        const is_dark = window.matchMedia("(prefers-color-scheme: dark)");
        if(is_dark)
        {
            theme = "dark";
        }
        else
        {
            theme = "light";
        }
    }
    if(storage.theme)
    {
        theme = storage.theme;
    }
    $("body").attr("class", theme);

    $(document).ready(function () {
        if(theme == "dark")
        {
            $("#github-icon").attr("src", "/svg/github-mark-white.svg");
            $("#moon-sun").attr("src", "/svg/sun-outline.svg");
        }
        else
        {
            $("#github-icon").attr("src", "/svg/github-mark.svg")
            $("#moon-sun").attr("src", "/svg/moon-outline.svg");
        }
    });
});

function switchtheme()
{
    var theme = $("body").attr("class");
    if(theme == "dark")
    {
        theme = "light";
    }
    else
    {
        theme = "dark";
    }
    var storage = window.localStorage;
    storage.theme = theme;
    console.log(theme);
    $("body").attr("class", theme);
    if(theme == "dark")
    {
        $("#github-icon").attr("src", "/svg/github-mark-white.svg");
        $("#moon-sun").attr("src", "/svg/sun-outline.svg");
    }
    else
    {
        $("#github-icon").attr("src", "/svg/github-mark.svg")
        $("#moon-sun").attr("src", "/svg/moon-outline.svg");
    }
}