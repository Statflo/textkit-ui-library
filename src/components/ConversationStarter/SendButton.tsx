import React from 'react';

import { classNames } from '../../utils/classnames';

interface SendButtonProps {
  state: 'default' | 'ready' | 'checkingCompliance' | 'complianceError';
}

export const SendButton = ({ state }: SendButtonProps) => (
  <button
    aria-label={'Send Message'}
    className={classNames(
      'items-center rounded-md flex h-8 pl-0.5 w-8',
      (state === 'ready' || state === 'checkingCompliance') && 'bg-primary'
    )}
    disabled={state !== 'ready'}
  >
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12226_53517)">
        <path
          d="M22.4658 11.3392C22.4664 11.272 22.4467 11.2062 22.4093 11.1505C22.3719 11.0947 22.3185 11.0515 22.2561 11.0266L6.74733 4.85076C6.689 4.82773 6.62535 4.82163 6.56371 4.83314C6.50206 4.84466 6.44492 4.87334 6.39883 4.91587C6.35275 4.95841 6.31961 5.01308 6.3032 5.07361C6.2868 5.13414 6.2878 5.19807 6.30609 5.25806L7.78583 10.0669C7.79466 10.0985 7.81267 10.1268 7.8376 10.1482C7.86252 10.1696 7.89323 10.1831 7.92584 10.1871L16.6893 11.1252C16.7306 11.129 16.769 11.1482 16.7969 11.1789C16.8248 11.2096 16.8403 11.2496 16.8403 11.2911C16.8403 11.3326 16.8248 11.3726 16.7969 11.4033C16.769 11.434 16.7306 11.4531 16.6892 11.457L7.92584 12.3951C7.89339 12.3985 7.86266 12.4115 7.83751 12.4323C7.81236 12.4531 7.79389 12.4808 7.78442 12.512L6.30468 17.3208C6.28687 17.3787 6.28518 17.4404 6.2998 17.4992C6.31442 17.558 6.34479 17.6117 6.38765 17.6546L6.39661 17.6635C6.44263 17.7061 6.49973 17.7349 6.56136 17.7464C6.62298 17.758 6.68662 17.752 6.74497 17.7291L22.2542 11.6479C22.3163 11.6236 22.3697 11.5811 22.4074 11.5261C22.4452 11.471 22.4655 11.4059 22.4658 11.3392Z"
          fill={state === 'default' ? '#E6E6E6' : '#FFFFFF'}
        />
      </g>
      <defs>
        <clipPath id="clip0_12226_53517">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(11.3145) rotate(45)"
          />
        </clipPath>
      </defs>
    </svg>
  </button>
);
