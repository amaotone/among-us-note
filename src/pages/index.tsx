import React, { useState } from 'react';
import { Section, Container, Columns } from 'react-bulma-components';
import NoteTable from 'components/NoteTable';
import PlayerTray from 'components/PlayerTray';
import { availableColors, Player } from 'models/state';
import UsagePanel from 'components/Usage';

const IndexPage: React.FC = () => {
  const initialPlayers: Player[] = availableColors.map((c) => ({
    color: c,
    isUsed: true,
    states: new Array(7).fill('neutral'),
  }));
  const [players, setPlayers] = useState(initialPlayers);
  const [locked, setLocked] = useState(false);

  return (
    <Section>
      <Container>
        <Columns>
          <Columns.Column>
            <NoteTable
              players={players}
              setPlayers={setPlayers}
              locked={locked}
              setLocked={setLocked}
            />
            <PlayerTray players={players} setPlayers={setPlayers} locked={locked} />
          </Columns.Column>
          <Columns.Column>
            <UsagePanel />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};

export default IndexPage;
