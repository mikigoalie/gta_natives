import React, { useEffect, useState } from 'react';
import { AppShell, Burger, Group, Accordion, ScrollArea, TextInput, SegmentedControl } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NativesList from '../assets/natives.json';
import CFXNativesList from '../assets/cfx.json';
import NativeBody from '../Components/NativeBody';
import { SearchIcon } from '../Components/Icons';

const styledNativeName = native => {
    const words = native.toLowerCase().split('_');
    const camelCaseWords = words.map((word, index) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    );

    return camelCaseWords.join('');
}


export default function Container() {
    const [opened, { toggle }] = useDisclosure();
    const [tab, setTab] = useState("fivem");
    const [currentNative, setCurrentNative] = useState(false);

    return (
        <AppShell
/*             header={{ height: 60 }} */
            navbar={{ width: 350, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Navbar>
                <TextInput
                    leftSection={<SearchIcon />}
                    style={{ padding: "1rem" }}
                    leftSectionPointerEvents="none"
                    placeholder="Search natives"
                />

                <div style={{ width: "100%", padding: "1rem" }}>
                    <SegmentedControl
                        w="100%"
                        value={tab}
                        onChange={setTab}
                        defaultValue="fivem"
                        data={[
                            { label: 'FiveM', value: 'fivem' },
                            { label: 'CFX', value: 'cfx' },
                        ]}
                    />
                </div>


                <ScrollArea offsetScrollbars h='100%' style={{ display: "flex", padding: "0.25rem" }} scrollbarSize={12}>
                    {
                        Object.keys(tab === "fivem" ? NativesList : CFXNativesList).map((key, index) => (
                            <Accordion
                                key={index}
                                styles={{
                                    item: { border: "none" },
                                    panel: { backgroundColor: "var(--mantine-color-dark-8", marginInline: "1rem" }
                                }}
                            >
                                <Accordion.Item key={key} value={key}>
                                    <Accordion.Control>{key}</Accordion.Control>
                                    <Accordion.Panel>
                                        <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", width: "100%", fontSize: "0.8rem", rowGap: ".5rem" }}>
                                            {
                                                Object.keys(tab === "fivem" ? NativesList[key] : CFXNativesList[key]).map((hash) => (
                                                    <div
                                                        key={hash}
                                                        onClick={() => setCurrentNative({
                                                            hash: hash,
                                                            data: tab === "fivem" ? NativesList[key][hash] : CFXNativesList[key][hash]
                                                        })}

                                                        className={`native-item ${currentNative.hash === hash && 'native-item-selected'}`}
                                                    >
                                                        {
                                                            tab === "fivem" ? (
                                                                NativesList[key][hash].name ? styledNativeName(NativesList[key][hash].name) : hash
                                                            ) : (
                                                                CFXNativesList[key][hash].name ? styledNativeName(CFXNativesList[key][hash].name) : hash
                                                            )
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        ))
                    }
                </ScrollArea>


            </AppShell.Navbar>
            <AppShell.Main m="lg"><NativeBody currentNative={currentNative} /></AppShell.Main>
        </AppShell>
    );
}
