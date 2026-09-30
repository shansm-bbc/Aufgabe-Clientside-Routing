import { Link, useParams } from "react-router";

export default function ChronicleEditRoute() {
  const params = useParams();
  return (
    <>
      <h2>id: {params.id}</h2>
      <Link to={`/chronicles/${params.id}`}>Zurück</Link>
    </>
  );
}
