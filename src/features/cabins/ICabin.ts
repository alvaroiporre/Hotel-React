export default interface ICabin {
  id?: number;
  name: string;
  max_capacity: number;
  regular_price: number;
  discount: number;
  image: string | any;
  description: string;
}