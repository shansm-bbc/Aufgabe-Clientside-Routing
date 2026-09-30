import { Link, useParams, useNavigate } from "react-router";
import Button from "@/components/Button";

export default function ChronicleDetailRoute() {
  const navigate = useNavigate();
  const params = useParams();
  const handleClick = () => {
    setTimeout(() => navigate(-1), 5000);
  };

  return (
    <main>
      <h2>Deteil einer Chronik: {params.id}</h2>
      <Link to={"/"}>Chroniken Übersicht</Link>
      <Link to={`/chronicles/${params.id}/edit`}>Bearbeiten</Link>
      <div>
        <Button onClick={handleClick}>Zurück in 5 Sekunden</Button>
      </div>
    </main>
  );
}
