import "./style.scss"
import { SearchOutlined } from '@ant-design/icons';
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import React, { useRef } from "react";


export const SearchBar  = (props) => {
  const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
      <div>
        <div className="searchBarBar" type="search">
          <input  placeholder="Поиск..." {...props} />
          <button onClick={onClick}> <SearchOutlined /> </button>
        </div>
      </div>
    );
  };
  
export default SearchBar;