import { faCalendar, faChevronLeft, faComment, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/Button";
import { FAIcon } from "../../components/FAIcon";
import { Link } from "../../components/Link";
import { useGithubLink } from "../../../providers/hooks";
import { TitleL } from "../../components/TitleL";
import { Tag } from "../../components/Tag";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IssueMarkdown } from "./components/IssueMarkdown";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { retrieveIssue } from "../../../providers/services/github";
import { GithubIssueRetrieve } from "../../../providers/services/github/types";
import { getDistanceToNow } from "../../../providers/formatters";

const formatIssue = (issue: GithubIssueRetrieve) => ({...issue, created_at: getDistanceToNow(issue.created_at)})


export default function Issue() {
    const { githubRepoUrl, login } = useGithubLink()

    const navigate = useNavigate()

    const params = useParams()

    const {data} = useQuery(['issue', params.id], () => retrieveIssue(params.id ?? ''), {
        select: (issue) => issue ? formatIssue(issue) : null
    })

    const goBackList = () => {
        navigate('..')
    }

    const githubIssueUrl = data ? `${githubRepoUrl}/issues/${data.number}` : '#'


    return (
        <div>
            <header className="py-8 px-12 rounded-xl bg-base-profile showdow-xsl relative flex-col">
                <div className="flex justify-between w-100">
                    <Button onClick={goBackList}>
                        <FAIcon icon={faChevronLeft}></FAIcon>
                        Voltar
                    </Button>
                    <Link url={githubIssueUrl}>
                        Ver no github
                        <FAIcon icon={faUpRightFromSquare}></FAIcon>
                    </Link>
                </div>
                <TitleL className="mt-6">{data ? data.title : 'Carregando' }</TitleL>
                <div className='flex gap-6 mt-3'>
                    <Tag description={login} icon={faGithub}></Tag>
                    <Tag description={`${data ? data.created_at : 'Carregando'}`} icon={faCalendar}></Tag>
                    <Tag description={`${data ? data.comments : 'Carregando' } comentários`} icon={faComment}></Tag>
                </div>
            </header>   
            <IssueMarkdown body={data?.body ?? ''} />
        </div>
    )
}
