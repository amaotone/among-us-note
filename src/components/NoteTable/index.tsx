import React, { Dispatch, SetStateAction } from 'react';
import { Dropdown } from 'react-bulma-components';
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
    switch (state) {
      default:
        data[playerIndex].states[stateIndex] = state;
    }
    data[playerIndex].states[stateIndex] = state;
    setPlayers(data);
  };
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
              <tr key={player.color}>
                <td style={{ position: 'relative' }} className="crew-icon">
                  <CrewIcon color={player.color} />
                </td>
                {player.states.map((state, stateIndex) => (
                  <td key={`${player.color}_${nanoid()}`}>
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
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NoteTable;
