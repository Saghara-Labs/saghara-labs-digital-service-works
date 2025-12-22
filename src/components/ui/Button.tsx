interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button
      type="button"
      className="cursor-pointer rounded-full bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900"
    >
      {label}
    </button>
  );
}
