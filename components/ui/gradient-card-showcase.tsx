import React from 'react';

const cards = [
  {
    title: 'Free Community',
    desc: 'A free Discord for traders serious about orderflow. No signals. No fluff. Real education, real conversations — free, forever.',
    gradientFrom: '#ffbc00',
    gradientTo: '#ff0058',
    buttonLabel: 'Join Free Discord',
    buttonHref: 'https://discord.gg/d4xSrsWAK',
  },
  {
    title: 'Inner Circle',
    desc: 'Live sessions, priority feedback, exclusive recordings, and direct access to Amrit. $39/month.',
    gradientFrom: '#03a9f4',
    gradientTo: '#ff0058',
    buttonLabel: 'Join Inner Circle',
    buttonHref: '#inner-circle',
  },
  {
    title: '1-on-1 Mentorship',
    desc: 'Direct access to Amrit. Your setups reviewed, your mistakes addressed, your progress tracked.',
    gradientFrom: '#4dff03',
    gradientTo: '#00d0ff',
    buttonLabel: 'Book a Session',
    buttonHref: '#mentorship',
  },
];

export default function SkewCards() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap py-10">
        {cards.map(({ title, desc, gradientFrom, gradientTo, buttonLabel, buttonHref }, idx) => (
          <div
            key={idx}
            className="group relative w-[320px] h-[400px] m-[40px_30px] transition-all duration-500"
          >
            {/* Skewed gradient panels */}
            <span
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
              style={{
                background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
              }}
            />
            <span
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
              style={{
                background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
              }}
            />

            {/* Animated blurs */}
            <span className="pointer-events-none absolute inset-0 z-10">
              <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
            </span>

            {/* Content */}
            <div className="relative z-20 left-0 p-[20px_40px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] shadow-lg rounded-lg text-white transition-all duration-500 group-hover:left-[-25px] group-hover:p-[60px_40px]">
              <h2 className="text-2xl mb-2">{title}</h2>
              <p className="text-lg leading-relaxed mb-4">{desc}</p>
              <a
                href={buttonHref}
                target={buttonHref.startsWith('http') ? '_blank' : undefined}
                rel={buttonHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-block text-sm font-bold text-black bg-white px-3 py-2 rounded hover:bg-[#ffcf4d] hover:border hover:border-[rgba(255,0,88,0.4)] hover:shadow-md transition-all duration-200"
              >
                {buttonLabel}
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
}
