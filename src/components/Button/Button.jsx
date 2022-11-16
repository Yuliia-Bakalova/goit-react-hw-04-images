import PropTypes from 'prop-types';
import { LoadMore, ButtonContainer } from './Button.styled';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <ButtonContainer>
      <LoadMore type="submit" onClick={onClick}>
        Load more
      </LoadMore>
    </ButtonContainer>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
