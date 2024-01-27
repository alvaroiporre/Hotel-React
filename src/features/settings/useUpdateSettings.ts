import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as apiUpdateSetting} from "../../services/apiSettings";

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: apiUpdateSetting,
    onSuccess: () => {
      toast.success("Settings successfully updated!");
      queryClient.invalidateQueries({
        queryKey: ['settings']
      });
    },
    onError: (err: Error) => toast.error(err.message),
  });
  return { isUpdating, updateSetting };
};