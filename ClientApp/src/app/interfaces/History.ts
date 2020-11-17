export interface History {
  item: HistoryItem[]
}

export interface HistoryItem {
  id: number,
  userID: number,
  bloodGlucose: number,
  carbs: number,
  insulin: number,
  time: Date
}
