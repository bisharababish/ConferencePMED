const WorkshopRegistration = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Header Section */}
            <div className="relative bg-gradient-to-r py-16 px-4 overflow-hidden" style={{ background: 'linear-gradient(to right, #1e3a8a, #1e40af)' }}>
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full animate-float"
                            style={{
                                width: `${Math.random() * 12 + 4}px`,
                                height: `${Math.random() * 12 + 4}px`,
                                backgroundColor: 'white',
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${Math.random() * 15 + 10}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <svg width="48" height="48" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                            <rect x="2" y="2" width="14" height="14" fill="white" rx="1.5" />
                            <rect x="26" y="2" width="14" height="14" fill="white" rx="1.5" />
                            <rect x="2" y="26" width="14" height="14" fill="white" rx="1.5" />
                            <rect x="26" y="26" width="14" height="14" fill="white" rx="1.5" />
                            <line x1="16" y1="9" x2="26" y2="9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="16" y1="33" x2="26" y2="33" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="21" y1="2" x2="21" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="21" y1="26" x2="21" y2="40" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-md">JERUSALEM</span>
                            <span className="text-base md:text-lg text-white leading-tight drop-shadow-md">MEDICAL & RESEARCH CONFERENCE</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Workshop Registration</h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-20">
                <div className="bg-white rounded-2xl p-10 md:p-12 shadow-xl border border-gray-200 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Coming Soon</h2>
                    <p className="text-lg text-gray-600">
                        Workshop registration will be available soon. Please check back later for updates.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WorkshopRegistration;







