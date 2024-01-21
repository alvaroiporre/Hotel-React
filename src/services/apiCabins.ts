import supabase from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase
  .from('cabins')
  .select('*');

  if(error) {
    console.error(error);
    throw new Error('Cabins coud not be loaded');
  }
  return data;
};

