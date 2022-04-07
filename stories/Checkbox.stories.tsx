import React from "react";
import Checkbox from "../src/components/Checkbox/Checkbox";
import CheckboxGroup from "../src/components/Checkbox/CheckboxGroup";

export default { title: "Checkbox" };

const Template = (args: any) => (
    <Checkbox
        disabled={args.disabled}
        checked={args.checked}
        onChange={() => null}
    >
        {args.label}
    </Checkbox>
);

export const Default = Template.bind({});
Default.args = {
    label: 'Checkbox Label',
    disabled: false,
    checked: false,
};

export const Group = () => {
    return <CheckboxGroup>
        <Checkbox checked onChange={() => null}>Option 1</Checkbox>
        <Checkbox>Option 2</Checkbox>
        <Checkbox>Option 3</Checkbox>
    </CheckboxGroup>;
};