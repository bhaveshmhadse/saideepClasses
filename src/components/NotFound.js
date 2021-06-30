import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='form'>
      <h1 style={{ fontSize: '5vw', padding: '1rem' }}> Opps! Component Not Found!</h1>
      <Link style={{ color: 'orange', textDecoration: 'none' }} to='/saideepClasses'>
        {'< '} Go Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
