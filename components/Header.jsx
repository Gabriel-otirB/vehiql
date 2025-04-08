import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowLeft, CarFront, Heart, Layout } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';

const Header = async ({ isAdminPage = false }) => {
  const user = await checkUser();

  const isAdmin = user.role === "ADMIN";
  // const isAdmin = true;

  return (
    <header className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href={isAdminPage ? '/admin' : '/'} className='flex'>
          <Image
            src={'/logo.png'}
            alt='Vehiql logo'
            width={200}
            height={60}
            className='h-12 w-auto object-contain'
          />
          {isAdminPage && (
            <span className='text-xs font-extralight'>admin</span>
          )}
        </Link>

        <div className='flex items-center space-x-4'>
          {isAdminPage ? (
            <Link href='/admin'>
              <Button variant='outline' className='flex items-center gap-2 cursor-pointer'>
                <ArrowLeft size={18} />
                <span className='hidden md:inline'>Back to App</span>
              </Button>
            </Link>
          ) : (
            <SignedIn>

              <Link href='/admin'>
                <Button className='cursor-pointer'>
                  <Heart size={18} />
                  <span className='hidden md:inline'>Saved Cars</span>
                </Button>
              </Link>

              {!isAdmin ? (
                <Link href='/reservations-cars' className='cursor-pointer'>
                  <Button variant={'outline'} className='cursor-pointer'>
                    <CarFront size={18} />
                    <span className='hidden md:inline'>My Reservations</span>
                  </Button>
                </Link>
              )
                : (
                  <Link href='/admin'>
                    <Button variant={'outline'} className='cursor-pointer'>
                      <Layout size={18} />
                      <span className='hidden md:inline'>Admin Portal</span>
                    </Button>
                  </Link>
                )}
            </SignedIn>
          )}

          <SignedOut>
            <SignInButton forceRedirectUrl='/' className='cursor-pointer'>
              <Button variant='outline'>Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
             appearance={{
              elements: {
                avatarBox: 'w-10 h-10',
              },
             }}
            />
          </SignedIn>

        </div>

      </nav>
    </header>
  )
}

export default Header;