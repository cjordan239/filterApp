import { useState, useEffect } from "preact/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Data from "./Data";
import Card from "./Card";
import Button from "./Button";

export function App() {
  const [items, setItems] = useState(Data);
  const [activeFilter, setActiveFilter] = useState({
    category: "",
    colors: ""
  });

  const categoryList = [...new Set(Data.map((item) => item.category))];
  const colorsList = [...new Set(Data.flatMap((item) => item.colors))];

  useEffect(() => {
    applyFilters();
  }, [activeFilter]);

  const applyFilters = () => {
    let filteredItems = Data;

    if (activeFilter.category !== "") {
      filteredItems = filteredItems.filter(
        (item) => item.category === activeFilter.category
      );
    }

    if (activeFilter.colors !== "") {
      filteredItems = filteredItems.filter(
        (item) => item.colors.includes(activeFilter.colors)
      );
    }

    setItems(filteredItems);
  };

  const handleFilterClick = (filterType, filterValue) => {
    setActiveFilter((prevFilter) => ({
      ...prevFilter,
      [filterType]: filterValue
    }));
  };

  const resetFilters = () => {
    setActiveFilter({
      category: "",
      colors: ""
    });
    setItems(Data);
  };

  return (
    <div className="container">
      <div>
        <h2>Filter by Category:</h2>
        {categoryList.map((category) => (
          <Button
            key={category}
            onClick={() => handleFilterClick("category", category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div>
        <h2>Filter by Color:</h2>
        {colorsList.map((color) => (
          <Button
            key={color}
            onClick={() => handleFilterClick("colors", color)}
          >
            {color}
          </Button>
        ))}
      </div>
      <div>
        <h2>Reset Filters</h2>
        <Button onClick={resetFilters}>
          Reset Filters
        </Button>
      </div>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
