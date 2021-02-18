import React from 'react';
import Image from 'next/image';
import { Color } from 'models/state';

interface Props {
  color: Color;
  fill: boolean;
}

const CrewIcon: React.FC<Props> = (props: Props) => {
  const { color, fill } = props;
  const params = fill
    ? {
        layout: 'fill',
        objectFit: 'contain',
      }
    : {
        width: 420,
        height: 420,
      };
  return <Image src={`/icon/${color}.png`} alt={color} {...params} />;
};

export default CrewIcon;
