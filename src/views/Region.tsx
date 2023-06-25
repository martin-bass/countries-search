import Card from "../components/Card";
import data from "../mock/data.json";
import { useParams } from "react-router-dom";

function Region({lightMode}:any) {
  const { region } = useParams();

  const searchRegion = data.filter((reg) => {
    return reg.region === region;
  });

  return (
    <section className="container min-w-full min-h-screen">
      <div className="p-12 grid grid-cols-4 gap-12 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {searchRegion?.map((coun) => (
          <Card key={coun.name} country={coun} lightMode={lightMode}/>
        ))}
      </div>
    </section>
  );
}

export default Region;
