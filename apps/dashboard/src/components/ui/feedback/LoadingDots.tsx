'use client';

export default function LoadingDots() {
  return (
    <span className="flex items-end gap-1 text-current">
      <span className="loading-dot" />
      <span className="loading-dot" />
      <span className="loading-dot" />
    </span>
  );
}
