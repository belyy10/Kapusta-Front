import { Button } from './Button.styled';

export const BtnLogOut = ({ children, dispatch, closeModal }) => {
  const handleClick = () => {
    if (children === 'Yes') {
      dispatch();
      closeModal();
    }
  };

  return <Button onClick={handleClick}>{children}</Button>;
};

export const BtnDismiss = ({ children, closeModal }) => {
  return <Button onClick={closeModal}>{children}</Button>;
};
