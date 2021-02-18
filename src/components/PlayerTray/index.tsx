import React, { Dispatch, SetStateAction } from 'react';
import { Player } from 'models/state';
import CrewIcon from 'components/CrewIcon';
import { Button } from 'react-bulma-components';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

interface Props {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}

const PlayerTray: React.FC<Props> = (props: Props) => {
  const { players, setPlayers } = props;

  const enable = (color) => {
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
      const states = new Array(7).fill('neutral');
      return { ...p, states };
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
            Reset
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
