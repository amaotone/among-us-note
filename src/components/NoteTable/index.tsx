import React, { Dispatch, SetStateAction } from 'react';
import { Dropdown } from 'react-bulma-components';
import { Player, playerStates, emojiMapping } from 'models/state';
import CrewIcon from 'components/CrewIcon';
import { nanoid } from 'nanoid';
import styled, { css } from 'styled-components';

interface Props {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}

const NoteTable: React.FC<Props> = (props: Props) => {
  const { players, setPlayers } = props;
  const changePlayerState = (playerIndex, stateIndex, state) => {
    const data = players.slice();
    switch (state) {
      default:
        data[playerIndex].states[stateIndex] = state;
    }
    data[playerIndex].states[stateIndex] = state;
    setPlayers(data);
  };

  const isAlive = (player: Player) =>
    player.states.filter((s) => s === 'killed' || s === 'ejected').length === 0;
  return (
    <>
      <div className="table-container" style={{ overflowY: 'visible', paddingBottom: '200px' }}>
        <table className="table is-bordered">
          <thead>
            <tr>
              <th>&nbsp;</th>
              {players[0].states.map((_, index) => (
                <th>{index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players.map((player, playerIndex) => (
              <PlayerRow key={player.color} player={player} isAlive={isAlive(player)}>
                <th style={{ position: 'relative' }} className="crew-icon">
                  <CrewIcon color={player.color} />
                </th>
                {player.states.map((state, stateIndex) => (
                  <PlayerCell key={nanoid()} state={state}>
                    <Dropdown
                      label={emojiMapping[state]}
                      onChange={(selected) => changePlayerState(playerIndex, stateIndex, selected)}
                    >
                      {playerStates.map((s) => (
                        <Dropdown.Item value={s}>
                          {emojiMapping[s]} {s}
                        </Dropdown.Item>
                      ))}
                    </Dropdown>
                  </PlayerCell>
                ))}
              </PlayerRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const PlayerRow = styled.tr`
  ${(props) =>
    !props.isAlive &&
    css`
      background-color: gray;

      span {
        opacity: 0.5;
      }
    `};
`;

const PlayerCell = styled.td`
  ${(props) =>
    props.state === 'neutral' &&
    css`
      span {
        opacity: 0;
      }
    `}
`;

export default NoteTable;
