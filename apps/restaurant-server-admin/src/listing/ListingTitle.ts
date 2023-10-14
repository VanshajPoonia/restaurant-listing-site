import { Listing as TListing } from "../api/listing/Listing";

export const LISTING_TITLE_FIELD = "locationType";

export const ListingTitle = (record: TListing): string => {
  return record.locationType?.toString() || String(record.id);
};
