type Props = {
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({ title, subtitle, center }: Props) {
  return (
    <header className={center ? 'text-center' : ''}>
      <h2 className="font-poppins text-2xl sm:text-3xl font-semibold text-[#1F2937]">{title}</h2>
      {subtitle && (
        <p className={`mt-2 text-[#1F2937]/80 ${center ? 'mx-auto max-w-2xl' : ''}`}>{subtitle}</p>
      )}
    </header>
  )
}
