import React from "react";
import Button from "../src/components/Button/Button";

export default {
    title: "Button",
    component: Button,
    decorators: [
        (Story) => (
            <div className="items-center flex flex-col md:flex-row gap-4">
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
    disabled: false,
    fullWidth: false,
    icon: {
        name: 'plus',
        position: 'leading',
    },
    label: 'Button Label',
    variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    disabled: false,
    fullWidth: false,
    label: 'Button Label',
    variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    disabled: false,
    fullWidth: false,
    label: 'Button Label',
    variant: 'tertiary',
}

export const Icon = Template.bind({});
Icon.args = {
    icon: {
        name: 'plus',
        position: 'only',
    },
    label: 'Button Label',
    variant: 'primary',
}