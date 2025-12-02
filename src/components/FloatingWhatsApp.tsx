import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/254795594142?text=Hello%20Brian%2C%20I%20visited%20your%20portfolio%20and%20want%20to%20chat."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
