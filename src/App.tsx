import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-lg bg-white p-10 md:p-14 text-center shadow-2xl">
        <div className="inline-flex items-center rounded border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
          RanCo Tech
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Website Under Construction
        </h1>

        <p className="mt-5 text-base md:text-lg leading-8 text-slate-600">
          We're currently building something exceptional. Our team is working
          hard to deliver a faster, modern, and better experience for our
          visitors.
        </p>

        <div className="mt-8 inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white">
          🚀 Launching Soon
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          Designed & Developed by{" "}
          <a href="https://rancotechnology.com/" className="font-semibold text-blue-600" target="_blank">
            RanCo Tech
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
