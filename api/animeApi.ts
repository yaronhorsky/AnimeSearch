import { Anime } from "../types/types";

export async function fetchAnimeData(): Promise<Anime[]> {
    try {
        const response = await fetch('../db/animes_db.json');
        const animeList = await response.json();
        return animeList
    } catch (error) {
        console.error('Error fetching anime data:', error);
        return [];
    }
}

export function getFilteredAnimes(animeList: Anime[], searchInput: string) {
    const filteredAnimes = animeList.filter((anime) => {
        return anime.name.toLowerCase().includes(searchInput)
    })
    return filteredAnimes
}
