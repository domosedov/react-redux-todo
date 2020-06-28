import React from 'react';

const FilterButton = ({buttonText, active, clickHandler}) => {
  let cn = 'todo__filter';
  if (active) {
    cn += ' todo__filter--active';
  }

  return (
    <button disabled={active} className={cn} onClick={() => clickHandler()}>
      {buttonText}
    </button>
  )
};

export default FilterButton;