import { useTranslation } from "react-i18next";
import { useState, ChangeEvent, FormEvent } from "react";

const Input = () => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const style =
      "mt-2 px-7 py-5 bg-white border border-purple-700 placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1";
  const styleButton =
      "mt-2 font-bold pb-2 bg-amber-300 text-black w-full h-14 hover:bg-amber-400";


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { name, email, subject, message };

    fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
        .then(response => {
          if (response.ok) {
            console.log('Email sent successfully');
            // Reset form fields here if needed
          } else {
            console.error('Failed to send email');
          }
        })
        .catch(error => {
          console.error('Error sending email:', error);
        });
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
      <div className="flex items-center justify-center pb-20">
        <div className="w-2/4">
          <form onSubmit={handleSubmit}>
            <input
                className={style}
                type="text"
                placeholder="enter your name"
                name="name"
                value={name}
                onChange={handleChange}
            />

            <input
                className={style}
                type="email"
                placeholder="enter your email"
                name="email"
                value={email}
                onChange={handleChange}
            />

            <input
                className={style}
                placeholder={t("Query Related")}
                name="subject"
                value={subject}
                onChange={handleChange}
            />
            <textarea
                className={`${style} pb-20`}
                placeholder={t("Message")}
                name="message"
                value={message}
                onChange={handleChange}
            />

            <button
                className={styleButton}
                type="submit"
            >
              {t("Send Message")}
            </button>
          </form>
        </div>
      </div>
  );
};

export default Input;
