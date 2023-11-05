export function useGithubLink() {
    const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME
    const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO
     
    const githubUrl = `https://github.com`
    const githubRepoUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}`

    return {githubUrl, login: GITHUB_USERNAME, githubRepoUrl }
}