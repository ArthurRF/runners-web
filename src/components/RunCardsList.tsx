import Card from "./Card";

const runsMock = [
  {
    id: 1,
    assessments: 656,
    mainImg: "/run-example.png",
    organizerImg: "/organizer-example.png",
    runners: 889,
  },
  {
    id: 2,
    assessments: 887,
    mainImg: "/run-example.png",
    organizerImg: "/organizer-example.png",
    runners: 1254,
  },
  {
    id: 3,
    assessments: 324,
    mainImg: "/run-example.png",
    organizerImg: "/organizer-example.png",
    runners: 457,
  },
  {
    id: 4,
    assessments: 102,
    mainImg: "/run-example.png",
    organizerImg: "/organizer-example.png",
    runners: 245,
  },
];

const RunCardsList = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2">
      {runsMock.map((run) => {
        return (
          <div key={run.id}>
            <Card
              id={run.id}
              assessments={run.assessments}
              mainImg={run.mainImg}
              organizerImg={run.organizerImg}
              runners={run.runners}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RunCardsList;
