import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import ICabin from "./ICabin";

export const useCreateCabin = () => {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: (newCabin: ICabin) => createEditCabin(newCabin),
    onSuccess: () => {
      toast.success("New cabin successfully created!");
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return  { isCreating, createCabin };
};

