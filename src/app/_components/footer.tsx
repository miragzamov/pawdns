import Link from "next/link";
import { Separator } from "~/components/ui/separator";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 w-full bg-background">
      <Separator />
      <ul className="flex items-center justify-center px-5 py-1">
        <li>
          <Link
            title="PawDNS Github repository"
            target="_blank"
            href="https://github.com/miragzamov/pawdns"
            className="hover:underline"
          >
            <strong className="text-sm font-semibold">
              Give us a ⭐ on Github!
            </strong>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
