import React from 'react';
import Image from 'next/image';
import { Color } from 'models/state';

interface Props {
  color: Color;
  fill: boolean;
}

const CrewIcon: React.FC<Props> = (props: Props) => {
  const { color, fill } = props;
  return fill ? (
    <Image src={`/icon/${color}.png`} alt={color} layout="fill" objectFit="contain" />
  ) : (
    <Image src={`/icon/${color}.png`} alt={color} width={420} height={420} />
  );
};

export default CrewIcon;
