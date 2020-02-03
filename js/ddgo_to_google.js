var search_with_google_elem = document.createElement('input');
search_with_google_elem.type = 'button';
search_with_google_elem.classList.add("search__button");
search_with_google_elem.classList.add("google_button");
search_with_google_elem.style = `background-image: url(${browser.runtime.getURL("images/google.png")});`

document.getElementById('search_form').insertBefore(search_with_google_elem, document.getElementById("search_button"));

document.getElementById('search_button').style.borderRadius = '4px';
document.getElementById('search_form_input_clear').style.marginRight = '7em';

search_with_google_elem.addEventListener("click", function () {
    let args = window.location.search.substring(1).split("&");
    let search_text = document.getElementById("search_form_input").value;
    search_text.replace(" ", "+");
    if (args.indexOf("ia=web") > -1){
        document.location = `//google.com/search?q=${search_text}`;
    }
    else if(args.indexOf("iax=images") > -1){
        document.location = `//google.com/search?tbm=isch&q=${search_text}`;
    }
    else{
        document.location = `//google.com/search?q=${search_text}`;
    }
});
