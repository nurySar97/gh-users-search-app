import { Link } from "react-router-dom"

const Default = () => {
  return (
    <header>
      <h1 className='h1 text-light text-center'>
        <Link to="/">GitHub Searcher</Link>
      </h1>
    </header>
  )
}

export default Default
