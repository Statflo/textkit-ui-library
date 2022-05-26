import React from "react";
import Button from "../src/components/Button/Button";

export default {
    title: "Button",
    component: Button,
    decorators: [
        (Story) => (
            <div className="items-center flex gap-4">
                <Story />
            </div>
        )
    ]
};

const Template = (args: any) => (
    <>
        <Button {...args} size="small" />
        <Button {...args} size="medium" />
        <Button {...args} size="large" />
    </>
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button Label',
    disabled: false,
    fullWidth: false,
    variant: 'primary',
    icon: {
        name: 'plus',
        position: 'leading',
    },
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button Label',
    disabled: false,
    fullWidth: false,
    variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Button Label',
    disabled: false,
    fullWidth: false,
    variant: 'tertiary',
}

export const Icon = Template.bind({});
Icon.args = {
    icon: {
        name: 'plus',
        position: 'only',
    },
    variant: 'primary',
}