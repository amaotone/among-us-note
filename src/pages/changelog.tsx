import React from 'react';
import { Section, Content } from 'react-bulma-components';

const IndexPage: React.FC = () => (
  <Section>
    <Content>
      <h1>リリース履歴</h1>
      <p>2021-02-24 v1.1</p>
      <ul>
        <li>名前を入力できるようにしました</li>
        <li>色の選び方を変更しました</li>
        <li>ボタンの有無をメモできるようにしました</li>
      </ul>
      <p>2021-02-19 v1.0</p>
      <ul>
        <li>リリースしました</li>
      </ul>
    </Content>
  </Section>
);

export default IndexPage;
