import Card from "../components/Card";
import data from "../mock/data.json";

function Home({ searchCountry, lightMode }: any) {
  const country = data.filter((p) => {
    return p.name.toLocaleLowerCase().startsWith(searchCountry);
  });

  return (
    <section className="container min-w-full min-h-screen">
      <div className="p-12 grid grid-cols-4 gap-12">
        {country?.map((coun) => (
          <Card key={coun.name} country={coun} lightMode={lightMode} />
        ))}
      </div>
    </section>
  );
}

export default Home;
