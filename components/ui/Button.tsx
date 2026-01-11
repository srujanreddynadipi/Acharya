"use client"

type Props = {
  children: React.ReactNode
  onClick?: () => void
  as?: 'button' | 'a'
  href?: string
  className?: string
}

export default function Button({ children, onClick, as = 'button', href, className }: Props) {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  const style = 'bg-[#F59E0B] text-white hover:bg-[#FB923C] focus-visible:ring-[#F59E0B]'

  if (as === 'a' && href) {
    return (
      <a href={href} className={`${base} ${style} ${className ?? ''}`}>{children}</a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={`${base} ${style} ${className ?? ''}`}>
      {children}
    </button>
  )
}
