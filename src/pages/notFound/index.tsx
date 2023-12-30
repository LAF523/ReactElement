import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>
        The page you are looking for does not exist.
        <br />
        Please check the URL and try again.
      </p>
      <p>
        <Link to="/">Go to home page</Link>
      </p>
    </div>
  );
};

export default NotFound;
