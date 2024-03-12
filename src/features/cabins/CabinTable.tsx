import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import ICabin from "./ICabin";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

const CabinTable = () => {
  const { isLoading, cabins, error } = useCabins();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get('discount');

  let filteredCabins;

  if(filterValue === 'all') filteredCabins = cabins;
  else if(filterValue === 'no-discount') filteredCabins = cabins?.filter((cabin) => !cabin.discount);
  else filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);

  if (isLoading) return <Spinner />
  if (error) console.error(error);
  return (
    <Menus>

      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body data={filteredCabins!} render={(cabin: ICabin) => <CabinRow cabin={cabin} key={cabin.id!} />} />

      </Table>
    </Menus>
  );
};

export default CabinTable;