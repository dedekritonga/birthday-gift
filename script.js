/* =========================
   OPENING & 3 LOCKS
========================= */

const opening = document.getElementById("opening");
const lockBox = document.getElementById("lockBox");
const unlockSuccess = document.getElementById("unlockSuccess");
const finalEnvelope = document.getElementById("finalEnvelope");
const unlockBtn = document.getElementById("unlockBtn");

const lockIcon = document.getElementById("lockIcon");
const lockNumber = document.getElementById("lockNumber");
const lockTitle = document.getElementById("lockTitle");
const lockDescription = document.getElementById("lockDescription");
const question = document.getElementById("question");

const dateInputs = document.getElementById("dateInputs");
const textInputWrapper = document.getElementById("textInputWrapper");
const answerInput = document.getElementById("answerInput");
const wrongMessage = document.getElementById("wrongMessage");

const successSmall = document.getElementById("successSmall");
const successTitle = document.getElementById("successTitle");
const successText = document.getElementById("successText");

const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");

let currentLock = 1;


/* =========================
   CEK JAWABAN
========================= */

function checkAnswer() {

    let correct = false;

    if (currentLock === 1) {

        const day = dayInput.value.trim();
        const month = monthInput.value.trim();
        const year = yearInput.value.trim();

        if (
            day === "07" &&
            month === "10" &&
            year === "2005"
        ) {
            correct = true;
        }
    }

    if (currentLock === 2) {

        const answer = answerInput.value
            .trim()
            .toLowerCase();

        if (answer === "bebee") {
            correct = true;
        }
    }

    if (currentLock === 3) {

        const day = dayInput.value.trim();
        const month = monthInput.value.trim();
        const year = yearInput.value.trim();

        if (
            day === "14" &&
            month === "09" &&
            year === "2026"
        ) {
            correct = true;
        }
    }

    if (correct) {
        unlockCurrentLock();
    } else {
        showWrongAnswer();
    }
}


/* =========================
   KUNCI TERBUKA
========================= */

function unlockCurrentLock() {

    lockBox.style.display = "none";

    unlockSuccess.classList.add("active");

    if (currentLock === 1) {

        successSmall.textContent =
            "ONE LITTLE SECRET UNLOCKED";

        successTitle.textContent =
            "Kunci pertama terbuka! ✨";

        successText.textContent =
            "hehe, kamu masih ingat tanggal lahirmu sendiri. 💙";
    }

    if (currentLock === 2) {

        successSmall.textContent =
            "ANOTHER LITTLE SECRET UNLOCKED";

        successTitle.textContent =
            "Kunci kedua terbuka! 💙";

        successText.textContent =
            "ciee. 🤭";
    }

    if (currentLock === 3) {

        successSmall.textContent =
            "THE FINAL SECRET IS OPEN";

        successTitle.textContent =
            "ALL LOCKS UNLOCKED ✨";

        successText.textContent =
            "14.09.2026 — the day our story officially became ours. ♡";
    }

    /* DURASI PESAN BERHASIL */
    setTimeout(function () {

        unlockSuccess.classList.remove("active");

        if (currentLock < 3) {

            currentLock++;

            prepareNextLock();

            lockBox.style.display = "block";

            lockBox.style.animation = "none";

            void lockBox.offsetWidth;

            lockBox.style.animation =
                "boxAppear 0.8s ease";

        } else {

            showEnvelope();
        }

    }, 3500);
}


/* =========================
   KUNCI BERIKUTNYA
========================= */

