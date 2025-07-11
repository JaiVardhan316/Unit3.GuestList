export default function Guest({ guest, setListScreen, setSelectedGuest }) {
  return (
    <>
      <ul className="guests" onClick={()=> {setSelectedGuest(guest.id); setListScreen(false);

      }}>
        <li>{guest.name}</li>
        <li>{guest.email}</li>
        <li>{guest.phone}</li>
      </ul>
    </>
  );
}
