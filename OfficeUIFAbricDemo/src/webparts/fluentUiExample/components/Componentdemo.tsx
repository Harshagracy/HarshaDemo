import * as React from 'react';
import styles from './FluentUiExample.module.scss';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps, DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownProps, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import {  Toggle, IStackTokens, Stack, IStackItemStyles, DefaultPalette } from 'office-ui-fabric-react';

const verticalGapStackTokens: IStackTokens = {
    childrenGap: 10
};
const stackItemStyles: IStackItemStyles = {
    root: {
        padding: 5,
    },
};
const overflowProps: IButtonProps = { ariaLabel: 'More commands' };
const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 } };
const DropdownControlledMultiExampleOptions = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
];
const _items: ICommandBarItemProps[] = [
    {
        key: 'newItem',
        text: 'New',
        cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
        iconProps: { iconName: 'Add' },
        subMenuProps: {
            items: [
                {
                    key: 'emailMessage',
                    text: 'Email message',
                    iconProps: { iconName: 'Mail' },
                    ['data-automation-id']: 'newEmailButton', // optional
                },
                {
                    key: 'calendarEvent',
                    text: 'Calendar event',
                    iconProps: { iconName: 'Calendar' },
                },
            ],
        },
    },
    {
        key: 'upload',
        text: 'Upload',
        iconProps: { iconName: 'Upload' },
        href: 'https://developer.microsoft.com/en-us/fluentui',
    },
    {
        key: 'share',
        text: 'Share',
        iconProps: { iconName: 'Share' },
        onClick: () => console.log('Share'),
    },
    {
        key: 'download',
        text: 'Download',
        iconProps: { iconName: 'Download' },
        onClick: () => console.log('Download'),
    },
];

const _overflowItems: ICommandBarItemProps[] = [
    { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
    { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
    { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
];

const _farItems: ICommandBarItemProps[] = [
    {
        key: 'tile',
        text: 'Grid view',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Grid view',
        iconOnly: true,
        iconProps: { iconName: 'Tiles' },
        onClick: () => console.log('Tiles'),
    },
    {
        key: 'info',
        text: 'Info',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Info',
        iconOnly: true,
        iconProps: { iconName: 'Info' },
        onClick: () => console.log('Info'),
    },
];
export default class Componentdemo extends React.Component<any, any> {
    public render(): React.ReactElement<any> {
        return (
            <span>
                <CommandBar
                    items={_items}
                    overflowItems={_overflowItems}
                    overflowButtonProps={overflowProps}
                    farItems={_farItems}
                    ariaLabel="Use left and right arrow keys to navigate between commands"
                />
                <Stack tokens={verticalGapStackTokens}>
                    <Dropdown
                        placeholder="Select options"
                        label="Multi-select controlled example"
                        multiSelect
                        options={DropdownControlledMultiExampleOptions}
                        styles={dropdownStyles}
                    />
                  
                    <Toggle label="Enabled" />
                    <Toggle label="Disabled" disabled={true} />

                    <Stack.Item align="start" styles={stackItemStyles}>
                        <DefaultButton text="DefaultButton" />
                    </Stack.Item>
                    <Stack.Item align="start" styles={stackItemStyles}>
                        <PrimaryButton text="PrimaryButton" />
                    </Stack.Item>
                </Stack>
            </span>
        );
    }
} 