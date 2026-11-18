export function LearnMore({ href, children }: { href: string; children: string }) {
  return (
    <a className="t-learn" href={href}>
      {children}
      <span className="t-learn-chevron">
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path className="t-learn-arm t-learn-arm-top" d="M6 4L10 8" />
          <path className="t-learn-arm t-learn-arm-bot" d="M10 8L6 12" />
        </svg>
      </span>
    </a>
  )
}
