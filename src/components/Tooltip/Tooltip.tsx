import {
  arrow,
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

export interface TooltipProps {
  children: React.ReactNode;
  position?: Placement;
  shouldDismissOnClick?: boolean;
  shouldShowOnMount?: boolean;
  text: string;
}

const open = {
  opacity: 1,
  scale: 1,
};
const closed = {
  opacity: 0,
  scale: 0.95,
};

const variants = {
  bottom: {
    open: { ...open, y: 0 },
    closed: { ...closed, y: 5 },
  },
  left: {
    open: { ...open, x: 0 },
    closed: { ...closed, x: -5 },
  },
  top: {
    open: { ...open, y: 0 },
    closed: { ...closed, y: -5 },
  },
  right: {
    open: { ...open, x: 0 },
    closed: { ...closed, x: 5 },
  },
};

const Tooltip = ({
  children,
  position = 'top',
  shouldDismissOnClick = true,
  shouldShowOnMount = false,
  text,
}: TooltipProps) => {
  const [isShown, setShown] = useState(shouldShowOnMount);

  const arrowRef = useRef(null);

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    placement: position,
    open: isShown,
    onOpenChange: setShown,
    middleware: [
      offset(10),
      flip(),
      shift({ padding: 8 }),
      arrow({ element: arrowRef, padding: 12 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const staticSide =
    {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[placement.split('-')[0]] ?? 'top';

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { restMs: 40 }),
    useFocus(context),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context, { enabled: shouldDismissOnClick }),
  ]);

  return (
    <>
      {React.isValidElement(children)
        ? React.cloneElement(
            children,
            getReferenceProps({ ref: reference, ...children.props })
          )
        : null}
      <AnimatePresence>
        {isShown && (
          <motion.div
            className="bg-main rounded-md shadow-tooltip max-w-40 p-3 text-white text-14 font-semibold text-center"
            animate="open"
            initial="closed"
            exit="closed"
            variants={variants[staticSide as keyof typeof variants]}
            transition={{ duration: 0.2 }}
            {...getFloatingProps({
              ref: floating,
              style: {
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
              },
            })}
          >
            {text}
            <div
              className="bg-main h-2 absolute w-2 rotate-45"
              ref={arrowRef}
              style={{
                top: arrowY ?? '',
                left: arrowX ?? '',
                right: '',
                bottom: '',
                [staticSide]: '-4px',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Tooltip;
