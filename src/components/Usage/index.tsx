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
        <li>必要であれば名前を記入します</li>
        <li>左上の鍵アイコンをタップすると使う色を固定できます</li>
        <li>セルをタップすると状況をメモできます</li>
        <li>右下のリセットボタンを押すとメモがリセットされます</li>
      </ol>
      <p>みんなでたのしくAmong Us！</p>

      <ShareOnTwitter />

      <table style={{ width: 'auto', marginTop: '2em' }}>
        <thead>
          <tr>
            <td>記号</td>
            <td>意味</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>😊</td>
            <td>信じられる</td>
          </tr>
          <tr>
            <td>😡</td>
            <td>怪しい</td>
          </tr>
          <tr>
            <td>☠️</td>
            <td>死亡した</td>
          </tr>
          <tr>
            <td>👋</td>
            <td>追放した</td>
          </tr>
          <tr>
            <td>A - D</td>
            <td>ライン精査用（誰と誰がセット）</td>
          </tr>
        </tbody>
      </table>
    </Content>
  </>
);

export default UsagePanel;
