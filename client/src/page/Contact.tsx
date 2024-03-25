import { Button } from '@/components';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <p>Contact</p>
      <div className="flex items-center justify-center gap-4">
        <Button>
          <Link to="/about">About</Link>
        </Button>
        <Button>
          <Link to="/">Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
