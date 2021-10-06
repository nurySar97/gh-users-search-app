import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IUsersItem } from './../interfaces/context'

interface propTypes {
  users: Array<IUsersItem>
}

const Default: React.FC<propTypes> = ({ users }) => {
  return (
    <div className='card'>
      <ul className='list-group'>
        {users.map(({ id, avatarUrl, name, login, repositories }, index) => {
          if (!name && !login) return null
          return (
            <li
              className='list-group-item cursor-pointer'
              key={index + ' ' + id}
            >
              <Link to={`/user/${login}`}>
                <div className='row'>
                  <div className='col-3 col-sm-3 col-md-1'>
                    <CardImage>
                      <CardImageLoader />
                      <CardImageInner>
                        <img src={`${avatarUrl}`} alt='' />
                      </CardImageInner>
                    </CardImage>
                  </div>
                  <div className='col-6 col-sm-5 col-md-6 d-flex align-items-center'>
                    <span className='fs-4 fw-bold'>{name || login}</span>
                  </div>
                  <div className='col-2 col-sm-4 col-md-5 d-flex align-items-center justify-content-end'>
                    <span className='fs-4 fw-bold'>
                      {repositories.totalCount}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Default

const CardImage = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`

const CardImageLoader = styled.div`
  width: 100%;
  padding-top: 100%;
  background: #b8b6b5;
`

const CardImageInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
  }
`
