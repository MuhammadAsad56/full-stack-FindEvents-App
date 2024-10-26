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
  const users = [
    {
        fullname: "Muhammad Asad",
        email: "asad@gmail.com",
        location: "karachi",
        profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
        events: 5
    },
    {
        fullname: "Ali raza",
        email: "ali@gmail.com",
        location: "karachi",
        profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
        events: 2
    },
    {
        fullname: "Bilal",
        email: "bilal@gmail.com",
        location: "karachi",
        profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
        events: 1
    },
  ]

export default function Users() {
  return (
 <div className="min-h-screen">
     <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Profile Image</TableHead>
          <TableHead className="">Full Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Events</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.fullname}>
            <TableCell>
                <Image src={user.profileImage} alt="Loading..." height={40} width={40} className="rounded-md" />
            </TableCell>
            <TableCell className="font-medium">{user.fullname}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.location}</TableCell>
            <TableCell >{user.events}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>   
 </div>
  )
}