$(function() {
    console.log(location.pathname);
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1": {
            "url" : "index.html",
            "text": "Home",
            "alt": "Example Homepage"
        },
        "2": {
            "url" : "template.html",
            "text": "Template Page",
            "alt": "Template Link"
        }, 
        "3": {
            "url" : "tables.html",
            "text": "Tables",
            "alt": "Simple and Complex Tables"
        }
    };

    const linksSeperator = " | ";
    let htmlString = "";

    for(let id in links) {
        if(pathname == links[id]['url']) {
            htmlString += links[id]['text'];
        } else {
            htmlString += '<a href="' + links[id]['url'] + '">' + links[id]['text'] + '</a>';
        }
        if(Number(id) < Object.keys(links).length) {
            htmlString += linksSeperator;
        }
    }

    $('#siteLinks').html(htmlString);
});