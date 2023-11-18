import { Box, Flex } from '@chakra-ui/react';
import {
    TemplateCardBody,
    TemplateCardTitle,
    TemplateCardAvatar,
    TemplateCardBodyText,
    TemplateCardContainer,
    TemplateCardCheckbox,
} from './TemplateCard.style';

import TemplateCardMenu from '../TemplateCardMenu/TemplateCardMenu';
import { TemplateCardMenuAction } from './../../types/TemplateCardMenu';
import Badge from '../Badge/Badge';

interface TemplateCardProps {
    id?: number;
    title: string;
    subtitle: string;
    bodyItems: string[];
    actions?: Array<TemplateCardMenuAction>;
    statusColor?: string;
    iconCard?: React.ReactElement;
    showCheckboxes?: boolean;
    selectedIds?: number[];
    onCheckboxChange?: (id: number, checked: boolean) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
    title,
    subtitle,
    bodyItems,
    actions = [],
    statusColor,
    iconCard,
    showCheckboxes = false,
    selectedIds,
    onCheckboxChange,
    id,
}) => {
    return (
        <TemplateCardContainer hasActions={!!actions.length}>
            <Flex>
                {actions.length ? <TemplateCardMenu actions={actions} /> : null}
                {showCheckboxes && onCheckboxChange && id && (
                    <TemplateCardCheckbox
                        isChecked={selectedIds?.includes(id)}
                        onChange={(e) => onCheckboxChange(id, e.target.checked)}
                        size={'lg'}
                        colorScheme="green"
                    />
                )}
            </Flex>
            <Flex alignItems="center" gap="4">
                {iconCard && <TemplateCardAvatar icon={iconCard} />}
                {!iconCard && <TemplateCardAvatar />}
                <Box>
                    <TemplateCardTitle noOfLines={1} size="md">
                        {title}
                    </TemplateCardTitle>
                    <Badge
                        variant="outline"
                        colorScheme={statusColor || 'green'}
                        noOfLines={1}
                        w={'fit-content'}
                    >
                        {subtitle}
                    </Badge>
                </Box>
            </Flex>
            <TemplateCardBody>
                {bodyItems.map((bodyItem, bodyIndex) => (
                    <TemplateCardBodyText key={bodyIndex}>
                        {bodyItem}
                    </TemplateCardBodyText>
                ))}
            </TemplateCardBody>
        </TemplateCardContainer>
    );
};

export default TemplateCard;
