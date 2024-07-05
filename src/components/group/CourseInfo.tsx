"use client"

import { GroupTypes } from '@/types';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { CaptionsIcon, Clock10Icon, LucideCheckCircle2, } from 'lucide-react';
import CourseCategory from './CourseCategory';

type Props = {
    course: GroupTypes
}


function CourseInfo({ course }:  Props) {
  if (!course) {
    return null;
  }

  return (
    <div className={clsx('w-full')}>
      <div className="flex items-center justify-between mb-8">
        <CourseCategory slug={course.group_type} />

        {/* {course?.del_flag && ( */}
          <LucideCheckCircle2 color='white' fill='green'/>
        {/* )} */}
      </div>

      <Typography className="text-16 font-medium">{course.name}</Typography>

      <Typography className="text-13 mt-2 line-clamp-2" color="text.secondary">
        {course.description}
      </Typography>

      <Divider className="w-48 my-10 border-1" light />

      <Typography className="flex items-center space-x-3 text-13" color="text.secondary">
        <Clock10Icon />
        <span className="whitespace-nowrap leading-none">{`${course.createdAt} minutes`}</span>
      </Typography>
      <Typography className="flex items-center space-x-3 text-13 mt-3" color="text.secondary">
        <CaptionsIcon />
        <span className="whitespace-nowrap leading-none">
          {/* {course.progress.completed === 1 && 'Completed once'}
          {course.progress.completed === 2 && 'Completed twice'}
          {course.progress.completed > 2 && `Completed ${course.progress.completed} times`}
          {course.progress.completed <= 0 && 'Never completed'} */}
          Completed
        </span>
      </Typography>
    </div>
  );
}

export default CourseInfo;
