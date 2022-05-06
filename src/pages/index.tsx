import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Card from "@/components/Card";

const Index = () => {
  return (
    <Main meta={<Meta title="" description="" />}>
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        <h1 className="h1">Dashboard</h1>

        <div className="gap-2">
          <button className="btn btn-primary">Add view</button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </Main>
  );
};

export default Index;
