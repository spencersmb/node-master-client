import React from 'react'

export const checkBox = ({
  key,
  className,
  value,
  name,
  id,
  input,
  label,
  type,
  meta: { pristine, touched, error, invalid }
}) => {
  // Track state of inputs:
  // console.log(`${label} is pristine: ${pristine}, invalid: ${invalid}, touched: ${touched}`);

  // Construct form-group class depending on form state`
  // const groupClass = !pristine || touched
  //   ? invalid
  //       ? 'form-group has-error has-feedback'
  //       : 'form-group has-success has-feedback'
  //   : 'form-group'

  // Construct form-control class depending on form state
  const inputClass = !pristine || touched
    ? invalid
        ? 'tag__choice form-control-danger'
        : 'tag__choice form-control-success'
    : 'tag__choice'

  return (
    <div key={key} className={inputClass}>
      <input {...input} id={id} value={value} type={type} />
      <label htmlFor={name}>{label}</label>
      {!pristine || (touched && invalid && <span>{error}</span>)}
    </div>
  )
}

export default checkBox
