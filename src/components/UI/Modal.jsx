import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function DialogModal({ children, open, onClose, className = '' }) {
  const dialogModalRef = useRef();

  useEffect(() => {
    const modal = dialogModalRef.current;
    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }

    return () => {
      modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog
      ref={dialogModalRef}
      className={`modal ${className}`}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById('modal'),
  );
}

export default DialogModal;

// import { forwardRef, useRef, useImperativeHandle } from 'react';
// import { createPortal } from 'react-dom';

// const DialogModal = forwardRef(function DialogModal(
//   { className, children },
//   ref,
// ) {
//   const dialogModalRef = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       open: () => dialogModalRef.current.showModal(),
//       close: () => dialogModalRef.current.close(),
//     };
//   });

//   return createPortal(
//     <dialog className={`modal ${className}`} ref={dialogModalRef}>
//       {children}
//     </dialog>,
//     document.getElementById('modal'),
//   );
// });

// export default DialogModal;
