import Image from 'next/image';

import styles from './styles.module.scss'

export function Header() {
  return (
    <div className={styles.container}>
      <Image src="/images/logo.svg" alt="Logo" width={500} height={140} />
    </div>
  )
}