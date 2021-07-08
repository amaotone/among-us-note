import CrewIcon from 'components/CrewIcon';
import { Player } from 'models/state';
import { nanoid } from 'nanoid';
import React, { Dispatch, SetStateAction } from 'react';
import { Button } from 'react-bulma-components';
import styled from 'styled-components';

interface Props {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
  locked: boolean;
}

const PlayerTray: React.FC<Props> = (props: Props) => {
  const { players, setPlayers, locked } = props;

  const enable = (color) => {
    if (locked) return;
    const data = players.map((p) => {
      if (p.color === color) {
        return { ...p, isUsed: true };
      }
      return p;
    });
    setPlayers(data);
  };

  const resetStates = () => {
    const data = players.map((p) => {
      const states = p.states.slice().fill('neutral');
      return { ...p, states, hasButton: true };
    });
    setPlayers(data);
  };

  return (
    <>
      <div className="field is-grouped is-grouped-multiline">
        <div className="control is-expanded">
          {players
            .filter((player) => !player.isUsed)
            .map((player) => (
              <IconWrapper key={nanoid()} onClick={() => enable(player.color)}>
                <CrewIcon color={player.color} fill={false} />
              </IconWrapper>
            ))}
        </div>
        <p className="control">
          <Button color="light" onClick={() => resetStates()}>
            クリア
          </Button>
        </p>
      </div>
    </>
  );
};

const IconWrapper = styled.div`
  text-align: left;
  display: inline-block;
  width: 2.4em;
  height: 2.4em;
`;

export default PlayerTray;