function prepareNextLock() {

    wrongMessage.textContent = "";

    dayInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
    answerInput.value = "";

    if (currentLock === 2) {

        lockIcon.textContent = "🔐";

        lockNumber.textContent =
            "LOCK 02 OF 03";

        lockTitle.textContent =
            "Satu lagi yang harus kamu ingat...";

        question.textContent =
            "Siapa yang sering manggil kamu sayangg? 💙";

        dateInputs.style.display = "none";

        textInputWrapper.style.display = "block";

        setTimeout(function () {
            answerInput.focus();
        }, 100);
    }

    if (currentLock === 3) {

        lockIcon.textContent = "🔐";

        lockNumber.textContent =
            "LOCK 03 OF 03";

        lockTitle.textContent =
            "Kunci terakhir...";

        lockDescription.innerHTML =
            "Ini tanggal yang nggak boleh dilupakan. <br>Tanggal berapa hari jadi kita? 🤍";

        question.textContent =
            "Kapan hari spesial kita? 💍";

        dateInputs.style.display = "flex";

        textInputWrapper.style.display = "none";

        setTimeout(function () {
            dayInput.focus();
        }, 100);
    }
}


/* =========================
   JAWABAN SALAH
========================= */

function showWrongAnswer() {

    wrongMessage.textContent =
        "hmm... kayaknya belum tepat 🥺 Coba ingat lagi yaa.";

    lockBox.animate(
        [
            { transform: "translateX(0)" },
            { transform: "translateX(-7px)" },
            { transform: "translateX(7px)" },
            { transform: "translateX(-5px)" },
            { transform: "translateX(5px)" },
            { transform: "translateX(0)" }
        ],
        {
            duration: 450
        }
    );
}


/* =========================
   TOMBOL UNLOCK
========================= */

unlockBtn.onclick = checkAnswer;


/* =========================
   ENTER UNTUK JAWABAN
========================= */

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Enter" &&
        opening.style.display !== "none"
    ) {

        if (
            document.activeElement === dayInput ||
            document.activeElement === monthInput ||
            document.activeElement === yearInput ||
            document.activeElement === answerInput
        ) {

            checkAnswer();
        }
    }
});


/* =========================
   ENVELOPE
========================= */

const openBtn =
    document.getElementById("openBtn");

if (openBtn) {

    openBtn.onclick = function () {

        opening.classList.add("hide");

        createSparkles();

        setTimeout(function () {

            opening.style.display = "none";

            document.body.classList.remove("locked");

            setupStoryNavigation();

            showStoryPage(0);

        }, 1200);
    };
}


function showEnvelope() {

    unlockSuccess.classList.remove("active");

    lockBox.style.display = "none";

    finalEnvelope.classList.add("active");
}


/* =========================
   SCROLL
========================= */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================
   FOTO
========================= */

const photos = [];

for (let i = 1; i <= 20; i++) {

    photos.push(
        "images/foto" + i + ".jpg"
    );
}


/* FOTO 12 KHUSUS UNTUK HERO */

const memoryPhotos =
    photos.filter(function (photo) {

        return photo !==
            "images/foto12.jpg";
    });


/* 
   19 FOTO UNTUK FEATURED
   SEMUA 20 FOTO UNTUK ALBUM
*/

const shuffledMemoryPhotos =
    shuffle(memoryPhotos);

const shuffledAllPhotos =
    shuffle(photos);


/* =========================
   SHUFFLE
========================= */

function shuffle(array) {

    const result = array.slice();

    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        const temp = result[i];

        result[i] =
            result[randomIndex];

        result[randomIndex] =
            temp;
    }

    return result;
}


/* =========================
   CAPTION
========================= */

const captions = [

    "One of my favorite moments 💙",

    "Us, being us. ♡",

    "A little memory to keep.",

    "Still one of my favorites."
];


/* =========================
   4 FOTO UTAMA
========================= */

