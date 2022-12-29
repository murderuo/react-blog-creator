import { forwardRef } from 'react';
import Select from 'react-select';

function CustomReactSelect({ options, onChange, multiple, name,defaultValue }) {
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

// export const userOptions = data.users.map(()=>{})

// export const photoOptions = [
//   { value: 'photo', label: 'photo1' },
//   { value: 'photo', label: 'photo2' },
//   { value: 'photo', label: 'photo3' },
// ];
// export const titleOptions = [
//   { value: 'title', label: 'Lorem ipsum dolor sit amet.' },
//   {
//     value: 'title',
//     label: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
//   },
//   { value: 'title', label: 'Lorem ipsum dolor sit amet consectetur.' },
// ];
// export const postOptions = [
//   { value: 'post', label: 'Lorem ipsum dolor sit amet.' },
//   {
//     value: 'post',
//     label: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
//   },
//   { value: 'post', label: 'Lorem ipsum dolor sit amet consectetur.' },
// ];

// export const commentOptions = [
//   { value: 'post', label: 'Lorem ipsum dolor sit amet.' },
//   {
//     value: 'post',
//     label: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
//   },
//   { value: 'post', label: 'Lorem ipsum dolor sit amet consectetur.' },
// ];
