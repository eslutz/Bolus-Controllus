export interface User {
  userID: number,
  username: string
}

export interface FullUser {

  userID: number,
  username: string,
  carbRatio: number,
  //carbStartTime: Date,
  //carbEndTime: Date,
  correctionRatio: number,
  //correctionStartTime: Date,
  //correctionEndTime: Date,
  duration: number
}
