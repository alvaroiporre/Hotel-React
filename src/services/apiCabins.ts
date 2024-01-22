import ICabin from "../features/cabins/ICabin";
import supabase from "./supabase";

export const getCabins = async (): Promise<ICabin[]> => {
  const { data, error } = await supabase
  .from('cabins')
  .select('*');

  if(error) {
    console.error(error);
    throw new Error('Cabins coud not be loaded');
  }
  return data;
};

export const createCabin = async (newCabin: ICabin) => {
  const { data, error } = await supabase
  .from('cabins')
  .insert([
    newCabin,
  ])
  .select()
  if (error) {
    throw new Error("Cabin could not be deleted");
  }
  return data;
};

export const deleteCabin = async (id: number): Promise<ICabin | null> => {
  const { data , error } = await supabase
    .from('cabins')
    .delete()
    .eq("id", id);

    if (error) {
      throw new Error("Cabin could not be deleted");
    }
    return data;
};
