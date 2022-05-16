import React from "react";
import Stages from "../src/components/Stages/Stages";

export default { title: "Stages" };

const Template = (args: any) => (
    <div className="w-96">
        <Stages completed={args.completed} stages={args.stages} />
    </div>
)

export const Default = Template.bind({});
Default.args = {
    completed: 0,
    stages: 5,
}

export const HalfWay = () => {
    return <div className="w-96">
        <Stages completed={2} stages={5} />
    </div>    
};

export const Full = () => {
    return <div className="w-96">
        <Stages completed={5} stages={5} />
    </div>    
};