type FilterProps = {
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
};
export default function SelectFilter({ setSelectedFilter }: FilterProps) {
  function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedFilter(e.target.value);
  }

  return (
    <select
      className="rounded-md bg-zinc-800 p-2 text-zinc-200"
      onChange={handleFilterChange}
    >
      <option value="population">Population</option>
      <option value="region">Region</option>
      <option value="capital">Capital</option>
    </select>
  );
}
