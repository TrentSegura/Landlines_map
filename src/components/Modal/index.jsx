import React from "react";
import ReactDom from "react-dom";
import {
  ModalBG,
  Img,
  ButtonContainer,
  Button,
  ImgCounter,
  ModalContainer,
  Caption,
  ImgContainer,
} from "./styles";

const Modal = ({ open, images, current, onClose, prev, next }) => {
  const length = images.length;

  if (!open) return null;

  if (!Array.isArray(images) || images.length <= 0) {
    const imgSrc = "assets/images/" + images.file;
    return ReactDom.createPortal(
      <ModalBG onClick={() => onClose()}>
        <Img src={imgSrc} alt="landlines" className="image" />
      </ModalBG>,
      document.getElementById("portal")
    );
  }

  return ReactDom.createPortal(
    <>
      <ModalContainer>
        <ModalBG onClick={() => onClose()} />
        <ImgContainer>
          {images.map((image, index) => {
            const imgSrc = "/assets/images/" + image.file;

            return (
              <>
                {index === current && (
                  <div>
                    <Img
                      src={imgSrc}
                      alt="landlines"
                      className="image"
                      onClick={() => next()}
                    />
                    <Caption>{image.caption}</Caption>
                  </div>
                )}
              </>
            );
          })}
        </ImgContainer>

        <ButtonContainer>
          <Button onClick={() => next()}>Next</Button>
          <ImgCounter>
            {current + 1}&thinsp;/&thinsp;{length}
          </ImgCounter>
          <Button onClick={() => prev()}>Prev</Button>
        </ButtonContainer>
      </ModalContainer>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
