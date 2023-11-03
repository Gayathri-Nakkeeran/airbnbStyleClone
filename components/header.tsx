import Header1 from "./cat1header";
import Header2 from "./cat2header";
import Header3 from "./cat3header";
type propsType = {
  page: string;
};
export default function Header({ page }: propsType) {
  return (
    <div>
      <Header1 page={page} />

      <Header3 />
      <Header2 />
    </div>
  );
}
