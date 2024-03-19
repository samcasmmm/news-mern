import { Button } from '@/components';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <p>About</p>
      <div className="flex items-center justify-center gap-4">
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
};

export default About;
