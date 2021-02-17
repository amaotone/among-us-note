import React, { Dispatch, SetStateAction } from 'react';
import { Table, Dropdown } from 'react-bulma-components';
import { Player, playerStates, emojiMapping } from 'models/state';
import CrewIcon from 'components/CrewIcon';
import { nanoid } from 'nanoid';

interface Props {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}

const NoteTable: React.FC<Props> = (props: Props) => {
  const { players, setPlayers } = props;
  const changePlayerState = (playerIndex, stateIndex, state) => {
    const data = players.slice();
    data[playerIndex].states[stateIndex] = state;
    setPlayers(data);
  };
  return (
    <>
      <div className="table-container" style={{ overflowY: 'visible', paddingBottom: '300px' }}>
        <Table>
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
              <tr key={player.color}>
                <td style={{ position: 'relative' }}>
                  <CrewIcon color={player.color} />
                </td>
                {player.states.map((state, stateIndex) => (
                  <td key={`${player.color}_${nanoid()}`}>
                    <Dropdown
                      value={state}
                      onChange={(selected) => changePlayerState(playerIndex, stateIndex, selected)}
                    >
                      {playerStates.map((s) => (
                        <Dropdown.Item value={s}>
                          {emojiMapping[s]} {s}
                        </Dropdown.Item>
                      ))}
                    </Dropdown>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default NoteTable;
