import React, { useState, useEffect } from 'react';
import Modal from './modal';

const mapModal = ({ isShow, setIsShow, image }) => {
  const [hiddenClass, setHiddenClass] = useState('');

  useEffect(() => {
    if (!isShow) setHiddenClass('');
  }, [isShow]);

  return (
    <Modal isShow={isShow} setIsShow={setIsShow}>
      <div
        className={`w-[90%] overflow-scroll fixed z-[500] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-65%] md:translate-y-[-50%] ${
          isShow ? '' : 'hidden'
        }`}
      >
        <div onClick={() => setIsShow(false)} className="close cursor-pointer top-0"></div>
        <div className="relative space-y-10 min-h-[600px] overflow-scroll mt-[30px]">
          {image &&
            image.map((el, index) => (
              <>
                {index === 0 && (
                  <img
                    className={`absolute top-1/3 left-1/2 w-[60px] animate-[spin_4s_linear_infinite] ${hiddenClass}`}
                    src="/images/loadingcircle.png"
                    alt=""
                  />
                )}
                <img
                  src={el.image.url}
                  alt=""
                  className={`lg:max-h-[600px] mx-auto`}
                  onLoad={(e) => setHiddenClass('hidden')}
                />
              </>
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default mapModal;
