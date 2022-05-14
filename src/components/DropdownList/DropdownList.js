import "./DropdownList.css";

const DropdownList = ({ suggestions, onSelectSuggestion }) => {
  const handleClick = (event) => {
    const selectedId = Number(event.currentTarget.id);
    onSelectSuggestion(selectedId);
  };

  return (
    <div className='dropdown'>
      <ul className='dropdown__list'>
        {suggestions.map((suggestion, index) => (
          <li
            className='dropdown__item'
            key={`${index}${suggestion.name}`}
            id={index}
            onClick={handleClick}
          >{`${suggestion.name},  ${suggestion.country}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
