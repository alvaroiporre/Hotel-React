import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as apiUpdateSetting} from "../../services/apiSettings";

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isEditing } = useMutation({
    mutationFn: apiUpdateSetting,
    onSuccess: () => {
      toast.success("Cabin successfully edited!");
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
    },
    onError: (err: Error) => toast.error(err.message),
  });
  return { isEditing, updateSetting };
};