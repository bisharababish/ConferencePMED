import { FileText, Upload, CheckCircle, AlertCircle } from 'lucide-react';

const Submissions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Red Header */}
      <div className="bg-red-600 py-8 px-4" style={{ backgroundColor: '#DC2626' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <span className="text-2xl font-bold text-white leading-tight">ANNUAL JERUSALEM</span>
              <span className="text-sm text-white leading-tight">MEDICAL & RESEARCH CONFERENCE</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Submissions</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white p-10 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Call for Papers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Research Papers</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Poster Presentations</h3>
            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Workshop Proposals</h3>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Submission Guidelines</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">Format Requirements</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Papers
                  should be formatted according to the conference template. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">Length Specifications</h3>
                <p className="text-gray-700">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris. Full papers should be 8-12 pages, while short papers
                  should be 4-6 pages in length.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">Review Process</h3>
                <p className="text-gray-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse.
                  All submissions will undergo double-blind peer review by at
                  least three reviewers.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">Submission Platform</h3>
                <p className="text-gray-700">
                  Excepteur sint occaecat cupidatat non proident. Please submit
                  your papers through our online submission system. All
                  submissions must be in PDF format.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Important Dates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="font-bold text-lg text-black mb-2">Paper Submission Deadline</h3>
              <p className="text-gray-700 text-lg">March 15, 2025</p>
            </div>
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="font-bold text-lg text-black mb-2">Notification of Acceptance</h3>
              <p className="text-gray-700 text-lg">April 30, 2025</p>
            </div>
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="font-bold text-lg text-black mb-2">Camera-Ready Submission</h3>
              <p className="text-gray-700 text-lg">May 20, 2025</p>
            </div>
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="font-bold text-lg text-black mb-2">Early Registration Deadline</h3>
              <p className="text-gray-700 text-lg">May 31, 2025</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-2 border-red-200 p-8 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="text-red-600 mr-4 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Important Notice</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At least
                one author of each accepted paper must register for the conference
                and present the paper. Sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
