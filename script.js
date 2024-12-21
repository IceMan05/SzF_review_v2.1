// Vélemények adatainak tárolása
const reviews = [
    {
        reviewText: "Többször vásároltam már és mindig tökéletes volt a méret és a minőség! Zsófi segítőkész és figyelmes. A ruhák pedig nagyon gyorsan megérkeznek🥰",
        name: "Katalin Kiss",
        date: "2024.11.28",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/g9.png",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/g-l.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNQaWF5aVVnEAE!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgICPiayiUg%7CCgwI7sGSugYQuIK06AI%7C"
    },
    {
        reviewText: "Segítőkész eladó. A ruhák is szépek. Biztos törzsvásárló leszek 😊😊😊",
        name: "Nikoletta Kardos",
        date: "2024.12.06",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/g10.png",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/g-l.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURQci03RTd3RRAB!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgIDPr-7E7wE%7CCgwIvqTMugYQoJiLiAE%7C"
    },
    {
        reviewText: "Ha szereted az egyedit, a stílusosat, a minőséget,és kényeztetnéd magad egy csodás ruhadarabbal vagy kiegészítővel, és fontos a számodra, hogy egy mosolygós arc fogadjon, akkor ide mindenképp látogass el. Minden itt vásárolt ruhát imádok, és amerre járok dicséretek hadát kapom az emberektől. Itt még egy szomorúbb nap után is vidáman, és kellemes emlékekkel távozom minden alkalommal...Olvass tovább",
        name: "Móni Tenki",
        date: "2024.09.06",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/fb1.jpg",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/fb-l.png",
        link: "https://www.facebook.com/monika.tenki/posts/pfbid05APgzcRNifMj2caXhbRwnVPehHT8YmjaZkcW4b1vn5gVU1NK49pA52TCs79zRAsyl",
        fullReviewLink: "https://www.facebook.com/monika.tenki/posts/pfbid05APgzcRNifMj2caXhbRwnVPehHT8YmjaZkcW4b1vn5gVU1NK49pA52TCs79zRAsyl"
    },
    {
        reviewText: "Online rendeltem, Zsófi nagyon aranyos, megbízható. Illatos csomagot küld és nincsenek túl árazva a termékek. 😊",
        name: "Dorina Márton",
        date: "2024.12.03",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/g3.png",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/g-l.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURQa2M3TFhBEAE!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgIDPkc7LXA%7CCgsIj8i6ugYQsK70Cg%7C"
    },
    {
        reviewText: "Tökéletes méret, udvarias eladó, szép ruhák! Csak ajánlani tudom",
        name: "Ildikó Bódiné Potyi",
        date: "2024.03.14",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/fb4.jpg",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/fb-l.png",
        link: "https://www.facebook.com/ildiko.bodinepotyi/posts/pfbid0dnZgHrm4TAHzhuxTXKUeLiVqR4DW9Q9MNfSbHvzcLjDdwTAD6RHib1PFkvAHMdZRl"
    },
    {
        reviewText: "A rendelt ruhák leírásnak megfelelőek. Kedves segítőkész eladó.",
        name: "Beáta Bodnár",
        date: "2024.03.14",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/fb5.jpg",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/fb-l.png",
        link: "https://www.facebook.com/beata.bodnar.5015/posts/pfbid021DbWYoMNMLPKzwYwF6nVMUKBWEtxxnNynSdUmv89HBnaCm9CVt6QW9fso5ntqa5el"
    },
    {
        reviewText: "Minőségi ruhák, sok választék. Zsófi kedves lány, imádok tőle vásárolni. Mindenkinek jó szívvel ajánlom 😊🥰",
        name: "Kinga Nagyné",
        date: "2024.12.03",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/g2.png",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/g-l.png",
        link: "https://www.google.com/maps/reviews/@47.5065731,19.1471263,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSURQNFpDSEVnEAE!2m1!1s0x0:0x922769bf9fac6901?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        reviewText: "Kedves,gyors,precíz. Nagyon jó minőségű termékeket kaptam. Nagyon meg vagyok elégedve. Segítőkész. Jól esik az embernek amikor csupa kedvességgel állnak hozzá és apró meglepetéseket,figyelmességet kap.",
        name: "Szeiboldné Kiss Renáta",
        date: "2024.03.09",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/fb9.jpg",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/fb-l.png",
        link: "https://www.facebook.com/permalink.php?story_fbid=pfbid02tKSsJpuUB7qQUZHn8SL2Ta9Tk3XK8sGtmoc68RwctdHZq5DxVi8jWWAjs8PeF4sxl&id=100007749197763"

    },
    {
        reviewText: "Hosszú ideje csak innen rendelek ruhát. Mindig elégedett vagyok a minőséggel, a méretezèsnèl Zsófi mindig nagyon segítőkész,mert elég pici vagyok 😂 A ruhák remekül bírják a mosást, tényleg minőségi anyaga van. Nyugodt szívvel ajánlom mindenkinek,bár függőséget okozhat 🫣😂 Ami Zsófit illeti, roppant kedves és rugalmas 💕",
        name: "Horváth Judit Netti",
        date: "2024.03.14",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/fb6.jpg",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/fb-l.png",
        link: "https://www.facebook.com/ditta.vond.9/posts/pfbid0rGWzuLu4cd8UDiBFAEyLNoJjWVeXNKPwAopNo3J8sZhgG2Esc8civ7C2iAtg4TA4l"
    },
    {
        reviewText: "2 éve vásárolok rendszeresen Zsófitól. Nagyon rendes, segítőkész, a ruhái szépek, jó minőségűek, és megfizethető áron vannak. Ajánlom mindenkinek! 😊",
        name: "Ábrahám-Tóth Nelli",
        date: "2024.03.09",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/fb8.jpg",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/fb-l.png",
        link: "https://www.facebook.com/toth.nelli.9/posts/pfbid02z2F7phzpCz9mknxyRKLJT66qvFBfL4pYNRvg9WzNqR4Dt1HvxnMCLpnxDcfVgYXHlS"
    },
    {
        reviewText: "Ha jó minőségű női ruhákat keresel, gyere el vagy nézd meg a kínálatot a webáruházban! Pénztárcabarát árak! Mindenkinek csak ajánlani tudom! Zsófi, a tulajdonos kedves és segítőkész! :)",
        name: "Erika Havancsák",
        date: "2024.11.02",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/g4.png",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/g-l.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURucG9MOUpBEAE!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgIDnpoL9JA%7CCgsI47aEuAYQ8KPpdw%7C"
    },
    {
        reviewText: "Ha szereted a szép és jó minőségű ruhákat és ráadásul jó árban! Akkor keresd bátran a Szofi ruci kis üzletet.!!",
        name: "Gézáné Gáspár",
        date: "2024.11.02",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/g7.png",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/g-l.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURYLW9xUkp3EAE!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgIDX-oqRJw%7CCgsIxdLzuAYQiOSvLw%7C"
    },
    {
        reviewText: "Udvarias kedves figyelmes eladó aki mindent megtesz a vásárlóiért.Köszönjük Zsófi hogy vagy nekünk💐",
        name: "Bényi Csilla",
        date: "2024.12.03",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/g5.png",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/g-l.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURQMFptYzhRRRAB!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgIDP0Zmc8QE%7CCgwIiYG7ugYQoM3mvwM%7C"
    },
    {
        reviewText: "Óriási választék, kiváló vevőkezelés, nagyon kedves és rugalmas hozzáállás jellemzi SzofiRucit-Zsófit. Mindenkinek szívből ajánlom!",
        name: "Adrienn Tisza",
        date: "2024.12.04",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/g1.png",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/g-l.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURQdFlPVVJnEAE!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgIDPtYOURg%7CCgwIhZrBugYQwKbprQI%7C"
    },
    {
        reviewText: "Precíz, megbízható kiszolgálás és ami elengedhetetlen, hogy mindig változatos a kínálat! ❤️Köszönöm",
        name: "Renáta Vágott",
        date: "2024.03.14",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/fb3.jpg",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/fb-l.png",
        link: "https://www.facebook.com/renata.vagott/posts/pfbid0ef8Rxvqp8CEapudDqnJ8VS3KMJwRYyJCzFWoba3ToPxipzecZPvgGbDbHZ7CGSwGl"
    },
    {
        reviewText: "Nagyon gyors szállítás és jó minőségű termékek. Mindenkinek csak ajánlani tudom 🙂",
        name: "Somotiuc Adrienn",
        date: "2024.03.11",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/fb7.jpg",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/fb-l.png",
        link: "https://www.facebook.com/adrienn.gonczi.9/posts/pfbid02moFc6Du359uosBcU38dHtJJ8cqQ5HrBtxeo42YMPjdGK6bERpMYMoZXRWgnpJSRUl"
    },
    {
        reviewText: "Szépek a ruhák jó minőségüek az eladó hölgy kedves segitőkész megbízható.Nagyon örömmel vásárolok mindig Tőle.Bátran ajánlom Őt és ruháit mindenkinek",
        name: "Csilla Kovácsné Bényi",
        date: "2024.03.08",
        profilePic: src="https://shop.unas.hu/shop_ordered/70604/pic/fb10.jpg",
        platformLogo: src="https://shop.unas.hu/shop_ordered/70604/pic/fb-l.png",
        link: "https://www.facebook.com/benyi.csilla/posts/pfbid02CewEXdQx58MgjenjVd2BkTrPsNDDz8P3p7C7RTxqFjEukqqtHACbN9VNFNHacEhAl"
    },
    
];

