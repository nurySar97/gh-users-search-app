import React from 'react'
import styled from 'styled-components'
import { IUser } from '../interfaces/context'

interface propsTypes {
  user: IUser
}

const Default: React.FC<propsTypes> = ({ user }) => {
  const {
    avatarUrl,
    name,
    login,
    email,
    createdAt,
    followers,
    following,
    bio,
    location
  } = user
  return (
    <section className='mb-5'>
      <div className='row'>
        <div className='col-md-3'>
          <StyledAvatar className='mx-sm-auto mx-auto'>
            <StyledAvatarLoader />
            <StyledAvatarInner>
              <img src={`${avatarUrl}`} alt='avatar' />
            </StyledAvatarInner>
          </StyledAvatar>
        </div>
        <div className='col-md-8 col-sm-12 mt-sm-3 mt-md-0 mt-3 fs-4'>
          <p className='fs-3 fw-bold'>{name || login}</p>
          <p>{email}</p>
          <p>{location}</p>
          <p>Joined: {new Date(String(createdAt)).toDateString()}</p>
          <p>Followers: {followers.totalCount}</p>
          <p>Following: {following?.totalCount}</p>
          <em>{bio}</em>
        </div>
      </div>
    </section>
  )
}

export default Default

const StyledAvatar = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
`
const StyledAvatarLoader = styled.div`
  width: 100%;
  padding-top: 110%;
  background-color: #c2c2c2;
`

const StyledAvatarInner = styled.div`
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
