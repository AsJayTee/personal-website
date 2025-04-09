import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

let modalRoot;
if (typeof document !== 'undefined') {
  modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);
  }
}

const SimpleModal = ({ title, onClose, children, bgColor, borderColor }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    
    document.body.style.overflow = 'hidden';
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4" 
      style={{ 
        backgroundColor: `rgba(0, 0, 0, ${isVisible ? 0.85 : 0})`,
        transition: 'background-color 200ms ease-in-out',
        willChange: 'background-color'
      }}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative w-[95%] max-w-7xl h-[90%] rounded-lg ${bgColor} bg-opacity-95 ${borderColor} border shadow-2xl overflow-hidden`}
        style={{ 
          transform: `scale(${isVisible ? 1 : 0.98}) translateY(${isVisible ? 0 : '10px'})`,
          opacity: isVisible ? 1 : 0,
          transition: 'transform 200ms ease-out, opacity 200ms ease-out',
          willChange: 'transform, opacity'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8 overflow-y-auto h-[calc(100%-5rem)] glass">
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export const ModalManager = () => {
  const [modal, setModal] = useState(null);
  
  useEffect(() => {
    window.openModal = ({ title, content, bgColor = 'bg-white', borderColor = 'border-gray-200' }) => {
      window.isModalOpen = true;
      
      if (modal) {
        window.closeModal();
        setTimeout(() => {
          setModal({ title, content, bgColor, borderColor });
        }, 210);
      } else {
        setModal({ title, content, bgColor, borderColor });
      }
    };
    
    window.closeModal = () => {
      window.isModalOpen = false;
      
      if (modal && document.querySelector('#modal-root > div')) {
        const closeButton = document.querySelector('#modal-root button');
        if (closeButton) closeButton.click();
      } else {
        setModal(null);
      }
    };
    
    window.isModalOpen = modal !== null;
    
    return () => {
      window.openModal = undefined;
      window.closeModal = undefined;
      window.isModalOpen = undefined;
    };
  }, [modal]);
  
  if (!modal) return null;
  
  return (
    <SimpleModal
      title={modal.title}
      bgColor={modal.bgColor}
      borderColor={modal.borderColor}
      onClose={() => setModal(null)}
    >
      {modal.content}
    </SimpleModal>
  );
};
