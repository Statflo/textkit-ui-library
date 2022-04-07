import React from "react";
import Segment from "../src/components/Segment/Segment";

export default { title: "Segment" };

const Template = (args: any) => (
    <div className="tk-w-96">
        <Segment
            activeIndex={args.activeIndex}
            items={args.items}
            onChange={() => null}
        />
    </div>
)

export const Default = Template.bind({});
Default.args = {
    items: ['First','Second','Third'],
    activeIndex: 0
}
