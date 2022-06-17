import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Segment, { SegmentProps } from '../Segment';

export default { title: 'Navigation/Segment' } as ComponentMeta<typeof Segment>;

const Template: ComponentStory<typeof Segment> = (args: SegmentProps) => (
  <div className="w-96">
    <Segment
      activeIndex={args.activeIndex}
      items={args.items}
      onChange={() => null}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: ['First', 'Second', 'Third'],
  activeIndex: 0,
};
