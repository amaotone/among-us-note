import React from 'react';
import { Heading, Content } from 'react-bulma-components';
import ShareOnTwitter from 'components/ShareOnTwitter';

const UsagePanel: React.FC = () => (
  <>
    <Content>
      <Heading>Among Us Note</Heading>
      <p>盤面を整理してインポスターを見つけましょう！</p>
      <ol>
        <li>使う色を選びます</li>
        <ol type="a">
          <li>表の中のアイコンをタップするとその色を外せます</li>
          <li>表の下のアイコンをタップするとその色を戻せます</li>
        </ol>
        <li>左上の鍵アイコンをタップすると使う色を固定できます</li>
        <li>セルをタップすると状況をメモできます</li>
        <li>右下のリセットボタンを押すとメモをリセットします</li>
      </ol>
      <p>みんなでたのしくAmong Us！</p>
      <ShareOnTwitter />
    </Content>
  </>
);

export default UsagePanel;
