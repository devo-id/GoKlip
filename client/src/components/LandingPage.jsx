import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Zap, FileText } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

const LandingPage = () => {
  const navigate = useNavigate();
  const [joinId, setJoinId] = useState("");

  const handleCreate = () => {
    navigate("/demo");
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (joinId.trim()) {
      navigate(`/${joinId.trim()}`);
    }
  };

  return (
    <div className="min-h-dvh w-full bg-[#0a0a0a] text-zinc-200 flex flex-col items-center px-6 font-sans">
      <nav className="w-full max-w-5xl flex justify-between items-center py-6">
        <span className="text-2xl font-semibold text-white">GoKlip</span>
      </nav>

      <main className="flex-1 w-full max-w-5xl flex flex-col items-center justify-center text-center space-y-10">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white">
            The clipboard for developers
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Share text across devices instantly.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button onClick={handleCreate} className="gap-2">
              <span>New Klip</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Button>

            <form onSubmit={handleJoin}>
              <Input
                type="text"
                placeholder="Enter Code"
                value={joinId}
                onChange={(e) => setJoinId(e.target.value)}
                className="w-52 text-center"
              />
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16 w-full text-left">
          <FeatureCard
            icon={<Zap className="w-5 h-5" />}
            title="Fast"
            desc="Quick text sharing."
          />
          <FeatureCard
            icon={<Shield className="w-5 h-5" />}
            title="Private"
            desc="No login required."
          />
          <FeatureCard
            icon={<FileText className="w-5 h-5" />}
            title="Markdown"
            desc="Supports formatted text."
          />
        </div>
      </main>

      <footer className="flex justify-center w-full max-w-5xl py-6 text-center text-xs text-zinc-500">
        <p>&copy;</p>
        {new Date().getFullYear()} GoKlip
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-4 border border-zinc-800 rounded-lg">
    <div className="mb-2 text-zinc-400">{icon}</div>
    <h3 className="text-sm font-semibold text-white">{title}</h3>
    <p className="text-xs text-zinc-500">{desc}</p>
  </div>
);

export default LandingPage;
