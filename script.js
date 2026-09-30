const openBtn =
    document.getElementById("openBtn");

const opening =
    document.getElementById("opening");


openBtn.onclick = function () {

    opening.classList.add("hide");

    setTimeout(function () {

        opening.style.display = "none";

        document.body.classList.remove("locked");

    }, 1000);

};


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


function shuffle(array) {

    const result =
        array.slice();

    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        const temp =
            result[i];

        result[i] =
            result[randomIndex];

        result[randomIndex] =
            temp;

    }

    return result;

}


const shuffledPhotos =
    shuffle(photos);


const captions = [

    "One of my favorite moments 💙",

    "Us, being us.",

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
            shuffledPhotos[i];

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
   TOMBOL LIHAT SEDIKIT
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

        featured.classList.add(
            "memories-visible"
        );

    }


    if (allMemoriesBtn) {

        allMemoriesBtn.classList.add(
            "memories-visible"
        );

    }


    if (memoryOpenBtn) {

        memoryOpenBtn.style.display =
            "none";

    }

}


/* =========================
   20 FOTO
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
        i < shuffledPhotos.length;
        i++
    ) {

        const item =
            document.createElement("div");

        item.className =
            "gallery-item";


        const img =
            document.createElement("img");

        img.src =
            shuffledPhotos[i];

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

    const gallerySection =
        document.getElementById(
            "gallery"
        );


    if (!gallerySection) {
        return;
    }


    displayGallery();


    gallerySection.style.display =
        "flex";


    setTimeout(function () {

        gallerySection.scrollIntoView({
            behavior: "smooth"
        });

    }, 50);

}


/* =========================
   SEMBUNYIKAN GALERI SAAT AWAL
========================= */

const gallerySection =
    document.getElementById(
        "gallery"
    );


if (gallerySection) {

    gallerySection.style.display =
        "none";

}


/* =========================
   LIGHTBOX FOTO
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


    document.body.classList.remove(
        "locked"
    );

}


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closePhoto();

        }

    }
);