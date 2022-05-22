import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
const ButtonTop = ({ ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  });

  return (
    <>
      {isVisible && (
        <div className="tap-top top" {...props} onClick={scrollToTop}>
          <div>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonTop;
