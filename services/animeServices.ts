import { fetchAnimeData, getFilteredAnimes } from "../api/animeApi"

export function handleSearchInput() {
    const searchInput = document.getElementById("searchInput") as HTMLInputElement
    searchInput.disabled = false
    searchInput.placeholder = "search for an anime!"

    searchInput.addEventListener("input", async () => {
        const animeList = await fetchAnimeData()
        const filteredAnimes = getFilteredAnimes(animeList, searchInput.value)
        //adding filtered animes to screen
        renderAnimes(filteredAnimes)
    })

}