let currentIndex = 0;



// Vélemény megjelenítése
function displayReview(index) {
    const reviewContainer = document.getElementById("review-container");
    const logoProf = document.querySelector(".logo-prof");

    const review = reviews[index];

    let reviewText = review.reviewText;

    // Ha a vélemény hosszabb, mint 373 karakter, rövidítsük le
    if (review.reviewText.length > 373) {
        // Rövidítés + Olvass tovább link hozzáadása
        reviewContainer.innerHTML = `
            <p>${review.reviewText.substring(0, 373)}... <a href="${review.fullReviewLink}" id="read-more-link" target="_blank">Olvass tovább</a></p>
        `;
    } else {
        // Ha nincs szükség rövidítésre
        reviewContainer.innerHTML = `
            <p>${review.reviewText}</p>
        `;
    }

    // Profil és platform információ frissítése
    logoProf.innerHTML = `
        <img src="${review.platformLogo}" alt="Platform logó" class="platform-logo">
        <div class="review-header">
            <a href="${review.link}" target="_blank">
            <img src="${review.profilePic}" alt="Profilkép" class="profile-pic">
            </a>
            <div class="review-info">
                <a href="${review.link}" target="_blank">
                <span class="review-name">${review.name} 
                <img class="verified-icon" src="https://shop.unas.hu/shop_ordered/70604/pic/check-icon1.png" alt="Verified">
                </span></a>
                <span class="review-date">${review.date}</span>
            </div>
        </div>
    `;
}

