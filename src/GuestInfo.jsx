import GuestList from "./GuestList";
import useQuery from "./UseQuery";

export default function GuestInfo({ setListScreen, selectedGuest }) {
  const { data: guest, loading, error } = useQuery(`/guests/${selectedGuest}`);
  if (loading) return <p>Loading guest...</p>;
  if (error || !guest) return <p>{error}</p>;

  return (
    <>
      <div className="info">
        <p>{guest.name}</p>
        <p>{guest.email}</p>
        <p>{guest.phone}</p>
        <p>{guest.bio}</p>
        <p>{guest.job}</p>
        <button onClick={() => setListScreen(true)}>Back</button>
      </div>
    </>
  );
}
