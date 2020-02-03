var search_with_ddgo_elem = document.createElement('input');
search_with_ddgo_elem.type = 'button';
search_with_ddgo_elem.classList.add("ddgo_button");
search_with_ddgo_elem.style = `background-image: url(${browser.runtime.getURL("images/ddgo.svg")});`;


document.getElementsByClassName('RNNXgb')[0].insertBefore(search_with_ddgo_elem, document.getElementsByClassName('Tg7LZd')[0]);

search_with_ddgo_elem.addEventListener("click", function () {
    let search_text = document.getElementsByClassName("gLFyf gsfi")[0].value;
    search_text.replace(" ", "+");
    let args = window.location.search.substring(1).split("&");
    if (args.indexOf("tbm=isch") > -1){
        document.location = `//duckduckgo.com/?iax=images&ia=images&q=${search_text}`;
    }
    else{
        document.location = `//duckduckgo.com/?q=${search_text}`;
    }
});
