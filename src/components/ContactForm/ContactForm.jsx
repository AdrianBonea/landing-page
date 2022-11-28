function ContactForm() {
  return (
    <div className="grid grid-cols-1 justify-items-center mb-20">
      <h1 className="text-3xl font-light text-[#646464] mt-5 mb-10">Contact Us</h1>
      <h2 className="text-normal text-[#777] border-t border-[#777]/25 py-4">
        Ex porro necessitatibus qui commodi aliquam.
      </h2>
      <form className="shadow-2xl grid grid-cols-1 py-16 px-14 gap-6 text-[#777] text-sm place-items-center">
        <div className="grid lg:grid-cols-2 gap-6 lg:w-[35rem]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="mobile:w-72 bg-[#f3f3f3] focus:outline-none focus:border-[#646464] focus:ring-1 focus:ring-[#646464] py-2 pl-5 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mobile:w-72 bg-[#f3f3f3] focus:outline-none focus:border-[#646464] focus:ring-1 focus:ring-[#646464] py-2 pl-5 rounded"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="mobile:w-72 lg:w-[35rem] bg-[#f3f3f3] focus:outline-none focus:border-[#646464] focus:ring-1 focus:ring-[#646464] py-2 pl-5 rounded w-full"
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          className="mobile:w-72 lg:w-[35rem] bg-[#f3f3f3] focus:outline-none focus:border-[#646464] focus:ring-1 focus:ring-[#646464] py-2 pl-5 rounded"
        />
        <button type="submit" className="mobile:w-72 lg:w-32 bg-[#777] text-white w-1/4 rounded py-2">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
