import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from '../../Button/Button';
import Dialog from '../Dialog';

export default {
  title: 'Popover/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

export const Default: ComponentStory<typeof Dialog> = () => (
  <Dialog
    render={({ onClose, labelId, descriptionId }) => (
      <>
        <h1 className="text-main text-20 font-semibold" id={labelId}>
          Dialog Title
        </h1>
        <p className="text-main text-16 leading-6" id={descriptionId}>
          Spicy jalapeno bacon ipsum dolor amet biltong eu swine proident
          pancetta esse sint ribeye sirloin eiusmod aliqua tail. Tenderloin
          prosciutto adipisicing esse, meatloaf short ribs tri-tip nulla
          cupidatat commodo shank pancetta qui bresaola sirloin.
        </p>
        <Button onClick={onClose} variant="tertiary">
          Close
        </Button>
      </>
    )}
  >
    <Button>Open Dialog</Button>
  </Dialog>
);

export const Empty: ComponentStory<typeof Dialog> = () => (
  <Dialog render={() => <></>}>
    <Button>Open Dialog</Button>
  </Dialog>
);
