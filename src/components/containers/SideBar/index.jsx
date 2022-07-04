import SideBarStyled from './sideBar.styled';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { AiOutlineImport } from 'react-icons/ai';

const SideBar = ({ toggleShow, show, items, title }) => {
  return (
    <SideBarStyled.Wrapper>
      <SideBarStyled.Overlay onClick={toggleShow} isActive={show}/>
      <SideBarStyled.Content isActive={show}>
        <SideBarStyled.List>
          <SideBarStyled.Item>
            <SideBarStyled.Title>{title}</SideBarStyled.Title>
            <SideBarStyled.Line width={30}/>
          </SideBarStyled.Item>
          {
            items && items.map((item) => (
              <SideBarStyled.Item key={item.id}>
                <Link href={item.to}>
                  <SideBarStyled.ItemLink>{item.name}</SideBarStyled.ItemLink>
                </Link>
                <SideBarStyled.Line/>
              </SideBarStyled.Item>
            ))
          }
        </SideBarStyled.List>
        <SideBarStyled.Back>
          <Link href='/menu'>
            <a>
              <AiOutlineImport size='3rem'/>
              <h4>Salir</h4>
            </a>
          </Link>
        </SideBarStyled.Back>
      </SideBarStyled.Content>
    </SideBarStyled.Wrapper>
  );
};

SideBar.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  toggleShow: PropTypes.func,
  show: PropTypes.bool
};

export default SideBar;
