import "./material-icons.css";

const VariableButton = () => {
  const className = `bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-all font-sans font-thin shadow-lg flex`
  return(
    <button className={className}>
      Button
    </button>
  );
}

export default VariableButton;