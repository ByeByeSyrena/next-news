'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
  const path = usePathname();

  const activeLinkCheck = path.startsWith(href) ? 'active' : undefined;

  return (
    <Link href={href} className={activeLinkCheck}>
      {children}
    </Link>
  );
}
