import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import ClipboardEditor from "./components/ClipboardEditor";
import LandingPage from "./components/LandingPage";

function ClipboardPage() {
  const { id } = useParams();
  return <ClipboardEditor roomId={id} />;
}

function App() {
  return (
    <Router>
      <div className="font-sans selection:bg-(--color-accent)/30 min-h-dvh">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:id" element={<ClipboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
