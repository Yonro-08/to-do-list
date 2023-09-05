function Input({ placeholder, setInputValue, value }) {
  const onChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}

export default Input;
