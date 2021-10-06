import React from 'react'

interface defaultProps {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: string
}

const Default: React.FC<defaultProps> = props => {
  const { placeholder, onInputChange, ...rest } = props
  return (
    <div className='row mb-5'>
      <div className='col-lg-8 col-md-12 mx-auto'>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            placeholder={placeholder}
            aria-label='Username'
            aria-describedby='basic-addon1'
            onChange={onInputChange}
            {...rest}
          />
          <span className='input-group-text' id='basic-addon1'>
            <i className='fas fa-search' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Default
