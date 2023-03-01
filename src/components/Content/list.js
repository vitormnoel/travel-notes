import classes from "../styles/list.module.css";
import Item from "./item";

function TravelList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((travel) => (
        <Item
          key={travel.id}
          image={travel.image}
          title={travel.title}
          address={travel.address}
          description={travel.description}
        />
      )) }
    </ul>
  );
}

export default TravelList;
