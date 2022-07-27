import React, { useState } from "react";

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

function CreateArea(props) {
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

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={titleInput}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={textInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={() => props.onAdd(addItem)}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
