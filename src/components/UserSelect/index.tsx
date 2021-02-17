import React, { Dispatch, SetStateAction } from 'react';
import { IsUsed } from 'models/color';
import { Columns } from 'react-bulma-components';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  flags: IsUsed;
  setFlags: Dispatch<SetStateAction<IsUsed>>;
}

const UserSelect: React.FC<Props> = (props: Props) => {
  const { flags, setFlags } = props;
  const selectColor = (color: string) => {
    setFlags({
      ...flags,
      [color]: !flags[color],
    });
  };
  return (
    <>
      <Columns className="is-mobile">
        {Object.entries(flags).map(([color, used]) => (
          <Columns.Column key={color} size={3} kind="child" onClick={() => selectColor(color)}>
            <PlayerIcon
              src={`/icon/${color}.png`}
              alt={color}
              width={440}
              height={482}
              used={used}
            />
          </Columns.Column>
        ))}
      </Columns>
    </>
  );
};

const PlayerIcon = styled(Image)`
  opacity: ${(props) => (props.used ? 1 : 0.25)};
`;

export default UserSelect;
