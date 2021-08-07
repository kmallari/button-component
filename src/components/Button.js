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

  const colorPrimary = ["blue-600", "bg-blue-700", "text-white"];
  const colorDefault = ["gray-300", "bg-gray-400", "text-gray-900"];
  const colorDanger = ["red-400", "bg-red-500", "text-white"];
  const colorSecondary = ["gray-600", "bg-gray-700", "text-white"];

  switch (color) {
    case "primary":
      buttonColor = colorPrimary;
      break;
    case "secondary":
      buttonColor = colorSecondary;
      break;
    case "danger":
      buttonColor = colorDanger;
      break;
    default:
      buttonColor = colorDefault;
      break;
  }

  let shadowStyle = "shadow-lg";
  if (!shadow) { shadowStyle = "shadow-none"}

  let defaultStyle = `bg-${buttonColor[0]} hover:${buttonColor[1]} ${buttonColor[2]} font-semibold ${paddingSize} rounded-md transition-all font-sans font-thin flex ${shadowStyle}`;
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

  return (
    <button className={style}>
      <span class="material-icons-round mr-2">{iconLeft}</span>
      {text}
      <span class="material-icons-round ml-2">{iconRight}</span>
    </button>
  );
};

export default Button;
