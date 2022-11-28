function SignUpForm() {
  return (
    <div className="bg-[#0648a4] text-white w-screen max-w-screen relative lg:-left-[52%] mb-10">
      <h1 className="text-3xl font-light flex justify-center mt-10 mb-5">Sign up for beta</h1>
      <p className="text-xs text-center mx-2 font-light flex justify-center">
        Ut atque nihil aut animi Quis 33 voluptas harum sit quam harum quo nesciunt neque est magni fugit.
      </p>
      <form className="lg:flex grid grid-cols-1 justify-items-center justify-center my-10">
        <input
          className="rounded bg-[#4e81c7] py-2 pl-2 lg:w-[15rem] mobile:w-[90%] text-xs focus:outline-none focus:border-[#4e81c7] focus:ring-1 focus:ring-[#4e81c7]"
          type="email"
          placeholder="Email Adress"
        />
        <button
          type="submit"
          className="rounded bg-white text-[#0648a4] text-xs lg:py-1 py-2 lg:ml-2 lg:w-20 mobile:w-[90%] mobile:mt-2 lg:mt-0"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
