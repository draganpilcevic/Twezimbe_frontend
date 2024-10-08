"use client"
import { useGetAllUsers } from "@/api/auth"
import { useAddGroup } from "@/api/group"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Form } from '@/components/ui/form'
import { User } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from "@radix-ui/react-dialog"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from "../ui/button"

const formSchema = z.object({
  name: z.string().optional(),
  group_type: z.string().optional(),
  group_state: z.string().optional(),
  tags: z.string().optional(),
  description: z.string().optional(),
  created_by: z.string().optional(),
});

export type GroupFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser?: User,
  groupUserList?: User[],
  selectedUser?: User,
  setSelectedUser: (selectedUser: User) => void
}

interface SelectValue {
  value: string;
  label: string;
}

const GroupMemberListDialog = ({ currentUser, groupUserList, selectedUser, setSelectedUser }: Props) => {

  // const { currentUser } = useGetProfileData();
  const { addGroup } = useAddGroup();

  const { allUsers } = useGetAllUsers()

  const [selectedUsersId, setSelectedUsersId] = useState<string[]>([])
  const [groupName, setGroupName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [renderedImage, setRenderedImage] = useState("")

  const [step, setStep] = useState<number>(1)
  const imgRef = useRef<HTMLInputElement>(null)
  const dialogCloseRef = useRef<HTMLButtonElement>(null)

  const [group_type, setGroupType] = useState<SelectValue>({
    value: 'Social' as string,
    label: 'Social' as string
  });

  const [group_state, setGroupState] = useState<SelectValue>({
    value: 'Public' as string,
    label: 'Public' as string
  });

  const form = useForm<GroupFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      created_by: currentUser?._id
    }
  });

  // const createConversation = useMutation(api.conversations.createConversation)
  // const generateUploadUrl = useMutation(api.conversations.generateUploadUrl)
  // const me = useQuery(api.users.getMe)
  // const users = useQuery(api.users.getUsers)

  // const { setSelectedConversation } = useConversationStore()

  // const handlCreateConversation = async () => {
  //   if (selectedUsers.length === 0) return
  //   setIsLoading(true)
  //   try {
  //     const isGroup = selectedUsers.length > 1
  //     let conversationId
  //     if (!isGroup) {
  //       conversationId = await createConversation({
  //         participants: [...selectedUsers, me?._id!], // [1, 2]
  //         isGroup: false,
  //       })
  //     } else {
  //       const postUrl = await generateUploadUrl()
  //       const result = await fetch(postUrl, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": selectedImage?.type!,
  //         },
  //         body: selectedImage,
  //       })

  //       const { storageId } = await result.json()
  //       conversationId = await createConversation({
  //         participants: [...selectedUsers, me?._id!], // [1, 2]
  //         isGroup: true,
  //         admin: me?._id!,
  //         groupName,
  //         groupImage: storageId,
  //       })
  //     }
  //     dialogCloseRef.current?.click()
  //     setSelectedUsers([])
  //     setGroupName("")
  //     setSelectedImage(null)

  //     const conversationName = isGroup
  //       ? groupName
  //       : users?.find((user) => user._id === selectedUsers[0])?.name

  //     setSelectedConversation({
  //       _id: conversationId,
  //       participants: selectedUsers,
  //       isGroup,
  //       image: isGroup
  //         ? renderedImage
  //         : users?.find((user) => user._id === selectedUsers[0])?.image,
  //       name: conversationName,
  //       admin: me?._id!,
  //     })
  //   } catch (error) {
  //     toast.error("Failed to create conversation")
  //     console.error(error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  const onSubmit = async (GroupData: GroupFormData) => {

    const formData = new FormData();
        let groupAvatar = '';
        if (selectedImage) {
            formData.append("file", selectedImage);
            try {
                const { data: { fileName } } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/file/`, formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                );
                groupAvatar = fileName;
                console.log("avatar", groupAvatar);

            }
            catch (e) {
                console.error('File not uploaded', 'Error')
            }
        }

    var newData = {
      ...GroupData,
      name: groupName,
      group_type: group_type?.value,
      group_state: group_state?.value,
      selectedUsers_Id: selectedUsersId,
      created_by: currentUser?._id,
      group_avatar: groupAvatar === "" ? "default" : groupAvatar
    }
    
    await addGroup(newData)
  }


  useEffect(() => {
    if (!selectedImage) {
      return setRenderedImage("")
    }
    const reader = new FileReader()
    reader.onload = (e) => setRenderedImage(e.target?.result as string)
    reader.readAsDataURL(selectedImage)
  }, [selectedImage])

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={`px-8 mr-14 bg-[#1e293b] rounded-md text-white py-2 hover:bg-slate-800`}
          color="secondary"
        >
          Group Member
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#e3e2de] max-w-2xl max-h-[900px]">
        <DialogHeader>
          {/* TODO: <DialogClose /> will be here */}
          <DialogClose ref={dialogCloseRef} />
          <DialogTitle>Group Member List</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 bg-[#e3e2de]'>
                <div className="flex flex-col gap-3 overflow-auto max-h-[500px] max-w-screen-2xl">
                  {groupUserList?.map((user) => (
                    <div
                      key={user._id}
                      className={`flex gap-3 items-center p-2 rounded cursor-pointer active:scale-95 
								transition-all ease-in-out duration-300
							${user === selectedUser ? "bg-[#00a884]" : ""}`}
                      onClick={() => setSelectedUser(user as User)}
                    >
                      <Avatar className="overflow-visible">
                        {user?.is_active && (
                          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-foreground" />
                        )}

                        <AvatarImage
                          src={(user?.photograph === 'default' || !user?.photograph) ? '/assets/user.png' : `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/${user?.photograph}`}
                          className="rounded-full object-cover"
                        />
                        <AvatarFallback>
                          <div className="animate-pulse bg-gray-tertiary w-full h-full rounded-full"></div>
                        </AvatarFallback>
                      </Avatar>

                      <div className="w-full ">
                        <div className="flex items-center justify-between">
                          <p className="text-md font-medium">
                            {user.surName}
                          </p>
                        </div>
                      </div>
                    </div>  
                  ))}
                </div>
                <div className="flex justify-between text-white">
                  <Button variant={"outline"} className="bg-[#0f172a] hover:bg-gray-500">Cancel</Button>
                  <Button
                    variant={"outline"}
                    className="bg-[#0f172a] hover:bg-gray-500"
                    disabled={
                      selectedUsersId.length === 0 ||
                      (selectedUsersId.length > 1 && !groupName) ||
                      isLoading
                    }
                    >Ok</Button>
                </div>
          </form>
        </Form>

      </DialogContent>
    </Dialog>
  )
}
export default GroupMemberListDialog
