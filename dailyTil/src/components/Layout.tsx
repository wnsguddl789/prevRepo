import { AppHeader } from '.';

interface Props {
  children?: React.ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <section style={{ position: 'relative' }}>
      <AppHeader />
      <main>{children}</main>
    </section>
  );
};
