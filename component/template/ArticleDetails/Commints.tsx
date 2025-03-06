import { useState } from "react";
import { Box, Button, Textarea, Text, Group, Avatar, Divider, Card, Progress } from "@mantine/core";
import { Rating } from "@mantine/core";
import { BiSend, BiMessageSquareAdd } from "react-icons/bi";

interface Comment {
     id: number;
     user: string;
     text: string;
     rating: number;
     date: string;
}

const Comments = () => {
     const [comments, setComments] = useState<Comment[]>([
          { id: 1, user: "إيمان محمود", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", rating: 4.5, date: "منذ شهرين" }
     ]);
     const [newComment, setNewComment] = useState("");
     const [rating, setRating] = useState(0);
     const [showInput, setShowInput] = useState(false); // إخفاء الإدخال افتراضيًا

     // توزيع التقييمات
     const ratingDistribution = {
          5: 60,
          4: 25,
          3: 10,
          2: 3,
          1: 2,
     };

     const handleAddComment = () => {
          if (newComment.trim() === "") return;

          const newCommentData: Comment = {
               id: comments.length + 1,
               user: "Anonymous",
               text: newComment,
               rating,
               date: new Date().toLocaleDateString(),
          };

          setComments([newCommentData, ...comments]);
          setNewComment("");
          setRating(0);
          setShowInput(false); // إخفاء الإدخال بعد الإرسال
     };

     return (
          <Box className="mx-auto p-6 rounded-lg my-10 bg-white dark:bg-[#111010]">
               {/* التقييم العام */}
               <Card padding="lg" radius="md" className="mb-5 dark:bg-gray-800 shadow-sm">
                    <Group className="flex flex-wrap justify-between items-center">
                         <Box className="flex flex-col items-center">
                              <Text className="text-4xl font-bold text-gray-900 dark:text-white">4.6</Text>
                              <Rating value={4.6} readOnly size="lg" />
                              <Text className="text-gray-500 text-sm">مبني على 25 مراجعة</Text>
                              {!showInput && (
                                   <Button
                                        radius="md"
                                        className="w-full sm:w-auto mx-auto block transition-all duration-300 bg-yellow-500 hover:bg-yellow-600 mt-10"
                                        onClick={() => setShowInput(true)}
                                   >
                                        <BiMessageSquareAdd size={20} className="mx-2" />
                                        إضافة تقييم
                                   </Button>
                              )}
                         </Box>

                         <Box className="flex flex-col gap-2 w-2/3">
                              {Object.entries(ratingDistribution).reverse().map(([stars, percentage]) => (
                                   <Group key={stars} className="flex items-center">
                                        <Text className="text-gray-600 dark:text-gray-400">{stars} ⭐</Text>
                                        <Progress value={percentage} className="w-full h-2 dark:bg-gray-700" />
                                   </Group>
                              ))}
                         </Box>
                    </Group>
               </Card>


               {/* إدخال التعليق - يظهر عند النقر على الزر */}
               {showInput && (
                    <Card padding="lg" radius="md" className="mb-5 dark:bg-gray-800 shadow-sm mt-4">
                         {/* close button */}
                         <Button
                              variant="outline"
                              onClick={() => setShowInput(false)}
                              className="mb-3 flex justify-center items-center bg-inherit hover:bg-inherit"
                         >
                              X
                         </Button>
                         <Textarea
                              placeholder="اكتب تعليقك هنا..."
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                              autosize
                              minRows={2}
                              className="w-full border-gray-300 dark:border-gray-700 dark:text-gray-200"
                         />
                         <Group className="mt-3 flex flex-wrap justify-between items-center gap-2">
                              <Rating value={rating} onChange={setRating} size="lg" dir="ltr" className="text-sm" />
                              <Button
                                   color="blue"
                                   onClick={handleAddComment}
                                   radius="md"
                                   className="w-full sm:w-auto transition-all duration-300 bg-yellow-500 hover:bg-yellow-600"
                              >
                                   <BiSend size={20} className="mx-3" />
                                   إرسال التعليق
                              </Button>
                         </Group>
                    </Card>
               )}

               <Divider className="mb-4" />

               {/* عرض التعليقات */}
               <Box className="mt-4">
                    {comments.length > 0 ? (
                         comments.map((comment) => (
                              <Card
                                   key={comment.id}
                                   padding="md"
                                   radius="md"
                                   className="mb-3 transition-all duration-300 dark:bg-gray-800"
                              >
                                   <Group className="mb-2 flex-wrap">
                                        <Avatar radius="xl" size="md" />
                                        <Box>
                                             <Text className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                                                  {comment.user}
                                             </Text>
                                             <Text className="text-xs text-gray-500">{comment.date}</Text>
                                        </Box>
                                   </Group>
                                   <Text className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">
                                        {comment.text}
                                   </Text>
                                   <Rating value={comment.rating} readOnly size="sm" className="mb-1" />
                              </Card>
                         ))
                    ) : (
                         <Text className="text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                              لا يوجد تعليقات حتى الآن...
                         </Text>
                    )}
               </Box>
          </Box>
     );
};

export default Comments;
