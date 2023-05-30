import React, { ReactElement, useEffect, useState } from "react";

// 业务组件
const A = (props: { x: number; y: number }) => {
  return (
    <div>
      {props.x}-{props.y}
    </div>
  );
};
// 业务组件B
const B = (props: { x: number; y: number }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: props.y - 20,
        left: props.x - 20,
        width: 40,
        height: 40,
        userSelect: "none",
        backgroundColor: "red",
      }}
    >
      {props.x}-{props.y}
    </div>
  );
};
/**
 * 高阶组件,封装了鼠标操作
 */
const HocComponent = (
  Com: (props: { x: number; y: number }) => JSX.Element
) => {
  // 内部组件，用于保存状态
  const Component = () => {
    const [state, setState] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: MouseEvent) => {
      setState({
        x: e.pageX,
        y: e.pageY,
      });
    };
    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
    return <Com {...state} />;
  };
  return Component;
};

export default function HocComponentPage() {
  // 获取组件
  const HocA = HocComponent(A);
  const HocB = HocComponent(B);
  return (
    <>
      <HocA />
      <HocB />
    </>
  );
}
