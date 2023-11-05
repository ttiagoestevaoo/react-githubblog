export interface GithubUser {
    login: string
    followers: number
    company: string
    avatar_url: string
}

export interface GithubIssueList {
    body: string
    title: string
    number: number
    created_at:string
}

export interface GithubIssueRetrieve {
    body: string
    title: string
    number: number
    comments: number
    created_at:string
}