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
const events = [
  {
      title: "Birthday",
      discription: "Birthday of Friend",
      location: "karachi",
      thumbnail: "https://images.unsplash.com/photo-1623244727304-54995b233b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D",
      date: new Date().toLocaleDateString()
  },
  {
      title: "Cycling Marathon",
      discription: "All community Members have Cycling",
      location: "karachi",
      thumbnail: "https://media.istockphoto.com/id/1027807324/photo/group-of-bike-race-for-charity-participants-riding.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qa3c7sqOApTtHj3XN1EqxI62w8FR8G9EE1AsWyfNEfQ=",
      date: new Date().toLocaleDateString()
  },
]

export default function Events(){
return (
<div className="min-h-screen">
   <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="">Thumbnail</TableHead>
        <TableHead className="">Title</TableHead>
        <TableHead>Description</TableHead>
        <TableHead>Location</TableHead>
        <TableHead>Date</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {events.map((event) => (
        <TableRow key={event.fullname}>
          <TableCell>
              <Image src={event.thumbnail} height={40} width={40} className="rounded-md" />
          </TableCell>
          <TableCell className="font-medium">{event.title}</TableCell>
          <TableCell>{event.discription}</TableCell>
          <TableCell>{event.location}</TableCell>
          <TableCell >{event.date}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>   
</div>
)
}