// Pontok kirajzolása és kezelése
const renderDots = () => {
    const bulletControl = document.querySelector('.bullet-control');
    bulletControl.innerHTML = ''; // Pontok törlése

    // Az aktuális pontok számának korlátozása
    const maxVisibleDots = 5;
    const start = Math.max(0, Math.min(currentIndex - 2, reviews.length - maxVisibleDots));
    const end = Math.min(start + maxVisibleDots, reviews.length);

    for (let i = start; i < end; i++) {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.dataset.index = i;

        // Pontok méretének beállítása
        const sizeClass = getDotSizeClass(i - start); // Méret alapján beállítjuk
        dot.classList.add(sizeClass);

        bulletControl.appendChild(dot);
    }

    updateDotsStyle(); // Pontok stílusának frissítése
};

// Pont méretének meghatározása
const getDotSizeClass = (position) => {
    switch (position) {
        case 0: 
        case 4:
            return 'small';
        case 1: 
        case 3:
            return 'medium';
        case 2:
            return 'large';
        default:
            return 'small'; // Alapértelmezett
    }
};

let autoScrollInterval;
let isAutoScrolling = true; // Nyomon követi az automatikus lapozást
let isAnimating = false;
let debounceTimeout; // Debounce időzítő
let interactionTimeout; // Időzítő az automatikus lejátszás újraindításához
const autoScrollRestartDelay = 9000; // 3 másodperc késleltetés felhasználói interakció után

