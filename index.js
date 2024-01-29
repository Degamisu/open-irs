/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const { login: username } = context.payload.sender;
    const { full_name: repository } = context.payload.repository;

    const issueComment = context.issue({
      body: `

OpenIRS bot by \`Emi Yamashita\` at \`Degamisu\`.

Hello, ${username}. Thank you for opening an issue at ${repository}!

Some info for the developer:

\`\`\`plaintext
Name: ${username}
Repository: ${repository}
\`\`\`

---

_This is an automated message from [open-irs](https://github.com/Degamisu/open-irs). Some data may be inaccurate._
`
    });

    return context.octokit.issues.createComment(issueComment);
  });
};
