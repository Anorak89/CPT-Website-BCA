export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
        <span className="text-white font-bold text-sm">CPT</span>
      </div>
      <div className="hidden md:block">
        <h1 className="text-lg font-bold text-white">BCA CPT</h1>
        <p className="text-xs text-blue-300">Competitive Programming Team</p>
      </div>
    </div>
  );
}
