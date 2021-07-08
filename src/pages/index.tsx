import AdsenseCard from 'components/Adsense';
import NoteTable from 'components/NoteTable';
import PlayerTray from 'components/PlayerTray';
import UsagePanel from 'components/Usage';
import { availableColors, Player } from 'models/state';
import React, { useEffect, useState } from 'react';
import { Columns, Container, Section } from 'react-bulma-components';

const IndexPage: React.FC = () => {
  const initialPlayers: Player[] = availableColors.map((c, i) => ({
    name: '',
    color: c,
    isUsed: i < 12,
    hasButton: true,
    states: new Array(5).fill('neutral'),
  }));
  const [players, setPlayers] = useState(initialPlayers);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // check build_id
    const { buildId } = JSON.parse(document.querySelector('#__NEXT_DATA__').textContent);
    const storedBuildId = localStorage.getItem('build_id');
    if (buildId === storedBuildId) {
      // load previous notes from localStorage
      const storedPlayers = JSON.parse(localStorage.getItem('players'));
      if (storedPlayers) {
        setPlayers(storedPlayers);
      }
    } else {
      localStorage.setItem('build_id', buildId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  return (
    <Section>
      <Container>
        {/* <div className="is-hidden-tablet mb-5">
          <AdsenseCard slot="6258822796" />
        </div> */}
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
            <AdsenseCard slot="5936578532" />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};

export default IndexPage;
