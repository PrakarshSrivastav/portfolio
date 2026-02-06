"use client"

export default function AnimatedBackground() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-purple-500/10 to-transparent"></div>

        {/* Animated floating code */}
        <div className="floating-code absolute top-[10%] left-[20%] text-blue-500/20 text-xs font-mono">
          {"function hello() { return 'world' }"}
        </div>
        <div className="floating-code-slow absolute top-[30%] left-[70%] text-purple-500/20 text-xs font-mono">
          import React from 'react'
        </div>
        <div className="floating-code-medium absolute top-[50%] left-[30%] text-cyan-500/20 text-xs font-mono">
          const [data, setData] = useState()
        </div>
        <div className="floating-code-reverse absolute top-[70%] left-[60%] text-blue-500/20 text-xs font-mono">
          async function fetchData()
        </div>
        <div className="floating-code-slow absolute top-[85%] left-[15%] text-purple-500/20 text-xs font-mono">
          export default function App()
        </div>
        <div className="floating-code-medium absolute top-[20%] left-[80%] text-cyan-500/20 text-xs font-mono">
          public static void main()
        </div>
        <div className="floating-code absolute top-[60%] left-[10%] text-blue-500/20 text-xs font-mono">
          SELECT * FROM users
        </div>
        <div className="floating-code-reverse absolute top-[40%] left-[50%] text-purple-500/20 text-xs font-mono">
          git commit -m 'fix'
        </div>
        <div className="floating-code-reverse absolute top-[80%] left-[20%] text-purple-500/20 text-xs font-mono">
          console.log("debugging...")
        </div>
        <div className="floating-code-slow absolute top-[35%] left-[10%] text-cyan-500/20 text-xs font-mono">
          pipeline.run('data_cleaning')
        </div>
        <div className="floating-code-medium absolute top-[65%] left-[75%] text-blue-500/20 text-xs font-mono">
          {"app.get('/api/data', (req, res) => { res.send(data) })"}
        </div>
        <div className="floating-code absolute top-[25%] left-[35%] text-purple-500/20 text-xs font-mono">
          const query = `SELECT COUNT(*) FROM logs`
        </div>

        {/* Floating particles */}
        <div className="particle absolute h-2 w-2 rounded-full bg-blue-500/30"></div>
        <div className="particle-slow absolute h-3 w-3 rounded-full bg-purple-500/20"></div>
        <div className="particle-medium absolute h-1 w-1 rounded-full bg-cyan-500/30"></div>
        <div className="particle-reverse absolute h-2 w-2 rounded-full bg-blue-500/20"></div>
        <div className="particle-slow absolute h-2 w-2 rounded-full bg-purple-500/30"></div>
        <div className="particle-medium absolute h-3 w-3 rounded-full bg-cyan-500/20"></div>
        <div className="particle absolute h-1 w-1 rounded-full bg-blue-500/30"></div>
        <div className="particle-reverse absolute h-2 w-2 rounded-full bg-purple-500/20"></div>
        <div className="particle-slow absolute h-2 w-2 rounded-full bg-cyan-500/30"></div>
        <div className="particle-medium absolute h-1 w-1 rounded-full bg-blue-500/20"></div>
        <div className="particle absolute h-3 w-3 rounded-full bg-purple-500/30"></div>
        <div className="particle-reverse absolute h-2 w-2 rounded-full bg-cyan-500/20"></div>
      </div>

      {/* Floating animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -20px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes float-reverse {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 20px) rotate(-5deg); }
          66% { transform: translate(20px, -20px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        .floating-code {
          animation: float 20s ease-in-out infinite;
          opacity: 0.7;
        }

        .floating-code-slow {
          animation: float 30s ease-in-out infinite;
          opacity: 0.6;
        }

        .floating-code-medium {
          animation: float 25s ease-in-out infinite;
          opacity: 0.8;
        }

        .floating-code-reverse {
          animation: float-reverse 22s ease-in-out infinite;
          opacity: 0.7;
        }

        .particle {
          animation: float 15s ease-in-out infinite;
          opacity: 0.7;
          top: 20%;
          left: 30%;
        }

        .particle-slow {
          animation: float 25s ease-in-out infinite;
          opacity: 0.6;
          top: 50%;
          left: 70%;
        }

        .particle-medium {
          animation: float 20s ease-in-out infinite;
          opacity: 0.8;
          top: 70%;
          left: 40%;
        }

        .particle-reverse {
          animation: float-reverse 18s ease-in-out infinite;
          opacity: 0.7;
          top: 30%;
          left: 60%;
        }
      `}</style>
    </>
  )
}
