import React from 'react'

export const renderField = ({
  input,
  label,
  type,
  meta: { pristine, touched, error, invalid }
}) => {
  // Track state of inputs:
  // console.log(`${label} is pristine: ${pristine}, invalid: ${invalid}, touched: ${touched}`);

  // Construct form-group class depending on form state`
  const groupClass = !pristine || touched
    ? invalid
        ? 'form-group has-error has-feedback'
        : 'form-group has-success has-feedback'
    : 'form-group'

  // Construct form-control class depending on form state
  const inputClass = !pristine || touched
    ? invalid
        ? 'form-control form-control-danger'
        : 'form-control form-control-success'
    : 'form-control'

  // Render X or checkmark icon
  const renderIcon = () => {
    if ((!pristine && invalid) || (touched && invalid)) {
      return (
        <span
          className='glyphicon glyphicon-remove form-control-feedback'
          aria-hidden='true'
        />
      )
    } else if ((!pristine && !invalid) || (touched && !invalid)) {
      return (
        <span
          className='glyphicon glyphicon-ok form-control-feedback'
          aria-hidden='true'
        />
      )
    }
  }

  return (
    <div className={groupClass}>
      <label className='control-label'>{label}</label>
      <input
        {...input}
        // placeholder={label}
        type={type}
        className={inputClass}
      />
      {renderIcon()}
      {!pristine || (touched && invalid && <span>{error}</span>)}
    </div>
  )
}

export default renderField
