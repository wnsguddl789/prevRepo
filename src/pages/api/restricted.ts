import { getSession } from 'next-auth/react';

const Restricted = async (req: any, res: any) => {
  const session = await getSession({ req });

  session
    ? res.send({
        content: 'This is protected content. You can access this content because you are signed in.',
      })
    : res.send({
        error: 'You must be sign in to view the protected content on this page.',
      });
};

export default Restricted;
