import { createContext, useContext, useState } from 'react';
import BookingModal from '../components/BookingModal';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <BookingContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
