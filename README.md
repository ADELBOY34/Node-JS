# Node.js Exercises

Install dependencies with `npm install`, then run an exercise:

- `npm run hello` prints `HELLO WORLD`.
- `npm run server` starts the web server at <http://localhost:3000>.
- `npm run filesystem` creates `welcome.txt` with `Hello Node` and reads `hello.txt`.
- `npm run password` prints a generated 16-character password.
- `npm run email` sends a sample message using your SMTP environment variables. Copy `.env.example` to `.env`, fill in your provider's SMTP settings, and set `EMAIL_TO` to your own address. Never commit `.env` or share an app password.

The email script does not include personal credentials. SMTP credentials are required to send a real message.
