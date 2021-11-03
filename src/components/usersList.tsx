import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IUsersItem } from './../interfaces/context'

interface propsTypes {
  users: Array<IUsersItem>
}

const Default: React.FC<propsTypes> = ({ users }) => {
  if(!users.length) return <div className='text-center fs-4'>No result yet</div>
  return (
    <div className='card'>
      <ul className='list-group'>
        {users.map(({ id, avatarUrl, name, login, repositories }) => {
          if (!name && !login) return null
          return (
            <li
              className='list-group-item cursor-pointer'
              key={id}
            >
              <Link to={`/user/${login}`}>
                <div className='row'>
                  <div className='col-3 col-sm-3 col-md-2'>
                    <CardImage className='mx-auto'>
                      <CardImageLoader />
                      <CardImageInner>
                        <img src={`${avatarUrl}`} alt='card' />
                      </CardImageInner>
                    </CardImage>
                  </div>
                  <div className='col-5 col-sm-5 col-md-5 d-flex align-items-center'>
                    <span className='fs-sm-6 fs-6 fw-bold'>{name || login}</span>
                  </div>
                  <div className='col-4 col-sm-4 col-md-5 d-flex align-items-center justify-content-end'>
                    <span className='fs-sm-6 fs-6 fw-bold'>
                      Repo {repositories.totalCount}
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
  width: 60px;
  height: 60px;
  position: relative;

  @media(max-width:425px){
    & {
      width: 50px;
      height: 50px;
    }
  }
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
