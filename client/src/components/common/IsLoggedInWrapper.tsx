import { ReactNode, useEffect } from 'react';
import { useAppSelector } from '@/hooks/useAppState';

interface Props {
  children: ReactNode;
}

const IsLoggedInWrapper = ({ children }: Props) => {
  const { isAuthenticated } = useAppSelector((state) => state.Auth);
  useEffect(() => {}, [isAuthenticated]);
  return isAuthenticated ? <> {children}</> : null;
};

export default IsLoggedInWrapper;
