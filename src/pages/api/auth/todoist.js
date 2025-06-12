export default async function handler(req, res) {
  const clientId = process.env.TODOIST_CLIENT_ID;
  const redirectUri = 'http://localhost:3000/api/auth/todoist-callback';

  
  res.redirect(`https://todoist.com/oauth/authorize?client_id=${clientId}&scope=data:read&state=aceit&redirect_uri=${redirectUri}`);
}
