import React from 'react';

interface MDXButtonProps {
  children: React.ReactNode;
  link?: string;
  extraClass?: string;
}

const buttonStyles =
  'bg-parityPink font-title text-lg text-white font-semibold opacity-90 tracking-wider px-12 py-2 mb-6 rounded-sm focus:outline-none uppercase';
const hoverStyles = 'transition-transform transform hover:-translate-y-0.5';
const focusStyles = 'focus:bg-buttonRed';

export default function Button(props: MDXButtonProps) {
  return (
    <div className="w-max mx-auto">
      <a href={props.link} target="_blank" rel="noreferrer">
        <button type="button" className={`${buttonStyles} ${hoverStyles} ${focusStyles} ${props.extraClass}`}>
          {props.children}
        </button>
      </a>
    </div>
  );
}
