'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PanelRightOpen } from 'lucide-react';
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
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={toggle}>
        <SheetTrigger className="align-middle">
          <PanelRightOpen strokeWidth={1.5} />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Main Menu</SheetTitle>
          </SheetHeader>
          <NavigationMenu orientation="vertical" className="items-start">
            <NavigationMenuList className="flex-col space-y-2">
              <NavigationMenuItem className="w-full ml-6">
                <NavigationMenuLink asChild>
                  <Link href="/blog" onClick={toggle}>
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full ml-6">
                <NavigationMenuLink asChild>
                  <Link href="/about" onClick={toggle}>
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full ml-6">
                <NavigationMenuLink asChild>
                  <Link href="/contact" onClick={toggle}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
