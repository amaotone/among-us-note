import React, { useState } from 'react';
import { Section, Container } from 'react-bulma-components';
import NoteTable from 'components/NoteTable';
import PlayerTray from 'components/PlayerTray';
import { availableColors, Player } from 'models/state';

const IndexPage: React.FC = () => {
  const initialPlayers: Player[] = availableColors.map((c) => ({
    color: c,
    isUsed: true,
    states: new Array(7).fill('neutral'),
  }));
  const [players, setPlayers] = useState(initialPlayers);

  return (
    <Section>
      <Container>
        <NoteTable players={players} setPlayers={setPlayers} />
        <PlayerTray players={players} setPlayers={setPlayers} />
      </Container>
    </Section>
  );
};

export default IndexPage;
