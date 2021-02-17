import Template from 'components/templates/default';
import React, { useState } from 'react';
import Image from 'next/image';
import { Section, Box, Container, Columns } from 'react-bulma-components';
import styled from 'styled-components';

const availableColors = [
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
];

const IndexPage: React.FC = () => {
  const initialColors = availableColors.reduce((o, key) => Object.assign(o, { [key]: true }), {});
  const [selectedColors, setSelectedColors] = useState(initialColors);

  const selectColor = (color: string) => {
    setSelectedColors({
      ...selectedColors,
      [color]: !selectedColors[color],
    });
  };

  return (
    <Template>
      <Section>
        <Container>
          <Box>
            <Columns className="is-mobile">
              {Object.entries(selectedColors).map(([color, used]) => (
                <Columns.Column
                  key={color}
                  size={4}
                  kind="child"
                  onClick={() => selectColor(color)}
                >
                  <PlayerIcon
                    src={`/icon/${color}.png`}
                    alt={color}
                    width={440}
                    height={482}
                    used={used}
                  />
                </Columns.Column>
              ))}
            </Columns>
          </Box>
        </Container>
      </Section>
      <span>{JSON.stringify(selectedColors)}</span>
    </Template>
  );
};

const PlayerIcon = styled(Image)`
  opacity: ${(props) => (props.used ? 1 : 0.4)};
`;

export default IndexPage;
