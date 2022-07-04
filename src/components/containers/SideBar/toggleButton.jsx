import { ToggleButtoWrapper } from './sideBar.styled';
import { VscThreeBars } from 'react-icons/vsc';

const ToggleButton = (props) => {
  return (
    <ToggleButtoWrapper {...props}>
      <VscThreeBars fill='#000000' size='2.5em'/>
    </ToggleButtoWrapper>
  );
};

export default ToggleButton;
