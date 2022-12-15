import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
function NewMeetup() {
  const router = useRouter();
  async function addMeetupHandler(data) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resdata = await response.json();
    console.log(resdata);
    router.push("/");
  }
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}
export default NewMeetup;
