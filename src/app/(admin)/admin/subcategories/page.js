import { AddSubCategoryDrawer } from "@/components/AddSubCategoryDrawer/AddSubCategoryDrawer"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
const subCategories = [
  {
      title: "Cricket",
      catetgory: "Sports",
      thumbnail: "https://media.istockphoto.com/id/1027807324/photo/group-of-bike-race-for-charity-participants-riding.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qa3c7sqOApTtHj3XN1EqxI62w8FR8G9EE1AsWyfNEfQ=",
      discription: "All Sports Events",
  },
  {
      title: "Football",
      catetgory: "Sports",
      thumbnail: "https://media.istockphoto.com/id/1027807324/photo/group-of-bike-race-for-charity-participants-riding.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qa3c7sqOApTtHj3XN1EqxI62w8FR8G9EE1AsWyfNEfQ=",
      discription: "All Sports Events",
  },
]

export default function SubCategories(){
return (
<div className="min-h-screen container mx-auto">
  <div className="flex justify-between items-center ">
       <h1 className="text-2xl font-bold ">SubCategories</h1>
     <AddSubCategoryDrawer/>
  </div>
   <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[200px]">Thumbnail</TableHead>
        <TableHead >Category</TableHead>
        <TableHead >Title</TableHead>
        <TableHead>Description</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {subCategories.map((category) => (
        <TableRow key={category.title}>
          <TableCell>
              <Image src={category.thumbnail} alt="Loading..." height={60} width={60} className="rounded-md" />
          </TableCell>
          <TableCell className="font-medium">{category.catetgory}</TableCell>
          <TableCell>{category.title}</TableCell>
          <TableCell>{category.discription}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>   
</div>
)
}