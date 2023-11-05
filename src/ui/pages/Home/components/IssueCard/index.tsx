import { GithubIssueList } from "../../../../../providers/services/github/types"

interface IssueCardProps {
    issue: GithubIssueList
    onClick: (id: number) => void
}

export function IssueCard({issue, onClick}: IssueCardProps) {
    return (
        <div className="p-8 rounded-lg border-2 border-base-border h-[16.25rem] hover:cursor-pointer" onClick={() => onClick(issue.number)}>
            <div className="flex gap-4 justify-between items-center">
                <div className="text-lg text-base-text">{issue.title}</div>
                <span className="flex-nowrap text-sm text-base-label whitespace-nowrap">{issue.created_at}</span>
            </div>
            <p className="mt-6 text-base-label text-ellipsis line-clamp-4 leading-relaxed">{issue.body}</p>
        </div>
    )
}