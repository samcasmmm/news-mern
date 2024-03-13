import { cn } from '@/libs/clxs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {
  src: string;
  alt: string;
  className: string;
  onClick: () => void;
};

const AvatarWrapper = ({ src, alt, className, onClick }: Props) => {
  return (
    <Avatar className={cn('', className)} onClick={onClick}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarWrapper;
