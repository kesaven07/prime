import { CSS, styled } from 'stitches.config';
import { Text } from 'elements/Text';
import ChevronRight from 'public/images/icons/chevron_right.svg';
import Link from 'next/link';
import Image from 'next/image';

const Card = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  maxWidth: '390px',
  width: '100%',
  minHeight: '116px',
  color: '$white',
  zIndex: 1,

  svg: {
    width: '26px',
    height: '26px',
    fill: '$secondary200',
  },

  '&::before': {
    position: 'absolute',
    content: '',
    inset: 0,
    backgroundImage: '$primaryGradient6',
    zIndex: -1,
  },

  '&::after': {
    position: 'absolute',
    content: '',
    inset: 0,
    border: '.5px solid $secondary500',
    zIndex: -1,
    opacity: 0,
    transition: 'all .1s ease-out',
  },

  '&:hover::after': {
    opacity: 1,
    transform: 'scaleX(1.05) scaleY(1.2)',
  },
});

const StyledLink = styled('a', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '27px 30px',
  gap: '12px',
  zIndex: 1,
});

const StyledImage = styled(Image, {
  zIndex: -2,
});

const ServiceTitleCard = ({
  title,
  path,
  imagePath,
  icon,
  css,
}: {
  title: string;
  path: string;
  imagePath: string;
  icon?: JSX.Element;
  css?: CSS;
}) => {
  const Icon = icon || ChevronRight;
  return (
    <Card css={{ ...css }}>
      <StyledImage src={imagePath} layout='fill' objectFit='cover' alt='' />
      <Link href={path} passHref>
        <StyledLink>
          <Text as='p' type='b3' css={{ maxWidth: '204px' }}>
            {title}
          </Text>
          <Icon />
        </StyledLink>
      </Link>
    </Card>
  );
};

export default ServiceTitleCard;
