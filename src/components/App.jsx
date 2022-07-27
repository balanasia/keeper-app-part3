import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/

function App() {
  const [titleInput, changeTitle] = useState("");
  const [textInput, changeInput] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      changeTitle((prevValue) => {
        return [...prevValue, value];
      });
    } else if (name === "content") {
      changeInput((prevValue) => {
        return [...prevValue, value];
      });
    }
  }

  function addNote(input) {
    if (name === "title") {
      changeTitle((prevValue) => {
        return [...prevValue, inputText];
      });
    } else if (name === "content") {
      changeInput((prevValue) => {
        return [...prevValue, inputValue];
      });
    }
  }

  return (
    <div>
      <Header />
      <CreateArea onChange={handleChange} onClick={addNote} value={inputText} />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
