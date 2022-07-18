import { useLocation } from "react-router-dom";

type DataProps = {
  id: number;
  name: string;
};

const AsteroidData = () => {
  const location = useLocation();
  const state = location.state as DataProps;
  console.log(state);
  return (
    <div>
      <h2>Asteroid id: {state.id}</h2>
      <h3>Asteroid name: {state.name}</h3>
    </div>
  );
};

export default AsteroidData;
