import { useState } from "react";
import emailjs from "@emailjs/browser";

const SubscribeForm = ({ formClassName }) => {
  const [email, setEmail] = useState("");
  const handleOnSubscribe = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_foq6w5s",
        "template_nsjj3r4",
        {
          email,
        },
        "OIRayJLa7-LHweyyF"
      )
      .then(
        () => window.alert("已成功送出！"),
        (error) => {
          console.log("err", error.text);
        }
      );
  };

  return (
    <form className={formClassName} onSubmit={handleOnSubscribe}>
      <input
        type="text"
        name="subscribe"
        value={email}
        required={true}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="輸入信箱獲得最新資訊優惠"
        className="text-white bg-transparent border-b border-white pb-1 w-full focus:outline-0"
      />
      <input
        type="submit"
        value="OK"
        className="bg-white rounded-lg px-1 absolute right-[2px] cursor-pointer"
      />
    </form>
  );
};

export default SubscribeForm;
