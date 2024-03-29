import AcmeLogo from '@/app/ui/acme-logo';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import LoginButton from './ui/auth/login-button';
import desktop from '@/public/images/desktop.png';
import mobile from '@/public/images/mobile.png';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> Simplify Customers and{' '}
            <span className="text-blue-500">Invoice</span> Management.
          </p>
          <LoginButton />
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src={desktop}
            width={1000}
            height={760}
            priority={true}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          ></Image>
          <Image
            src={mobile}
            width={560}
            height={620}
            priority={true}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          ></Image>
        </div>
      </div>
    </main>
  );
}
