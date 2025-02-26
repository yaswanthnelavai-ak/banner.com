(function() {
    let script = document.currentScript;
    let width = script.getAttribute("data-width") || 300;
    let height = script.getAttribute("data-height") || 250;
    let position = script.getAttribute("data-position") || "bottom-right";

    fetch('http://localhost/yourdomain.com/get_banner.php', {
    mode: 'no-cors'
})
        .then(response => response.json())
        .then(data => {
            if (!data.image_url) return;
            
            let banner = document.createElement("div");
            banner.style.position = "fixed";
            banner.style.width = width + "px";
            banner.style.height = height + "px";
            banner.style[position.includes("top") ? "top" : "bottom"] = "10px";
            banner.style[position.includes("left") ? "left" : "right"] = "10px";
            
            let link = document.createElement("a");
            link.href = data.link;
            link.target = "_blank";

            let img = document.createElement("img");
            img.src = data.image_url;
            img.alt = data.alt_text;
            img.style.width = "100%";
            img.style.height = "100%";

            link.appendChild(img);
            banner.appendChild(link);
            document.body.appendChild(banner);
        })
        .catch(console.error);
})();
