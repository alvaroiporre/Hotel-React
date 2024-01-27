import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useSettings } from './useSettings';
import { useUpdateSetting } from './useUpdateSettings';

function UpdateSettingsForm() {

  const { isLoading, settings: {min_booking_length, max_booking_length, max_guest_per_booking, breackfast_price} = {} } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  const handleUpdate = (e, field, before) => {
    const { value } = e.target;
    if(!value || value == before) return;
    updateSetting({[field]: value})
  };

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' disabled={isUpdating} defaultValue={min_booking_length} onBlur={(e) => handleUpdate(e, 'min_booking_length', min_booking_length)}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' disabled={isUpdating} defaultValue={max_booking_length} onBlur={(e) => handleUpdate(e, 'max_booking_length', max_booking_length)}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' disabled={isUpdating} defaultValue={max_guest_per_booking} onBlur={(e) => handleUpdate(e, 'max_guest_per_booking', max_guest_per_booking)}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' disabled={isUpdating} defaultValue={breackfast_price} onBlur={(e) => handleUpdate(e, 'breackfast_price', breackfast_price)}/>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
