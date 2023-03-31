import PropTypes from 'prop-types';
import { FilterWrap } from './Filter.styled';
import { FilterInput } from './Filter.styled';

export const Filter = ({ filterValue, onFilterChange }) => {
  return (
    <FilterWrap>
      <FilterInput
        type="text"
        placeholder="Search for contact"
        value={filterValue}
        onChange={onFilterChange}
      ></FilterInput>
    </FilterWrap>
  );
};

Filter.protoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
