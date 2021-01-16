import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  link: string;
  extraClass: string;
}

const buttonStyles =
  'bg-parityPink font-border text-sm text-white opacity-90 font-normal tracking-widest  px-12 py-2 focus:outline-none uppercase';
const hoverStyles = 'transition-transform transform hover:-translate-y-0.5';

export default function Button(props: ButtonProps) {
  return (
    <a href={props.link}>
      <button type="button" className={`${buttonStyles} ${hoverStyles} ${props.extraClass}`}>
        {props.children}
      </button>
    </a>
  );
}