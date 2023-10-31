import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import avatar from "../../../../../assets/avatar.png"

export function Header() {
    return (
        <header className="py-8 px-12 rounded-xl bg-base-profile showdow-xsl relative flex justify-between gap-8">
            <div className='mb-2 h-[148px] w-100 max-w-[148px] '>
                <img src={avatar} alt="" className="h-[148px] w-[148px] max-w-none" />
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <h2 className='text-base-title text-xl'>Cameron Williamson</h2>
                    <button className="uppercase text-blue text-sm flex gap-2 items-center border-text-blue hover:border-b-2">github <FontAwesomeIcon icon={faUpRightFromSquare}></FontAwesomeIcon></button>
                </div>
                <p className='text-base text-base-text mb-4'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae amet sint magni quas consequuntur dolores rem esse maxime eius nemo fuga, 
                    quos nisi, doloremque ipsa, praesentium voluptatum animi ullam iure!
                </p>
                <div className='flex gap-6'>
                    <div className='text-base-subtitle text-base gap-2 flex items-center'>
                        <span><FontAwesomeIcon icon={faGithub} /></span>
                        <span>cameronwll</span>
                    </div>
                    <div className='text-base-subtitle text-base gap-2 flex items-center'>
                        <span><FontAwesomeIcon icon={faBuilding} /></span>
                        <span>Rocketseat</span>
                    </div>
                    <div className='text-base-subtitle text-base gap-2 flex items-center'>
                        <span><FontAwesomeIcon icon={faUserGroup} /></span>
                        <span>32</span>
                        <span>seguidores</span>
                    </div>
                </div>
            </div>
        </header>
    )
}