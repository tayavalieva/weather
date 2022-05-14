import "./DropdownList.css";

const DropdownList = ({ suggestions }) => {
  return (
    <div className='dropdown'>
      <ul className='dropdown__list'>
        {suggestions.map((suggestion, index) => (
          <li
            className='dropdown__item'
            key={index}
          >{`${suggestion.name},  ${suggestion.country}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
