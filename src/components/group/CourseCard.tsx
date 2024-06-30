"use client"
import { useGetProfileData } from "@/api/auth";
import { GroupTypes, JoinedGroupTypes } from '@/types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ArrowRightIcon, InfoIcon } from 'lucide-react';
import { useRouter } from "next/navigation";
import { z } from 'zod';
import CourseInfo from './CourseInfo';
import CourseProgress from './CourseProgress';

const formSchema = z.object({
    user_id: z.string().optional(),
    group_id: z.string().optional(),
});

export type JoinGroupFormData = z.infer<typeof formSchema>;

type Props = {
    onSave: (joinData: JoinGroupFormData) => void;
    course: GroupTypes
    joinedGroupList?: JoinedGroupTypes[]
}
 

function CourseCard({ course, onSave, joinedGroupList }: Props) {
    const { currentUser } = useGetProfileData();
   
    const router = useRouter()

    const onSubmit = () => {
        var newData = {
            group_id: course?._id,
            user_id: currentUser?._id
        }
        console.log("currentUser", newData);
        
        onSave(newData)

    }

    return (
        <Card className="flex flex-col h-96 shadow-md shadow-gray-300 rounded-2xl">
            <CardContent className="flex flex-col flex-auto">
                <CourseInfo course={course} />
            </CardContent>
            <CourseProgress course={course} />
            <CardActions
                className="items-center justify-end py-4 px-24"
            >
                <Button
                    className="px-16 min-w-128"
                    color="success"
                    variant="contained"
                    endIcon={
                        <InfoIcon />
                    }
                >
                    Profile
                </Button>
                <Button
                    className="px-16 min-w-128"
                    color="primary"
                    variant="contained"
                    endIcon={
                        <ArrowRightIcon />
                    }
                    onClick={onSubmit}
                >
                    JOIN
                </Button>
            </CardActions>
        </Card>
    );
}

export default CourseCard;
