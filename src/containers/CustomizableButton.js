import Button from "../components/Button";
import React from "react";

const CustomizableButton = () => {
  const [variant, setVariant] = React.useState("default");
  const [shadow, setShadow] = React.useState(false);
  const [disabled, setDisable] = React.useState(false);
  const [icon, setIcon] = React.useState("");
  const [iconPos, setIconPos] = React.useState("left");
  const [size, setSize] = React.useState("md");
  const [color, setColor] = React.useState("");
  const [text, setText] = React.useState("Button");

  return (
    <div className="">
      <div className="md:mt-20 flex flex-wrap md:w-3/5 justify-start mx-auto">
        {/* Variants */}
        <div className="bg-gray-50 rounded-lg p-6 m-4 ">
          <h2 className="font-sans font-bold text-xl ">Variant</h2>
          <div className="flex flex-row items-center flex-wrap">
            <input
              type="radio"
              id="default"
              name="variant"
              value="default"
              className="mr-2 form-radio h-3 w-3 text-orange-600"
              checked={variant === "default"}
              onChange={(e) => {
                setVariant(e.target.value);
              }}
            />
            <label for="default" className="mr-6">
              Default
            </label>
            <input
              type="radio"
              id="outline"
              name="variant"
              value="outline"
              className="mr-2"
              checked={variant === "outline"}
              onChange={(e) => {
                setVariant(e.target.value);
              }}
            />
            <label for="outline" className="mr-6">
              Outline
            </label>
            <input
              type="radio"
              id="text"
              name="variant"
              value="text"
              className="mr-2"
              checked={variant === "text"}
              onChange={(e) => {
                setVariant(e.target.value);
              }}
            />
            <label for="text">Text</label>
          </div>
        </div>
        {/* Shadow */}
        <div className="bg-gray-50 rounded-lg p-6 m-4 ">
          <h2 className="font-sans font-bold text-xl ">Shadow</h2>
          <div className="flex flex-row items-center flex-wrap">
            <input
              type="radio"
              id="on"
              name="shadow"
              value="on"
              className="mr-2"
              checked={shadow === true}
              onChange={() => {
                setShadow(true);
              }}
            />
            <label for="on" className="mr-6">
              On
            </label>
            <input
              type="radio"
              id="off"
              name="shadow"
              value="off"
              className="mr-2"
              checked={shadow === false}
              onChange={() => {
                setShadow(false);
              }}
            />
            <label for="off" className="mr-6">
              Off
            </label>
          </div>
        </div>
        {/* Disabled */}
        <div className="bg-gray-50 rounded-lg p-6 m-4 ">
          <h2 className="font-sans font-bold text-xl ">Disabled</h2>
          <div className="flex flex-row items-center flex-wrap">
            <input
              type="radio"
              id="true"
              name="disabled"
              value="true"
              className="mr-2"
              checked={disabled === true}
              onChange={() => {
                setDisable(true);
              }}
            />
            <label for="true" className="mr-6">
              True
            </label>
            <input
              type="radio"
              id="false"
              name="disabled"
              value="false"
              className="mr-2"
              checked={disabled === false}
              onChange={() => {
                setDisable(false);
              }}
            />
            <label for="false" className="mr-6">
              False
            </label>
          </div>
        </div>
        {/* Icon */}
        <div className="bg-gray-50 rounded-lg p-6 m-4 ">
          <h2 className="font-sans font-bold text-xl ">Icon</h2>
          <div className="flex flex-row items-center flex-wrap">
            <input
              type="radio"
              id="none"
              name="icon"
              value=""
              className="mr-2"
              checked={icon === ""}
              onChange={(e) => {
                setIcon(e.target.value);
              }}
            />
            <label for="none" className="mr-6">
              None
            </label>
            <input
              type="radio"
              id="cart"
              name="icon"
              value="cart"
              className="mr-2"
              checked={icon === "cart"}
              onChange={(e) => {
                setIcon(e.target.value);
              }}
            />
            <label for="cart" className="mr-6">
              Cart
            </label>
            <input
              type="radio"
              id="ac"
              name="icon"
              value="ac"
              className="mr-2"
              checked={icon === "ac"}
              onChange={(e) => {
                setIcon(e.target.value);
              }}
            />
            <label for="ac" className="mr-6">
              Snow
            </label>
            <input
              type="radio"
              id="account"
              name="icon"
              value="account"
              className="mr-2"
              checked={icon === "account"}
              onChange={(e) => {
                setIcon(e.target.value);
              }}
            />
            <label for="account" className="mr-6">
              Account
            </label>
            <div>
              <input
                type="radio"
                id="apps"
                name="icon"
                value="apps"
                className="mr-2"
                checked={icon === "apps"}
                onChange={(e) => {
                  setIcon(e.target.value);
                }}
              />
              <label for="apps" className="mr-6">
                Apps
              </label>
            </div>
            <input
              type="radio"
              id="cam"
              name="icon"
              value="cam"
              className="mr-2"
              checked={icon === "cam"}
              onChange={(e) => {
                setIcon(e.target.value);
              }}
            />
            <label for="cam" className="mr-6">
              Camera
            </label>
          </div>
        </div>
        {/* Icon Position */}
        <div className="bg-gray-50 rounded-lg p-6 m-4 ">
          <h2 className="font-sans font-bold text-xl ">Icon Position</h2>
          <div className="flex flex-row items-center flex-wrap">
            <input
              type="radio"
              id="left"
              name="icon-pos"
              value="left"
              className="mr-2"
              checked={iconPos === "left"}
              onChange={() => {
                setIconPos("left");
              }}
            />
            <label for="left" className="mr-6">
              Left
            </label>
            <input
              type="radio"
              id="right"
              name="icon-pos"
              value="right"
              className="mr-2"
              checked={iconPos === "right"}
              onChange={() => {
                setIconPos("right");
              }}
            />
            <label for="right" className="mr-6">
              Right
            </label>
          </div>
        </div>
        {/* Size */}
        <div className="bg-gray-50 rounded-lg p-6 m-4 ">
          <h2 className="font-sans font-bold text-xl ">Button Size</h2>
          <div className="flex flex-row items-center flex-wrap">
            <input
              type="radio"
              id="sm"
              name="size"
              value="sm"
              className="mr-2"
              checked={size === "sm"}
              onChange={() => {
                setSize("sm");
              }}
            />
            <label for="sm" className="mr-6">
              Small
            </label>
            <input
              type="radio"
              id="md"
              name="size"
              value="md"
              className="mr-2"
              checked={size === "md"}
              onChange={() => {
                setSize("md");
              }}
            />
            <label for="md" className="mr-6">
              Medium
            </label>
            <input
              type="radio"
              id="lg"
              name="size"
              value="lg"
              className="mr-2"
              checked={size === "lg"}
              onChange={() => {
                setSize("lg");
              }}
            />
            <label for="lg" className="mr-6">
              Large
            </label>
          </div>
        </div>
        {/* Color */}
        <div className="bg-gray-50 rounded-lg p-6 m-4 ">
          <h2 className="font-sans font-bold text-xl ">Color</h2>
          <div className="flex flex-row items-center flex-wrap">
            <input
              type="radio"
              id="default-color"
              name="color"
              value="default-color"
              className="mr-2"
              checked={color === ""}
              onChange={() => {
                setColor("");
              }}
            />
            <label for="default-color" className="mr-6">
              Default
            </label>
            <input
              type="radio"
              id="primary"
              name="color"
              value="primary"
              className="mr-2"
              checked={color === "primary"}
              onChange={() => {
                setColor("primary");
              }}
            />
            <label for="primary" className="mr-6">
              Primary
            </label>
            <input
              type="radio"
              id="secondary"
              name="color"
              value="secondary"
              className="mr-2"
              checked={color === "secondary"}
              onChange={() => {
                setColor("secondary");
              }}
            />
            <label for="secondary" className="mr-6">
              Secondary
            </label>
            <div>
              <input
                type="radio"
                id="danger"
                name="color"
                value="danger"
                className="mr-2"
                checked={color === "danger"}
                onChange={() => {
                  setColor("danger");
                }}
              />
              <label for="danger" className="mr-6">
                Danger
              </label>
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="bg-gray-50 rounded-lg p-6 m-4 ">
          <h2 className="font-sans font-bold text-xl ">Text on Button</h2>
          <div className="flex flex-row items-center flex-wrap">
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs"
              type="text"
              placeholder={Button}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="justify-items-center grid bg-gray-50 p-10 w-5/6 md:w-1/4 rounded-lg mx-auto">
        <Button
          variant={variant}
          shadow={shadow}
          disabled={disabled}
          iconKey={icon}
          iconPos={iconPos}
          size={size}
          color={color}
          text={text}
        />
      </div>
    </div>
  );
};

export default CustomizableButton;
