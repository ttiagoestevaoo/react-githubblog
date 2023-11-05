import { useQuery } from "react-query"
import { fetchIssues } from "../../../../../providers/services/github"
import { getDistanceToNow } from "../../../../../providers/formatters"
import { SearchInput } from "../../../../components/SearchInput"
import { useState } from "react"
import { IssueCard } from "../IssueCard"
import { IssueCardSkeleton } from "../IssueCardSkeleton"
import { useNavigate } from "react-router-dom"
import { GithubIssueList } from "../../../../../providers/services/github/types"

const formatIssue = (issue: GithubIssueList) => ({...issue, created_at: getDistanceToNow(issue.created_at)})


export function Issues() {
    const [search, setSearch] = useState('')
    const {data, isLoading} = useQuery(['issues', {search}], () => fetchIssues(search), {
        select: (issues) => issues.map(formatIssue),
        refetchOnWindowFocus: false
    })

    const issuesCount = data?.length ?? 0

    const navigate = useNavigate()

    const goToIssueDetails = (id: number) => {
        navigate(`/${id}`)
    }
    
    return (
        <div className="mt-36">
            <div className="flex justify-between">
                <h3 className="text-base-title text-sm ">Publicações</h3>
                <span className=" text-base-title text-sm">{issuesCount} publicações</span>
            </div>
            <div className="mt-3 flex">
                <SearchInput value={search} onChange={(value) => setSearch(value)}></SearchInput>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
                {isLoading ? (
                    [...Array(3).keys()].map((index) => {
                        return (
                            <IssueCardSkeleton key={index}></IssueCardSkeleton>
                        )
                    })
                ) : data ? ( data.map(issue => {
                        return (
                                <IssueCard onClick={goToIssueDetails} issue={issue} key={issue.number}></IssueCard>
                            )
                        })
                    ): <></>
                }
            </div>
        </div>
    )
}