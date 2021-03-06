import React, { ReactNode, ReactElement, MouseEvent, useCallback } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

import { prefixCls } from "../constants";
import "../styles/common.css";
import "./style.css";
import Group from "./group";

export interface ButtonProps extends baseProps {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  type?: "default" | "primary" | "success" | "danger";
  disabled?: boolean;
}

const Button = (props: ButtonProps): ReactElement => {
  const {
    className,
    bordered,
    type,
    disabled,
    onClick,
    children,
    ...restProps
  } = props;

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (disabled) {
        return;
      }
      onClick?.(e);
    },
    [disabled, onClick]
  );

  return (
    <button
      className={cls(
        `${prefixCls}-button`,
        `${prefixCls}-${bordered ? "bordered-" : ""}${type}-button`,
        { [`${prefixCls}-disabled-button`]: disabled },
        className
      )}
      {...restProps}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bordered: PropTypes.bool,
  type: PropTypes.oneOf(["default", "primary", "success", "danger"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  type: "primary",
  bordered: false,
};

Button.Group = Group;

export default Button;
