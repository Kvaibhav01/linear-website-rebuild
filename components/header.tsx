'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './button';
import { Container } from './container';
import { HamburgerIcon } from './icons/hamburger';
import { Logo } from './icons/logo';

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[120px]'>
      <Container className='flex h-navigation-height'>
        <Link href='/' className='flex items-center text-md'>
          <Logo className='w-[1.8rem] h-[1.8rem] mr-4' /> Linear
        </Link>
        <div
          className={classNames(
            'transition-[visibility] md:visible',
            hamburgerMenuIsOpen ? 'visible' : 'delay-500 invisible'
          )}
        >
          <nav
            // TODO: Check for hover classes and mobile breakpoint font size
            className={classNames(
              'fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none',
              hamburgerMenuIsOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-[-100vw] opacity-0'
            )}
          >
            <ul
              className={classNames(
                'flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none',
                'ease-in [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors [&_a:hover]:text-grey',
                hamburgerMenuIsOpen && '[&_a]:translate-y-0'
              )}
            >
              <li>
                <Link href='/'>Features</Link>
              </li>
              <li>
                <Link href='/'>Method</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='/'>Customers</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='/'>Changelog</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='/'>Integrations</Link>
              </li>
              <li>
                <Link href='/'>Pricing</Link>
              </li>
              <li>
                <Link href='/'>Company</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='ml-auto h-full flex items-center'>
          <Link href='/' className='text-sm mr-6'>
            Log in
          </Link>
          <Button href='#' variant='primary' size='medium'>
            Sign up
          </Button>
        </div>
        <button
          className='ml-6 md:hidden'
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className='sr-only'>Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
