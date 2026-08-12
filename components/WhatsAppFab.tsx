import Link from "next/link";
import { WA_LINK_TEXT } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export default function WhatsAppFab() {
  return (
    <Link
      href={WA_LINK_TEXT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-wa p-3.5 text-white shadow-lg shadow-black/20 transition-all hover:bg-wa-dark hover:shadow-xl"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-wa/60 [animation-duration:2.5s]" />
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-40 sm:block">
        Konsultasi Gratis
      </span>
    </Link>
  );
}