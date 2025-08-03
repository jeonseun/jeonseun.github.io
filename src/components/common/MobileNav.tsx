'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={toggle}>
        <SheetTrigger className="align-middle">
          <Menu />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader className="px-8">
            <SheetTitle>Contents</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="py-2 px-8" onClick={toggle}>
              Blog
            </Link>
            <Link href="/" className="py-2 px-8" onClick={toggle}>
              About
            </Link>
            <Link href="/" className="py-2 px-8" onClick={toggle}>
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
