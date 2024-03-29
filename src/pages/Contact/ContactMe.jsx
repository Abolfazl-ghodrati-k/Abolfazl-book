import React, { useState, useRef, useEffect } from "react";
import IconContainer from "../../Components/Icon";
import emailjs from "@emailjs/browser";

// **************************************  ICONS  ***************************************************
import { FaGoogle } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiTwotonePhone } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import MacNav from "../../Components/MacNav";
import { toast } from "react-toastify";

function Contactme() {
  const [onGoogle, setonGoogle] = useState(true);
  const [EmailText, setEmailText] = useState("");
  const [Sending, setSending] = useState(false);

  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmailText("");
    }, 3000);

    return () => {
      clearTimeout(timer)
    }
  }, [EmailText]);

  const googleClicked = () => {
    setonGoogle(!onGoogle);
  };
  const telegramClicked = () => {
    window.open("https://t.me/abolfazgk", "_blank");
  };
  const instagramClicked = () => {
    toast.warning("my Instagram account is out of access");
  };
  const linkedinClicked = () => {
    window.open("https://www.linkedin.com/in/abolfaz-ghodrati","_blank");
  };
  const twitterClicked = () => {
    window.open(
      "https://twitter.com/ababa_chmidunam?t=pk4zqG44AsFYOvQY_QFOpg&s=09",
      "_blank"
    );
  };
  const phoneClicked = () => {
    var text = "09020257735";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast("Phone number copied to clipboard");
      })
      .catch((err) => {
        toast.error("Async: Could not copy text: ", err);
      });
  };
  const whatsappClicked = () => {
    window.open("https://wa.me/989020257735", "_blank");
  };
  const sendEmail = async (e) => {
    setSending(true);
    e.preventDefault();

    await emailjs
      .sendForm(
        "service_mk2wand",
        "template_ero520r",
        form.current,
        "vNmfbfgCHM4cQChmg"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setSending(false);
          toast.success(`Hi ${form.current[0].value}! Email sent successfully check your inbox`)
        },
        (error) => {
          setSending(false);
          toast.error("Your email was not sent :()")
          // console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      {onGoogle && (
        <div className="top w-[80%] mx-auto ">
          <form
            ref={form}
            onSubmit={(e) => sendEmail(e)}
            className="bg-white shadow-primary flex
            flex-col max-h-[600px] rounded-[20px] p-2 py-3 mb-9
            gap-y-2"
          >
            <input
              type="text"
              className="form-control border rounded-lg px-2 py-1"
              placeholder="First name"
              name="user_firstname"
              required
            />
            <input
              type="text"
              className="form-control border rounded-lg px-2 py-1"
              placeholder="Last name"
              name="user_lastname"
              required
            />
            <input
              type="email"
              className="form-control border rounded-lg px-2 py-1"
              placeholder="Email address"
              name="user_email"
              required
            />
            <textarea
              className="form-control px-2 border rounded-lg h-[100px]"
              placeholder="Message"
              name="user_message"
            ></textarea>
            <button
              className="btn btn-lg bg-CMD-100 w-[20%] mr-auto rounded-lg p-1"
              type="submit"
            >
              {Sending ? "sending ..." : "send email"}
            </button>
            <p
              
              className="font-thin pl-2 text-[16px]"
            >
              {EmailText}
            </p>
          </form>
        </div>
      )}
      <div className="bottom mt-2 rounded w-full flex gap-2 cursor-pointer">
        <IconContainer
          onClick={googleClicked}
          type
          state={onGoogle}
          icon={FaGoogle}
          size={70}
        />
        <IconContainer
          onClick={telegramClicked}
          type
          icon={FaTelegram}
          size={70}
        />
        <IconContainer
          onClick={instagramClicked}
          type
          icon={FaInstagram}
          size={70}
        />
        <IconContainer
          onClick={linkedinClicked}
          type
          icon={BsLinkedin}
          size={70}
        />
        <IconContainer
          onClick={twitterClicked}
          type
          icon={FaTwitter}
          size={70}
        />
        <IconContainer
          onClick={phoneClicked}
          type
          icon={AiTwotonePhone}
          size={70}
        />
        <IconContainer
          onClick={whatsappClicked}
          type
          icon={FaWhatsapp}
          size={70}
        />
        <MacNav type={"CLOSE"} name={"CONTACTME"} Page={"11"} />
      </div>
    </div>
  );
}

export default Contactme;
