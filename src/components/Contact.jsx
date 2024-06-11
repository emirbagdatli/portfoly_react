import { RiMailFill } from "react-icons/ri";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">

      <h2 className="my-20 text-center text-4xl">Contact Me</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <RiMailFill />
        {CONTACT.email}
      </div>
    </div>)
}

export default Contact