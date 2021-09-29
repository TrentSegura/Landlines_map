import React, { useState } from "react";
import {
  ImageContainer,
  IMG,
  ButtonContainer,
  Button,
  ImgCounter,
  Caption,
} from "./styles";
import Modal from "../Modal";

const Slideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Open Modal State
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    setCurrent(0);
  }, [images]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    const imgFile = "/assets/images/slide_" + images.file;

    return (
      <>
        <ImageContainer onClick={() => setIsOpen(true)}>
          <IMG src={imgFile} alt="landlines" className="image" />
        </ImageContainer>
        {images.caption ? <Caption>{images.caption}</Caption> : ""}
        <Modal images={images} open={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  }

  return (
    <>
      <ImageContainer onClick={() => setIsOpen(true)}>
        {images.map((image, index) => {
          const imgSrc = "assets/images/slide_" + image.file;
          return (
            <React.Fragment key={index}>
              {index === current && (
                <IMG src={imgSrc} key={index} alt="landlines" />
              )}
            </React.Fragment>
          );
        })}
      </ImageContainer>

      {images.map((image, index) => {
        return (
          <React.Fragment key={index}>
            {index === current && (
              <Caption key={index}>{image.caption}</Caption>
            )}
          </React.Fragment>
        );
      })}
      <Modal
        open={isOpen}
        current={current}
        images={images}
        onClose={() => setIsOpen(false)}
        prev={prevSlide}
        next={nextSlide}
      />

      <ButtonContainer>
        <Button onClick={() => nextSlide()}>Next</Button>
        <ImgCounter>
          {current + 1}&thinsp;/&thinsp;{length}
        </ImgCounter>
        <Button onClick={() => prevSlide()}>Prev</Button>
      </ButtonContainer>
    </>
  );
};

export default Slideshow;

// {images.forEach((image, index) => {
//         const imgSrc = "assets/images/slide_" + image.file;
//         return (
//           <>
//             {index === current && (
//               <>
//                 <ImageContainer key={index}>
//                   <IMG src={imgSrc} alt="landlines" className="image" />
//                 </ImageContainer>
//                 <Caption>{image.caption}</Caption>
//               </>
//             )}
//           </>
//         );
//       })}
