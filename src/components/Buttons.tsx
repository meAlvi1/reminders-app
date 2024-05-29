import { ReactNode } from "react";
interface Props {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    onClick: () => void;  // adding eventhandler here
}
const Button = ({children, onClick, color='success' }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button