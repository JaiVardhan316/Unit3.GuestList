import { useState } from "react";
import GuestInfo from "./GuestInfo";
import GuestList from "./GuestList";
import useQuery from "./UseQuery";

export default function App() {
  const { data: guests, loading, error } = useQuery("/guests");
  const [listScreen, setListScreen] = useState(true);
  const [selectedGuest, setSelectedGuest] = useState(null);
  if (loading) return <p>Loading ...</p>;
  if (error || !guests) return <p>{error}</p>;

  return (
    <>
      {listScreen ? (
        <GuestList guests={guests} setListScreen={setListScreen} setSelectedGuest={setSelectedGuest} />
      ) : (
        <GuestInfo setListScreen={setListScreen} selectedGuest={selectedGuest} />
      )}
    </>
  );
}
