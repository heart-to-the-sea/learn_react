import { useEffect, useState } from "react";
// 内部组件，用于保存状态
const useMouse = () => {
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
  return { ...state };
};

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
export default function HooksPage() {
  const mouse = useMouse();
  return (
    <>
      <A {...mouse} />
      <B {...mouse} />
    </>
  );
}
