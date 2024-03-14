import { ReactNode } from 'react';
import { useAppSelector } from '@/hooks/useAppState';

interface Props {
  children: ReactNode;
}

const IsLoggedInWrapper = ({ children }: Props) => {
  const { isLoggedIn } = useAppSelector((state) => state.Auth);
  return isLoggedIn ? <>{children}</> : null;
};

export default IsLoggedInWrapper;
