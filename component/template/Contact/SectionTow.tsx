import { Card, Text } from '@mantine/core';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const SectionTow = () => {
     return (
          <section className="py-16 bg-gray-100">
               <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-3">
                         <Card shadow="sm" p="lg" radius="md" withBorder className="bg-white">
                              <div className="flex items-center">
                                   <FaPhone className="text-blue-500 text-2xl mx-4" />
                                   <div>
                                        <Text weight={500} size="lg">Phone</Text>
                                        <Text color="dimmed" size="sm">+123 456 7890</Text>
                                   </div>
                              </div>
                         </Card>
                         <Card shadow="sm" p="lg" radius="md" withBorder className="bg-white">
                              <div className="flex items-center">
                                   <FaEnvelope className="text-green-500 text-2xl mx-4" />
                                   <div>
                                        <Text weight={500} size="lg">Email</Text>
                                        <Text color="dimmed" size="sm">contact@example.com</Text>
                                   </div>
                              </div>
                         </Card>
                         <Card shadow="sm" p="lg" radius="md" withBorder className="bg-white">
                              <div className="flex items-center">
                                   <FaMapMarkerAlt className="text-red-500 text-2xl mx-4" />
                                   <div>
                                        <Text weight={500} size="lg">Location</Text>
                                        <Text color="dimmed" size="sm">123 Main Street, City</Text>
                                   </div>
                              </div>
                         </Card>
                    </div>
               </div>
          </section>
     );
};

export default SectionTow;
