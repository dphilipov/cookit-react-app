import React from 'react';

function XIcon(props) {
  return (
    <svg
      viewBox="0 0 140 140"
      height="140"
      width="140"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
        <path
          d="M0.75 23.249L23.25 0.749"
          fill="none"
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M23.25 23.249L0.75 0.749"
          fill="none"
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default XIcon;
