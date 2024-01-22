import React from 'react'
import { CodeHighlight } from '@mantine/code-highlight';

const CodeSnippet = ({ snippet, language }) => {
    if (!snippet) return;

    return <CodeHighlight copyLabel="Copy snippet" copiedLabel="Copied" code={snippet} language={language || 'lua'} />;
}

export default CodeSnippet
