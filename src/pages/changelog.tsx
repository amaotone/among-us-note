import React from 'react';
import { Section, Content } from 'react-bulma-components';

const IndexPage: React.FC = () => (
  <Section>
    <Content>
      <h1>リリース履歴</h1>
      <p>2021-02-24 v1.1</p>
      <ul>
        <li>名前を入力できるようになりました</li>
        <li>ボタンの有無をメモできるようになりました</li>
        <li>ライン精査のために「A」「B」「C」「D」をメモできるようになりました</li>
      </ul>
      <p>2021-02-19 v1.0</p>
      <ul>
        <li>リリースしました</li>
      </ul>
    </Content>
  </Section>
);

export default IndexPage;
