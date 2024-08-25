function overfunction(element_name) {
    var element = document.getElementById(element_name);
    element.style["box-shadow"] = "0px 15px 10px -15px #DDDDDD";
}

function outfunction(element_name) {
    var element = document.getElementById(element_name);
    element.style["box-shadow"] = "0px 0px 0px 0px #DDDDDD";
}

function clickfunction(name) {
    window.open(name, "_blank");
}

var light_theme;
var dark_theme;

$.getJSON("/config.json", function(data) {
    var data_name = data.name;
    var theme = data.theme;
    var auto = data.auto_dark;
    const search_params = new URLSearchParams(window.location.search);
    var post_name = search_params.get('name');
    light_theme = data.code_theme[0];
    dark_theme = data.code_theme[1];

    const VueApp = {
        data() {
            return {
                name: data_name
            }
        }
    }
    
    Vue.createApp(VueApp).mount('#logo-text')

    const PostName = {
        data() {
            return {
                post_name: post_name
            }
        }
    }
    
    Vue.createApp(PostName).mount('#title')
    Vue.createApp(PostName).mount('#post-name')

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
            $("#code-css").attr("href", `/highlight/styles/${dark_theme}.min.css`);
        }
        else
        {
            $("#github-icon").attr("src", "/svg/github-mark.svg")
            $("#moon-sun").attr("src", "/svg/moon-outline.svg");
            $("#code-css").attr("href", `/highlight/styles/${light_theme}.min.css`);
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
        $("#code-css").attr("href", `/highlight/styles/${dark_theme}.min.css`);
    }
    else
    {
        $("#github-icon").attr("src", "/svg/github-mark.svg")
        $("#moon-sun").attr("src", "/svg/moon-outline.svg");
        $("#code-css").attr("href", `/highlight/styles/${light_theme}.min.css`);
    }
}