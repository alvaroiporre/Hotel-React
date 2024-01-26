import ICabin from "../features/cabins/ICabin";
import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async (): Promise<ICabin[]> => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins coud not be loaded");
  }
  return data;
};

export const createEditCabin = async (newCabin: ICabin, id?: number) => {
  console.log(newCabin, id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image?.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // 1. Create/edit  cabin
  let query = supabase.from('cabins');

  // A) CREATE
  if (!id)
    query = query.insert([
      {
        ...newCabin,
      },
    ]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    throw new Error("Cabin could not be editing");
  }

  // 2. Upload Image
  if(hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error("Storage Error: ", storageError);
    throw new Error(
      "Cabins image coud not be uploaded and the cabin was not created"
    );
  }

  return data;
};

export const deleteCabin = async (id: number): Promise<ICabin | null> => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("Cabin could not be deleted");
  }
  return data;
};
