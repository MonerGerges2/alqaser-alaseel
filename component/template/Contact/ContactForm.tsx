import useMutate from "@/hooks/useMutate";
import showNotification from "@/utils/notify";
import { Button } from "@mantine/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const ContactForm = () => {
     const [isLoading, setIsLoading] = useState(false);
     const { t, i18n } = useTranslation();
     const dir = i18n.dir();

     // Define initial form values
     const initialValues = {
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
     };

     // Create a validation schema using Yup
     const validationSchema = Yup.object({
          first_name: Yup.string().required(t("contactForm.validation.firstNameRequired")),
          last_name: Yup.string().required(t("contactForm.validation.lastNameRequired")),
          email: Yup.string().email(t("contactForm.validation.emailInvalid")).required(t("contactForm.validation.emailRequired")),
          phone: Yup.string().required(t("contactForm.validation.phoneRequired")),
          message: Yup.string().required(t("contactForm.validation.messageRequired")),
     });

     const { mutate } = useMutate({
          endpoint: "user/contacts",
          mutationKey: ["user/contacts"],
          onSuccess: () => {
               showNotification(t("contactForm.successMessage"), "success");
               setIsLoading(false);
          },
          onError: () => {
               showNotification(t("contactForm.errorMessage"), "error");
               setIsLoading(false);
          },
     });
     // @ts-ignore
     const onSubmit = (values, { resetForm }) => {
          console.log(values);
          setIsLoading(true);
          resetForm();
     };

     return (
          <div className="dark:bg-[#111010] dark:text-white">
               <div className="container mx-auto p-6">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                         {() => (
                              <Form>
                                   {/* Name Fields */}
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                             <label htmlFor="first_name" className="block text-gray-700 font-bold mb-2">
                                                  {t("contactForm.firstName")}
                                             </label>
                                             <Field
                                                  type="text"
                                                  id="first_name"
                                                  name="first_name"
                                                  placeholder={t("contactForm.placeholders.firstName")}
                                                  className="w-full px-3 h-12 border border-gray-600 rounded-lg dark:bg-black dark:text-white focus:ring-yellow-500"
                                             />
                                             <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>

                                        <div>
                                             <label htmlFor="last_name" className="block text-gray-700 font-bold mb-2">
                                                  {t("contactForm.lastName")}
                                             </label>
                                             <Field
                                                  type="text"
                                                  id="last_name"
                                                  name="last_name"
                                                  placeholder={t("contactForm.placeholders.lastName")}
                                                  className="w-full px-3 h-12 border border-gray-600 rounded-lg dark:bg-black dark:text-white focus:ring-yellow-500"
                                             />
                                             <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>

                                        {/* Email Field */}
                                        <div className="mb-4">
                                             <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                                  {t("contactForm.email")}
                                             </label>
                                             <Field
                                                  type="email"
                                                  id="email"
                                                  name="email"
                                                  placeholder={t("contactForm.placeholders.email")}
                                                  className="w-full px-3 h-12 border border-gray-600 rounded-lg dark:bg-black dark:text-white focus:ring-yellow-500"
                                             />
                                             <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>

                                        {/* Phone Field */}
                                        <div className="">
                                             <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                                                  {t("contactForm.phone")}
                                             </label>
                                             <Field
                                                  type="text"
                                                  id="phone"
                                                  name="phone"
                                                  placeholder={t("contactForm.placeholders.phone")}
                                                  className="w-full px-3 h-12 border border-gray-600 rounded-lg dark:bg-black dark:text-white focus:ring-yellow-500"
                                             />
                                             <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>

                                        {/* Message Field */}
                                        <div className="mb-4 md:col-span-2">
                                             <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                                                  {t("contactForm.message")}
                                             </label>
                                             <Field
                                                  as="textarea"
                                                  id="message"
                                                  name="message"
                                                  placeholder={t("contactForm.placeholders.message")}
                                                  rows="8"
                                                  className="w-full px-3 py-2 border border-gray-600 rounded-lg dark:bg-black dark:text-white focus:ring-yellow-500"
                                             />
                                             <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>
                                   </div>

                                   {/* Submit Button */}
                                   <button className="bg-yellow-500 text-black hover:bg-yellow-600 px-10 py-3 text-xl font-bold rounded-lg group flex items-center gap-4 shadow-lg transition-all duration-300">
                                        {dir === "rtl" ? (
                                             <>
                                                  ارسال
                                                  <GoArrowUpRight className="inline-block ml-2 transition-transform duration-300 group-hover:-rotate-45" />
                                             </>
                                        ) : (
                                             <>
                                                  <GoArrowUpRight className="inline-block mr-2 transition-transform duration-300 group-hover:-rotate-45" />
                                                  send
                                             </>
                                        )}
                                   </button>
                              </Form>
                         )}
                    </Formik>
               </div>
          </div>
     );
};

export default ContactForm;
