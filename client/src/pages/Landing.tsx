import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Layers, ArrowRight, XCircle, CheckCircle, 
  ShieldCheck, LayoutTemplate, Database, 
  Filter, PlayCircle, Activity, Terminal, 
  Minus, ChevronRight, BarChart2, Server
} from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans text-[#111827] overflow-x-hidden selection:bg-[#059669] selection:text-white">
      
      {/* 🚀 NAVBAR - Glassmorphism & Sticky */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-[#E5E7EB] transition-all">
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            
            <span className="font-bold text-xl tracking-tight">RelayOS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#6B7280]">
            <a href="#problem" className="hover:text-[#111827] transition-colors">The Problem</a>
            <a href="#pipeline" className="hover:text-[#111827] transition-colors">Pipeline</a>
            <a href="#comparison" className="hover:text-[#111827] transition-colors">Comparison</a>
            <a href="#architecture" className="hover:text-[#111827] transition-colors">Architecture</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/login')}
              className="hidden sm:block text-sm font-bold text-[#4B5563] hover:text-[#111827] transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="px-5 py-2.5 bg-[#111827] text-white text-sm font-bold rounded-lg hover:bg-[#1F2937] transition-transform hover:-translate-y-0.5 shadow-md flex items-center gap-2"
            >
              Console <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* 🟢 HERO SECTION - Full Viewport Height */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center items-center px-6 pt-24 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#111827 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#059669] rounded-full blur-[120px] opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-[1000px] mx-auto text-center relative z-10 flex flex-col items-center">
      
          
          <h1 className="text-5xl sm:text-6xl md:text-[80px] font-black tracking-tighter text-[#111827] leading-[1.05] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Communication,<br />
            <span className="text-[#059669]">Controlled.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-2xl mb-12 font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            RelayOS is a structured orchestration platform that ensures operational messages are validated, filtered, and executed reliably. Predictability over volume.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <button 
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-[#059669] text-white text-base font-bold rounded-xl hover:bg-[#047857] shadow-xl shadow-[#059669]/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Launch Console <ArrowRight size={18} />
            </button>
            <a 
              href="#pipeline"
              className="px-8 py-4 bg-white border border-[#E5E7EB] text-[#111827] text-base font-bold rounded-xl hover:bg-[#F8FAFC] transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              See Architecture
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[#9CA3AF]">
          <div className="w-6 h-10 border-2 border-[#E5E7EB] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#9CA3AF] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 🟢 THE PROBLEM - Stark Contrast */}
      <section id="problem" className="py-24 md:py-32 border-t border-[#E5E7EB] bg-[#111827] text-white">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Operational communication <span className="text-gray-500">fails silently.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Most bulk messaging tools operate like a black box. You push data and hope for the best. When operating at scale, small breaks cause massive operational failure.
            </p>
            <div className="space-y-6 mb-10">
              {[
                "Messages sent to incorrect, unverified recipients",
                "Template-data mismatches breaking variables at runtime",
                "Rate-limit failures causing dropped requests",
                "Zero visibility into individual delivery outcomes"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 text-gray-300 text-lg font-medium">
                  <XCircle size={24} className="text-red-500 shrink-0 mt-0.5" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 md:p-12 shadow-2xl flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#059669] blur-[100px] opacity-20"></div>
             <p className="text-xl font-medium text-gray-400 leading-relaxed mb-8 relative z-10">
               Most tools focus entirely on <span className="text-white font-bold">volume</span>. They prioritize how fast you can hit "Send".
             </p>
             <div className="h-px w-full bg-gray-800 mb-8 relative z-10"></div>
             <p className="text-3xl font-black text-white leading-snug relative z-10">
               RelayOS focuses on <span className="text-[#059669]">control.</span><br/> We prioritize orchestration.
             </p>
          </div>
        </div>
      </section>

      {/* 🟢 THE PIPELINE (How it works) */}
      <section id="pipeline" className="py-24 md:py-32 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Structure before execution.</h2>
          <p className="text-xl text-[#6B7280] leading-relaxed">
            Communication is broken into strict, verifiable stages. Every stage must pass validation before the next begins.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-[#F3F4F6] z-0"></div>
          
          {[
            { icon: LayoutTemplate, title: "1. Define", desc: "Create reusable, parameterized message templates." },
            { icon: ShieldCheck, title: "2. Validate", desc: "Strict schema mapping checks dataset integrity." },
            { icon: Filter, title: "3. Segment", desc: "Apply logical conditions to target exact recipients." },
            { icon: PlayCircle, title: "4. Execute", desc: "Send through rate-controlled, retry-enabled pipelines." },
            { icon: Activity, title: "5. Monitor", desc: "Observe real-time telemetry via secure WebSockets." }
          ].map((step, i) => (
            <div key={i} className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center relative z-10 bg-white md:bg-transparent p-6 md:p-0 rounded-2xl border border-[#E5E7EB] md:border-none shadow-sm md:shadow-none gap-6 md:gap-0">
              <div className="w-16 h-16 bg-white border-2 border-[#E5E7EB] rounded-2xl flex items-center justify-center md:mb-6 shadow-sm text-[#111827] shrink-0">
                <step.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-[#111827]">{step.title}</h4>
                <p className="text-sm text-[#6B7280] leading-relaxed md:px-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 COMPETITOR COMPARISON (The God-Level Matrix) */}
      <section id="comparison" className="py-24 md:py-32 bg-[#F8FAFC] border-y border-[#E5E7EB]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why infrastructure matters.</h2>
            <p className="text-lg text-[#6B7280]">How RelayOS compares to traditional bulk marketing tools.</p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="w-1/3 px-8 py-6 bg-white text-sm font-bold text-[#6B7280] uppercase tracking-wider border-b border-[#E5E7EB]">Capability</th>
                    <th className="w-1/3 px-8 py-6 bg-[#F8FAFC] text-sm font-bold text-[#6B7280] uppercase tracking-wider border-b border-[#E5E7EB]">Traditional Senders</th>
                    <th className="w-1/3 px-8 py-6 bg-[#111827] text-sm font-black text-white uppercase tracking-wider border-b border-gray-800 rounded-tr-3xl">RelayOS</th>
                  </tr>
                </thead>
                <tbody className="text-base font-medium">
                  {[
                    { feature: "Pre-Flight Data Validation", them: false, us: true, desc: "Blocks execution if data is missing" },
                    { feature: "Rule-Based Segmentation", them: false, us: true, desc: "Built-in dynamic DSL filtering" },
                    { feature: "Execution Telemetry", them: "Delayed / Polling", us: "Real-time WebSockets" },
                    { feature: "Retry Logic", them: "Manual", us: "Automated Exponential Backoff" },
                    { feature: "Core Focus", them: "Marketing Volume", us: "Operational Predictability" },
                  ].map((row, i) => (
                    <tr key={i} className="group">
                      <td className="px-8 py-6 border-b border-[#E5E7EB] bg-white">
                        <span className="text-[#111827] font-bold block">{row.feature}</span>
                        {row.desc && <span className="text-xs text-[#9CA3AF] mt-1 font-normal hidden md:block">{row.desc}</span>}
                      </td>
                      <td className="px-8 py-6 border-b border-[#E5E7EB] bg-[#F8FAFC] text-[#6B7280]">
                        {typeof row.them === 'boolean' ? (row.them ? <CheckCircle size={20} className="text-[#059669]" /> : <Minus size={20} className="text-[#9CA3AF]" />) : row.them}
                      </td>
                      <td className="px-8 py-6 border-b border-[#E5E7EB] bg-[#ECFDF5] text-[#059669] font-bold">
                        {typeof row.us === 'boolean' ? <CheckCircle size={20} className="text-[#059669]" /> : row.us}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 CORE CAPABILITIES & USE CASES */}
      <section className="py-24 md:py-32 max-w-[1200px] mx-auto px-6 grid lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-6 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] inline-block w-max text-xs font-bold tracking-wider text-[#4B5563] uppercase">
            Real-World Application
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-6">Built for operational reality.</h2>
          <p className="text-lg text-[#6B7280] leading-relaxed mb-10">
            RelayOS is designed for institutions and enterprises that cannot afford dropped messages or malformed data.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold mb-2 text-[#111827]">Institutional Operations</h4>
              <p className="text-[#6B7280]">Examination notifications, attendance threshold alerts, fee reminders.</p>
            </div>
            <div className="h-px bg-[#E5E7EB] w-full"></div>
            <div>
              <h4 className="text-lg font-bold mb-2 text-[#111827]">Administrative Alerts</h4>
              <p className="text-[#6B7280]">Policy announcements, compliance notices, structured document circulation.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          {[
            { icon: Database, title: "Strict Schema Enforcement", desc: "Variables are checked against headers before any task is queued." },
            { icon: Filter, title: "Logical Segmentation", desc: "Use AND/OR operators to surgically target recipients." },
            { icon: Server, title: "Rate-Controlled Queues", desc: "Background workers process payloads without blocking the UI." },
            { icon: BarChart2, title: "Immutable Audit Trails", desc: "Every execution stores a permanent record of delivery and failures." }
          ].map((feature, i) => (
            <div key={i} className="p-8 border border-[#E5E7EB] rounded-3xl hover:shadow-lg transition-shadow bg-white flex flex-col">
              <div className="w-10 h-10 rounded-full bg-[#ECFDF5] flex items-center justify-center text-[#059669] mb-6">
                <feature.icon size={18} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#111827]">{feature.title}</h4>
              <p className="text-[#6B7280] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 ARCHITECTURE & CTA */}
      <section id="architecture" className="py-32 bg-[#111827] text-white border-t border-gray-800">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <Terminal size={48} className="mx-auto text-[#059669] mb-8" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
            Engineered for scale.
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            RelayOS relies on a Multi-Tenant PostgreSQL database, a decoupled FastAPI execution engine, and native WebSocket telemetry for real-time observability.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => navigate('/login')}
              className="px-10 py-5 bg-[#059669] text-white text-lg font-bold rounded-xl hover:bg-[#047857] hover:-translate-y-1 transition-all shadow-lg shadow-[#059669]/20"
            >
              Access the Console
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="px-10 py-5 bg-transparent border border-gray-700 text-white text-lg font-bold rounded-xl hover:bg-gray-800 transition-colors"
            >
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* 🟢 FOOTER */}
      <footer className="bg-[#0A0F1A] border-t border-gray-900 py-12 text-sm text-gray-500">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <span className="font-bold text-white tracking-wider">RelayOS</span>
          </div>
          <div className="text-center md:text-right font-medium tracking-wide">
            Structured communication, executed with control. &copy; {new Date().getFullYear()}
          </div>
        </div>
      </footer>

    </div>
  );
}