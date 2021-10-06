import React from 'react'

interface propsTypes {
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: string
}

const Default: React.FC<propsTypes> = props => {
  const {onInputChange, ...rest } = props
  return (
    <div className='row mb-5'>
      <div className='col-lg-8 col-md-12 mx-auto'>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            onChange={onInputChange}
            {...rest}
          />
          <span className='input-group-text'>
            <i className='fas fa-search' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Default
