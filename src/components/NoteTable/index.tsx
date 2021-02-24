import React, { Dispatch, SetStateAction } from 'react';
import { Button, Dropdown } from 'react-bulma-components';
import { Player, emojiMapping, Color } from 'models/state';
import CrewIcon from 'components/CrewIcon';
import { nanoid } from 'nanoid';
import styled, { css } from 'styled-components';
import Twemoji from 'react-twemoji';

interface Props {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
  locked: boolean;
  setLocked: Dispatch<SetStateAction<boolean>>;
}

const NoteTable: React.FC<Props> = (props: Props) => {
  const { players, setPlayers, locked, setLocked } = props;

  const changePlayerState = (color, stateIndex, state) => {
    const data = players.map((p) => {
      if (p.color === color) {
        const states = p.states.slice();
        states[stateIndex] = state;
        return { ...p, states };
      }
      return p;
    });
    setPlayers(data);
  };

  const toggleLock = () => {
    setLocked(!locked);
  };

  const toggleButton = (color: Color) => {
    const data = players.map((p) => {
      if (p.color === color) {
        return { ...p, hasButton: !p.hasButton };
      }
      return p;
    });
    setPlayers(data);
  };

  const disable = (color: Color) => {
    if (locked) return;
    const data = players.map((p) => {
      if (p.color === color) {
        return { ...p, isUsed: false };
      }
      return p;
    });
    setPlayers(data);
  };

  const isAlive = (player: Player) =>
    player.states.filter((s) => s === 'killed' || s === 'ejected').length === 0;

  const stateCount = players[0].states.length;
  const isRight = (stateIndex) => stateIndex >= stateCount / 2;

  return (
    <>
      <Twemoji noWrapper>
        <table className="table is-bordered is-fullwidth">
          <thead>
            <tr>
              <th onClick={() => toggleLock()}>
                <i className={`fa ${locked ? 'fa-lock' : 'fa-lock-open'} fa-fw`} />
              </th>
              <th>
                <i className="fa fa-bullhorn fa-fw" />
              </th>
              {Array(stateCount)
                .fill(null)
                .map((_, index) => (
                  <th key={nanoid()}>{index + 1}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {players
              .filter((player) => player.isUsed)
              .map((player) => (
                <PlayerRow key={player.color} player={player} isAlive={isAlive(player)}>
                  <th
                    style={{ position: 'relative' }}
                    className="crew-icon"
                    onClick={() => disable(player.color)}
                  >
                    <CrewIcon color={player.color} fill />
                  </th>
                  <td className="has-text-centered">
                    <Button onClick={() => toggleButton(player.color)}>
                      {player.hasButton ? '' : '✅'}
                    </Button>
                  </td>
                  {player.states.map((state, stateIndex) => (
                    <PlayerCell key={nanoid()} state={state} className="has-text-centered">
                      <Dropdown
                        label={emojiMapping[state]}
                        right={isRight(stateIndex)}
                        onChange={(selected) =>
                          changePlayerState(player.color, stateIndex, selected)
                        }
                        className="has-text-left"
                      >
                        <Dropdown.Item value="innocent">
                          {emojiMapping.innocent} 信用できる
                        </Dropdown.Item>
                        <Dropdown.Item value="suspicious">
                          {emojiMapping.suspicious} 怪しい
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item value="killed">
                          {emojiMapping.killed} 殺害された
                        </Dropdown.Item>
                        <Dropdown.Item value="ejected">
                          {emojiMapping.ejected} 追放した
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item value="neutral">{emojiMapping.neutral} 消す</Dropdown.Item>
                      </Dropdown>
                    </PlayerCell>
                  ))}
                </PlayerRow>
              ))}
          </tbody>
        </table>
      </Twemoji>
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
