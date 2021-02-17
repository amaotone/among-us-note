import Template from 'components/templates/default';
import React, { useState } from 'react';
import Image from 'next/image';

const IndexPage: React.FC = () => {
  const [colors] = useState([
    'brown',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'cyan',
    'blue',
    'purple',
    'pink',
    'white',
    'black',
  ]);

  return (
    <Template>
      <h1>Among Us Note</h1>
      <ul>
        {colors.map((color) => (
          <li>
            <Image src={`/icon/${color}.png`} alt={color} width={440} height={482} />
            {color}
          </li>
        ))}
      </ul>
    </Template>
  );
};

export default IndexPage;
