const menuItems = document.querySelectorAll(".menu-item");


//messages starts
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".messages");
const messageSearch = document.querySelector("#message-search");


//searchbar starts
messageSearch.addEventListener("keyup", () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(item => {
        let name = item.querySelectorAll("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }

    });
});
//searchbar ends
//highlight message menu item
messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector('.notification-count').style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});
//messages ends



//sidebar starts
//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    });
}

menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
        changeActiveItem();
        menuItem.classList.add("active");
        if (menuItem.id != 'notifications') {
            document.querySelector('.notifications-popup').
                style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').
                style.display = 'block';
            document.querySelector('#notifications .notification-count').
                style.display = 'none';
        }
    });
});
//sidebar ends