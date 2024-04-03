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
  value: string;
  isOptionDisabled?: (option: any) => boolean;
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
  isOptionDisabled,
  ...props
}: IProps) => {
  const selectedValue = options.find((el) => el.value === defaultValue);

  return (
    <div>
      {label && (
        <label>
          {label} {required && '*'}
        </label>
      )}
      <ReactSelect
        options={options}
        name={name}
        value={selectedValue}
        className="select-container"
        classNamePrefix="select"
        onChange={onChange}
        isOptionDisabled={isOptionDisabled}
        {...props}
      />
    </div>
  );
};

export default Select;
