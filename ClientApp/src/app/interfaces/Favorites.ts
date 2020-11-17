export interface Favorites {
  item: FavoriteItem[]
}

export interface FavoriteItem {
  id: number,
  userID: number,
  mealName: string,
  mealCarbs: number
}
