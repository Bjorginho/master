const Header = ({ text }: { text: string }) => {
  return (
    <header className="bg-[#00509e] flex justify-center py-3">
      <p className="text-white text-lg font-bold tracking-wide">{text}</p>
    </header>
  );
};

export default Header;
