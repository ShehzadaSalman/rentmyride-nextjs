import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const CarDescription = () => {
  const [show, setShow] = useState(true);
  const shwCnt = useRef(null);
  const btnLoads = useRef(null);

  const toggleReadMore = (e) => {
    e.preventDefault();
    if (show === true) {
      shwCnt.current.style.height = "auto";
      setShow(!show);
    } else if (show === false) {
      shwCnt.current.style.height = "120px";
      setShow(!show);
    }
  };

  return (
    <>
      {" "}
      <div className="discription">
        <h3>Description</h3>
        <div className="shwCnt" ref={shwCnt}>
          <p>
            Auctor neque vitae tempus quam pellentesque nec nam. Mauris augue
            neque gravida in. Convallis a cras semper auctor neque. Scelerisque
            purus semper eget duis. Morbi blandit cursus risus at ultrices mi
            tempus imperdiet nulla. Purus semper eget duis at tellus at urna
            condimentum mattis. In massa tempor nec feugiat nisl pretium fusce
            id. Ornare suspendisse sed nisi lacus sed viverra. Diam in arcu
            cursus euismod quis viverra nibh cras. Tellus cras adipiscing enim
            eu turpis egestas pretium aenean. Et netus et malesuada fames ac
            turpis egestas. Quis viverra nibh cras pulvinar mattis nunc sed
            blandit libero. Enim nec dui nunc mattis enim ut tellus elementum.
            Et malesuada fames ac turpis. Ultrices gravida dictum fusce ut
            placerat orci nulla pellentesque dignissim. Platea dictumst
            vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
            Facilisis gravida neque convallis a cras semper auctor neque. Ornare
            aenean euismod elementum nisi. Pellentesque elit eget gravida cum
            sociis natoque penatibus et magnis. Aliquam vestibulum morbi blandit
            cursus risus at ultrices. Praesent tristique magna sit amet purus
            gravida quis blandit turpis. Urna et pharetra pharetra massa.
            Convallis tellus id interdum velit laoreet id donec. Arcu dui
            vivamus arcu felis bibendum ut. Sit amet nisl purus in mollis nunc
            sed id. Lacus suspendisse faucibus interdum posuere lorem. Blandit
            cursus risus at ultrices mi tempus imperdiet nulla. Tellus mauris a
            diam maecenas sed enim ut sem. Faucibus ornare suspendisse sed nisi
            lacus sed. Tristique magna sit amet purus gravida. Egestas quis
            ipsum suspendisse ultrices gravida dictum fusce ut placerat.
          </p>
        </div>

        <div className="shadows">
          {show ? (
            <a className="shw" onClick={toggleReadMore}>
              <FontAwesomeIcon icon={faAngleDown} /> Read More
            </a>
          ) : (
            <a className="les" onClick={toggleReadMore}>
              <FontAwesomeIcon icon={faAngleUp} /> Hide
            </a>
          )}
        </div>
        {/* <div ref={btnLoads} className="btnLoads fetur">
          {show ? (
            <a href="#" className="shw" onClick={toggleReadMore}>
              <FontAwesomeIcon icon={faAngleUp} /> Hide
            </a>
          ) : (
            <a href="#" className="les" onClick={toggleReadMore}>
              <FontAwesomeIcon icon={faAngleDown} /> Read More
            </a>
          )}
        </div> */}
      </div>
    </>
  );
};

export default CarDescription;
