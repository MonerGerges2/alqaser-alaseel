import { useState } from "react";
import { Box, Button, Textarea, Text, Group, Avatar, Divider, Card } from "@mantine/core";
import { Rating } from "@mantine/core";
import { BiSend } from "react-icons/bi";

interface Comment {
     id: number;
     user: string;
     text: string;
     rating: number;
     date: string;
}

const Comments = () => {
     const [comments, setComments] = useState<Comment[]>([]);
     const [newComment, setNewComment] = useState("");
     const [rating, setRating] = useState(0);

     const handleAddComment = () => {
          if (newComment.trim() === "") return;

          const newCommentData: Comment = {
               id: comments.length + 1,
               user: "Anonymous",
               text: newComment,
               rating,
               date: new Date().toLocaleString(),
          };

          setComments([newCommentData, ...comments]);
          setNewComment("");
          setRating(0);
     };

     return (
          <Box className="max-w-3xl mx-auto p-6 rounded-lg my-10 bg-white dark:bg-[#111010] shadow-md">
               <Text className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-200 text-center">
                    💬 التعليقات
               </Text>

               {/* إدخال التعليق */}
               <Card padding="lg" radius="md" className="mb-5 bg-gray-50 dark:bg-gray-800 shadow-sm">
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
                              leftIcon={<BiSend size={20} />}
                              color="blue"
                              onClick={handleAddComment}
                              radius="md"
                              className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
                         >
                              ارسال التعليق
                         </Button>
                    </Group>
               </Card>

               <Divider className="mb-4" />

               {/* عرض التعليقات */}
               <Box className="mt-4">
                    {comments.length > 0 ? (
                         comments.map((comment) => (
                              <Card
                                   key={comment.id}
                                   padding="md"
                                   shadow="sm"
                                   radius="md"
                                   className="mb-3 transition-all duration-300 bg-gray-100 dark:bg-gray-800"
                              >
                                   <Group className="mb-2 flex-wrap">
                                        <Avatar radius="xl" size="md" />
                                        <Text className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                                             {comment.user}
                                        </Text>
                                   </Group>
                                   <Text className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">
                                        {comment.text}
                                   </Text>
                                   <Rating value={comment.rating} readOnly size="sm" className="mb-1" />
                                   <Text className="text-xs text-gray-500">{comment.date}</Text>
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
