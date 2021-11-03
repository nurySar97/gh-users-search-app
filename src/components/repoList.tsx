import React from 'react'
import { IUserReposItem } from './../interfaces/context'

interface propsTypes {
  repos: Array<IUserReposItem>
  login: string
}

const Default: React.FC<propsTypes> = ({ repos, login }) => {

  if(!repos.length) return <div className='text-center fs-4'>No result yet</div>
  
  return (
    <div className='card'>
      <ul className='list-group'>
        {repos.map(({ name, stargazerCount, forkCount }, index) => {
          return (
            <li className='list-group-item cursor-pointer' key={index}>
              <a
                href={`https://github.com/${login}/${name}`}
                target='_blank'
                rel='noreferrer'
              >
                <div className='row'>
                  <div className='col-6 fs-6 fw-bold d-flex align-items-center'>
                    {name}
                  </div>
                  <div className='col-6 fs-6 fw-bold d-flex flex-column'>
                    <div className='text-end'>{forkCount} Forks</div>
                    <div className='text-end'>{stargazerCount} Stars</div>
                  </div>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Default
