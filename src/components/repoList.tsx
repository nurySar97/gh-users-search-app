import React from 'react'
import { INodesItem } from './../interfaces/context'

interface propTypes {
  repos: Array<INodesItem>
  login: string
}

const Default: React.FC<propTypes> = ({ repos, login }) => {
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
                  <div className='d-flex align-items-center col-8 col-sm-3 col-md-8 fs-5 fw-bold'>
                    {name}
                  </div>
                  <div className='col-6 col-sm-5 col-md-4 d-flex flex-column'>
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
