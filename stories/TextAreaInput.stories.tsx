import React from "react";
import TextAreaInput from "../src/components/TextAreaInput/TextAreaInput";

export default { title: "Textarea Input" };

const Template = (args: any) => (
    <div className="w-96">
        <TextAreaInput
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
    return <TextAreaInput value="With value" />
};

export const WithError = () => {
    return <TextAreaInput value="Error value" error />
};