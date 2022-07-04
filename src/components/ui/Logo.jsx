import Image from 'next/image';
import styled from 'styled-components';

const LogoWrapper = styled.a`
  display: block;
  position: relative;
  height: 50px;
  width: 100px;
`;

const Logo = ({ ...props }) => {
  return (
    <LogoWrapper {...props}>
      <Image
        src="/logo.png"
        objectFit='contain'
        layout='fill'
        priority
        quality={100}
      />
    </LogoWrapper>
  );
};

export default Logo;
