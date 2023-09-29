const Home = () => {
  return (
    <>
      <div className="h-screen-ios relative z-20 mx-auto flex h-screen max-w-7xl flex-col justify-between overflow-x-hidden px-4"></div>
      <img
        src="https://react.email/_next/image?url=%2Fstatic%2Fbg.png&w=1080&q=75"
        className="absolute left-0 top-[220px] z-[-1] h-full w-full animate-pulse select-none md:top-0"
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          color: 'transparent',
          filter: 'blur:100%',
        }}
      />
    </>
  );
};

export default Home;
