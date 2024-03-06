// import React, { useState } from "react";
// import { Form, FormControl, Button } from "react-bootstrap";

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = () => {
//     onSearch(searchTerm);
//   };

//   return (
//     <Form inlin>
//       <FormControl
//         type="text"
//         placeholder="Поиск"
//         className="mr-sm-2 mt-2"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <Button className="mt-2" onClick={handleSearch}>Поиск</Button>
//     </Form>
//   );
// };

// export default SearchBar;
import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent page reload
      handleSearch();
    }
  };

  return (
    <Form inline className="d-flex mt-2">
      <FormControl
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className="mr-sm-2"
      />
      <Button onClick={handleSearch} className="ml-2">
        Поиск
      </Button>
    </Form>
  );
};

export default SearchBar;
