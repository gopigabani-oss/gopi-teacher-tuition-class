import type { ReactNode } from 'react'

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">{children}</div>
}

export default Container
