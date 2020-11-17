export interface CarbRatio {
  item: CarbRatioItem[]
}

export interface CarbRatioItem {
  id: number,
  userID: number,
  carbRatio: number
  //carbStartTime: Date,
  //carbEndTime: Date
}
