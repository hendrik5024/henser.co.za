import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p>
        Reach out via the form below, email
        {" "}
        <a className="underline" href="mailto:henser.innovations@outlook.com">
          henser.innovations@outlook.com
        </a>
        , or call <a className="underline" href="tel:+27769919568">+27 76 991 9568</a>.
      </p>
      <ContactForm />
    </section>
  );
}
