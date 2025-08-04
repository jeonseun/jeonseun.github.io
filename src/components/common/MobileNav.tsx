'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

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
          <SheetHeader>
            <SheetTitle>Main Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4">
            <Link href="/blog" className="px-4 py-2" onClick={toggle}>
              Blog
            </Link>
            <Link href="/about" className="px-4 py-2" onClick={toggle}>
              About
            </Link>
            <Link href="/contact" className="px-4 py-2" onClick={toggle}>
              Contact
            </Link>
          </nav>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
