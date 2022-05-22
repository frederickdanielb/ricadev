const MenuSelector = ({ options, ...props }) => {
  return (
    <li className="front-setting">
      <select {...props}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.description}
          </option>
        ))}
      </select>
    </li>
  );
};
export default MenuSelector;
