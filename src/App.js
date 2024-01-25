import logo from './logo.svg';
import './App.css';
import { AppProvider } from './State';
import DocumentUploader from './components/DocumentUploader';

function App() {
  return (
    <AppProvider>
    <div className="App">
      <h1>docuquiz</h1>
      <DocumentUploader />
    </div>
    </AppProvider>
  );
}

export default App;
