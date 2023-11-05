import { github } from "../../http"
import { GithubIssueList, GithubIssueRetrieve, GithubUser } from "./types"

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME
const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO

export async function retrieveUser(): Promise<null | GithubUser>  {
    const URL = `/users/${GITHUB_USERNAME}`
    const data = (await github.get(URL)).data

    if (data) {
        return {
            login: data.login,
            followers: data.followers,
            company: data.company ?? 'Não possuí',
            avatar_url: data.avatar_url
        }
    }


    return null
}

export async function fetchIssues(search: string): Promise<GithubIssueList[]>  {
    const params = new URLSearchParams(`q=${search} repo:${GITHUB_USERNAME}/${GITHUB_REPO}`);

    const URL = `/search/issues?${params.toString()}`
    const {items} =  (await github.get(URL)).data
    
    return items.map((data: GithubIssueList) => ({
        body: data.body,
        title: data.title,
        number: data.number,
        created_at:data.created_at
    }), )
}


export async function retrieveIssue(githubNumber: string): Promise<null | GithubIssueRetrieve>  {
    const URL = `/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/issues/${githubNumber}`
    const data = (await github.get(URL)).data

    if(data) return {
        body: data.body,
        title: data.title,
        number: data.number,
        created_at:data.created_at,
        comments:data.comments
    }

    return null
}