export interface CorrectionRatio {
  item: CorrectionRatioItem[]
}

export interface CorrectionRatioItem {
  id: number,
  userID: number,
  correctionRatio: number
  //correctionStartTime: Date,
  //correctionEndTime: Date
}
