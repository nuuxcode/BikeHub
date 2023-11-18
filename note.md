### Why we have include withCredentials: true in request?

**User Logs In**: The user logs into a website running on http://localhost:3000. The server verifies the user’s credentials and sends back a response. This response includes a Set-Cookie header that sets a cookie in the user’s browser.

**User Makes a Request**: The user then tries to access a resource on http://localhost:3300. The JavaScript code running in the user’s browser makes an HTTP request to this server. This request includes withCredentials: true.

**Browser Includes Cookies**: Because withCredentials is set to true, the user’s browser automatically includes the cookies associated with http://localhost:3300 in the request.

**Server Receives Request**: The server at http://localhost:3300 receives the request. It sees the cookies that were included because of withCredentials: true.

**Server Sends Response**: The server processes the request and sends back a response. This response includes the Access-Control-Allow-Credentials: true header, indicating that it allows credentials (like cookies) to be included in requests.

**Browser Receives Response**: The user’s browser receives the response from the server. Because the server’s response included Access-Control-Allow-Credentials: true, the browser knows it’s okay to expose the response to the frontend JavaScript code.

**User Sees Response**: Finally, the JavaScript code running in the user’s browser receives the server’s response and can use it to update the webpage.

### TLDR

**Setting** withCredentials: true: This tells the browser to include cookies in the request to the server.

**Cookies** Sent: The browser automatically includes any cookies for the server’s domain in the request.

**Server Response**: The server processes the request and sends back a response. If the server allows credentials, it includes the Access-Control-Allow-Credentials: true header in the response.

**Browser Receives Response**: The browser receives the server’s response. If the server’s response included Access-Control-Allow-Credentials: true, the browser allows the response to be read by the frontend JavaScript code.

**Token Safety**: Even though the server’s response is exposed to the frontend JavaScript code, the token stored in the cookie is still safe. This is because the HttpOnly attribute on the cookie prevents the JavaScript code from accessing the cookie directly. So, the token in the cookie is not exposed to the frontend JavaScript code.

### Does that increase delay (response time) ?

Setting withCredentials: true does not inherently add a significant delay or increase the response time for requests. Here’s why:

Cookie Transmission: When withCredentials is set to true, cookies are automatically included in the HTTP request header. This is a relatively lightweight operation and does not add significant overhead to the request.

Server Processing: On the server side, processing cookies and validating sessions is a standard part of handling HTTP requests and is typically optimized for performance.

Single Response: For each request made with withCredentials: true, there is still only one HTTP response from the server. The server processes the request (including any cookies), and sends back a single response.