function displayPhotos() {

    const featured =
        document.getElementById(
            "featuredPhotos"
        );

    if (!featured) {
        return;
    }

    featured.innerHTML = "";

    for (let i = 0; i < 4; i++) {

        const card =
            document.createElement("div");

        card.className =
            "photo-card";

        const photo =
            document.createElement("div");

        photo.className =
            "photo";

        const img =
            document.createElement("img");

        img.src =
            shuffledMemoryPhotos[i];

        img.alt =
            "Memory " + (i + 1);

        img.className =
            "clickable-photo";

        img.onclick =
            function () {

                openPhoto(this.src);
            };

        photo.appendChild(img);

        const caption =
            document.createElement("p");

        caption.textContent =
            captions[i];

        card.appendChild(photo);
        card.appendChild(caption);

        featured.appendChild(card);
    }
}


/* =========================
   TAMPILKAN MEMORY
========================= */

function showMemories() {

    const featured =
        document.getElementById(
            "featuredPhotos"
        );

    const allMemoriesBtn =
        document.getElementById(
            "allMemoriesBtn"
        );

    const memoryOpenBtn =
        document.getElementById(
            "memoryOpenBtn"
        );

    if (featured) {

        displayPhotos();

        featured.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(25px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 900,
                easing: "ease"
            }
        );
    }

    if (allMemoriesBtn) {

        allMemoriesBtn.style.display =
            "inline-block";

        allMemoriesBtn.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(15px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 700
            }
        );
    }

    if (memoryOpenBtn) {

        memoryOpenBtn.style.display =
            "none";
    }
}


/* =========================
   SEMUA 20 FOTO
========================= */

function displayGallery() {

    const gallery =
        document.getElementById(
            "photoGallery"
        );

    if (!gallery) {
        return;
    }

    gallery.innerHTML = "";

    for (
        let i = 0;
        i < shuffledAllPhotos.length;
        i++
    ) {

        const item =
            document.createElement("div");

        item.className =
            "gallery-item";

        const img =
            document.createElement("img");

        img.src =
            shuffledAllPhotos[i];

        img.alt =
            "Our Memory " + (i + 1);

        img.className =
            "clickable-photo";

        img.onclick =
            function () {

                openPhoto(this.src);
            };

        item.appendChild(img);

        gallery.appendChild(item);
    }
}


/* =========================
   LIHAT SEMUA KENANGAN
========================= */

function showGallery() {

    displayGallery();

    const pages = getStoryPages();

    const galleryIndex =
        pages.findIndex(function (page) {

            return page.id === "gallery";

        });

    if (galleryIndex !== -1) {

        showStoryPage(
            galleryIndex
        );

    }

}


/* =========================
   TOMBOL SEMUA FOTO
========================= */

const allMemoriesBtn =
    document.getElementById(
        "allMemoriesBtn"
    );

if (allMemoriesBtn) {

    allMemoriesBtn.style.display =
        "none";
}


/* =========================
   MEMORY NOTES
========================= */

const memoryNotes = [

    {
        number: "01",
        title: "The First Look",
        text: "Aku masih ingat eye contact waktu rapat di Setia Budi. Waktu itu cuma sebentar, tapi ternyata dari momen kecil itu cerita kita malah mulai punya jalan sendiri."
    },

    {
        number: "02",
        title: "The First Message",
        text: "Kita ketemu lagi waktu KKN Sempajaya, lalu kamu mulai chat aku lewat sponsor. Dari chat sederhana itu, kita malah jadi makin sering ngobrol."
    },

    {
        number: "03",
        title: "When I Was Sick",
        text: "Waktu aku sakit, kamu beliin aku obat. Kelihatannya sederhana, tapi perhatian seperti itu justru menjadi salah satu hal yang masih aku ingat."
    },

    {
        number: "04",
        title: "Chocolate",
        text: "Kamu juga pernah beliin aku coklat. Mungkin kecil, tapi aku suka bagaimana perhatian kecil seperti itu bisa bikin aku merasa diperhatikan."
    },

    {
        number: "05",
        title: "Fresh Flowers",
        text: "Di akhir KKN kamu kasih aku fresh flower. Sampai sekarang momen itu masih jadi salah satu kenangan yang paling aku suka. 🌷"
    }

];


