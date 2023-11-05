import Markdown from 'react-markdown'
import './style.css'
import {PrismAsyncLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface IssueMarkdownProps {
    body: string
}

export function IssueMarkdown({body}: IssueMarkdownProps) {
    return (
        <div className="px-8 py-10" >
            <Markdown className="markdown" components={{
                code(props) {
                    const {children} = props

                    return (
                      <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={dracula}
                      language='javascript'
                      PreTag="div"
                    />
                    )
                }
            }}>{body}</Markdown>
        </div>
    )
}