import Guest from "./Guest";

export default function GuestList({guests, setListScreen, setSelectedGuest}) {
  return (
    <>
      <h1 className="title">Guest List</h1>
      <div className="categories">
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Phone</h3>
      </div>
      {guests.map((guest) => <Guest key={guest.id} guest={guest} setListScreen={setListScreen} setSelectedGuest={setSelectedGuest}/>)}
    </>
  );
}
