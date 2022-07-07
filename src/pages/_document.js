import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,700,900"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            src={"https://maps.googleapis.com/maps/api/js?key=" + process.env.GOOGLE_API_KEY + "&libraries=geometry,places"}
            defer
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
