import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import ICabin from "./ICabin";

import { useForm } from "react-hook-form";
import FormRow, { StyledFormRow } from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

interface ICreateCabinFormProps {
  cabinToEdit?: ICabin;
  onClose?: () => void;
}

function CreateCabinForm({ cabinToEdit, onClose }: ICreateCabinFormProps) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const isEditSession = cabinToEdit !== undefined;


  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? cabinToEdit : {},
  });
  const { errors } = formState;


  const onSubmit = (data) => {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditSession) editCabin({ ...data, image, id: cabinToEdit.id }, {
      onSuccess: () => {
        reset();
        onClose?.();
      }
    });

    else createCabin({ ...data, image }, {
      onSuccess: () => {
        reset();
        onClose?.();
      }
    });
  };
  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type={onClose ? "modal" : "regular"}>
      <FormRow label="Cabin name" error={errors?.name?.message as string}>
        <Input type="text" id="name" disabled={isCreating} {...register("name", {
          required: "This field is required",
        })} />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.max_capacity?.message as string}>
        <Input type="number" id="max_capacity" disabled={isWorking} {...register("max_capacity", {
          required: "This field is required",
          min: {
            value: 1,
            message: 'Capacity should be at least 1',
          }
        })} />

      </FormRow>

      <FormRow label="Regular price" error={errors?.regular_price?.message as string}>
        <Input type="number" id="regular_price" disabled={isWorking} {...register("regular_price", {
          required: "This field is required",
          min: {
            value: 1,
            message: 'Capacity should be at least 1',
          }
        })} />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message as string}>
        <Input type="number" id="discount" disabled={isWorking} defaultValue={0} {...register("discount", {
          required: "This field is required",
          validate: (value) => value <= getValues().regular_price || 'Discount should be least than regular price',
        })} />
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message as string}>
        <Textarea type="number" id="description" disabled={isWorking} defaultValue="" {...register("description", {
          required: "This field is required"
        })} />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message as string}>
        <FileInput id="image" accept="image/*" disabled={isWorking} {...register("image", {
          required: isEditSession ? false : "This field is required"
        })} />
      </FormRow>
      <StyledFormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isWorking} onClick={() => onClose?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit cabin' : 'Add cabin'}</Button>
      </StyledFormRow>
    </Form>
  );
}

export default CreateCabinForm;
