import React from "react";
import Loader from "../src/components/Loader/Loader";

export default { title: "Loader" };

const Template = (args: any) => (
    <div className="w-96">
        <Loader>
            {args.message}
        </Loader>
    </div>
)

export const Default = Template.bind({});
Default.args = {
    message: 'Please wait while we load your information.',
}
