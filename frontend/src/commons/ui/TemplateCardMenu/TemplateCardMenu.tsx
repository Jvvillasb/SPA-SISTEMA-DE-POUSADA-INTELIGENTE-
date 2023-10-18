import React from 'react';

import { Menu, MenuList, MenuItem, IconButton } from '@chakra-ui/react';

import { MdMoreVert } from 'react-icons/md';

import { TemplateCardMenuButton } from './TemplateCardMenu.style';
import { TemplateCardMenuAction } from './../../types/TemplateCardMenu';

interface TemplateCardMenuProps {
    actions?: Array<TemplateCardMenuAction>;
}

const TemplateCardMenu: React.FC<TemplateCardMenuProps> = ({
    actions = [],
}) => {
    return (
        <Menu>
            <TemplateCardMenuButton
                as={IconButton}
                variant="outline"
                aria-label="Options"
                icon={<MdMoreVert size="20px" />}
            />
            {actions ? (
                <MenuList>
                    {actions.map((action) => (
                        <MenuItem key={action.label} onClick={action.onClick}>
                            {action.label}
                        </MenuItem>
                    ))}
                </MenuList>
            ) : null}
        </Menu>
    );
};

export default TemplateCardMenu;
