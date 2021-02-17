import Template from 'components/templates/default';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Box, Section, Container, Columns } from 'react-bulma-components';
import { IsUsed, availableColors } from 'models/color';
import UserSelect from 'components/UserSelect';

const IndexPage: React.FC = () => {
  const router = useRouter();
  const initialColors = availableColors.reduce((o, key) => Object.assign(o, { [key]: true }), {});
  const [flags, setFlags] = useState(initialColors as IsUsed);

  const handleStart = () => {
    console.log(flags);
    // router.push('/note');
  };

  return (
    <Template>
      <Section>
        <Container>
          <Columns>
            <Columns.Column className="is-tablet">
              <Box>
                <UserSelect flags={flags} setFlags={setFlags} />
              </Box>
              <Button color="info" className="is-fullwidth is-medium" onClick={() => handleStart()}>
                Start
              </Button>
            </Columns.Column>
            <Columns.Column>
              <h1>使い方とか書く</h1>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </Template>
  );
};

export default IndexPage;
