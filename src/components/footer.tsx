export function Footer() {
  return (
    <footer className="border-t mt-12 py-6">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Travel&Tour. All rights reserved.
      </div>
    </footer>
  );
}