const updateReviewWithAnimation = (newIndex, direction) => {
    if (isAnimating) return; // Ha animáció folyamatban van, ne indítsunk újabbat

    isAnimating = true; // Animáció elkezdése
    const reviewContainer = document.getElementById("review-container");
    const logoProf = document.querySelector(".logo-prof");

    const currentAnimation = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
    const newAnimation = direction === 'next' ? 'slide-in-right' : 'slide-in-left';

    // Kijelentkezési animáció
    reviewContainer.classList.add(currentAnimation);
    logoProf.classList.add(currentAnimation);

    setTimeout(() => {
        // Az animációs osztályok eltávolítása
        reviewContainer.classList.remove(currentAnimation);
        logoProf.classList.remove(currentAnimation);

        // Vélemények frissítése
        currentIndex = newIndex;
        displayReview(currentIndex);

        // Belépési animáció
        reviewContainer.classList.add(newAnimation);
        logoProf.classList.add(newAnimation);

        setTimeout(() => {
            // Animáció befejezése
            reviewContainer.classList.remove(newAnimation);
            logoProf.classList.remove(newAnimation);
            isAnimating = false; // Animáció befejezése
        }, 300); // Belépési animáció időtartama
    }, 300); // Kijelentkezési animáció időtartama
};

// Vélemény frissítése pontokkal
const updateReview = (index, direction) => {
    animateDots(direction); // A pontok animációjának visszaállítása
    updateReviewWithAnimation(index, direction); // Vélemények frissítése animációval
};

// Pontok animálása (csak a szélső pontok mozogjanak)
const animateDots = (direction) => {
    const dots = document.querySelectorAll('.dot');

    // Az aktuális pontméret sorrendje
    const sizes = Array.from(dots).map(dot => {
        if (dot.classList.contains('small')) return 'small';
        if (dot.classList.contains('medium')) return 'medium';
        if (dot.classList.contains('large')) return 'large';
    });

    // Új sorrend meghatározása az irány alapján
    let newSizes;
    if (direction === 'next') {
        newSizes = ['small', ...sizes.slice(0, -1)]; // A bal oldali kicsi kikerül
    } else {
        newSizes = [...sizes.slice(1), 'small']; // A jobb oldali kicsi kerül be
    }

    // Animáció alkalmazása
    dots.forEach((dot, index) => {
        dot.classList.remove('small', 'medium', 'large');
        dot.classList.add(newSizes[index]);

        // Animáció mozgás
        if (direction === 'next') {
            if (index === 0) dot.classList.add('exit-left'); // Bal oldali kiúszik
            if (index === dots.length - 1) dot.classList.add('enter-right'); // Jobb oldali beúszik
        } else {
            if (index === 0) dot.classList.add('enter-left'); // Bal oldali beúszik
            if (index === dots.length - 1) dot.classList.add('exit-right'); // Jobb oldali kiúszik
        }
    });

    // Az animáció végén frissítjük a pontokat
    setTimeout(() => {
        renderDots(); // Újrarajzolás az új sorrend alapján
    }, 400); // Animáció időzítése
};



let startX = 0;
let endX = 0;

// Touch start esemény
document.querySelector('.slider').addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

// Touch move esemény
document.querySelector('.slider').addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX;
});


// Automatikus lapozás
const startAutoScroll = () => {
    if (!isAutoScrolling) {
        const delay = reviews[currentIndex].reviewText.length > 180 ? 10000 : 0; // Csak 200+ karakteres véleményeknél várjon
        autoScrollInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % reviews.length; // Körkörös navigáció
            updateReview(currentIndex, 'next');
        }, 4000);
        isAutoScrolling = true;
    }
};

