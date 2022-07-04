import PropTypes from 'prop-types';

const PublicLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default PublicLayout;
