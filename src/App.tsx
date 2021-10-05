import React from 'react'

const App: React.FC = () => {
  return (
    <div className='container p-3'>
      <div className='row'>
        <div className='col-xl-8 mx-auto'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Username'
              aria-label='Username'
              aria-describedby='basic-addon1'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
