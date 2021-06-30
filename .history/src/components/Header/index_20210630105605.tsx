import Image from 'next/image';

export function Header() {
  return (
    <Image src="/images/logo.svg" alt="Logo" width={500} height={140} />
  )
}