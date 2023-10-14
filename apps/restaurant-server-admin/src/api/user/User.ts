import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type User = {
  createdAt: Date;
  description: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Array<Listing>;
  price: number;
  roles: JsonValue;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  username: string;
  wishlists?: Array<Wishlist>;
};
