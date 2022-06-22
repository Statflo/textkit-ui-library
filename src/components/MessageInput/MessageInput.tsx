import React, { useLayoutEffect, useRef } from 'react';

import Icon from '../Icon/Icon';

import { SendButton } from './SendButton';

export interface MessageInputProps {
  onChange: (value: string) => void;
  state: 'default' | 'ready' | 'checkingCompliance' | 'complianceError';
  value: string;
}

// TODO: Come back to this - use draft.js
const MessageInput = ({ onChange, state, value }: MessageInputProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'inherit';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="items-end bg-white border-t border-background-spacer flex gap-5">
      <div className="items-center flex gap-3.5 py-3.5 pl-3">
        <Icon color="grey" icon="plus" size="small" />
        <Icon color="grey" icon="smile" size="small" />
      </div>
      <textarea
        className="flex-1 text-main text-16 my-2 py-1.5 resize-none placeholder:text-main-l3"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your message"
        ref={ref}
        rows={1}
        value={value}
      />
      <div className="p-1.5">
        <SendButton state={state} />
      </div>
    </div>
  );
};

export default MessageInput;
