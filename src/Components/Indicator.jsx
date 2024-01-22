import React from 'react';
import { Tooltip } from '@mantine/core';

const Indicator = ({ apiset }) => {
    let color = "green";
    let apiSet = "Both";
    switch (apiset) {
        case 'server':
            apiSet = "server";
            color = "blue";
            break;
        case 'client':
            apiSet = "client";
            color = "orange";
            break;
    }

    return <Tooltip withArrow={true} color="dark.5" label={`This native is ${apiSet} sided`}>
        <div style={{ width: "1rem", backgroundColor: color, borderRadius: "1rem" }} />
    </Tooltip>;
}

export default Indicator;
