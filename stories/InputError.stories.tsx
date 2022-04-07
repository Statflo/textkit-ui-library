import React from "react";
import InputError from "../src/components/InputError/InputError";

export default { title: "Input Error" };

const Template = (args: any) => (
    <InputError>
        {args.errorMessage}
    </InputError>
)

export const Default = Template.bind({});
Default.args = {
    errorMessage: 'My error message',
}
