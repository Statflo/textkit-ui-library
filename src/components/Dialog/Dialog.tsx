import {
  FloatingFocusManager,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { useLockBodyScroll } from '../../hooks';

export interface DialogProps {
  children: React.ReactNode;
  isOpen?: boolean;
  render: (props: {
    onClose: () => void;
    labelId: string;
    descriptionId: string;
  }) => React.ReactNode;
}

const Dialog = ({
  children,
  isOpen: passedIsOpen = false,
  render,
}: DialogProps) => {
  const [isOpen, setOpen] = useState(passedIsOpen);
  const setLocked = useLockBodyScroll();

  const { reference, floating, context } = useFloating({
    open: isOpen,
    onOpenChange: setOpen,
  });

  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context),
  ]);

  useEffect(() => {
    setLocked(isOpen);
  }, [isOpen, setLocked]);

  return (
    <>
      {React.isValidElement(children)
        ? React.cloneElement(
            children,
            getReferenceProps({ ref: reference, ...children.props })
          )
        : null}
      <FloatingPortal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-black/60 grid inset-0 place-items-center fixed p-1"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <FloatingFocusManager context={context}>
                <motion.div
                  className="bg-white rounded-md shadow-modal flex flex-col gap-4 max-w-lg p-6 relative"
                  {...getFloatingProps({
                    ref: floating,
                    'aria-labelledby': labelId,
                    'aria-describedby': descriptionId,
                  })}
                  animate={{ scale: 1, opacity: 1 }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {render({
                    onClose: () => setOpen(false),
                    labelId,
                    descriptionId,
                  })}
                </motion.div>
              </FloatingFocusManager>
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
};

export default Dialog;
