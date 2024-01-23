import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import ICabin from "./ICabin";
import toast from "react-hot-toast";
import FormRow, { StyledFormRow } from "../../ui/FormRow";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: (newCabin: ICabin) => createCabin(newCabin),
    onSuccess: () => {
      toast.success("New cabin successfully created!");
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
      reset();
    },
    onError: (err: Error) => toast.error(err.message),
  });

  const onSubmit = (data: any) => {
    //console.log(data);
    mutate({...data, image: data.image[0]});
  };
  const onError = (errors: any) => {
    console.log(errors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message as string}>
        <Input type="text" id="name" disabled={isCreating} {...register("name", {
          required: "This field is required",
        })} />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.max_capacity?.message as string}>
        <Input type="number" id="max_capacity" disabled={isCreating} {...register("max_capacity", {
          required: "This field is required",
          min: {
            value: 1,
            message: 'Capacity should be at least 1',
          }
        })} />

      </FormRow>

      <FormRow label="Regular price" error={errors?.regular_price?.message as string}>
        <Input type="number" id="regular_price" disabled={isCreating} {...register("regular_price", {
          required: "This field is required",
          min: {
            value: 1,
            message: 'Capacity should be at least 1',
          }
        })} />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message as string}>
        <Input type="number" id="discount" disabled={isCreating} defaultValue={0} {...register("discount", {
          required: "This field is required",
          validate: (value) => value <= getValues().regular_price || 'Discount should be least than regular price',
        })} />
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message as string}>
        <Textarea type="number" id="description" disabled={isCreating} defaultValue="" {...register("description", {
          required: "This field is required"
        })} />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message as string}>
        <FileInput id="image" accept="image/*" disabled={isCreating} {...register("image", {
          required: "This field is required"
        })} />
      </FormRow>

      <StyledFormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isCreating} >
          Cancel
        </Button>
        <Button disabled={isCreating}>Edit cabin</Button>
      </StyledFormRow>
    </Form>
  );
}

export default CreateCabinForm;
