import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '..';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppState';
import { toggleModal } from '@/app/features/UIState.slice';

interface Props {
  title: string;
  children: ReactNode;
  description?: string;
}

const Modal = ({ title, children, description }: Props) => {
  const { modal } = useAppSelector((state) => state.UIState);
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(toggleModal());
  };
  return (
    <Dialog
      onOpenChange={closeModal}
      open={modal.toggle}
      modal
      defaultOpen={modal.toggle}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <>{children}</>
        <DialogFooter>
          <Button type="button" variant={'ghost'} onClick={closeModal}>
            Close
          </Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
