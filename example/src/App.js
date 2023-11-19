import './App.css';
import IDPartnerButton from '@idpartner/react-button';

function App() {
    const options = {
    clientId: 'change_me',
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          IDPartner React Button Example
        </p>
        <IDPartnerButton options={options} />
      </header>
    </div>
  );
}

export default App;
