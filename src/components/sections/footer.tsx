import Link from "next/link";
import Image from "next/image";
import { ABOUT_ME } from "@/app/constants/data";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center p-6 liquid-glass rounded-2xl overflow-hidden">
      {/* Copyright */}
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {ABOUT_ME.name}. All rights reserved.
      </p>

      {/* Views Counter */}
      <div className="mt-4 flex justify-center">
        <a
          href="https://hits.sh/subhashjha.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://hits.sh/subhashjha.me.svg?style=for-the-badge&label=Views&color=2d2d2d&labelColor=141414"
            alt="Views"
            width={100}
            height={20}
            className="rounded-lg"
          />
        </a>
      </div>
    </footer>
  );
}
