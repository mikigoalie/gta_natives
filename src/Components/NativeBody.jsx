import React from 'react'
import { Code } from '@mantine/core';
import CodeSnippet from './CodeSnippet';

const NativeBody = ({ currentNative }) => {
    if (!currentNative) return (
        <div> DXD </div>
    )


    return (
        <div>
            <p>{currentNative.data?.name || currentNative.hash}</p>

            <CodeSnippet/>
            {JSON.stringify(currentNative)}
        </div>
    )
}

export default NativeBody
