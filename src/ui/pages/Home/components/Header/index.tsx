import { faUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useQuery } from 'react-query'
import { retrieveUser } from '../../../../../providers/services/github'
import { Link } from '../../../../components/Link'
import { useGithubLink } from '../../../../../providers/hooks'
import { FAIcon } from '../../../../components/FAIcon'
import { TitleL } from '../../../../components/TitleL'
import { Tag } from '../../../../components/Tag'


export function Header() {
    const {data, isLoading} = useQuery(['github', 'username'], () => retrieveUser(), {refetchOnMount: false, refetchOnWindowFocus: false})
    const { githubRepoUrl } = useGithubLink()

    if (isLoading) return <p>Carregando</p>

    if (data) {
        return (
            <header className="py-8 px-12 rounded-xl bg-base-profile showdow-xsl relative flex justify-between gap-8">
                <div className='mb-2 h-[148px] w-100 max-w-[148px]'>
                    <img src={data.avatar_url} alt="" className="h-[148px] w-[148px] max-w-none rounded" />
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <TitleL>Tiago Estevão</TitleL>
                        <Link url={githubRepoUrl}>github <FAIcon icon={faUpRightFromSquare}></FAIcon></Link>
                    </div>
                    <p className='text-base text-base-text mb-4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae amet sint magni quas consequuntur dolores rem esse maxime eius nemo fuga, 
                        quos nisi, doloremque ipsa, praesentium voluptatum animi ullam iure!
                    </p>
                    <div className='flex gap-6'>
                        <Tag description={data.login} icon={faGithub}></Tag>
                        <Tag description={data.company} icon={faBuilding}></Tag>
                        <Tag description={data.followers} icon={faUserGroup}></Tag>
                    </div>
                </div>
            </header>
        )
    }
   
}