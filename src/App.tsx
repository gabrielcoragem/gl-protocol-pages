import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, AlertTriangle } from 'lucide-react';

declare global {
  interface Window {
    acceptUpsell: (url: string) => void;
    declineUpsell?: () => void;
  }
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-red-200">
      {/* Top Success Banner */}
      <div className="bg-green-50 border-b border-green-100 py-6 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-green-800 mb-2 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" /> YOUR ORDER WAS SUCCESSFUL! Your Access is Granted.
          </h1>
          <p className="text-lg text-green-700 font-medium">
            Your login details to the core protocol are already in your inbox.
          </p>
        </div>
      </div>

      <div className="bg-red-600 text-white py-5 px-4 text-center shadow-inner">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-bold flex flex-col md:flex-row items-center justify-center gap-3">
            <AlertTriangle className="w-8 h-8 flex-shrink-0 text-yellow-300" /> 
            <span>But stop exactly what you are doing and read this message right now.</span>
          </p>
          <p className="text-base md:text-lg mt-3 font-medium opacity-90">
            Ignoring this page could cost you weeks of waiting and frustration to see your blood sugar drop... or worse, force you to throw money and effort straight into the trash.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-5 py-10 md:py-16 text-[18px] md:text-[20px] leading-relaxed">
        
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-10 leading-tight">
          <span className="text-red-600">The Brutal Truth:</span> People Over 45 Waste Up To 80% Of Any Blood Sugar Treatment Before It Ever Reaches Their Cells. Here's How To Fix That.
        </h2>

        <div className="space-y-6">
          <p>
            I will be ruthless and direct with you. The protocol you just acquired works. The science is undeniable.
          </p>
          <p>
            The problem is not the method itself. <strong className="bg-yellow-200 text-black px-1">The problem is your body's biological capacity to actually USE it.</strong>
          </p>
        </div>

        <hr className="my-10 border-gray-200" />

        <h3 className="text-2xl md:text-3xl font-bold mb-6">The "Rusted Lock" Problem</h3>
        <div className="space-y-6">
          <p>
            Remember how we talked about attacking insulin resistance? Your new protocol is the perfect key for that. But here is the raw truth most people ignore:
          </p>
          <p>
            The front door to your cells is blocked by years of inflammation and high glucose. It is like a completely rusted lock. You hand your body the perfect key... but the key simply won't turn.
          </p>
          <p>
            What happens next?
          </p>
          <p>
            Your own body treats these vital compounds like garbage. It filters them out and flushes them through your kidneys. Straight into the urine. <strong className="text-red-600">Completely wasted.</strong>
          </p>
          <p>
            You do everything right. You prepare your routine. You follow the plan. You wait.
          </p>
          <p>
            But most of it never makes it where it needs to go. Not because the protocol is bad, but because <em className="font-bold underline decoration-red-400 decoration-2 underline-offset-4">the cell door was jammed tight</em>.
          </p>
        </div>

        <hr className="my-10 border-gray-200" />

        <h3 className="text-2xl md:text-3xl font-bold mb-6">This Is Why Some Drop Their Glucose In Days... And Others Wait Months</h3>
        <div className="space-y-6">
          <p>
            It is not genetics. It is not luck. It is purely about whether the "door" was wide open or slammed shut the moment the treatment hit your system.
          </p>
          <p>
            A young person with a fast metabolism? The door is wide open. They absorb everything, their energy skyrockets, and their blood sugar plummets in 3 days.
          </p>
          <p>
            Someone over 45 with cells blocked by insulin resistance? The door is half-shut. Their body absorbs maybe 20%. The rest is waste. Weeks pass, frustration sets in, and they think: <em className="italic text-gray-500">"This doesn't work for me."</em>
          </p>
          <p className="font-bold text-xl md:text-2xl mt-8 p-6 bg-gray-100 rounded-lg border-l-4 border-black">
            It works. But to see accelerated results, your body must be primed to receive the solution.
          </p>
        </div>

        <hr className="my-10 border-gray-200" />

        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800">The Ultimate Fix. It Takes 2 Minutes.</h3>
        <div className="space-y-6">
          <p>
            We engineered a surgical, straight-to-the-point guide called the <strong className="text-black text-xl">GL Accelerator</strong>.
          </p>
          <p>
            It shows you <strong>3 absurdly simple steps</strong> to execute 5 minutes before you do your protocol routine. That's it.
          </p>

          <ul className="space-y-4 font-semibold text-gray-800 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm my-8">
            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" /> Just 2 minutes of your day.</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" /> No extra pills.</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" /> No expensive powders or supplements.</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" /> Using common items you already have in your kitchen.</li>
          </ul>

          <p className="font-bold mt-8 text-xl">What these 3 steps do:</p>
          
          <ul className="space-y-8 my-8">
            <li className="flex items-start">
              <span className="flex-shrink-0 mt-1 mr-4 text-white bg-blue-600 p-2 rounded-full shadow-md">
                <span className="font-bold w-5 h-5 flex items-center justify-center">1</span>
              </span>
              <div>
                <strong className="text-black block mb-1 text-xl">They "Pick the Lock":</strong>
                <span className="text-gray-700">They wake up your cell receptors, leaving your body "starving" to absorb every nutrient instantly.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mt-1 mr-4 text-white bg-blue-600 p-2 rounded-full shadow-md">
                <span className="font-bold w-5 h-5 flex items-center justify-center">2</span>
              </span>
              <div>
                <strong className="text-black block mb-1 text-xl">Extreme Acceleration:</strong>
                <span className="text-gray-700">They push the compounds into your bloodstream much faster, bypassing the roadblocks of insulin resistance.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mt-1 mr-4 text-white bg-blue-600 p-2 rounded-full shadow-md">
                <span className="font-bold w-5 h-5 flex items-center justify-center">3</span>
              </span>
              <div>
                <strong className="text-black block mb-1 text-xl">100% Utilization:</strong>
                <span className="text-gray-700">Instead of throwing 80% of your dose in the trash, your body absorbs almost everything. The difference? Instead of waiting months, results start showing up in days.</span>
              </div>
            </li>
          </ul>
        </div>

        <hr className="my-10 border-gray-200" />

        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-red-600">You Are Likely Making These 2 Critical Mistakes</h3>
        <div className="space-y-10 bg-red-50 p-6 md:p-10 rounded-2xl border border-red-100">
          <div>
            <strong className="text-xl md:text-2xl text-red-800 flex items-center gap-3 mb-3"><AlertTriangle className="w-6 h-6 flex-shrink-0" /> Critical Mistake #1: The Wrong Timing.</strong>
            <p className="text-gray-800 leading-relaxed">
              Most people do their protocol whenever they remember. Wrong. There is one specific biological window during the day when your cells are most "open" for uptake. The <strong className="text-red-900">GL Accelerator</strong> shows you exactly when that window is. Hit that window, and absorption nearly doubles.
            </p>
          </div>
          <div className="h-px bg-red-200 w-full"></div>
          <div>
            <strong className="text-xl md:text-2xl text-red-800 flex items-center gap-3 mb-3"><AlertTriangle className="w-6 h-6 flex-shrink-0" /> Critical Mistake #2: The Door-Slamming Foods.</strong>
            <p className="text-gray-800 leading-relaxed">
              Certain harmless-looking foods "slam the cell door shut" for hours. Other cheap, everyday foods throw it wide open. The <strong className="text-red-900">GL Accelerator</strong> gives you a direct Cheat Sheet: <strong className="bg-white px-2 py-1 rounded text-red-900 shadow-sm border border-red-100">Eat this. Avoid that.</strong> Simple as making toast.
            </p>
          </div>
        </div>

        <hr className="my-12 border-gray-200" />

        <h3 className="text-2xl md:text-3xl font-bold mb-6">What Is Actually At Stake Here</h3>
        <div className="space-y-6">
          <p>
            You are about to invest time, money, and energy into your new protocol. That takes commitment.
          </p>
          <p className="font-bold text-xl md:text-2xl bg-yellow-200 inline-block px-3 py-1 text-black shadow-sm transform -rotate-1 rounded-sm">
            So ask yourself: Do you want 20% of that effort to work, or 100%?
          </p>
          <p>
            Without preparing the ground, every day has a hidden cost. The <em>GL Accelerator</em> ensures your investment generates the maximum possible return in the shortest humanly possible time.
          </p>
          <p>
            The reason people buy anything is to get a deal, believing what they are getting is worth more than what they are giving in exchange for it. Sold separately, the fair price for this result-engineering guide would easily be <strong>$97</strong>. And it would be worth every cent, because it could literally double or triple the speed of your recovery.
          </p>
          <p className="font-bold text-xl mt-8">
            But you have already proven you are committed.
          </p>
          <p>
            So today, and exclusively on this page, you can add the <em>GL Accelerator</em> to your order for just:
          </p>
          
          <div className="text-center my-10 bg-white py-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-center gap-4">
              <span className="line-through text-gray-400 text-3xl md:text-4xl font-bold">$97</span>
              <span className="text-6xl md:text-8xl font-black text-green-600 tracking-tight">$27</span>
            </div>
            <p className="text-center font-bold text-gray-600 mt-6 uppercase tracking-wide text-sm md:text-base">
              No subscriptions • One single payment • Immediate access
            </p>
          </div>

          <button
            onClick={() => window.acceptUpsell('https://app.kashpay.com.br/u/23170d8ece78509b')}
            className="w-full bg-[#1db954] hover:bg-[#1ed760] text-white text-xl md:text-3xl font-black py-6 px-6 rounded-2xl shadow-[0_8px_0_#14833b] hover:shadow-[0_4px_0_#14833b] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all duration-200 flex flex-col items-center justify-center gap-2 group mt-6 border border-[#1ed760]/50 cursor-pointer"
          >
            <span className="flex items-center gap-3">
              YES! Add to my order for $27 <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
            </span>
            <span className="text-sm md:text-base font-bold opacity-90 block mt-1 tracking-wide uppercase">Click here to add the guide to your order automatically</span>
          </button>
        </div>

        <hr className="my-12 border-gray-200" />

        <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4">
          <ShieldCheck className="w-10 h-10 text-blue-600" /> The Unconditional Guarantee: Zero Risk
        </h3>
        <div className="space-y-6 bg-blue-50/50 p-6 md:p-10 rounded-2xl border border-blue-100">
          <p className="italic text-gray-600 text-base border-l-4 border-gray-300 pl-4">
            The single greatest objection for any product or service being sold is the risk that it doesn't do what it's supposed to do for them. Therefore, reversing risk is an immediate way to make any offer more attractive.
          </p>
          <p className="text-lg">
            Add the <em>GL Accelerator</em> right now. Use the 3 two-minute steps. Follow the timing guide.
          </p>
          <p className="font-bold text-xl leading-relaxed">
            If you do not notice a brutal and aggressive difference in how fast your protocol takes effect, send us a single email. We will refund 100% of your $27. No questions, no stress, no hard feelings.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-50 mt-4 text-center">
             <p className="font-extrabold text-blue-900 text-xl">
               You keep the guide. We eat the cost. The risk does not exist.
             </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-white p-6 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
          
          <button 
            type="button"
            onClick={() => window.acceptUpsell('https://app.kashpay.com.br/u/23170d8ece78509b')}
            className="w-full bg-[#1db954] hover:bg-[#1ed760] text-white text-xl md:text-3xl font-black py-6 px-6 rounded-2xl shadow-[0_8px_0_#14833b] hover:shadow-[0_4px_0_#14833b] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all duration-200 flex flex-col items-center justify-center gap-2 group mb-8 border border-[#1ed760]/50 cursor-pointer">
            <span className="flex items-center gap-3">
              YES! Add to my order for $27 <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
            </span>
            <span className="text-sm md:text-base font-bold opacity-90 block mt-1 tracking-wide uppercase">Click here to add the guide to your order automatically</span>
          </button>

          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-sm md:text-base font-bold text-gray-700 mb-10">
            <li className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100"><CheckCircle2 className="w-5 h-5 text-green-500" /> Immediate Access</li>
            <li className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100"><CheckCircle2 className="w-5 h-5 text-green-500" /> One-Time Payment</li>
            <li className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100"><ShieldCheck className="w-5 h-5 text-green-500" /> 60-Day Guarantee</li>
          </ul>

          <button 
            type="button"
            onClick={() => { window.declineUpsell?.(); window.location.href = 'https://thankyou.theglycemicreset.com/'; }}
            className="text-gray-400 hover:text-gray-700 underline text-sm md:text-base transition-colors border-none bg-transparent cursor-pointer font-medium max-w-xl mx-auto block leading-relaxed"
          >
            No thanks. I will proceed with the pure protocol and hope my body, even with insulin resistance, can absorb enough on its own.
          </button>
        </div>

        <div className="mt-20 bg-[#111] text-white p-8 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
          
          <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-yellow-400 tracking-tight">One Last Thing.</h3>
          <div className="space-y-6 text-gray-300 text-lg md:text-xl">
            <p className="font-semibold text-white">Look at it this way:</p>
            <p>
              The core protocol you bought is a high-performance V8 engine. It is perfect.
            </p>
            <p className="text-white font-bold text-2xl py-2">
              The <em className="text-yellow-400 not-italic">GL Accelerator</em> is the key in the ignition.
            </p>
            <p>
              Without the key, the engine might start... eventually. After weeks of forcing and trying.
            </p>
            <p>
              With the key, you turn it and the machine roars to life instantly.
            </p>
            
            <div className="my-10 h-px bg-white/10 w-full"></div>

            <p className="text-white font-extrabold text-2xl md:text-3xl text-center leading-tight">
              $27 to have the mathematical certainty that the engine starts on the first try.
            </p>
            <p className="text-yellow-400 text-center text-lg md:text-xl font-medium mt-4 mb-10">
              I know you already made your decision.
            </p>
            
            <button 
              type="button"
              onClick={() => window.acceptUpsell('https://app.kashpay.com.br/u/23170d8ece78509b')}
              className="w-full border-2 border-yellow-400 bg-transparent hover:bg-yellow-400 text-yellow-400 hover:text-gray-900 font-extrabold text-xl md:text-2xl py-5 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] cursor-pointer">
              YES, Add the GL Accelerator for $27
            </button>
          </div>
        </div>

      </main>
      
      <footer className="text-center py-12 text-gray-400 text-sm border-t border-gray-100 bg-white">
        <p className="font-medium">Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
        <p className="mt-2 text-xs w-full max-w-2xl mx-auto opacity-70">
          This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary. Information presented here is not a substitute for professional medical advice.
        </p>
      </footer>
    </div>
  );
}
