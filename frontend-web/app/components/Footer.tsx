// app/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full mt-24">
      <div className="container mx-auto text-center text-gray-500 text-sm p-4">
        <p>&copy; {currentYear} HapusBG. By Dianovo.</p>
      </div>
    </footer>
  );
}
