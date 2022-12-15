import classes from "./MeetupDetails.module.css";
import Card from "../ui/Card";
function Details(props) {
  return (
    <div>
      {/* <h1 className={classes.title}>Meetup Title</h1>
      <p className={classes.details}>meetup details</p> */}
      <Card>
        <div className={classes.image}>
          <img src={props.meetupData.image} alt={props.meetupData.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetupData.title}</h3>
          <address>{props.meetupData.address}</address>
        </div>
      </Card>
    </div>
  );
}
export default Details;
