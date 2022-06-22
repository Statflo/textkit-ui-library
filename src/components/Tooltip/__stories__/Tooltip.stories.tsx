import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { classNames } from '../../../utils/classnames';
import Tooltip, { TooltipProps } from '../Tooltip';

export default {
  title: 'Popover/Tooltip',
  component: Tooltip,
  args: {
    shouldDismissOnClick: false,
    shouldShowOnMount: true,
  },
  decorators: [
    (Story) => (
      <div className="items-center flex gap-4 h-15">
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      exclude: ['shouldDismissOnClick', 'shouldShowOnMount'],
    },
  },
} as ComponentMeta<typeof Tooltip>;

const DefaultTemplate: ComponentStory<typeof Tooltip> = (
  args: TooltipProps
) => (
  <div
    className={classNames(
      'flex h-full w-24',
      args.position === 'top' && 'items-end justify-center',
      args.position === 'right' && 'items-center justify-start',
      args.position === 'bottom' && 'items-start justify-center',
      args.position === 'left' && 'items-center justify-end'
    )}
  >
    <Tooltip {...args}>
      <div aria-hidden={true} className="h-px invisible w-px" />
    </Tooltip>
  </div>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  text: 'Lorem Ipsum',
  position: 'top',
};

const PositionsTemplate: ComponentStory<typeof Tooltip> = (
  args: TooltipProps
) => (
  <>
    <Default {...args} position="top" text="Top" />
    <Default {...args} position="right" text="Right" />
    <Default {...args} position="bottom" text="Bottom" />
    <Default {...args} position="left" text="Left" />
  </>
);

export const Positions = PositionsTemplate.bind({});
Positions.args = {};
Positions.parameters = {
  controls: {
    exclude: /./,
    hideNoControlsWarning: true,
  },
};

const LongTemplate: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <div
    className={classNames(
      'flex h-full w-44',
      args.position === 'top' && 'items-end justify-center',
      args.position === 'right' && 'items-center justify-start',
      args.position === 'bottom' && 'items-start justify-center',
      args.position === 'left' && 'items-center justify-end'
    )}
  >
    <Tooltip {...args}>
      <div className="h-px w-px" />
    </Tooltip>
  </div>
);

export const Long = LongTemplate.bind({});
Long.args = {
  text: 'The contact is already in DNC List',
  position: 'right',
};
