import React from "react";

const SearchBox = ({ onSearch }) => {
  // const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className="my-3">
      <input
        type="text"
        className="search form-control"
        placeholder="Search database"
        v-model="searchInput"
        onChange={handleSearchChange}
      />
    </div>
    // <TextInput
    //   placeholder="Search here"
    //   // value={searchQuery}

    // />
  );
};

export default SearchBox;
