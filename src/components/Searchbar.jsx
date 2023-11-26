import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";

function Searchbar() {
  return (
    <div className="max-w-md md:max-w-none md:grow">
      <TextInput
        type="text"
        icon={HiMail}
        rightIcon={HiMail}
        placeholder="Search Here..."
        required
      />
    </div>
  );
}

export default Searchbar;
