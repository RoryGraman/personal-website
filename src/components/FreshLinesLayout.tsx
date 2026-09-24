import React, { ReactNode, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Page,
  Sheet,
  SheetHeader,
  Brand,
  Nav,
  NavLink,
  SheetBody,
  SheetFooter,
} from '../styles/FreshLinesStyles';

export const SUPPORT_EMAIL = 'rorygraman@gmail.com';

const LINKS = [
  { to: '/fresh-lines', label: 'Game' },
  { to: '/fresh-lines/terms', label: 'Terms' },
  { to: '/fresh-lines/privacy-policy', label: 'Privacy' },
];

interface FreshLinesLayoutProps {
  /** The browser tab title. */
  title: string;
  children: ReactNode;
}

/** The frame shared by the Fresh Lines game, terms and privacy pages. */
const FreshLinesLayout: React.FC<FreshLinesLayoutProps> = ({ title, children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title, pathname]);

  return (
    <Page>
      <Sheet>
        <SheetHeader>
          <Brand to="/fresh-lines">
            <img src="/fresh-lines/icon.png" alt="" width={44} height={44} />
            Fresh Lines
          </Brand>
          <Nav aria-label="Fresh Lines">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} aria-current={pathname === l.to ? 'page' : undefined}>
                {l.label}
              </NavLink>
            ))}
          </Nav>
        </SheetHeader>
        <SheetBody>{children}</SheetBody>
        <SheetFooter>
          <span>&copy; {new Date().getFullYear()} Rory Graman</span>
          <span>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> &middot; <Link to="/">Home</Link>
          </span>
        </SheetFooter>
      </Sheet>
    </Page>
  );
};

export default FreshLinesLayout;
