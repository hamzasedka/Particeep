import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
const { Option } = Select;

function Filter({ movies, callback }) {
  var uniques = [];
  const [duplicateCheck, setduplicateCheck] = useState([]);

  useEffect(() => {
    uniques = Array.from(new Set(movies.map((a) => a.category))).map(
      (category) => {
        return movies.find((a) => a.category === category).category;
      }
    );
    setduplicateCheck(uniques);
  }, [movies]);

  return (
    <Select
      showSearch
      style={{
        width: 200
      }}
      onChange={(categorySelected) => callback(categorySelected)}
      placeholder='Search to Select'
      optionFilterProp='children'
      filterOption={(input, option) => option.children.includes(input)}
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
    >
      <Option value='all'>All</Option>
      {duplicateCheck &&
        duplicateCheck.length > 0 &&
        duplicateCheck.map((category, index) => (
          <Option key={category} value={category}>
            {category}
          </Option>
        ))}
    </Select>
  );
}

export default Filter;
