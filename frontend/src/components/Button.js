export default function Button({ children, ...props }) {
  return (
    <button style={{ margin: "5px" }} {...props}>
      {children}
    </button>
  );
}
