import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = ({ onAdd }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (e) => {
    e.preventDefault();

    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
      {isExpanded && 
        <input
        value={note.title}
        onChange={handleChange}
        name="title"
        placeholder="Title"
        />
      }
        <textarea
          value={note.content}
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
