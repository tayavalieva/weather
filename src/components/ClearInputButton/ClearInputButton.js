import "./ClearInputButton.css";

const ClearInputButton = ({ onClick }) => {
  return (
    <button type='reset' className='clear-input-button' onClick={onClick} />
  );
};

export default ClearInputButton;
