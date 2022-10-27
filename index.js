const menuItems = document.querySelectorAll(".menu-item");


//messages starts
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");

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
        if (menuItem.id != 'notifications'){
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