import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactElement,
} from "react";
import cls from "classnames";
import PropTypes from "prop-types";

import { prefixCls } from "../constants";
import { dealWithPercentOrPx, isUndefined } from "../utils";
import "../styles/common.css";
import "./style.css";

export interface PopoverProps extends baseProps {
  contentClassName?: string;
  className?: string;
  trigger?: "hover" | "click";
  visible?: boolean;
  children: ReactNode;
  content: ReactNode;
  leftOffset?: string | number;
  topOffset?: string | number;
  onVisible?: () => void;
  onHide?: () => void;
  position?: popPosition;
}

const Popover = (props: PopoverProps): ReactElement => {
  const {
    contentClassName,
    className,
    trigger,
    visible,
    children,
    content,
    onVisible,
    onHide,
    position,
    leftOffset = "0px",
    topOffset = "0px",
    ...restProps
  } = props;

  // hover类型，离开children部分，还没进入content部分的定时
  const hoverLeaveTimer = useRef(-1);
  const containerRef = useRef<HTMLElement | null>(null);
  const [popoverStyle, setPopoverStyle] = useState({});
  const [popoverVisible, setPopoverVisible] = useState(false);

  useEffect(() => {
    const pos = getPositionStyle(String(position), leftOffset, topOffset);
    setPopoverStyle(pos);

    const clickOutside = (e: MouseEvent) => {
      // 点击popover以外区域，隐藏
      if (
        trigger === "click" &&
        !containerRef.current?.contains(e.target as HTMLElement)
      ) {
        setPopoverVisible(false);
        onHide?.();
      }
    };
    window.addEventListener("click", clickOutside);

    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, [position, leftOffset, topOffset, onHide, trigger]);

  const onMouseEnter = useCallback(() => {
    if (trigger === "hover") {
      clearTimeout(hoverLeaveTimer.current);
      setPopoverVisible(true);
      onVisible?.();
    }
  }, [trigger, onVisible]);

  const onMouseLeave = useCallback(() => {
    if (trigger === "hover") {
      hoverLeaveTimer.current = setTimeout(() => {
        setPopoverVisible(false);
        onHide?.();
      }, 200);
    }
  }, [trigger, onHide]);

  const onClickContainer = useCallback(() => {
    if (trigger === "click") {
      setPopoverVisible(!popoverVisible);
      if (!popoverVisible) {
        onHide?.();
      } else {
        onVisible?.();
      }
    }
  }, [popoverVisible, trigger, onVisible, onHide]);

  // 点击content部分时，不隐藏content
  const onClickPopover = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <span
      className={cls(`${prefixCls}-popover-container`, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClickContainer}
      ref={containerRef}
      {...restProps}
    >
      <span
        className={cls(
          "popover-content",
          {
            "popover-content-hidden": isUndefined(visible)
              ? !popoverVisible
              : !visible,
          },
          contentClassName
        )}
        style={popoverStyle}
        onClick={onClickPopover}
      >
        {content}
      </span>
      {children}
    </span>
  );
};

const { node, string, number, bool, func, oneOf, oneOfType } = PropTypes;

Popover.propTypes = {
  children: node.isRequired,
  content: node.isRequired,
  contentClassName: string,
  className: string,
  visible: bool,
  onVisible: func,
  onHide: func,
  trigger: oneOf(["hover", "click"]),
  leftOffset: oneOfType([string, number]),
  topOffset: oneOfType([string, number]),
  position: oneOf([
    "topCenter",
    "leftCenter",
    "rightCenter",
    "bottomCenter",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "leftTop",
    "leftBottom",
    "rightTop",
    "rightBottom",
  ]),
};

Popover.defaultProps = {
  trigger: "hover",
  position: "topCenter",
  leftOffset: "0px",
  topOffset: "0px",
};

export default Popover;

function getPositionStyle(
  position: string,
  leftOffset: string | number,
  topOffset: string | number
) {
  const top = dealWithPercentOrPx(topOffset);
  const left = dealWithPercentOrPx(leftOffset);
  switch (position) {
    case "leftCenter":
      return {
        top: `calc(50% + ${top})`,
        left: `calc(0px + ${left})`,
        transform: "translate(-100%, -50%)",
      };
    case "rightCenter":
      return {
        top: `calc(50% + ${top})`,
        right: `calc(0px - ${left})`,
        transform: "translate(100%, -50%)",
      };
    case "topCenter":
      return {
        top: `calc(0px + ${top})`,
        left: `calc(50% + ${left})`,
        transform: "translate(-50%, -100%)",
      };
    case "bottomCenter":
      return {
        bottom: `calc(0px - ${top})`,
        left: `calc(50% + ${left})`,
        transform: "translate(-50%, 100%)",
      };
    case "topLeft":
      return {
        top: `calc(0px + ${top})`,
        left: `calc(0px + ${left})`,
        transform: "translateY(-100%)",
      };
    case "topRight":
      return {
        top: `calc(0px + ${top})`,
        right: `calc(0px - ${left})`,
        transform: "translateY(-100%)",
      };
    case "bottomLeft":
      return {
        bottom: `calc(0px - ${top})`,
        left: `calc(0px + ${left})`,
        transform: "translateY(100%)",
      };
    case "bottomRight":
      return {
        bottom: `calc(0px - ${top})`,
        right: `calc(0px - ${left})`,
        transform: "translateY(100%)",
      };
    case "leftTop":
      return {
        top: `calc(0px + ${top})`,
        left: `calc(0px + ${left})`,
        transform: "translateX(-100%)",
      };
    case "leftBottom":
      return {
        bottom: `calc(0px - ${top})`,
        left: `calc(0px + ${left})`,
        transform: "translateX(-100%)",
      };
    case "rightTop":
      return {
        top: `calc(0px + ${top})`,
        right: `calc(0px - ${left})`,
        transform: "translateX(100%)",
      };
    case "rightBottom":
      return {
        bottom: `calc(0px - ${top})`,
        right: `calc(0px - ${left})`,
        transform: "translateX(100%)",
      };
    default:
      return {
        top: `calc(0px + ${top})`,
        left: `calc(50% + ${left})`,
        transform: "translate(-50%, -100%)",
      };
  }
}
