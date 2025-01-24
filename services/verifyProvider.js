const fetch = require('node-fetch');

const verifyFacebookToken = async (accessToken) => {
  try {
    const response = await fetch(`https://graph.facebook.com/debug_token?input_token=${accessToken}&access_token=${app_id}|${app_secret}`);
    const data = await response.json();

    if (data.data && data.data.is_valid && data.data.user_id) {
      return true; 
    } else {
      return false; 
    }
  } catch (error) {
    console.error('Error verifying Facebook token:', error);
    return false; 
  }
};


const verifyGoogleToken = async (idToken) => {
  try {
    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`);
    const data = await response.json();

    if (data.aud === 'your_client_id') {
      return true; 
    } else {
      return false; 
    }
  } catch (error) {
    console.error('Error verifying Google token:', error);
    return false;
  }
};

module.exports ={
  verifyFacebookToken,
  verifyGoogleToken
}
