import Template from 'components/templates/default';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Box, Section, Container, Columns } from 'react-bulma-components';
import { IsUsed } from 'models/color';
import UserSelect from 'components/UserSelect';
import NoteTable from 'components/NoteTable';
import { availableColors, Player } from 'models/state';
const IndexPage: React.FC = () => {
  const initialColors = availableColors.reduce((o, key) => Object.assign(o, { [key]: true }), {});
  const initialPlayers: Player[] = availableColors.map((c) => ({
    color: c,
    isUsed: true,
    states: new Array(7).fill('neutral'),
  }));
  const [flags, setFlags] = useState(initialColors as IsUsed);
  const [players, setPlayers] = useState(initialPlayers);

  const handleStart = () => {
    console.log(flags);
    // router.push('/note');
  };

  return (
    <Template>
      <Columns.Column>
        <NoteTable players={players} setPlayers={setPlayers} />
      </Columns.Column>
    </Template>
  );
};

export default IndexPage;
