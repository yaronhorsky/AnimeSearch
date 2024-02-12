"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let animeList = [];
function fetchAnimeData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('../animes.json');
            animeList = yield response.json();
        }
        catch (error) {
            console.error('Error fetching anime data:', error);
            return [];
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    fetchAnimeData().then(() => {
        setTimeout(() => {
            const gallery = document.getElementById("gallery");
            const searchInput = document.getElementById("searchInput");
            searchInput.disabled = false;
            searchInput.placeholder = "search for an anime!";
            renderAnimes(animeList);
            searchInput.addEventListener("input", () => {
                const filteredAnimes = animeList.filter((anime) => {
                    return anime.name.toLowerCase().includes(searchInput.value.toLowerCase());
                });
                //adding filtered animes to screen
                renderAnimes(filteredAnimes);
            });
        }, 500);
    });
});
function renderAnimes(animes) {
    const gallery = document.getElementById("gallery");
    // remove all child elements to render only correct ones.
    if (gallery) {
        gallery.innerHTML = "";
    }
    animes.forEach((anime) => {
        console.log(anime);
        const animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");
        const animeName = document.createElement("div");
        animeName.innerText = anime.name;
        const animeImage = document.createElement("img");
        animeImage.src = anime.img;
        animeCard.appendChild(animeName);
        animeCard.appendChild(animeImage);
        gallery === null || gallery === void 0 ? void 0 : gallery.appendChild(animeCard);
    });
    console.log(animes);
}
