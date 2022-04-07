import React from "react";
import FormGroup from "../src/components/FormGroup/FormGroup";
import TextInput from "../src/components/TextInput/TextInput";

export default { title: "Form Group" };

const Template = (args: any) => (
    <FormGroup
        label={args.label}
        error={args.error}
        required={args.required}
    >
        <TextInput
            placeholder={args.placeholder}
            error={args.inputError}
        />
    </FormGroup>
)

export const Default = Template.bind({});
Default.args = {
    label: 'Form label',
    placeholder: 'Form placeholder',
    error: '',
    inputError: false,
    required: false,
}

export const WithError = () => {
    return <FormGroup label="My form label" error="My error message">
        <TextInput error placeholder="Your name" />
    </FormGroup>
};

export const WithRequired = () => {
    return <FormGroup label="My form label" required>
        <TextInput placeholder="Your name" />
    </FormGroup>
};