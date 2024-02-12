interface Anime {
    name: string;
    img: string;
}


let animeList: Anime[] = []

// best practice, update state through return and not the state from the function itself.
async function fetchAnimeData(): Promise<Anime[]> {
    try {
        const response = await fetch('../animes.json');
        animeList = await response.json();
    } catch (error) {
        console.error('Error fetching anime data:', error);
        return [];
    }
}

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
