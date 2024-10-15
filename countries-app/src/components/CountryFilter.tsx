interface FilterProps {
  selectFilter: string;
  setSelectFilter: React.Dispatch<React.SetStateAction<string>>;
}
export default function CountryFilter({
  selectFilter,
  setSelectFilter,
}: FilterProps) {
  function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectFilter(e.target.value);
    console.log(selectFilter);
  }

  return (
    <select className="bg-zinc-800 p-2" onChange={handleFilterChange}>
      <option value="all">All</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
