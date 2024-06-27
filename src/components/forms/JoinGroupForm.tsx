import { useGetProfileData } from "@/api/auth";
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { GroupTypes, JoinedGroupTypes } from "@/types";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const formSchema = z.object({
    name: z.string().min(2),
    description: z.string().optional(),
    created_by: z.string().optional(),
    user_id: z.string().optional(),
    group_id: z.string().optional(),
    role_id: z.string()
});

// Determining the type of our form data by infering it from the zod schema 
export type GroupFormData = z.infer<typeof formSchema>;

type Props = {
    // onSave: (values: GroupFormData) => void;
    groupList?: GroupTypes[];
    joinedGroupList?: JoinedGroupTypes[];
}

const JoinGroupForm = ({ groupList, joinedGroupList }: Props) => {

    const { currentUser } = useGetProfileData();
    const [selectedGroupId, setSelectedGroupId] = useState<string>('')

    const form = useForm<GroupFormData>({
        resolver: zodResolver(formSchema),

    });

    // useEffect(() => {
    //     form.reset(currentUser);
    // }, [currentUser, form])

    const onSave = () => {

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSave)} className='space-y-4'>
            {/* <FormField
                control={form.control}
                name='user_id'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Group Tags</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            /> */}
                <div className="flex flex-col gap-3 overflow-auto max-h-60">
                    {groupList?.map((group) => (
                        <div
                            key={group._id}
                            className={`flex gap-3 items-center p-2 rounded cursor-pointer active:scale-95 
								transition-all ease-in-out duration-300
							${selectedGroupId === group?._id ? "bg-green-300" : ""}`}
                            onClick={() => {
                                setSelectedGroupId(group?._id)
                            }}
                        >
                            <Avatar className="overflow-visible">
                                {!group?.del_flag && (
                                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-foreground" />
                                )}

                                <AvatarImage
                                    src={'/assets/group.png'}
                                    className="rounded-full object-cover"
                                />
                                <AvatarFallback>
                                    <div className="animate-pulse bg-gray-tertiary w-full h-full rounded-full"></div>
                                </AvatarFallback>
                            </Avatar>

                            <div className="w-full ">
                                <div className="flex items-center justify-between">
                                    <p className="text-md font-medium">
                                        {group?.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end">

                    <Button type='submit' className='text-white px-4 py-2 rounded-xl text-sm bg-blue-500 hover:bg-blue-400 font-bold'>Join</Button>
                </div>
            </form>
        </Form>
    )
}

export default JoinGroupForm