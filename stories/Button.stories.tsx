import React from "react";
import Button from "../src/components/Button/Button";

export default { title: "Button" };

const Template = (args: any) => (
    <Button
        disabled={args.disabled}
        small={args.small}
        large={args.large}
        secondary={args.secondary}
        reversed={args.reversed}
        fullWidth={args.fullWidth}
    >
        {args.label}
    </Button>
);

export const Default = Template.bind({});
Default.args = {
    label: 'Button Label',
    small: false,
    large: false,
    disabled: false,
    secondary: false,
    reversed: false,
    fullWidth: false,
};