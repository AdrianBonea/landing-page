import { About, KeyInfo, Services, Table, SignUpForm, ContactForm, Footer } from "..";

function MainContent() {
  return (
    <main className="relative flex justify-center">
      <div className="absolute lg:-top-20 lg:w-1/2 flex flex-col bg-white rounded-t z-10">
        <About />
        <KeyInfo />
        <Services />
        <Table />
        <SignUpForm />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}

export default MainContent;
