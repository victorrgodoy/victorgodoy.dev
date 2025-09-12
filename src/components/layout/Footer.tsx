import Clock from "../interface/Clock";

function Footer() {
  return (
    <footer className="px-10 h-20 flex justify-between items-center text-xs md:text-sm text-[var(--color-text-1)]">
      <p>© victor godoy</p>
      <Clock color="var(--color-text-1)" />
    </footer>
  );
}

export default Footer;
