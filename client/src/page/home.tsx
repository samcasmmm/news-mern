import { toggleModal } from '@/app/features/UIState.slice';
import Modal from '@/components/common/Modal';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/hooks/useAppState';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <p>Main Content</p>
      <Modal
        title="testing"
        description=" Make changes to our profile here. Click save when you're done."
      >
        <p>hh</p>
      </Modal>
      <div className="flex items-center justify-center gap-4">
        <Button onClick={() => dispatch(toggleModal())}>Open</Button>
        <Button>
          <Link to="/about">About</Link>
        </Button>
        <Button>
          <Link to="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
