import React from "react";
import Tag from "../src/components/Tag/Tag";

export default { title: "Tag", argTypes: {
    type: {
        options: ['default', 'success', 'warning', 'danger', 'info'],
        control: { type: 'radio' }
    }
} };

const Template = (args: any) => (
    <div className="w-96">
        <Tag type={args.type}>
            {args.label}
        </Tag>
    </div>
)

export const Default = Template.bind({});
Default.args = {
    label: 'Tag Label',
    type: 'default'
}

export const Success = () => {
    return <div className="w-96">
        <Tag type="success">Success Tag</Tag>
    </div>    
};

export const Warning = () => {
    return <div className="w-96">
        <Tag type="warning">Warning Tag</Tag>
    </div>    
};

export const Danger = () => {
    return <div className="w-96">
        <Tag type="danger">Danger Tag</Tag>
    </div>    
};

export const Info = () => {
    return <div className="w-96">
        <Tag type="info">Info Tag</Tag>
    </div>    
};