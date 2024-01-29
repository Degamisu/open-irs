/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const { username, repository } = context.payload.sender.login;
  
    const issueComment = context.issue({
      body: `
  OpenIRS bot by \`Emi Yamashita\` at \`Degamisu\`.
  
  Hello, ${username}. Thank you for opening an issue at ${repository}!
  
  Some info for the developer:
  
  \`\`\`plaintext
  Name: ${username}
  Repository: ${repository}
  \`\`\

  ---

  _This is an automated message from [open-irs](https://github.com/Degamisu/open-irs). Some data may be inacurate._

  `
    });
  
    return context.octokit.issues.createComment(issueComment);
  });  

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
