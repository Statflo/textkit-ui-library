import React from "react";
import TextInput from "../src/components/TextInput/TextInput";

export default { title: "Text Input" };

const Template = (args: any) => (
    <div className="w-96">
        <TextInput
            placeholder={args.placeholder}
            value={args.value}
            error={args.error}
        />
    </div>
)

export const Default = Template.bind({});
Default.args = {
    placeholder: 'My placeholder',
    value: '',
    error: false
}

export const WithValue = () => {
    return <TextInput value="With value" />
};

export const WithError = () => {
    return <TextInput value="Error value" error />
};