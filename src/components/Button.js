import "./material-icons.css";

const Button = ({
  variant = "default",
  shadow = false,
  disabled = false,
  iconKey = "",
  iconPos = "left",
  size = "md",
  color = "default",
  text = "Button"
}) => {
  let paddingSize = "";

  switch (size) {
    case "sm":
      paddingSize = "py-1 px-3";
      break;
    case "md":
      paddingSize = "py-2 px-4";
      break;
    case "lg":
      paddingSize = "py-3 px-5";
      break;
    default:
      paddingSize = "";
      break;
  }

  let buttonColor = "";

  const colorPrimary = {
    static: "blue-600",
    hover: "bg-blue-700",
    text: "text-white"
  }
  const colorDefault = {
    static: "gray-300",
    hover: "bg-gray-400",
    text: "text-gray-900"
  }
  const colorDanger = {
    static: "red-400",
    hover: "bg-red-500",
    text: "text-white"
  }
  const colorSecondary = {
    static: "gray-600",
    hover: "bg-gray-700",
    text: "text-white"
  }

  if (color === "primary") {
    buttonColor = colorPrimary;
  } else if (color === "secondary") {
    buttonColor = colorSecondary;
  } else if (color === "danger") {
    buttonColor = colorDanger;
  } else {
    buttonColor = colorDefault;
  }

  let shadowStyle = "shadow-lg";
  if (!shadow) { shadowStyle = "shadow-none"}

  let defaultStyle = `bg-${buttonColor.static} hover:${buttonColor.hover} ${buttonColor.text} font-semibold ${paddingSize} rounded-md transition-all font-sans font-thin flex ${shadowStyle}`;
  let outlineStyle = `bg-transparent hover:bg-blue-100 hover:border-blue-500 text-blue-700 font-semibold ${paddingSize} border border-blue-500 hover:border-transparent rounded-md transition-all flex ${shadowStyle}`;
  let textStyle = `bg-transparent hover:bg-blue-100 text-blue-700 font-semibold ${paddingSize} border hover:border-transparent rounded-md transition-all border-opacity-0 flex ${shadowStyle}`;
  
  let icon = "";
  let style = "";
  let iconLeft,
    iconRight = "";



  if (iconKey === "cart") {
    icon = "add_shopping_cart";
  } else if (iconKey === "ac") {
    icon = "ac_unit";
  } else if (iconKey === "account") {
    icon = "manage_accounts";
  } else if (iconKey === "apps") {
    icon = "apps";
  } else if (iconKey === "cam") {
    icon = "camera_alt";
  }

  switch (variant) {
    case "outline":
      if (disabled) {
        outlineStyle = `bg-gray-100 text-gray-400 font-semibold ${paddingSize} ${shadowStyle}  border border-gray-300 rounded-md flex cursor-not-allowed`;
      }
      style = outlineStyle;
      break;
    case "text":
      if (disabled) {
        textStyle = `bg-transparent ${paddingSize} ${shadowStyle} text-gray-400 cursor-not-allowed font-semibold flex cursor-not-allowed`;
      }
      style = textStyle;
      break;
    default:
      if (disabled) {
        defaultStyle = `bg-gray-200 rounded-md ${paddingSize} ${shadowStyle}  text-gray-400 cursor-not-allowed font-semibold flex cursor-not-allowed`;
      }
      style = defaultStyle;
      break;
  }

  if (iconPos === "right") {
    iconRight = icon;
  } else {
    iconLeft = icon;
  }

  // return (
  //   <button className="bg-red-400 hover:bg-gray-500 text-gray-900 font-semibold px-4 py-2 rounded-md transition-all font-sans font-thin flex shadow-lg">
  //     <span className="material-icons-round mr-2">{iconLeft}</span>
  //     {text}
  //     <span className="material-icons-round ml-2">{iconRight}</span>
  //   </button>
  // );

  return (
    <button className={style}>
      <span className="material-icons-round mr-2">{iconLeft}</span>
      {text}
      <span className="material-icons-round ml-2">{iconRight}</span>
    </button>
  );
};

export default Button;
