export interface Card{
    title?: string;
}

type NonNullableCard = {
    [K in keyof Card]: K extends 'title' ? NonNullable<Card[K]> : Card[K]
  };


export default NonNullableCard;