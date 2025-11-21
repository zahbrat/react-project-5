import { useState } from "react";

import Header from "./Header";
import Promo from "./Promo";
import Pets from "./Pets";
import Nature from "./Nature";
import Footer from "./Footer";
import Modal from "./Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Header onOpenModal={openModal} />
      <Promo />
      <Pets />
      <Nature />
      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
    </>
  );
}
