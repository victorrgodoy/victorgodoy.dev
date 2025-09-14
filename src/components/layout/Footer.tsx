import Clock from "../interface/Clock";

function Footer() {
  return (
    <footer className="mt-auto h-20 flex justify-between items-center text-sm text-[var(--color-text-1)]">
      <p>© victor godoy - version 1</p>
      <Clock color="var(--color-text-1)" />
    </footer>
  );
}

export default Footer;
