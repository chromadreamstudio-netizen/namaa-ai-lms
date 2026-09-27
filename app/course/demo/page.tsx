"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, MessageSquare, FileText, CheckCircle, Clock, Sparkles } from "lucide-react";

export default function CourseDemo() {
  const [chatQuestion, setChatQuestion] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAskAI = (e: React.FormEvent) => {
    e.preventDefault();
    if(chatQuestion.trim() !== "") {
      setShowAnswer(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      {/* Top bar */}
      <div className="bg-slate-950 border-b border-slate-800 p-4 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors text-slate-400">
          <ArrowRight size={20} />
          <span>العودة للرئيسية</span>
        </Link>
        <div className="font-bold flex items-center gap-3">
          <span className="text-[#00a88f]">كورس:</span> هندسة البرمجيات والذكاء الاصطناعي المتقدم
        </div>
        <div>
          <Image src="/logo.jpg" alt="Namaa Logo" width={40} height={40} className="rounded" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)]">
        {/* Main Content Area (Video & Tabs) */}
        <div className="flex-1 overflow-y-auto border-l border-slate-800 flex flex-col">
          {/* Fake Video Player */}
          <div className="w-full bg-black aspect-video relative group flex items-center justify-center border-b border-slate-800">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
             {/* Fake video controls */}
             <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center text-white/80">
                <div className="flex gap-4 items-center">
                   <Play size={24} className="cursor-pointer hover:text-white" />
                   <span className="text-sm">12:45 / 45:30</span>
                </div>
                <div className="w-full mx-4 h-1 bg-slate-700 rounded overflow-hidden cursor-pointer">
                   <div className="w-1/4 h-full bg-[#00a88f]"></div>
                </div>
             </div>
             <Play size={80} className="text-white/50 group-hover:text-white/90 group-hover:scale-110 transition-all cursor-pointer z-20" />
          </div>

          {/* Course Details below video */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-4">الدرس الرابع: بناء نماذج RAG في تطبيقات Next.js</h1>
            <p className="text-slate-400 leading-relaxed mb-6">
              في هذا الدرس سنتعلم كيف نقوم بربط قواعد البيانات المتجهة (Vector DB) مع نماذج اللغات الكبيرة (LLMs) لبناء مساعد ذكي قادر على قراءة تفريغ الفيديوهات والرد على الطلاب آلياً.
            </p>
            <div className="flex gap-4 border-b border-slate-700 pb-4">
              <button className="text-[#00a88f] font-semibold flex items-center gap-2 border-b-2 border-[#00a88f] pb-2">
                <FileText size={18} /> التفريغ النصي
              </button>
              <button className="text-slate-500 hover:text-slate-300 font-semibold flex items-center gap-2 pb-2">
                <CheckCircle size={18} /> الملحقات والأكواد
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar: AI Tutor & Syllabus */}
        <div className="w-full lg:w-[400px] flex flex-col bg-slate-950 h-full">
          {/* Tabs */}
          <div className="flex border-b border-slate-800">
            <button className="flex-1 py-4 text-center font-bold text-[#00a88f] border-b-2 border-[#00a88f] flex items-center justify-center gap-2">
               <Sparkles size={18} /> المعلم الذكي (AI)
            </button>
            <button className="flex-1 py-4 text-center font-bold text-slate-500 hover:text-slate-300">
               محتوى الدورة
            </button>
          </div>

          {/* AI Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {/* Greeting */}
            <div className="bg-slate-800 p-4 rounded-2xl rounded-tr-none max-w-[85%] self-start border border-slate-700">
              <p className="text-sm">أهلاً بك! أنا مساعدك الذكي الخاص بمنصة نماء. هل لديك أي استفسار حول "بناء نماذج RAG" في هذا الدرس؟</p>
            </div>

            {/* Fake Conversation triggered by user */}
            {showAnswer && (
              <>
                <div className="bg-[#00a88f] p-4 rounded-2xl rounded-tl-none max-w-[85%] self-end text-white">
                  <p className="text-sm">{chatQuestion}</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-2xl rounded-tr-none max-w-[90%] self-start border border-slate-700">
                  <p className="text-sm mb-3">
                    نعم بالتأكيد! تم شرح خوارزميات البحث في قاعدة البيانات (Vector DB) واستدعاء السياق في الجزء الثاني من هذا الدرس.
                  </p>
                  <button className="bg-slate-900 hover:bg-[#391e75] border border-slate-700 hover:border-[#391e75] text-[#00a88f] hover:text-white transition-colors text-xs py-2 px-3 rounded flex items-center gap-2 w-full justify-center">
                    <Clock size={14} /> اضغط هنا للانتقال إلى الدقيقة (12:45)
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-slate-800 bg-slate-950">
            <form onSubmit={handleAskAI} className="relative">
              <input 
                type="text" 
                value={chatQuestion}
                onChange={(e) => setChatQuestion(e.target.value)}
                placeholder="اسأل المعلم الذكي هنا..." 
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-full py-3 px-4 pr-12 focus:outline-none focus:border-[#00a88f] text-sm"
              />
              <button type="submit" className="absolute left-2 top-2 bottom-2 bg-[#00a88f] hover:bg-[#008f7a] rounded-full p-2 text-white transition-colors">
                <MessageSquare size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}