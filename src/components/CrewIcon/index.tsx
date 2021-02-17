import React from 'react';
import Image from 'next/image';
import { Color } from 'models/state';

interface Props {
  color: Color;
}

const CrewIcon: React.FC<Props> = (props: Props) => {
  const { color } = props;
  return <Image src={`/icon/${color}.png`} alt={color} layout="fill" objectFit="contain" />;
};

export default CrewIcon;
