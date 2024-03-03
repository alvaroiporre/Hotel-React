import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";


const AddCabin = () => {
  return (
    <Modal>
      <Modal.Open opens='cabin-form'>
        <Button> Add new cabin </Button>
      </Modal.Open>
      <Modal.Window name='cabin-form'>
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens='table'>
        <Button> Show table </Button>
      </Modal.Open>
      <Modal.Window name='table'>
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
};

// const AddCabin = () => {
//   const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

//   return (
//     <div><Button onClick={() => setIsOpenModal((show) => !show)}>Add new cabin</Button>
//       {
//         isOpenModal && <Modal onClose={() => setIsOpenModal(false)} ><CreateCabinForm onClose={() => setIsOpenModal(false)}/></Modal>
//       }</div>
//   );
// };

export default AddCabin;

