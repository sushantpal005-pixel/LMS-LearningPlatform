import BuyCourseButton from '@/components/BuyCourseButton'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { BadgeInfo, Lock, PlayCircle } from 'lucide-react'
import React from 'react'

const CourseDetail = () => {
    const purchasedCourse = false;
    return (
        <div className='mt-20 space-y-5'>
            <div className='bg-[#2D2F31] text-white'>
                <div className='max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2'>
                    <h1 className='fontbold text-2xl md:text-3xl'>Course Tite</h1>
                    <p className='text-base md:text-lg'>Course Sub-title</p>
                    <p>Created By{" "} <span className='text-[#C0C4FC] underline italic'>Sushant Pal</span></p>
                    <div className='flex items-center gap-2 text-sm'>
                        <BadgeInfo size={16} />
                        <p>Last updated 27-06-2026</p>
                    </div>
                    <p>Student enrolled: 10</p>
                </div>
            </div>
            <div className='max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10 '>
                <div className='w-full lg:w-1/2 space-y-5'>
                    <h1 className='font-bold text-xl md:text-2xl'>Description</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dignissimos temporibus voluptate voluptates, unde, pariatur tenetur vitae fuga culpa veritatis a sapiente saepe odio quae, delectus voluptatem eum. Eligendi iste, laborum, quod commodi vel sapiente recusandae quas culpa autem debitis consectetur, incidunt distinctio nisi consequuntur!</p>
                    <Card>
                        <CardHeader>
                            <CardTitle>CourseContent</CardTitle>
                            <CardDescription>4 lectures</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {
                                [1, 2, 3].map((_, idx) => (
                                    <div key={idx} className='flex items-center gap-3 text-sm'>
                                        <span>
                                            {
                                                false ? (<PlayCircle size={14} />) : <Lock size={14} />
                                            }
                                        </span>
                                        <p>lecture title</p>
                                    </div>
                                ))
                            }
                        </CardContent>
                    </Card>
                </div>
                <div className='w-full lg:w-1/3'>
                    <Card>
                        <CardContent className="p-4 flex flex-col">
                            <div className='w-full aspect-video mb-4'>
                                React player Video ayega...
                            </div>
                            <h1>Lecture title</h1>
                            <Separator className="my-2"/>
                            <h1 className='text-lg md:text-xl font-semibold'>Course Price</h1>
                        </CardContent>
                        <CardFooter className="flex justify-center p-4">
                            {
                                purchasedCourse ? (
                            <Button className="w-full">Continue Course</Button>
                                ) : (
                                    <BuyCourseButton/>
                                )
                            }
                        </CardFooter>
                    </Card>
                </div>
            </div>
            
        </div>
    )
}

export default CourseDetail
