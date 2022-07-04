import PropTypes from 'prop-types';
import { AdminWrapper, AdminMain } from './adminLayout';
import { HeaderAdmin } from '@components/sections';

const AdminLayout = ({ children, titlePage, nameModule, items }) => {
  return (
    <>
      <AdminWrapper>
        <HeaderAdmin title={titlePage} name={nameModule} modules={items}/>
        <AdminMain bgGray={false}>
          {children}
        </AdminMain>
      </AdminWrapper>
    </>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
  titlePage: PropTypes.string,
  nameModule: PropTypes.string,
  items: PropTypes.array
};

export default AdminLayout;