function openMemoryNote(index) {

    const data =
        memoryNotes[index];

    const modal =
        document.getElementById(
            "memoryNoteModal"
        );

    const number =
        document.getElementById(
            "modalNoteNumber"
        );

    const title =
        document.getElementById(
            "modalNoteTitle"
        );

    const text =
        document.getElementById(
            "modalNoteText"
        );

    if (!modal || !data) {
        return;
    }

    number.textContent =
        data.number;

    title.textContent =
        data.title;

    text.textContent =
        data.text;

    modal.classList.add("active");

    document.body.classList.add("locked");
}


function closeMemoryNote() {

    const modal =
        document.getElementById(
            "memoryNoteModal"
        );

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    if (
        !document.getElementById(
            "photoLightbox"
        ).classList.contains("active") &&
        !opening.classList.contains("hide")
    ) {
        document.body.classList.add("locked");
    } else if (
        !document.getElementById(
            "photoLightbox"
        ).classList.contains("active")
    ) {
        document.body.classList.remove("locked");
    }
}


/* =========================
   LOVE CARD
========================= */

function openLoveCard(card) {

    card.classList.toggle("flipped");
}


/* =========================
   WISH
========================= */

function makeWish() {

    const result =
        document.getElementById(
            "wishResult"
        );

    const flame =
        document.getElementById(
            "wishFlame"
        );

    if (!result) {
        return;
    }

    /* LILIN PADAM */

    if (flame) {

        flame.classList.add(
            "off"
        );

    }

    /* TAMPILKAN HASIL */

    result.classList.add(
        "active"
    );

    /* EFEK SPARKLE */

    createSparkles(18);

    /* SCROLL KE HASIL */

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================
   FINAL GIFT
========================= */

function openFinalGift() {

    const button =
        document.getElementById(
            "giftBoxButton"
        );

    const message =
        document.getElementById(
            "finalGiftMessage"
        );

    if (!button || !message) {
        return;
    }

    button.style.pointerEvents =
        "none";

    button.style.transform =
        "scale(.9)";

    button.style.opacity =
        "0";

    setTimeout(function () {

        button.style.display =
            "none";

        message.classList.add(
            "active"
        );

        createSparkles(30);

    }, 500);
}

/* =========================
   FINAL MESSAGE
========================= */

function openFinalMessage() {

    const message = document.getElementById("finalMessage");

    if (!message) {
        alert("Pesan tidak ditemukan.");
        return;
    }

    message.style.display = "block";
    message.style.opacity = "1";
    message.style.visibility = "visible";

    message.classList.add("active");

    createSparkles(25);

    setTimeout(function () {
        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
}

/* =========================
   LIGHTBOX
========================= */

function openPhoto(src) {

    const lightbox =
        document.getElementById(
            "photoLightbox"
        );

    const bigPhoto =
        document.getElementById(
            "bigPhoto"
        );

    if (!lightbox || !bigPhoto) {
        return;
    }

    bigPhoto.src =
        src;

    lightbox.classList.add(
        "active"
    );

    document.body.classList.add(
        "locked"
    );
}


function closePhoto() {

    const lightbox =
        document.getElementById(
            "photoLightbox"
        );

    if (!lightbox) {
        return;
    }

    lightbox.classList.remove(
        "active"
    );

    if (
        !document.getElementById(
            "memoryNoteModal"
        ).classList.contains("active") &&
        opening.classList.contains("hide")
    ) {
        document.body.classList.remove(
            "locked"
        );
    }
}


/* =========================
   SPARKLE EFFECT
========================= */

function createSparkles(amount = 12) {

    for (let i = 0; i < amount; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.textContent =
            Math.random() > .5
                ? "✦"
                : "♡";

        sparkle.style.position =
            "fixed";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.color =
            "#8dc9e8";

        sparkle.style.fontSize =
            (10 + Math.random() * 18) + "px";

        sparkle.style.pointerEvents =
            "none";

        sparkle.style.zIndex =
            "20000";

        sparkle.style.opacity =
            "0";

        document.body.appendChild(
            sparkle
        );

        const animation =
            sparkle.animate(
                [
                    {
                        opacity: 0,
                        transform:
                            "translateY(20px) scale(.5) rotate(0)"
                    },
                    {
                        opacity: 1,
                        transform:
                            "translateY(0) scale(1) rotate(90deg)"
                    },
                    {
                        opacity: 0,
                        transform:
                            "translateY(-35px) scale(.4) rotate(180deg)"
                    }
                ],
                {
                    duration:
                        1200 +
                        Math.random() * 900,
                    easing: "ease-out"
                }
            );

        animation.onfinish =
            function () {
                sparkle.remove();
            };
    }
}


/* =========================
   ESCAPE
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closePhoto();
            closeMemoryNote();
        }

    }
);


/* =========================
   KLIK DI LUAR MODAL
========================= */

const memoryModal =
    document.getElementById(
        "memoryNoteModal"
    );

if (memoryModal) {

    memoryModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                memoryModal
            ) {

                closeMemoryNote();
            }

        }
    );
}


