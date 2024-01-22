import React from 'react'
import { Text, Divider, Alert } from '@mantine/core';
import CodeSnippet from './CodeSnippet';
import { VykricnikIcon } from '../Components/Icons';
import Indicator from './Indicator';

const NativeBody = ({ currentNative }) => {
    if (!currentNative) return (
        <div> DXD </div>
    )


    const aliases = currentNative.data?.aliases
        && currentNative.data.aliases
            .filter(alias => alias !== currentNative.hash)
            .map(alias => (
                <Text size="1rem" c="dimmed" key={alias}>
                    {alias}
                </Text>
            ));
    return (
        <div>
            {/* Header */}
            <section style={{ display: "flex", flexDirection: "row", columnGap: "1rem" }}>
                <Indicator apiset={currentNative.data?.apiset}/>
                <div>
                    <Text size="2rem" fw={700}>{currentNative.data?.name || currentNative.hash}</Text>
                    <Text size="1rem" c="dimmed">{currentNative.data?.name && currentNative.hash}</Text>
                    <div style={{ display: "flex", flexDirection: "row" }}>{aliases}</div>
                </div>

            </section>

            <section>
                <CodeSnippet />
                <Divider my="md" />
            </section>

            {
                currentNative.data?.description ? (
                    <section>
                        <Text size="lg">Description</Text>
                        <Text>{currentNative.data.description}</Text>
                        <Divider my="md" />
                    </section>
                ) : (
                    <>
                        <Divider my="md" />
                        <Alert variant="light" color="rgba(161, 122, 26, 1)" icon={<VykricnikIcon />}>
                            <Text w="600">This native seems to not have enough data provided.</Text>

                        </Alert>
                        <Divider my="md" />
                    </>
                )
            }

            {JSON.stringify(currentNative)}
        </div>
    )
}

export default NativeBody
