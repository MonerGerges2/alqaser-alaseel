import useMutate from "@/hooks/useMutate";
import showNotification from "@/utils/notify";
import { Button } from "@mantine/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const ContactForm = () => {
     const [isLoading, setIsLoading] = useState(false);
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
          first_name: Yup.string().required("الاسم الاول مطلوب"),
          last_name: Yup.string().required("الاسم الاخير مطلوب"),
          email: Yup.string().email("البريد الالكتروني غير صحيح").required("البريد الالكتروني مطلوب"),
          phone: Yup.string().required("رقم الجوال مطلوب"),
          message: Yup.string().required("الرسالة مطلوبة"),
     });

     const { mutate } = useMutate({
          endpoint: "user/contacts",
          mutationKey: ["user/contacts"],
          onSuccess: () => {
               showNotification("تم ارسال الرسالة بنجاح", "success");
               setIsLoading(false);
          },
          onError: () => {
               showNotification("حدث خطأ أثناء ارسال الرسالة", "error");
               setIsLoading(false);
          },
     })

     // Handle form submission
     interface FormValues {
          first_name: string;
          last_name: string;
          email: string;
          phone: string;
          message: string;
     }

     interface FormikHelpers {
          resetForm: () => void;
     }

     const onSubmit = (values: FormValues, { resetForm }: FormikHelpers) => {
          // mutate(values);
          console.log(values);
          setIsLoading(true);
          resetForm();
     };

     return (
          <div className="dark:bg-black dark:text-white">
               <div className="container mx-auto p-6">
                    <Formik
                         initialValues={initialValues}
                         validationSchema={validationSchema}
                         onSubmit={onSubmit}
                    >
                         {() => (
                              <Form>
                                   {/* Name Field */}
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                             <label htmlFor="first_name" className="block text-gray-700 font-bold mb-2">
                                                  الاسم الاول
                                             </label>
                                             <Field
                                                  type="text"
                                                  id="first_name"
                                                  name="first_name"
                                                  placeholder="الاسم الاول"
                                                  className="w-full px-3 h-12 border rounded-2xl focus:outline-yellow-500"
                                             />
                                             <ErrorMessage
                                                  name="first_name"
                                                  component="div"
                                                  className="text-red-500 text-sm mt-1"
                                             />
                                        </div>

                                        <div>
                                             <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                                  الاسم الاخير
                                             </label>
                                             <Field
                                                  type="text"
                                                  id="last_name"
                                                  name="last_name"
                                                  placeholder="الاسم الاخير"
                                                  className="w-full px-3 h-12 border rounded-2xl focus:outline-yellow-500"
                                             />
                                             <ErrorMessage
                                                  name="last_name"
                                                  component="div"
                                                  className="text-red-500 text-sm mt-1"
                                             />
                                        </div>

                                        {/* Email Field */}
                                        <div className="mb-4">
                                             <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                                  البريد الالكتروني
                                             </label>
                                             <Field
                                                  type="email"
                                                  id="email"
                                                  name="email"
                                                  placeholder="ادخل البريد الالكتروني"
                                                  className="w-full px-3 h-12 border rounded-2xl focus:outline-yellow-500"
                                             />
                                             <ErrorMessage
                                                  name="email"
                                                  component="div"
                                                  className="text-red-500 text-sm mt-1"
                                             />
                                        </div>

                                        {/* Subject Field */}
                                        <div className="">
                                             <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                                                  رقم الجوال
                                             </label>
                                             <Field
                                                  type="text"
                                                  id="phone"
                                                  name="phone"
                                                  placeholder="رقم الجوال"
                                                  className="w-full px-3 h-12 border rounded-2xl focus:outline-yellow-500"
                                             />
                                             <ErrorMessage
                                                  name="phone"
                                                  component="div"
                                                  className="text-red-500 text-sm mt-1"
                                             />
                                        </div>

                                        {/* Message Field */}
                                        <div className="mb-4 md:col-span-2">
                                             <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                                                  الرسالة
                                             </label>
                                             <Field
                                                  as="textarea"
                                                  id="message"
                                                  name="message"
                                                  placeholder="الرسالة"
                                                  rows="8"
                                                  className="w-full px-3 py-2 border rounded-2xl focus:outline-yellow-500"
                                             />
                                             <ErrorMessage
                                                  name="message"
                                                  component="div"
                                                  className="text-red-500 text-sm mt-1"
                                             />
                                        </div>
                                   </div>

                                   {/* Submit Button */}
                                   <Button
                                        type="submit"
                                        className="px-20"
                                        radius="xl"
                                        size="lg"
                                        loading={isLoading}
                                        color="yellow"
                                   >
                                        ارسال
                                   </Button>
                              </Form>
                         )}
                    </Formik>
               </div >
          </div>
     );
};

export default ContactForm;
