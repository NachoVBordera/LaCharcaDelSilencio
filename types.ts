export interface Option {
  id: number;
  text: String;
  chooseID: number;
}

export interface Page {
  response: String;
  id: number;
  text: String;
  options: [Option];
}
