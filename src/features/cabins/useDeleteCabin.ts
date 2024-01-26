import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export const useDeleteCabin = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,//(id: number) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Cabin succesfully deleted!");
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
    },
    onError: (err: TypeError) => toast.error(err.message)
  });

  return { isDeleting, deleteCabin };
};

