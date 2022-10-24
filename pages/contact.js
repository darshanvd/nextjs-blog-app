import ContactForm from "../components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm></ContactForm>
    </Fragment>
  );
}
export default Contact;
