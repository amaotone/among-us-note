export const availableColors = [
  'red',
  'blue',
  'green',
  'pink',
  'orange',
  'yellow',
  'black',
  'white',
  'purple',
  'brown',
  'cyan',
  'lime',
] as const;

export type Color = typeof availableColors[number];

export const playerStates = ['suspicious', 'innocent', 'killed', 'ejected', 'neutral'] as const;
export type PlayerState = typeof playerStates[number];

export interface Player {
  color: Color;
  isUsed: boolean;
  states: Array<PlayerState>;
}

export const emojiMapping = {
  neutral: '◻️',
  suspicious: '😡',
  innocent: '😊',
  killed: '☠️',
  ejected: '👎',
};
