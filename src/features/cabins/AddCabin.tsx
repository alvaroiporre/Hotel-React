import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div><Button onClick={() => setIsOpenModal((show) => !show)}>Add new cabin</Button>
      {
        isOpenModal && <Modal onClose={() => setIsOpenModal(false)} ><CreateCabinForm onClose={() => setIsOpenModal(false)}/></Modal>
      }</div>
  );
};

export default AddCabin;

