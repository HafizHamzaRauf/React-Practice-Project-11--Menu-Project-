import { useState } from "react";
import Category from "../components/Category";
import Menu from "../components/Menu";
import PrimaryHeading from "../components/PrimaryHeading";
import menu from "../store/data";
function Main() {
  const [list, setList] = useState(menu);
  const changeListHandler = (id) => {
    setList((prevState) => {
      if (id === "All") {
        return menu;
      }
      return menu.filter((item) => {
        return item.category === id;
      });
    });
  };
  return (
    <main className="main">
      <PrimaryHeading> Our Menu</PrimaryHeading>
      <Category changeList={changeListHandler}></Category>
      <Menu list={list}></Menu>
    </main>
  );
}

export default Main;
