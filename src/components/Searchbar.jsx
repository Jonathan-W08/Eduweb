import { Label, TextInput } from "flowbite-react";
import { HiMail, HiSearch } from "react-icons/hi";

function Searchbar() {
  return (
    <div className="max-w-md md:max-w-none md:grow">
      <TextInput
        type="text"
        icon={HiSearch}
        placeholder="Search Here..."
        required
      />
    </div>
  );
}

export default Searchbar;