// Automatikus lapozás leállítása
const stopAutoScroll = () => {
    if (isAutoScrolling) {
        clearInterval(autoScrollInterval);
        isAutoScrolling = false;
    }
};

const restartAutoScrollWithDelay = () => {
    const currentReview = reviews[currentIndex]; // Aktuális vélemény szövegének lekérése
    if (currentReview.length < 180) {
        // Ha a vélemény rövidebb 200 karakternél, az automatikus lapozás azonnal újraindul
        startAutoScroll();
        return;
    }
    
    if (interactionTimeout) clearTimeout(interactionTimeout);
    interactionTimeout = setTimeout(() => {
        startAutoScroll();
    }, autoScrollRestartDelay);
};

const handleButtonClick = (direction) => {
    if (debounceTimeout) return; // Ha már folyamatban van, ne indítsuk újra

    debounceTimeout = setTimeout(() => {
        debounceTimeout = null; // Visszaállítjuk a debounce időzítőt
    }, 500); // 500 ms korlát

    stopAutoScroll(); // Az automatikus lapozás leállítása
    currentIndex = direction === 'next' ? (currentIndex + 1) % reviews.length : (currentIndex - 1 + reviews.length) % reviews.length;
    updateReview(currentIndex, direction); // Vélemény frissítése animációval

    // Automatikus lapozás újraindítása megfelelő késleltetéssel
    const delay = reviews[currentIndex].reviewText.length > 180 ? 10000 : 0;
    setTimeout(() => startAutoScroll(), delay); // Újraindítjuk az automatikus lapozást
};

// Gombok eseménykezelői (az automatikus lapozás újraindítása manuális beavatkozáskor)
document.getElementById("prev-btn").addEventListener("click", () => handleButtonClick('prev'));


document.getElementById("next-btn").addEventListener("click", () => handleButtonClick('next'));

// Érintéses gesztusok eseménykezelői (az automatikus lapozás újraindítása)
document.querySelector('.slider').addEventListener('touchend', () => {
    stopAutoScroll();
    const threshold = 50; // Minimális mozgás távolság pixelben
    if (startX - endX > threshold) {
        currentIndex = (currentIndex + 1) % reviews.length;
        updateReview(currentIndex, 'next');
    } else if (endX - startX > threshold) {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        updateReview(currentIndex, 'prev');
    }
    setTimeout(() => startAutoScroll(), reviews[currentIndex].reviewText.length > 180 ? 10000 : 0); // Késleltetés ha hosszú
});

// Widget inicializálása az automatikus lapozással
const initializeWidget = () => {
    displayReview(0); // Az első vélemény megjelenítése
    renderDots(); // Pontok generálása
    startAutoScroll(); // Automatikus lapozás indítása
};

document.addEventListener("DOMContentLoaded", () => {
    // Ellenőrizzük, hogy érintőkijelzős eszközről van-e szó
    const isTouchDevice = () => {
        return ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
    };

    // Ellenőrizzük a képernyőméretet (media query alapján)
    const isSmallScreen = () => {
        return window.matchMedia("(max-width: 1024px)").matches;
    };

    // Navigációs gombok eltüntetése érintőkijelzős eszközöknél
    const hideNavButtonsIfNeeded = () => {
        const navButtons = document.querySelectorAll('.nav-btn');
        if (isTouchDevice() && isSmallScreen()) {
            navButtons.forEach(button => button.style.display = 'none'); // Gombok elrejtése
        } else {
            navButtons.forEach(button => button.style.display = ''); // Gombok visszaállítása
        }
    };

    // Ellenőrzés oldal betöltésekor
    hideNavButtonsIfNeeded();

    // Ellenőrzés ablakméret változáskor
    window.addEventListener("resize", hideNavButtonsIfNeeded);
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("Az oldal betöltődött, várakozás 6 másodpercig...");

    // A gombnyomás szimulálása 6 másodperc után
    setTimeout(() => {
        console.log("Gombnyomás szimulálása...");
        document.getElementById("next-btn").click(); // A "következő" gomb megnyomása
    }, 3000);

    initializeWidget(); // Widget inicializálása
});


initializeWidget();


