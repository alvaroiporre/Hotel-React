import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ICabin from "./ICabin";
import { createEditCabin } from "../../services/apiCabins";

export const useEditCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: (data:ICabin) => createEditCabin(data, data.id),
    onSuccess: () => {
      toast.success("Cabin successfully edited!");
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
    },
    onError: (err: Error) => toast.error(err.message),
  });
  return { isEditing, editCabin };
};