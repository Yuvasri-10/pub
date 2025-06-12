export default async function handler(req, res) {
  const { code } = req.query;

  const response = await fetch('https://todoist.com/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.TODOIST_CLIENT_ID,
      client_secret: process.env.TODOIST_CLIENT_SECRET,
      code,
    }),
  });

  const data = await response.json();
  const accessToken = data.access_token;

 
  res.redirect(`/services?token=${accessToken}`);
}
