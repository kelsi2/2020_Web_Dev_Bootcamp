import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

const App = () => {
  const title = "This is a note title";
  const content = "This is some content";

  return (
    <div>
      <Header />
      <Note title={title} content={content} />
      <Footer />
    </div>
  );
};

export default App;
