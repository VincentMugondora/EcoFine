import {Link} from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <h1>Blog Post</h1>
      <ul>
        <li><Link to="/Blog/post1">Post 1</Link></li>
        <li><Link to="/Blog/post2">Post 2</Link></li>
      </ul>
    </div>
  )
}

export default Blog
