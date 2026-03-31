import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const data = useLoaderData();
    console.log(data);

    useEffect(()=>{
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id=> parseInt(id));
        const myReadList = data.filter(book=>convertedStoredBook.includes(book.bookId));
        setReadList(myReadList);
    }, [])

  return (
    <div>
      
      <Tabs>
        <TabList>
          <Tab>Mark As Read</Tab>
          <Tab>Mark As WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>Number of Read List {readList.length}</h2>
          {
            readList.map(b=><Book key={b.bookId} book={b}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
