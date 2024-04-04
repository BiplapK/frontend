import React from 'react';

import ReactSelect from 'react-select';

export type OptionType = {
  label: string;
  value: string;
};

type IProps = {
  label?: string;
  name?: string;
  options: Array<OptionType>;
  onChange?: (e: any) => void;
  required?: boolean;
  rounded?: boolean;
  className?: string;
  defaultValue?: string;
  value: string | null;
  isOptionDisabled?: (option: any) => boolean;
  customLabel?: string;
  error?: any;
};

const Select = ({
  label,
  options,
  name = 'select',
  onChange,
  required = false,
  rounded = false,
  className,
  defaultValue,
  value,
  customLabel,
  error,
  isOptionDisabled,
  ...props
}: IProps) => {
  const selectedValue = options.find((el) => el.value === defaultValue);

  return (
    <div className="mb-2">
      <label
        className="block  text-black-200 text-base font-medium mb-2 capitalize"
        htmlFor={name}
      >
        {Boolean(customLabel) ? customLabel : name}
      </label>

      <ReactSelect
        options={options}
        name={name}
        value={selectedValue}
        className="select-container"
        classNamePrefix="select"
        onChange={onChange}
        isOptionDisabled={isOptionDisabled}
        isClearable
        {...props}
      />
      {error && <p className="text-red-200 text-md pt-1 italic">{error}</p>}
    </div>
  );
};

export default Select;
