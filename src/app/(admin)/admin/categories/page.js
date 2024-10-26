import { AddCategoryDrawer } from "@/components/AddCategoryDrawer/AddCategoryDrawer"
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
const categories = [
  {
      title: "Birthday",
      thumbnail: "https://images.unsplash.com/photo-1623244727304-54995b233b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D",
      discription: "All Birthday Events",
  },
  {
      title: "Sports",
      thumbnail: "https://media.istockphoto.com/id/1027807324/photo/group-of-bike-race-for-charity-participants-riding.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qa3c7sqOApTtHj3XN1EqxI62w8FR8G9EE1AsWyfNEfQ=",
      discription: "All Sports Events",
  },
]

export default function Categories(){
return (
<div className="min-h-screen container mx-auto">
  <div className="flex justify-between items-center ">
       <h1 className="text-2xl font-bold ">Categories</h1>
      <AddCategoryDrawer/>
  </div>
   <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[200px]">Thumbnail</TableHead>
        <TableHead >Title</TableHead>
        <TableHead>Description</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {categories.map((category) => (
        <TableRow key={category.title}>
          <TableCell>
              <Image src={category.thumbnail} alt="Loading..." height={60} width={60} className="rounded-md" />
          </TableCell>
          <TableCell className="font-medium">{category.title}</TableCell>
          <TableCell>{category.discription}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>   
</div>
)
}