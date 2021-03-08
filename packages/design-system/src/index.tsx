import React, { FC, HTMLAttributes, ReactChild } from 'react';
export { Button } from './components/Button';
export { Header } from './components/Header';
export { Page } from './components/Page';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'New DS System' */
  children?: ReactChild;
}

// // Please do not use types off of a default export module or else Storybook Docs will suffer.
// // see: https://github.com/storybookjs/storybook/issues/9556
export const Intro: FC<Props> = ({ children }) => {
  return <div>{children || `New DS System`}</div>;
};
