import Select from 'react-select';

function CustomReactSelect({ options, onChange, multiple, name }) {
  return (
    <>
      <Select
        name={name}
        options={options}
        onChange={onChange}
        isMulti={multiple}
      ></Select>
    </>
  );
}

export default CustomReactSelect;
