const menuItems = document.querySelectorAll(".menu-item");


//messages starts
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");

//searchbar starts
messageSearch.addEventListener("keyup", () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(item => {
        let name = item.querySelectorAll('h5').textContent.toLowerCase();
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

//theme customization starts
//opens modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
// closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains("customize-theme")){
        themeModal.style.display = "none";
    }
};
themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModal);
//theme customization ends
//remove active class from spans

const removeSizeSelector = () => {
  fontSizes.forEach((item) => {
    item.classList.remove("active");
  });
};



//font size starts
fontSizes.forEach(size => {  
    size.addEventListener('click', () => {
        removeSizeSelector();    
        let fontSize;
        size.classList.toggle('active')

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

    //change font size
    document.querySelector('html').style.fontSize = fontSize; 
    });
});
//font size ends