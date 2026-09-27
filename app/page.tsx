import Image from "next/image";
import Link from "next/link";
import { 
  PlayCircle, BrainCircuit, Globe, Award, Sparkles, 
  CheckCircle2, Star, Users, ArrowLeft, ShieldCheck, Video 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dir-rtl">
      {/* Top Notification Bar */}
      <div className="bg-[#391e75] text-white py-2 px-4 text-center text-xs md:text-sm font-medium flex justify-center items-center gap-2">
        <Sparkles size={16} className="text-[#00a88f] animate-pulse" />
        <span>الجيل الجديد من التعليم الذكي - تم إطلاق المحرك البرمجي لـ أكاديمية نماء V1.0</span>
      </div>

      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Namaa Academy" width={55} height={55} className="object-contain rounded-lg" />
              <div>
                <span className="font-extrabold text-2xl text-[#391e75] block leading-none">نماء أكاديمي</span>
                <span className="text-xs text-slate-500 font-semibold tracking-wider">NAMA'A AI PLATFORM</span>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8 space-x-reverse font-bold text-sm text-slate-700">
              <a href="#courses" className="hover:text-[#00a88f] transition-colors">الدورات والدبلومات</a>
              <a href="#features" className="hover:text-[#00a88f] transition-colors">المعلم الذكي</a>
              <a href="#b2b" className="hover:text-[#00a88f] transition-colors">حلول المؤسسات</a>
            </div>

            <div className="flex items-center gap-3">
              <Link 
                href="/course/demo" 
                className="bg-[#00a88f] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#008f7a] transition-all shadow-md hover:shadow-lg hover:shadow-[#00a88f]/30 flex items-center gap-2"
              >
                <PlayCircle size={18} />
                <span>دخول المنصة التفاعلية</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#391e75] via-[#2d175e] to-[#1e0e42] text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Right Text Content */}
            <div className="lg:col-span-7 text-right">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#00a88f] font-bold px-4 py-1.5 rounded-full text-xs md:text-sm mb-6">
                <Sparkles size={16} />
                <span>منظومة الذكاء الاصطناعي الحصرية لأكاديمية نماء</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                تحويل الأصول التعليمية إلى <span className="text-[#00a88f]">منظومة إيرادات عالمية</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-normal">
                منصة تعليمية متكاملة مدعومة بالمعلم الذكي (AI Tutor). أعدت خصيصاً لنقل دبلومات واعتمادات نماء إلى كافة دول أوروبا والخليج العربي بدخل متكرر خالي من الحدود.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link 
                  href="/course/demo" 
                  className="bg-[#00a88f] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#008f7a] transition-all flex items-center gap-3 shadow-xl hover:shadow-[#00a88f]/40 hover:-translate-y-0.5"
                >
                  <PlayCircle size={22} />
                  <span>تجرية العرض الحي (Live Demo)</span>
                </Link>
              </div>

              {/* Mini Badges */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center md:text-right">
                <div>
                  <span className="block font-black text-2xl text-white">104K+</span>
                  <span className="text-xs text-slate-400">جمهور الأكاديمية المستهدف</span>
                </div>
                <div>
                  <span className="block font-black text-2xl text-[#00a88f]">100%</span>
                  <span className="text-xs text-slate-400">تشفير وحماية الفيديو (DRM)</span>
                </div>
                <div>
                  <span className="block font-black text-2xl text-white">24/7</span>
                  <span className="text-xs text-slate-400">استجابة المعلم الذكي</span>
                </div>
              </div>
            </div>

            {/* Left Mockup / Interactive Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-4 shadow-2xl backdrop-blur-xl relative group">
                <div className="absolute -top-3 -right-3 bg-[#00a88f] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  معلم AI تفاعلي
                </div>
                <div className="aspect-video bg-slate-950 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#391e75]/40 to-transparent"></div>
                  <PlayCircle size={64} className="text-[#00a88f] animate-pulse cursor-pointer relative z-10" />
                  <span className="absolute bottom-3 right-3 text-xs text-slate-300 bg-black/60 px-2 py-1 rounded">دبلوم البرمجة والذكاء الاصطناعي</span>
                </div>
                <div className="mt-4 p-3 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-2 text-xs text-[#00a88f] font-bold mb-1">
                    <Sparkles size={14} /> المعلم الذكي إجابة لحظية:
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    "تم شرح خطوة ربط واجهات API في الدقيقة 12:45 من الكورس، اضغط هنا للمشاهدة المباشرة."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Users className="text-[#00a88f]" size={28} />
              <div className="text-right">
                <span className="font-bold text-slate-900 block text-lg">منظومة متكاملة</span>
                <span className="text-xs text-slate-500">للأفراد والشركات</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="text-[#391e75]" size={28} />
              <div className="text-right">
                <span className="font-bold text-slate-900 block text-lg">اعتمادات دولية</span>
                <span className="text-xs text-slate-500">شهادات برمز QR موثق</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Globe className="text-[#00a88f]" size={28} />
              <div className="text-right">
                <span className="font-bold text-slate-900 block text-lg">بوابات دفع عالمية</span>
                <span className="text-xs text-slate-500">تركيا، أوروبا، والخليج</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <BrainCircuit className="text-[#391e75]" size={28} />
              <div className="text-right">
                <span className="font-bold text-slate-900 block text-lg">ذكاء اصطناعي تفاعلي</span>
                <span className="text-xs text-slate-500">تحليل المناهج فوراً</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog (المشهد الذي يثبت وجود الكورسات) */}
      <section id="courses" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-[#391e75] mb-3">الدبلومات والبرامج المعتمدة</h2>
            <p className="text-slate-600">نماذج مجهزة للعرض المباشر على المحرك الذكي الجديد لـ أكاديمية نماء</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 group">
              <div className="bg-slate-900 aspect-video relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#391e75]/20"></div>
                <Video size={48} className="text-white/80 group-hover:scale-110 transition-transform" />
                <span className="absolute top-3 right-3 bg-[#00a88f] text-white text-xs font-bold px-2.5 py-1 rounded">دبلوم معتمد</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#00a88f]">مناهج الذكاء الاصطناعي</span>
                  <div className="flex items-center text-amber-500 text-xs font-bold gap-1">
                    <Star size={14} fill="currentColor" /> 4.9 (120 طالب)
                  </div>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">دبلوم البرمجة بالذكاء الاصطناعي و Next.js</h3>
                <p className="text-xs text-slate-500 mb-6 line-clamp-2">تعلم أحدث التقنيات البرمجية وأتمتة النظم مع الحصول على شهادة نماء الرسمية.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-400 block">السعر المستهدف</span>
                    <span className="font-black text-xl text-[#391e75]">$199</span>
                  </div>
                  <Link href="/course/demo" className="bg-slate-900 hover:bg-[#00a88f] text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center gap-1">
                    <span>تجربة الكورس</span>
                    <ArrowLeft size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 group">
              <div className="bg-slate-900 aspect-video relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#00a88f]/20"></div>
                <Video size={48} className="text-white/80 group-hover:scale-110 transition-transform" />
                <span className="absolute top-3 right-3 bg-[#391e75] text-white text-xs font-bold px-2.5 py-1 rounded">دبلوم احترافي</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#00a88f]">إدارة الأعمال والتسويق</span>
                  <div className="flex items-center text-amber-500 text-xs font-bold gap-1">
                    <Star size={14} fill="currentColor" /> 5.0 (340 طالب)
                  </div>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">الدبلوم الشامل في التسويق الرقمي والتجارة</h3>
                <p className="text-xs text-slate-500 mb-6 line-clamp-2">استراتيجيات استهداف الأسواق التركية والأوروبية مع تطبيقات عملية وتصديقات دولية.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-400 block">السعر المستهدف</span>
                    <span className="font-black text-xl text-[#391e75]">$250</span>
                  </div>
                  <Link href="/course/demo" className="bg-slate-900 hover:bg-[#00a88f] text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center gap-1">
                    <span>تجربة الكورس</span>
                    <ArrowLeft size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 group">
              <div className="bg-slate-900 aspect-video relative flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-900/20"></div>
                <Video size={48} className="text-white/80 group-hover:scale-110 transition-transform" />
                <span className="absolute top-3 right-3 bg-[#00a88f] text-white text-xs font-bold px-2.5 py-1 rounded">برنامج تحضيري</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#00a88f]">اللغات والشهادات</span>
                  <div className="flex items-center text-amber-500 text-xs font-bold gap-1">
                    <Star size={14} fill="currentColor" /> 4.8 (89 طالب)
                  </div>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">برنامج التأهيل والاعتماد للشركات</h3>
                <p className="text-xs text-slate-500 mb-6 line-clamp-2">إعداد الكوادر المهنية والطلاب لاجتياز اختبارات الاعتماد للعمل في تركيا وأوروبا.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-400 block">السعر المستهدف</span>
                    <span className="font-black text-xl text-[#391e75]">$150</span>
                  </div>
                  <Link href="/course/demo" className="bg-slate-900 hover:bg-[#00a88f] text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center gap-1">
                    <span>تجربة الكورس</span>
                    <ArrowLeft size={14} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e0e42] text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Image src="/logo.jpg" alt="Namaa Logo" width={40} height={40} className="rounded" />
            <span className="font-bold text-lg text-white">منصة أكاديمية نماء الذكية</span>
          </div>
          <p className="text-xs text-slate-500">
            جميع الحقوق محفوظة © 2026 - رؤية تطويرية ومحرك برمجي خاص بالأكاديمية
          </p>
        </div>
      </footer>
    </div>
  );
}