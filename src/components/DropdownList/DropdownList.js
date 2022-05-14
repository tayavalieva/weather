import "./DropdownList.css";
import { noSuggestionMessage } from "../../constants/constants";

const DropdownList = ({ suggestions, onSelectSuggestion, inputValue }) => {
  return (
    <div className='dropdown'>
      {suggestions.length < 1 && inputValue.length > 0 ? (
        <ul className='dropdown__list dropdown__list_inactive'>
          <li className='dropdown__item'>{noSuggestionMessage}</li>
        </ul>
      ) : (
        <ul className='dropdown__list'>
          {suggestions.map((suggestion, index) => (
            <li
              className='dropdown__item dropdown__item_active'
              key={`${index}${suggestion.name}`}
              id={index}
              onClick={() => {
                onSelectSuggestion(suggestion);
              }}
            >{`${suggestion.name},  ${suggestion.country}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
