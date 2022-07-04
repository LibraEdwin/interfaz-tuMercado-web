import { HeadLine, Small } from '@components/typography';
import ImageUploadStyled from './imageUpload.styled';
import { BsCloudUploadFill } from 'react-icons/bs';
import { useState } from 'react';

const ImageUpload = ({ ...props }) => {
  const [image, setImage] = useState(true);
  return (
    <ImageUploadStyled.Wrapper {...props}>
      {!image
        ? (
          <ImageUploadStyled.info className='text-center'>
            <Small>
              La imagen debe pesar max. 2mb
            </Small>
            <Small className='mt-5'>
              <HeadLine className='mb-0'>
                <BsCloudUploadFill />
              </HeadLine>
              Cargar imagen del producto
            </Small>
          </ImageUploadStyled.info>)
        : (
          <>
            <ImageUploadStyled.Preview src='/img/product.jpg' />
          </>
        )}
      <input type="file" />
    </ImageUploadStyled.Wrapper>
  );
};

export default ImageUpload;
