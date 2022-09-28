
import Button from "@mui/material/Button";
import "./customButton.scss";

const CustomButton = ({ btnName, icon, width, onBtnClick, customstyle }) => {
  return (
    <Button
      className={`btnContainer ${customstyle && customstyle }`}

      onClick={onBtnClick}
    >
      <div className='btnMain' style={{ width: `${width}` }}>{btnName}</div>
      {icon && <img src={icon} className="btnImage" />}
    </Button>
  );
};

export default CustomButton;
