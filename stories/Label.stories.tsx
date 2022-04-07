import React from "react";
import Label from "../src/components/Label/Label";

export default { title: "Label" };

const Template = (args: any) => (
    <Label required={args.required}>
        {args.label}
    </Label>
)

export const Default = Template.bind({});
Default.args = {
    label: 'My label',
    required: false,
}

export const Required = () => {
    return <Label required>My Label</Label>
};