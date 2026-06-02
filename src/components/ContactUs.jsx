import React, { useState } from 'react';
import TitleAndBio from './TitleAndBio';
import avter from '../assets/avter.png';
import messageLogo from '../assets/message.png';
import toast from 'react-hot-toast';
import { motion } from 'motion/react';

const ContactUs = () => {
  const title = 'Reach out to us';
  const bio =
    'From strategy to execution, we craft digital solutions that move your business forward.';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const submitBtn = e => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      toast.success('Thank you for your submission!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error('Please fill the from!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact">
      <TitleAndBio title={title} bio={bio} />

      {/* ========= contact form section =========  */}
      <form className="w-full p-3 lg:px-15 xl:w-3/4 xl:m-auto 2xl:w-1/2 pt-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-5">
          {/* ==== name input ====== */}
          <div className="">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500 mt-5 mb-3"
            >
              Your Name
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center border px-2 rounded-md border-gray-400 h-10"
            >
              <img className="w-6 h-6 object-cover dark:invert" src={avter} />
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="basis-4/5 w-full text-sm pl-3 dark:text-gray-100 outline-0"
                type="text"
                placeholder="Enter your name"
                required
              />
            </motion.div>
          </div>
          {/* ======== email input =======  */}
          <div className="">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500 mt-5 mb-3"
            >
              Email Id
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center border px-2 rounded-md border-gray-400 h-10 mb-5"
            >
              <img
                className="w-6 h-4.2 object-cover dark:invert"
                src={messageLogo}
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" basis-4/5 w-full text-sm pl-3 dark:text-gray-100 outline-0"
                type="email"
                placeholder="Enter your email"
                required
              />
            </motion.div>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 mt-5 mb-3"
        >
          Message
        </motion.p>
        <motion.textarea
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-50 border border-gray-400 rounded-lg pt-2 pl-3 text-sm resize-none dark:text-gray-100 outline-0"
          placeholder="Enter your message"
          required
        ></motion.textarea>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          type="submit"
          onClick={submitBtn}
          className="w-full h-10 flex items-center justify-center mt-7 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-md text-white gap-2 cursor-pointer hover:bg-linear-to-r hover:from-blue-600/80 hover:via-indigo-600/80 hover:to-purple-600/80"
        >
          Submit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </form>
    </div>
  );
};

export default ContactUs;
