import React from "react";
import Button from "../button/button";
import Container from "../container/container";
import Icon from "../icon/icon";

interface FilterProps {
  filterItems: number[];
  activeFilter: number[];
  setActiveYear(year: number[]): void;
}

const Filter = ({
  filterItems,
  activeFilter,
  setActiveYear,
}: FilterProps): JSX.Element => {
  const isActive = JSON.stringify(filterItems) === JSON.stringify(activeFilter);
  return (
    <div>
      <Container>
        <h3>
          <Icon type="adjustments" />
          Filter
        </h3>
      </Container>
      <div>
        <Container>
          <div>
            <Button
              onClick={() => setActiveYear(filterItems)}
              accentColor={isActive ? "primary" : "secondary"}
            >
              All
            </Button>
            {filterItems.map((item) => (
              <Button
                key={item}
                onClick={() => setActiveYear([item])}
                accentColor={isActive ? "primary" : "secondary"}
              >
                {`${item}`}
              </Button>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Filter;
