import { Trip as TTrip } from "../api/trip/Trip";

export const TRIP_TITLE_FIELD = "tripInfo";

export const TripTitle = (record: TTrip): string => {
  return record.tripInfo?.toString() || String(record.id);
};
