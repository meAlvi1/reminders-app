// react arrow function

import { ReactNode } from "react";

// props are used for input parameters dynamically
interface Props {
    // children is a variable name that let us pass data from parent to child
    // ReactNode let use pass any data type even HTML elements
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-info alert-dismissable fade show" role="alert">
      {children}
      <button type="button"  className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
  )
}

export default Alert