/* =========================
   FILTER INPUT ANGKA
========================= */

[
    dayInput,
    monthInput,
    yearInput
].forEach(function (input) {

    if (!input) {
        return;
    }

    input.addEventListener(
        "input",
        function () {

            this.value =
                this.value.replace(
                    /[^0-9]/g,
                    ""
                );
        }
    );
});

/* =========================
   PAGE BY PAGE NAVIGATION
========================= */

let currentStoryPage = 0;

function getStoryPages() {

    return Array.from(
        document.querySelectorAll(
            "#mainContent > .story-page"
        )
    );

}

function showStoryPage(pageNumber) {

    const pages = getStoryPages();

    if (!pages.length) {
        return;
    }

    if (!pages[pageNumber]) {
        return;
    }

    pages.forEach(function (page) {

        page.classList.remove(
            "active-page"
        );

    });

    currentStoryPage = pageNumber;

    pages[pageNumber].classList.add(
        "active-page"
    );

    const progress =
    document.getElementById(
        "storyProgress"
    );

if (progress) {

    const current =
        String(pageNumber + 1).padStart(
            2,
            "0"
        );

    const total =
        String(pages.length).padStart(
            2,
            "0"
        );

    progress.textContent =
        current + " / " + total;
}

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

        if (pages[pageNumber].id === "flower") {

        createFallingFlowers();

    }
   createPageDecorations(
    pages[pageNumber]
);
}

function setupStoryNavigation() {

    const pages = getStoryPages();

    if (!pages.length) {
        return;
    }

    pages.forEach(function (page) {

        const oldButtons =
            page.querySelectorAll(
                ".page-next-btn, .page-back-btn"
            );

        oldButtons.forEach(function (button) {
            button.remove();
        });

    });

    pages.forEach(function (page, index) {

        const buttonContainer =
            document.createElement("div");

        buttonContainer.className =
            "page-navigation";

        if (index > 0) {

            const backButton =
                document.createElement("button");

            backButton.type = "button";

            backButton.className =
                "page-back-btn";

            backButton.textContent =
                "← Back";

            backButton.addEventListener(
                "click",
                function () {

                    showStoryPage(
                        index - 1
                    );

                }
            );

            buttonContainer.appendChild(
                backButton
            );
        }

        if (index < pages.length - 1) {

            const nextButton =
                document.createElement("button");

            nextButton.type = "button";

            nextButton.className =
                "page-next-btn";

            nextButton.textContent =
                "Next →";

            nextButton.addEventListener(
                "click",
                function () {

                    showStoryPage(
                        index + 1
                    );

                }
            );

            buttonContainer.appendChild(
                nextButton
            );
        }

        page.appendChild(
            buttonContainer
        );

    });

}

