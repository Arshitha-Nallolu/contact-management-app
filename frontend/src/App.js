import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h2>Contact Management App</h2>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
