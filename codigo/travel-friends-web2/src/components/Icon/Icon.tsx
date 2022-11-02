import React from 'react';
import { SvgProps } from 'react-native-svg';
import svgComponent from './icons';

export const DEFAULT_ICON_SIZE = 240;

export type TIconName = keyof typeof svgComponent;

export interface IconProps {
  name: TIconName;
  svg?: boolean;
  width?: number | string;
  height?: number | string;
  size?: number | string;
}

const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
  size,
}) => {
  const IconComponent = svgComponent[name] as React.FC<SvgProps>;
  // if (!IconComponent) {
  //   return null;
  // }
  return (
    <IconComponent
      width={size ?? width ?? DEFAULT_ICON_SIZE}
      height={size ?? height ?? DEFAULT_ICON_SIZE}
    />
  );
};
export default Icon;