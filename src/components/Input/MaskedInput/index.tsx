import { Control, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

interface MaskedInputProps {
  control: Control;
  name: string;
  id: string;
  mask: string;
  maskPlaceholder?: string;
}

const MaskedInput = (props: MaskedInputProps) => {
  const { id, control, name, mask, maskPlaceholder } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <InputMask
          id={id}
          mask={mask}
          maskPlaceholder={maskPlaceholder}
          {...field}
        />
      )}
    />
  );
};

export default MaskedInput;
