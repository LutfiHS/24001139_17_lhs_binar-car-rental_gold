import "../../Root.css";
import "./Faq.css";
import FaqList from "./FaqList";

const Faq = () => {
  return (
    <div className="wrapper-white">
      <div className="faq-container">
        <div className="faq-content">
          <h1>Frequently Asked Question</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <FaqList />
      </div>
    </div>
  );
};

export default Faq;
