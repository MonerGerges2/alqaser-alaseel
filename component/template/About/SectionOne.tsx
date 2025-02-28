import Link from "next/link";

const SectionOne = () => {
     return (
          <section className="relative h-[50vh] overflow-hidden">
               {/* Blurred background image */}
               <div
                    className="absolute inset-0 bg-cover bg-center filter blur-sm"
                    style={{ backgroundImage: "url('/assets/vision2.jpg')" }}
               ></div>
               {/* Optional gradient overlay */}
               <div className="absolute -bottom-1 left-0 w-full h-96 bg-gradient-to-t from-[#d3ab6084] to-transparent"></div>

               {/* Content container */}
               <div className="relative container mx-auto flex flex-col justify-center px-4 mt-10 h-full z-10">
                    {/* Breadcrumb */}
                    <nav className="text-sm mb-4">
                         <span>من نحن</span>
                         <span className="mx-2 text-black">/</span>
                         <Link href="/" className="text-black hover:underline">
                              الرئيسية
                         </Link>
                    </nav>
                    {/* Main Heading */}
                    <div className="text-center">
                         <h1 className="text-5xl font-extrabold mb-4">من نحن</h1>
                         <p className="text-xl mb-6">
                              مرحباً بكم في شركة القصر الأصيل للمقاولات – شريككم الموثوق في البناء والصيانة.
                         </p>
                    </div>
               </div>
          </section>
     );
};

export default SectionOne;
