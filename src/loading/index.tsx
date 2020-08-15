import React, { CSSProperties } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

import { prefixCls } from "../constants";
import { canbePositiveInt } from "../utils";
import "./style.css";

export interface IProps extends baseProps {
  className?: string;
  style?: CSSProperties;
  size?: string | number;
  color?: string;
}

const Loading = (props: IProps) => {
  const { className, style, size, color, ...restProps } = props;
  const _size = canbePositiveInt(size) ? Math.min(Number(size), 1024) : 20;

  return (
    <svg
      className={cls(`${prefixCls}-loading`, className)}
      style={style}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={_size}
      height={_size}
      {...restProps}
    >
      <path
        fill={color}
        d="M533.333333 682.666667v192h-64v-192h64z m-175.317333-72.618667l45.269333 45.269333-135.765333 135.744-45.248-45.226666 135.744-135.786667z m286.634667 0l135.744 135.765333-45.226667 45.248-135.786667-135.744 45.269334-45.269333zM330.666667 480v64h-192v-64h192z m533.333333 0v64h-192v-64h192z m-128.853333-247.061333l45.248 45.226666-135.744 135.786667-45.269334-45.269333 135.765334-135.744z m-467.626667 0l135.765333 135.744-45.269333 45.269333-135.744-135.765333 45.226667-45.248zM533.333333 149.333333v192h-64V149.333333h64z"
      />
    </svg>
  );
};

Loading.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

Loading.defaultProps = {
  size: 20,
  color: "#333",
};

export default Loading;