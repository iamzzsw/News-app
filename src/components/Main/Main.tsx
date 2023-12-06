import React, { useState } from "react";

import Typography from "../Typography/Typography";

import styles from "./Main.module.css";
import News from "../News/News";
import Tabs, { Tab } from "../Tabs/Tabs";
import AllNews from "../AllNews/AllNews";
import { Select, SelectOption } from "../Select/Select";
import { NavLink } from "react-router-dom";
import Icons from "../Icons/Icons";

const tabs: Tab[] = [
  {
    label: "All news",
    value: "news",
  },
  {
    label: "Top headlines",
    value: "top headlines",
  },
];

const options = [
  { label: "Popularity", value: "popularity" },
  { label: "Relevancy", value: "relevancy" },
  { label: "Published date", value: "publishedAt" },
];

const country = [
  { label: "USA", value: "us" },
  { label: "United Arab Emirates", value: "ae" },
  { label: "Argentina", value: "ar" },
  { label: "China", value: "cn" },
  { label: "Czech", value: "cz" },
  { label: "France", value: "fr" },
  { label: "Greece", value: "gr" },
  { label: "Hong Kong", value: "hg" },
  { label: "Israel", value: "il" },
  { label: "Netherlands", value: "nl" },
  { label: "Poland", value: "pl" },
  { label: "Russia", value: "ru" },
  { label: "Japan", value: "jp" },
];

const Main: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab["value"]>(tabs[0].value);
  const [category, setCategory] = useState("general");
  const [sortValue, setSortValue] = useState<SelectOption | undefined>(
    options[0]
  );
  const [sortValueCounty, setSortValueCountry] = useState<
    SelectOption | undefined
  >(country[0]);
  const [searchValue, setSearcheValue] = useState("");

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearcheValue(e.target.value);
  };

  const handleSearchClick = () => {};

  const handleTabClick = (tab: Tab) => setActiveTab(tab.value);

  return (
    <div className={styles.container}>
      <div className={styles.searchBlockHeader}>
        <input
          type="search"
          name="search"
          placeholder="Search"
          className={styles.search}
          value={searchValue}
          onChange={handleValueChange}
        />
        <button className={styles.buttonSearch} onClick={handleSearchClick}>
          <Icons name="search" />
        </button>
      </div>

      <NavLink className={styles.titleLink} to="/">
        <Typography className={styles.title} variant="h1">
          News
        </Typography>
      </NavLink>
      <Tabs tabs={tabs} onTabClick={handleTabClick} activeTab={activeTab} />

      {activeTab === "news" && (
        <div className={styles.wrapper}>
          <div className={styles.sort}>
            <Typography> Sort by </Typography>
            <Select
              options={options}
              value={sortValue}
              onChange={(option) => setSortValue(option)}
            />
          </div>
        </div>
      )}
      {activeTab === "top headlines" && (
        <div className={styles.sort}>
          <Typography> Country </Typography>
          <Select
            options={country}
            value={sortValueCounty}
            onChange={(country) => setSortValueCountry(country)}
          />
        </div>
      )}

      {activeTab === "news" && (
        <AllNews sortValue={sortValue} searchValue={searchValue} />
      )}

      {activeTab === "top headlines" && (
        <News
          setCategory={setCategory}
          category={category}
          sortValueCounty={sortValueCounty}
        />
      )}
    </div>
  );
};

export default Main;
