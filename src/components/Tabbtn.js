export default function Tabbtn({ children, onSelect }) {
  return (
    <div>
      <li>
        <button onClick={onSelect}>{children}</button>
      </li>
    </div>
  );
}
