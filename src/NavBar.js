// import { useEffect, useState } from 'react';
// import './NavBar.css';

// const NavBar = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         setShow(true);
//       }
//       else {
//         setShow(false);
//       }
//     })
//     return () => {
//       window.removeEventListener("scroll");
//     }
//   }, []);

//   return (
//     <div className={`nav_bar ${show && "nav_bar_black"}`}>
//       <img
//         className="nav_bar_logo"
//         src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
//         alt="Netflix Logo"
//       />
//       <img
//         className="nav_bar_avatar"
//         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
//         alt="Netflix Avatar"
//       />
//     </div >
//   );
// }

// export default NavBar;


import { useEffect, useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav_bar ${show && "nav_bar_black"}`}>
      <img
        className="nav_bar_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav_bar_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default NavBar;
