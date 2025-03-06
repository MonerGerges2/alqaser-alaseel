import { Card, Text } from '@mantine/core';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const SectionTow = () => {
     const { t } = useTranslation(); 

     return (
          <section className="py-16 bg-gray-100 dark:bg-[#111010]">
               <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-3">

                         <Card shadow="sm" p="lg" radius="md" withBorder className="bg-white dark:bg-black text-black dark:text-white">
                              <div className="flex items-center">
                                   <FaPhone className="text-yellow-500 text-2xl mx-4" />
                                   <div>
                                        <Text weight={500} size="lg">{t("contactInfo.phone.title")}</Text>
                                        <Text color="dimmed" size="sm">{t("contactInfo.phone.number")}</Text>
                                   </div>
                              </div>
                         </Card>

                         <Card shadow="sm" p="lg" radius="md" withBorder className="bg-white dark:bg-black text-black dark:text-white">
                              <div className="flex items-center">
                                   <FaEnvelope className="text-yellow-500 text-2xl mx-4" />
                                   <div>
                                        <Text weight={500} size="lg">{t("contactInfo.email.title")}</Text>
                                        <Text color="dimmed" size="sm">{t("contactInfo.email.address")}</Text>
                                   </div>
                              </div>
                         </Card>

                         <Card shadow="sm" p="lg" radius="md" withBorder className="bg-white dark:bg-black text-black dark:text-white">
                              <div className="flex items-center">
                                   <FaMapMarkerAlt className="text-yellow-500 text-2xl mx-4" />
                                   <div>
                                        <Text weight={500} size="lg">{t("contactInfo.location.title")}</Text>
                                        <Text color="dimmed" size="sm">{t("contactInfo.location.address")}</Text>
                                   </div>
                              </div>
                         </Card>
                    </div>
               </div>
          </section>
     );
};

export default SectionTow;
