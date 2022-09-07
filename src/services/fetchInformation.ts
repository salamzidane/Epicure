import { url } from "../constants/url";

export async function fetchInformation() {
    const response = await fetch(url)
    .then(response => response.json());
    return response;
}
