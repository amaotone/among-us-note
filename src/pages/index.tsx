import React, { useState } from 'react';
import { Section, Container, Columns } from 'react-bulma-components';
import NoteTable from 'components/NoteTable';
import PlayerTray from 'components/PlayerTray';
import { availableColors, Player } from 'models/state';
import UsagePanel from 'components/Usage';
import Adsense from 'react-adsense';

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
        <div className="is-hidden-tablet">
          <Adsense.Google
            client="ca-pub-1424417569342773"
            slot="6258822796"
            style={{ display: 'block', marginButtom: '1.5rem' }}
            format="auto"
            responsive="true"
          />
        </div>
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
            <Adsense.Google
              client="ca-pub-1424417569342773"
              slot="5936578532"
              style={{ display: 'block' }}
              format="auto"
              responsive="true"
            />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};

export default IndexPage;
