type FilterProps = {
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
};
export default function SelectFilter({ handleChange }: FilterProps) {
  return (
    <select
      className="mb-4 mt-12 rounded-md bg-zinc-800 px-2 py-1 text-zinc-200"
      onChange={handleChange}
    >
      <option value="population">Population</option>
      <option value="region">Region</option>
      <option value="capital">Capital</option>
    </select>
  );
}
