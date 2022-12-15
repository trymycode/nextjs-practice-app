import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
const DummyMeetupList = [
  {
    id: 1,
    image:
      "https://th.bing.com/th/id/OIP.NvD9Ae31r1fTKSbwuzGhZwHaE8?pid=ImgDet&w=900&h=601&rs=1",
    title: "meetup1",
    address: "address1",
  },
  {
    id: 2,
    image:
      "https://th.bing.com/th/id/OIP.NvD9Ae31r1fTKSbwuzGhZwHaE8?pid=ImgDet&w=900&h=601&rs=1",
    title: "meetup2",
    address: "address2",
  },
  {
    id: 3,
    image:
      "https://th.bing.com/th/id/OIP.NvD9Ae31r1fTKSbwuzGhZwHaE8?pid=ImgDet&w=900&h=601&rs=1",
    title: "meetup3",
    address: "address3",
  },
];
function Home(props) {
  return (
    <div>
      <Head>
        <title>Meetup App</title>
        <meta name="meetup" description="meetup app" />
      </Head>
      <h1>Home Page</h1>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DummyMeetupList,
    },
  };
}
export default Home;
