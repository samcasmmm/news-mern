import { toggleModal } from '@/app/features/UIState.slice';
import Modal from '@/components/common/Modal';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/hooks/useAppState';

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex h-screen w-full items-center justify-center">
      Main Content
      <Button onClick={() => dispatch(toggleModal())}>Open</Button>
      <Modal
        title="testing"
        description=" Make changes to our profile here. Click save when you're done."
      >
        <p>hh</p>
      </Modal>
    </div>
  );
};

export default Home;
