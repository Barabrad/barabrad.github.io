// These functions will be used in multiple pages in my portfolio

function goBack() {
    history.back();
}

function goHome() {
    location.assign("/portfolio/");
}

function noop() {
    var dummy = 0;
}

function timedRedirect(redirect_url_opt=0, delay_ms=5000) {
    setTimeout(noop, delay_ms);
    var redirect_url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Default (404 Error)
    switch(redirect_url_opt) {
        case 1:
            redirect_url = "https://www.youtube.com/watch?v=4-GiYP_4qc0"; // (Secret Tunnel)
            break;
    }
    location.replace(redirect_url);
}