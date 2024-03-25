import React from 'react';
import { LucideProps } from 'lucide-react';
import { cn } from '@/libs/clxs';

interface IconWrapperProps extends LucideProps {
  icon: React.FC<LucideProps>;
  className?: string;
  size?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: Icon,
  className = '',
  size = '24px',
}) => {
  return (
    <div
      className={cn(
        'cursor-pointer rounded-full p-2 hover:bg-gray-100 ',
        className,
      )}
    >
      <Icon style={{ width: size, height: size }} />
    </div>
  );
};

export default IconWrapper;
