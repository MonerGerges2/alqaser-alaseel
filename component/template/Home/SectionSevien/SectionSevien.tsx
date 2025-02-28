import Link from "next/link";

const SectionSevien = () => {
     return (
          <section className="py-16 bg-gradient-to-r text-black flex items-center justify-center !rounded-t-2xl">
               <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">هل لديك استفسار؟</h2>
                    <p className="text-lg mb-8">
                         نحن هنا للإجابة على أسئلتك وتقديم الدعم الذي تحتاجه. لا تتردد في التواصل معنا!
                    </p>
                    <Link
                         href="/contact"
                         className="inline-block bg-white text-yellow-500 font-semibold px-6 py-3 border border-yellow-500 rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition duration-300"
                    >
                         اتصل بنا الآن
                    </Link>
               </div>
          </section>
     );
};

export default SectionSevien;
