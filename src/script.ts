import { Anime } from "../types/types";

let animeList: Anime[] = []

document.addEventListener("DOMContentLoaded", () => {
    fetchAnimeData().then(() => {
        setTimeout(() => {
            const gallery = document.getElementById("gallery")
            const searchInput = document.getElementById("searchInput") as HTMLInputElement
            searchInput.disabled = false
            searchInput.placeholder = "search for an anime!"
                



            renderAnimes(animeList)

            searchInput.addEventListener("input", () => {
                const filteredAnimes = animeList.filter((anime) => {
                    return anime.name.toLowerCase().includes(searchInput.value.toLowerCase())
                })
                //adding filtered animes to screen
                renderAnimes(filteredAnimes)
            })
        }, 3000);
    })
})

function renderAnimes(animes: Anime[]) {
    const gallery = document.getElementById("gallery")
    // remove all child elements to render only correct ones.
    if (gallery) {
        gallery.innerHTML = ""
    }
    animes.forEach((anime) => {
        console.log(anime)

        const animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");

        const animeName = document.createElement("div");
        animeName.innerText = anime.name;

        const animeImage = document.createElement("img");
        animeImage.src = anime.img;

        animeCard.appendChild(animeName);
        animeCard.appendChild(animeImage);

        gallery?.appendChild(animeCard)
    })

    console.log(animes)

}
