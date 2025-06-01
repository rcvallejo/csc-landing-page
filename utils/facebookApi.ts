// utils/facebookApi.ts

// Ensure fbq is declared for TypeScript if not already globally typed
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const PIXEL_ID = '3698294107135492';
const ACCESS_TOKEN = 'EAATO1zbGFqUBO3ySXJRxOlM4hEjBNVYynpCyginsZBLJt21r4EKKY8p6ZA3gamWgUBovlXomRhkMdcI3qyG5qJGQZBtZAMjpseJmXPmD8CpKFgYXKt03BVIA8Wl9tRDpdtPkVlCwTNH8aliXZAQBZCCg2lrDWVFatyqAs5sFLjzBJcBPiZAoiGka7G4XElDwgZDZD';

// WARNING: THE ACCESS TOKEN SHOULD NEVER BE DIRECTLY EMBEDDED IN CLIENT-SIDE CODE IN A PRODUCTION ENVIRONMENT.
// This is for demonstration purposes only. In a real application, this request MUST be made from a secure backend server.

interface CustomData {
  [key: string]: any;
}

// Helper to get cookie values (simplified)
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null; // Guard for non-browser environments
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift();
    return cookieValue || null;
  }
  return null;
}

export const sendFbConversionEvent = async (eventName: string, customDataPayload: CustomData = {}) => {
  if (typeof window === 'undefined') {
    console.warn("Skipping Facebook Conversion API call in non-browser environment.");
    return;
  }

  console.log(`Preparing to send Facebook Conversion API event: ${eventName}`, customDataPayload);

  const eventData = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        user_data: {
          // client_ip_address: '1.2.3.4', // Ideally captured server-side and added by your backend
          client_user_agent: navigator.userAgent, // Can be captured client-side
          fbc: getCookie('_fbc'), // Facebook click ID (if available)
          fbp: getCookie('_fbp'), // Facebook browser ID (if available)
        },
        custom_data: customDataPayload,
        event_source_url: window.location.href,
        // event_id: `${eventName}_${Date.now()}_${Math.random().toString(36).substring(7)}` // Optional: Generate a unique event ID server-side
      },
    ],
    // test_event_code: 'YOUR_TEST_EVENT_CODE' // Add your Test Event Code from Facebook Events Manager when testing
  };

  const apiUrl = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

  console.warn(
    '---------------------------------------------------------------------------\n' +
    'SIMULATING FACEBOOK CONVERSIONS API CALL (THIS MUST BE A BACKEND CALL IN PRODUCTION)\n' +
    '---------------------------------------------------------------------------\n' +
    'Reason: Your Access Token must be kept secret on a server, not in browser code.\n' +
    'Action: The following details would be sent from your backend server to Facebook.\n' +
    '---------------------------------------------------------------------------'
  );
  console.log('Target URL (for your backend to call):', apiUrl);
  console.log('Payload (your backend would send this as POST body):', JSON.stringify(eventData, null, 2));
  console.log('Access Token (your backend would include this, e.g., as query param or header):', ACCESS_TOKEN.substring(0, 10) + "..."); // Show only a snippet
  console.warn('---------------------------------------------------------------------------');


  // SIMULATED: In a real scenario, you'd POST this `eventData` to your OWN backend endpoint.
  // Your backend would then securely add the access_token and make the POST request to the `apiUrl`.
  // Example of what the backend (e.g., Node.js) might do:
  /*
  try {
    const fetch = require('node-fetch'); // Or your preferred HTTP client
    const response = await fetch(`${apiUrl}?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });
    const responseData = await response.json();
    if (!response.ok) {
      console.error('Facebook Conversion API Error (from backend):', responseData);
    } else {
      console.log('Facebook Conversion API Event Sent Successfully (from backend):', responseData);
    }
  } catch (error) {
    console.error('Error sending Facebook Conversion API event (from backend):', error);
  }
  */

  // For demonstration, show an alert. In a real app, you might have more subtle feedback or none for analytics.
  alert(
    `SIMULATED: Facebook Conversion API event "${eventName}" prepared.\n` +
    `This data would typically be sent to your backend, which then securely forwards it to Facebook.\n` +
    `Check the browser console for the detailed payload and security warnings.\n` +
    `NEVER EXPOSE YOUR ACCESS TOKEN IN CLIENT-SIDE CODE IN PRODUCTION.`
  );
};
