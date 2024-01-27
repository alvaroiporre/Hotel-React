export default interface ISettings {
  id?: number;
  minBookingLength: number;
  maxBookingLength: number; 
  maxGuestsPerBooking: number; 
  breakfastPrice: number;
}