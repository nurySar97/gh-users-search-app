import React from 'react'
import { IReposNodesItem } from './../interfaces/context'

interface propsTypes {
  repos: Array<IReposNodesItem>
  login: string,
  countOfRepos: number
}

const Default: React.FC<propsTypes> = ({ repos, login, countOfRepos }) => {

  if(!countOfRepos) return <div className='text-center'>User has not available repository</div>
  if(!repos.length) return <div className='text-center'>No result yet</div>
  
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
                    <p className='text-end'>{forkCount} Forks</p>
                    <p className='text-end'>{stargazerCount} Stars</p>
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
