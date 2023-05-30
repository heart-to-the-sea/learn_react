import { useEffect, useState } from "react";
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
// 内部组件，用于保存状态
const WithMouse = (props: {
  children: ((props: any) => JSX.Element) | ((props: any) => JSX.Element)[];
}) => {
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
  if (Array.isArray(props.children)) {
    return <>{props.children.map((fun) => fun(state))}</>;
  }
  return <>{props.children(state)}</>;
};

export default function RenderPropsPage() {
  return (
    <>
      <WithMouse>
        {A}
        {({ x, y }: { x: number; y: number }) => <B {...{ x, y }} />}
      </WithMouse>
    </>
  );
}
