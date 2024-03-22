import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <div
      className={"btn btn-" + color}
      key={children?.toString()}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </div>
  );
};

export default Button;
