import { useHistory } from "react-router-dom";

import NewTravelForm from "../components/Content/form";

function NewTravelsPage() {
  const history = useHistory();

  function addTravelHandler(meetupData) {
    fetch("https://travel-app-dcd66-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(()=>{
        history.replace('/')
    });
  }

  return (
    <section>
      <h1>New Place</h1>
      <NewTravelForm onAddTravel={addTravelHandler} />
    </section>
  );
}

export default NewTravelsPage;
