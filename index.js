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
const colorPalette = document.querySelectorAll(".choose-color span");

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

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
    if (e.target.classList.contains("customize-theme")) {
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

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

        //change font size
        document.querySelector('html').style.fontSize = fontSize;
    });
});
//font size ends

//remove active class from
const changeActiveColorClass = () => {
    colorPalette.forEach((colorPicker) => {
        colorPicker.classList.remove("active");
    });
};

//change primary colors starts

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();
        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }

        color.classList.add("active");

        root.style.setProperty('--primary-color-hue', primaryHue);

    })
});
//change primary colors ends

//theme background values starts
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
}

Bg1.addEventListener('click', () => {
    //add active class
    Bg1.classList.add("active");
    //remove active class from others
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");
    //remove customized changed from local storage
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});

//theme background values ends

//go top starts
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container')
            .classList.add('show');
    } else {
        document.querySelector(".go-top-container")
            .classList.remove('show');
    }
};

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});
//go top ends