const Input = ({ label, ...rest }) => {
  return (
    <div className="mb-4">
      <label className="block text-slate-200 text-sm font-bold mb-2 text-left">
        {label}
      </label>
      <input
        className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline bg-slate-700  rounded-lg outline-4 focus:outline-none focus:ring focus:border-slate-400"
        {...rest}
      />
    </div>
  );
};

export default Input;
