/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// eslint-disable-next-line react/prop-types
const Note = ({ todo, handleDelete, handleUpdate }) => {
  
  const [done, setDone] = useState(false);
  const [title,setTitle] = useState(todo.title)
  const handleCheck = () => {
    
    setDone(!done);
   
      // Perform some action when the checkbox is checked
      // handleDelete(todo._id);
    
      // Perform some action when the checkbox is unchecked
      
   
  };
  useEffect(() => {
    if (done) {
      // Set a timeout to delay further actions for 3 seconds (3000 milliseconds)
      const timeoutId = setTimeout(() => {
        // Perform some action when the checkbox is checked
        handleDelete(todo._id);

        // Perform some action when the checkbox is unchecked
      }, 3000);

      // Clear the timeout when the component unmounts or when done changes
      return () => clearTimeout(timeoutId);
    }
  }, [done]);
   const handleChange = (e) => {
    setTitle(e.target.value);
   }
  const onDelete = () => {
    handleDelete(todo._id);
  }

  const onUpdate = () => {
    // Handle update action here, e.g., show a modal for editing
    handleUpdate(todo._id, title, todo.content)
  };


  return (
    <>
    <div className=" grid p-4 border-2 items-center border-solid border-gray-500 rounded-xl max-h-28 h-20">
      <div className='flex justify-between'>

      <span className={`text-2xl font-bold text-blue-600 font-serif`}>{title}</span>
      <div className="flex gap-x-4 justify-center items-center">
        <i className={`fas fa-check-circle fa-2x ${done? "text-[#05d854]" : "text-gray-500"} ` } onClick={handleCheck}></i>
        
      <Dialog>
  <DialogTrigger><i className="fas fa-edit fa-2x text-blue-500"  ></i></DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="name" value={title} onChange={handleChange} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onUpdate}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
</Dialog>

        <i className="fas fa-trash-alt fa-2x text-red-600" onClick={onDelete} title="Delete"></i>
      </div>
      </div>
    </div>
    
    </>
  );
};

export default Note;
