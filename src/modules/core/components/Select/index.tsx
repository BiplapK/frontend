import React from 'react';

import ReactSelect from 'react-select';

export type OptionType = {
  label: string;
  value: string;
};

export type OptionsType = Array<OptionType>;

type IProps = {
  label?: string;
  name?: string;
  options: OptionsType;
  onChange?: (e: string) => void;
  required?: boolean;
  rounded?: boolean;
  className?: string;
  defaultValue?: string;
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
        value={selectedValue || null}
        className="select-container"
        classNamePrefix="select"
        onChange={(e) => {
          e && onChange && onChange(e.value);
        }}
        isOptionDisabled={isOptionDisabled}
        {...props}
      />
    </div>
  );
};

export default Select;
