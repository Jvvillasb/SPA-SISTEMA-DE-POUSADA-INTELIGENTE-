import React from 'react';

import { IllustratedStateProps } from './IllustratedState.types';

import {
    IllustratedStateContainer,
    IllustratedStateContainerTitle,
    IllustratedStateContainerContent,
    IllustratedStateContainerSubtitle,
} from './IllustratedState.style';

const IllustratedState: React.FC<IllustratedStateProps> = ({
    title,
    subtitle,
    children,
}) => {
    return (
        <IllustratedStateContainer>
            <IllustratedStateContainerTitle>
                {title}
            </IllustratedStateContainerTitle>
            {subtitle ? (
                <IllustratedStateContainerSubtitle>
                    {subtitle}
                </IllustratedStateContainerSubtitle>
            ) : null}
            {children ? (
                <IllustratedStateContainerContent>
                    {children}
                </IllustratedStateContainerContent>
            ) : null}
        </IllustratedStateContainer>
    );
};

export default IllustratedState;
