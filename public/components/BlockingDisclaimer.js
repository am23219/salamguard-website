export default function BlockingDisclaimer() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-1/2 -right-1/4 w-72 h-72 bg-[#61EBCE]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-1/4 w-72 h-72 bg-[#51A4FA]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-2xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-[#28324E] to-[#1F2937] rounded-2xl p-6 border border-[#374151] shadow-xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-[#162031] p-2.5 rounded-lg">
                <svg
                  className="w-5 h-5 text-[#61EBCE]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#61EBCE] via-[#58C8E5] to-[#51A4FA]">
                Important Disclaimer
              </h3>
            </div>
            
            <p className="text-gray-200 text-base leading-relaxed">
              While these tools can help block explicit sites, they are not perfect and may be circumvented. 
            </p>

            <div className="bg-[#162031]/80 px-4 py-3 rounded-lg border border-[#61EBCE]/20 text-sm">
              <span className="text-[#61EBCE] font-medium">One must not rely on these tools alone. </span>
              <span className="text-gray-200">
                Use them as a supplement to one's own efforts in guarding one's heart and mind.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 