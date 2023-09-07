import { BtnLoadMore } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <>
      <BtnLoadMore onClick={onLoadMore} type="button">
        Load more
      </BtnLoadMore>
    </>
  );
};
