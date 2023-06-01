export type Sign = '+' | '-';

export interface IRow {
  id: number;
  sign: Sign;
  value: number;
  enabled: boolean;
}