function createFallingFlowers() {

    const container =
        document.getElementById("fallingFlowers");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const flowers = [
        "🌸",
        "🌷",
        "✿",
        "❀",
        "🌼"
    ];

    for (let i = 0; i < 18; i++) {

        const flower =
            document.createElement("span");

        flower.className =
            "falling-flower";

        flower.textContent =
            flowers[
                Math.floor(
                    Math.random() *
                    flowers.length
                )
            ];

        flower.style.left =
            Math.random() * 100 + "%";

        flower.style.fontSize =
            (14 + Math.random() * 14) + "px";

        flower.style.animationDuration =
            (6 + Math.random() * 7) + "s";

        flower.style.animationDelay =
            (-Math.random() * 8) + "s";

        container.appendChild(
            flower
        );

    }

}

function createPageDecorations(page) {

    if (!page) {
        return;
    }

    /* =====================================
       SPARKLES
    ===================================== */

    let sparkleContainer =
        page.querySelector(".page-sparkles");

    if (!sparkleContainer) {

        sparkleContainer =
            document.createElement("div");

        sparkleContainer.className =
            "page-sparkles";

        page.insertBefore(
            sparkleContainer,
            page.firstChild
        );
    }

    sparkleContainer.innerHTML = "";

    const sparkleCount = 14;

    for (
        let i = 0;
        i < sparkleCount;
        i++
    ) {

        const sparkle =
            document.createElement("span");

        sparkle.className =
            "page-sparkle";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.animationDelay =
            Math.random() * 3 + "s";

        sparkle.style.animationDuration =
            2.5 +
            Math.random() * 2 +
            "s";

        sparkleContainer.appendChild(
            sparkle
        );
    }


    /* =====================================
       HEARTS
    ===================================== */

    let heartContainer =
        page.querySelector(".page-hearts");

    if (!heartContainer) {

        heartContainer =
            document.createElement("div");

        heartContainer.className =
            "page-hearts";

        page.insertBefore(
            heartContainer,
            page.firstChild
        );
    }

    heartContainer.innerHTML = "";

    const heartCount =
        page.id === "love" ||
        page.id === "wish" ||
        page.id === "final"
            ? 8
            : 4;

    for (
        let i = 0;
        i < heartCount;
        i++
    ) {

        const heart =
            document.createElement("span");

        heart.className =
            "page-heart";

        heart.textContent =
            Math.random() > 0.5
                ? "♡"
                : "♥";

        heart.style.left =
            Math.random() * 95 + "%";

        heart.style.top =
            15 +
            Math.random() * 75 +
            "%";

        heart.style.animationDelay =
            Math.random() * 6 + "s";

        heart.style.animationDuration =
            5 +
            Math.random() * 4 +
            "s";

        heartContainer.appendChild(
            heart
        );
    }


    /* =====================================
       BIRTHDAY CAKE
    ===================================== */

    const cakePages = [
        "hero",
        "littleThings",
        "love",
        "reasons",
        "wish",
        "gift",
        "final"
    ];

    if (
        cakePages.includes(page.id)
    ) {

        let cake =
            page.querySelector(
                ".birthday-cake"
            );

        if (!cake) {

            cake =
                document.createElement("div");

            cake.className =
                "birthday-cake";

            cake.setAttribute(
                "aria-hidden",
                "true"
            );

            cake.innerHTML = `
                <div class="cake-glow"></div>

                <div class="candles">

                    <span class="candle">
                        <span class="flame"></span>
                    </span>

                    <span class="candle">
                        <span class="flame"></span>
                    </span>

                    <span class="candle">
                        <span class="flame"></span>
                    </span>

                </div>

                <div class="cake-top"></div>

                <div class="cake-body"></div>

                <div class="cake-decoration">
                    <span>♡</span>
                    <span>♡</span>
                    <span>♡</span>
                </div>
            `;

            page.appendChild(cake);
        }
    }

}