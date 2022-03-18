import { Text } from 'elements/Text';
import { styled } from 'stitches.config';
import DownloadIcon from 'public/images/icons/download.svg';
import OutlineBox from 'elements/OutlineBox';
import HorizontalLine from './HorizontalLine';
import { DownloadButton } from './DownloadButton';

const Card = styled(OutlineBox, {
  position: 'relative',
  backgroundColor: '$primary800_35',
  backdropFilter: 'blur($blurs$5)',
  padding: '$10 $10',

  $$outlineColor: '$colors$secondary500',
});

const Footer = styled('footer');

const MediaKitCard = ({
  title,
  downloadPath,
  footer,
  css,
}: {
  title: string;
  downloadPath: string;
  footer: any;
  css?: any;
}) => {
  return (
    <Card css={css}>
      <Text as='h2' type='h4' weight='bold' css={{ marginBottom: '$7' }}>
        {title}
      </Text>
      <br />
      <DownloadButton
        href={downloadPath}
        text='Download Media Kit'
        border
        icon={DownloadIcon}
        color='$secondary500'
        css={{ marginBottom: '$9' }}
      />
      <HorizontalLine />
      <Footer css={{ marginTop: '$9' }}>{footer}</Footer>
    </Card>
  );
};

export default MediaKitCard;
