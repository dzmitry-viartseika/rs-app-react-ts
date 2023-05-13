export default interface ICardItem {
    created: string,
    episode: string[],
    gender: string,
    id: number,
    image: string,
    name: string,
    location: {
        name: string,
        url: string,
    },
    origin: {
        name: string,
        url: string,
    },
    species: string,
    status: string,
    type: string,
    url: string,
}