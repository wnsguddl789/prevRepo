import * as React from 'react';
import type { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import { AppLayout } from '../../components';
import { DairyListPage } from '../../modules/Diary';

export default function DairyList(props: any) {
  return (
    <AppLayout>
      <DairyListPage {...props} />
    </AppLayout>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  } else {
    const result = {};
    return { props: { session, result } };
  }
}
