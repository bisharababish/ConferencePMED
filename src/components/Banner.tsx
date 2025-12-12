const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Light blue top strip */}
      <div className="w-full h-3 bg-blue-200"></div>
      
      {/* Red bar with rounded bottom corners */}
      <div className="relative w-full">
        <div 
          className="w-full"
          style={{ 
            height: '100px',
            borderBottomLeftRadius: '60px',
            borderBottomRightRadius: '60px',
            backgroundColor: '#DC2626'
          }}
        >
          {/* Small red crown graphic in bottom-left */}
          <div 
            className="absolute"
            style={{ 
              bottom: '-15px',
              left: '32px'
            }}
          >
            <svg 
              width="48" 
              height="24" 
              viewBox="0 0 48 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left triangle */}
              <path 
                d="M8 24 L4 12 L12 12 Z" 
                fill="#DC2626"
              />
              {/* Center triangle (taller) */}
              <path 
                d="M24 24 L20 6 L28 6 Z" 
                fill="#DC2626"
              />
              {/* Right triangle */}
              <path 
                d="M40 24 L36 12 L44 12 Z" 
                fill="#DC2626"
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* White space below */}
      <div className="w-full bg-white" style={{ minHeight: '300px' }}></div>
    </div>
  );
};

export default Banner;

