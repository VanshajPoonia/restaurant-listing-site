import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  price?: SortOrder;
  roles?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
