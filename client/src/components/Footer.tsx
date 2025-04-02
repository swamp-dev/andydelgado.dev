export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {currentYear} Andy Delgado. All rights reserved.</p>
      </div>
    </footer>
  );
}
