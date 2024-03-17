export default function Input({ label, id, error, ...props }) {
  return (
    <div>
      <p className="control">
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} required {...props} />
      </p>
      <div className="control-error">{error}</div>
    </div>
  );
}
