import Details from "../../../components/meetups/MeetupDetails";
function MeetUpDetails(props) {
  return (
    <div>
      <Details meetupData={props.meetupData} />
    </div>
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
    ],
  };
}
export async function getStaticProps() {
  return {
    props: {
      meetupData: {
        id: "2",
        image:
          "https://th.bing.com/th/id/OIP.NvD9Ae31r1fTKSbwuzGhZwHaE8?pid=ImgDet&w=900&h=601&rs=1",
        title: "meetup2",
        address: "address2",
      },
    },
  };
}

export default MeetUpDetails;
