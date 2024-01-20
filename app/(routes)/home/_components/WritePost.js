import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Image, Send, Video } from "lucide-react";
import React from "react";

function WritePost() {
  const { user } = useUser();
  return (
    <div>
      <h2 className="text-[30px] font-medium text-gray-600">
        Hello, {user.firstName}
      </h2>
      <h2 className="text-gray-400">
        What's new with you? Would you like to share with the community?
      </h2>
      <div className="p-3 border rounded-lg mt-5 bg-slate-100">
        <h2>Create Post</h2>
        <div className="p-4 bg-white rounded-lg mt-2">
          <textarea placeholder="What's New" className="outline-none w-full" />
        </div>
        <div className="mt-2 flex justify-between">
          <div className="flex gap-5">
          <h2 className="flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-lg">
            <Image className="h-5 w-5"/>
            Image
          </h2>
          <h2 className="flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-lg">
            <Video className="h-5 w-5"/>
            Video
          </h2>
          </div>
          <Button className="hover:bg-blue-700 bg-blue-500 rounded-xl gap-1"><Send className="h-4 w-4"/> Publish</Button>
        </div>
      </div>
    </div>
  );
}

export default WritePost;
