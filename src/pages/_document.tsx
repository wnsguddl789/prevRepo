import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://example.com/page.html" />
          <meta property="og:title" content="Content Title" />
          <meta
            property="og:image"
            content="https://media.vlpt.us/images/wnsguddl789/post/e78f377c-d471-4780-9246-10e8eb755de4/image%20(1).png"
          />
          <meta property="og:description" content="Description Here" />
          <meta property="og:site_name" content="Site Name" />
          <meta property="og:locale" content="en_US" />
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
