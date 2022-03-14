exports.handler = async () => {
  return {
    statusCode: 200,
    headers: { 'content-type': 'text/html; charset=utf8' },
    body: `
<h1>Hello 👋</h1>
<h2><a href="/">Go to root /</a></h2>
    `.trim()
  }
}
