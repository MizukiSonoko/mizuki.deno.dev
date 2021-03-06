// Cited by https://github.com/denoland/deploy_examples/blob/main/json_html/mod.js

function handleRequest(request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/html")) {
    const html = `<html>
      <p><b>Message:</b> Hello from Deno Deploy.</p>
      </html>`;

    return new Response(html, {
      headers: {
        // The interpretation of the body of the response by the client depends
        // on the 'content-type' header.
        // The "text/html" part implies to the client that the content is HTML
        // and the "charset=UTF-8" part implies to the client that the content
        // is encoded using UTF-8.
        "content-type": "text/html; charset=UTF-8",
      },
    });
  }

  if (pathname.startsWith("/json")) {
    // Use stringify function to convert javascript object to JSON string.
    const json = JSON.stringify({
      message: "Hello from Deno Deploy",
      name: "MizukiSonoko",
      github: "https://github.com/MizukiSonoko",
    });

    return new Response(json, {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
  }

  return new Response(
    `<body
      align="center"
      style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 1.5rem;"
    >
      <h1>I'm Mizuki Sonoko. Deno Deploy deno deploy desu!</h1>
      <p>
        <a href="/html">/html</a>
      </p>
      <p>
        <a href="/json">/json</a>
      </p>
    </body>`,
    {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    },
  );
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
