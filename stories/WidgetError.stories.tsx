import React from "react";
import WidgetError from "../src/components/WidgetError/WidgetError";

export default { title: "Widget Error" };

const Template = (args: any) => (
    <div className="tk-w-96">
        <WidgetError>
            {args.message}
        </WidgetError>
    </div>
)

export const Default = Template.bind({});
Default.args = {
    message: 'You have a widget error',
}

export const WithRefreshFunction = () => {
    return <div className="tk-w-96">
        <WidgetError onRefresh={() => null}>
            You have a widget error
        </WidgetError>
    </div>
    
};