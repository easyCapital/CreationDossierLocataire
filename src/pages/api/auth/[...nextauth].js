import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import nodemailer from "nodemailer";

const customVerificationRequest = ({
  identifier: email,
  url,
  token,
  baseUrl,
  provider,
}) => {
  return new Promise((resolve, reject) => {
    const { server, from } = provider;
    const site = baseUrl.replace(/^https?:\/\//, "");
    nodemailer.createTransport(server).sendMail(
      {
        to: email,
        from,
        subject: `Se connecter à ${site}`,
        text: text({ url, site, email }),
        html: html({ url, site, email }),
      },
      (error) => {
        if (error) {
          logger.error("SEND_VERIFICATION_EMAIL_ERROR", email, error);
          return reject(new Error("SEND_VERIFICATION_EMAIL_ERROR", error));
        }
        return resolve();
      }
    );
  });
};

const html = ({ url, site, email }) => {
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`;
  const escapedSite = `${site.replace(/\./g, "&#8203;.")}`;
  const backgroundColor = "#f9f9f9";
  const textColor = "#444444";
  const mainBackgroundColor = "#ffffff";
  const buttonBackgroundColor = "#346df1";
  const buttonBorderColor = "#346df1";
  const buttonTextColor = "#ffffff";
  return `
    <body style="background: ${backgroundColor};">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">

          </td>
        </tr>
      </table>
      <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
        <tr>
          <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
            Se connecter à Easy Capital</strong>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 20px 0;">
            <table border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Se connecter</a></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
          Si vous n'avez pas demandé cet e-mail, vous pouvez l'ignorer en toute sécurité.
          </td>
        </tr>
      </table>
    </body>`;
};

const text = ({ url, site }) => `Se connecter à ${site}\n${url}\n\n`;

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Passwordless / email sign in
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,

        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },

      from: process.env.EMAIL_FROM,
      sendVerificationRequest: customVerificationRequest,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/sent", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  session: {
    jwt: false,
    maxAge: 30 * 60, //30 minutes : durée d'une session avant la deconnexion automatique
  },
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      if (user) {
        token.uid = user.id;
      }

      return Promise.resolve(token);
    },
    // session: async (session, user) => {
    //   session.user.uid = user.uid;
    //   return Promise.resolve({session })
    // },

    session: async (session, user) => {
      // Add property to session, like an access_token from a provider.
      session.accessToken = user.accessToken;
      session.uid = user.id;
      var names = ["", ""];
      try {
        names = user.name.split(" ");
      } catch {
        names = ["unknown", "unknown"];
      }
      // console.log(
      //   JSON.stringify({
      //     token: user.id,
      //     contact: {
      //       firstname: names[0],
      //       lastname: names[1],
      //       email: user.email,
      //     },
      //   })
      // );
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: user.id,
          contact: {
            firstname: names[0],
            lastname: names[1],
            email: user.email,
          },
        }),
      };
      fetch("https://app.easycapital.fr/api/handleLogin", requestOptions)
        .then((response) => response.json())
        .then((response) => console.log(response));

      return Promise.resolve(session);
    },
  },

  database: process.env.DATABASE_URL,

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
});
