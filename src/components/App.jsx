import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { fetchImages } from '../api/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageModal, setLargeImageModal] = useState(null);
   
 
  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setPage(1);
    setImages([]);
    fetchImages(searchQuery, 1, showLoader, hideLoader).then(res => {
      setImages(res);
    });
  },
    [searchQuery]);
  

  useEffect(() => {
    if (page === 1) {
      return;
    }

    fetchImages(searchQuery, page, showLoader, hideLoader).then(res => {
      setImages(prevState => {
        return [...prevState, ...res];
      });
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  
 const onFormSubmit = searchQuery => {
   setSearchQuery(searchQuery);
  };

 const loadMore = () => {
   setPage(prevPage => prevPage + 1);
  };

const onToggleModal = largeImageURL => {
  setShowModal(!showModal);
  setLargeImageModal(largeImageURL);
  };

 const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

    return (
      <>
        <Searchbar onSubmit={onFormSubmit} />
        {images.length > 0 && (
          <ImageGallery pictures={images} onClick={onToggleModal} />
        )}
        {isLoading && <Loader />}
        {(images.length === 12 || images.length > 12) && (
          <LoadMoreBtn onClick={loadMore} />
        )}
        {showModal && (
          <Modal onClose={onToggleModal}>
            <img src={largeImageModal} alt="" />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }

