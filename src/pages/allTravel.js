import TravelList from "../components/Content/list";

import { useState, useEffect } from "react";

function AllTravelsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTravels, setLoadedTravels] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://travel-app-dcd66-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = []

        for(const key in data) {
          const travel = {
            id: key,
            ...data[key]
          }

          meetups.push(travel);
        }

        setIsLoading(false);
        setLoadedTravels(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <TravelList meetups={loadedTravels} />
    </section>
  );
}

export default AllTravelsPage;
