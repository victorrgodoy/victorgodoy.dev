import Clock from "../interface/Clock";

function Footer() {
  return (
    <footer className="mt-auto flex justify-between items-center text-sm text-[var(--color-text-1)]">
      <p>VERSION 1</p>
      <Clock color="var(--color-text-1)" />
    </footer>
  );
}

export default Footer;
