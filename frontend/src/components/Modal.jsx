import React from 'react';
import { X } from 'lucide-react';

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  hideHeader,
  showActionBtn,
  actionBtnIcon = null,
  actionBtnText,
  onActionClick = () => {},
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2">
      <div className="relative w-full max-w-lg max-h-[90vh] bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-y-auto p-4 sm:p-6">
        {/* Header */}
        {!hideHeader && (
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-white">
              {title}
            </h3>

            {showActionBtn && (
              <button
                className="ml-auto mr-2 px-3 py-1 text-sm font-medium bg-violet-600 hover:bg-violet-700 text-white rounded"
                onClick={onActionClick}
              >
                {actionBtnIcon}
                {actionBtnText}
              </button>
            )}
          </div>
        )}

        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        {/* Modal Body */}
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
