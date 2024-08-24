type Props = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: Props) => {
  return (
    <main className="h-full overflow-auto">
      <div className="mx-auto h-full w-full max-w-screen-xl">{children}</div>
    </main>
  );
};

export default LandingLayout;
