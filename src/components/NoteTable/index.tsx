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

  const changeName = (color: Color, event) => {
    const data = players.map((p) => {
      if (p.color === color) {
        return { ...p, name: event.target.value };
      }
      return p;
    });
    setPlayers(data);
  };

  const isAlive = (player: Player) =>
    player.states.filter((s) => s === 'killed' || s === 'ejected').length === 0;

  const stateCount = players[0].states.length;
  const isRight = (stateIndex) => stateIndex >= (stateCount - 2) / 2;

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
                <i className="fa fa-user fa-fw" />
              </th>
              <th style={{ borderRightWidth: '3px' }}>
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
                  <td className="has-text-centered username-cell">
                    <input
                      defaultValue={player.name}
                      placeholder="name"
                      className="input username"
                      onBlur={(e) => changeName(player.color, e)}
                    />
                  </td>
                  <td className="has-text-centered" style={{ borderRightWidth: '3px' }}>
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
                      >
                        <Dropdown.Item value="innocent">{emojiMapping.innocent}</Dropdown.Item>
                        <Dropdown.Item value="suspicious">{emojiMapping.suspicious}</Dropdown.Item>
                        <Dropdown.Item value="neutral">❎</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item value="killed">{emojiMapping.killed}</Dropdown.Item>
                        <Dropdown.Item value="ejected">{emojiMapping.ejected}</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item value="a">{emojiMapping.a}</Dropdown.Item>
                        <Dropdown.Item value="b">{emojiMapping.b}</Dropdown.Item>
                        <Dropdown.Item value="c">{emojiMapping.c}</Dropdown.Item>
                        <Dropdown.Item value="d">{emojiMapping.d}</Dropdown.Item>
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
      background-color: hsl(0, 0%, 70%);

      span,
      button,
      img {
        opacity: 0.8;
      }
    `};
`;

const PlayerCell = styled.td`
  ${(props) => {
    switch (props.state) {
      case 'neutral':
        return css`
          span {
            opacity: 0;
          }
        `;
      case 'ejected':
      case 'killed':
        return css`
          background-color: hsla(0, 0%, 50%, 0.8);
        `;
      case 'a':
        return css`
          background-color: hsla(141, 71%, 48%, 0.15);
        `;
      case 'b':
        return css`
          background-color: hsla(48, 100%, 67%, 0.15);
        `;
      case 'c':
        return css`
          background-color: hsla(348, 100%, 61%, 0.15);
        `;
      case 'd':
        return css`
          background-color: hsla(204, 86%, 53%, 0.25);
        `;
      default:
        return css``;
    }
  }}
`;
export default NoteTable;
