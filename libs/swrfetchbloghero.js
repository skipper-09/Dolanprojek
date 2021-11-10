import useSwr from "swr";
async function fetcher(url) {
    const res = await fetch(url);
    return res.json();
}
export const FetchHero = () => {
    const url = process.env.PUBLICAPI + "/blogs?header=true";
    const { data, error } = useSwr(url, fetcher);
    if (error) {
        return <div>Error loading</div>;
    }
    if (!data) {
        return <div> loading</div>;
    }
    return { data, error };
};
