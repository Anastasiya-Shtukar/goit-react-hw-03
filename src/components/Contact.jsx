import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ name, number }) => {
  return (
    <div>
      <div>
        <div>
          <IoPersonSharp />
          <p>{name}</p>
        </div>
        <div>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
