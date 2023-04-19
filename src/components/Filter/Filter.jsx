import { useDispatch, useSelector } from 'react-redux';
import { setFilterContacts } from 'redux/contacts/filtersSlice';
import { SectionFilter, FilterFind, InputFilter } from './Filter.styled';
import { selectAllFilters } from 'redux/contacts/selectors';

export const Filter = () => {
  const filters = useSelector(selectAllFilters);
  const dispatch = useDispatch();

  const changeInputValue = evt => {
    const inputValue = evt.currentTarget.value;
    dispatch(setFilterContacts(inputValue));
  };

  return (
    <SectionFilter>
      <FilterFind>Find contacts by name</FilterFind>
      <InputFilter type="text" value={filters} onChange={changeInputValue} />
    </SectionFilter>
  );
};
