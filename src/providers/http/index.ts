import axios from "axios";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

const github = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000,
    headers: {'X-GitHub-Api-Version': '2022-11-28', 'Authorization': GITHUB_TOKEN}
});


export { github }