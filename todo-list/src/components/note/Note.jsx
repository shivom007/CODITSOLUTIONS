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


const Note = ({ todo, handleDelete, handleUpdate }) => {
  
  const [done, setDone] = useState(false);
  const [title,setTitle] = useState(todo.title)
  const handleCheck = () => {
    setDone(!done);
   };
  useEffect(() => {
    if (done) {
      const timeoutId = setTimeout(() => {
        handleDelete(todo._id);
      }, 3000);
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
    handleUpdate(todo._id, title, todo.content)
  };


  return (
    <>
    <div className=" grid md:p-4 p-2 border-2 items-center border-solid border-gray-500 rounded-xl max-h-28 md:h-20 h-16">
      <div className='flex justify-between'>

      <span className={`md:text-3xl text-2xl font-bold text-blue-600 font-serif`}>{title}</span>
      <div className="flex gap-x-4 justify-center items-center">
        <i className={`fas fa-check-circle text-xl md:text-3xl ${done? "text-[#05d854]" : "text-gray-500"} ` } onClick={handleCheck}></i>
        
      <Dialog>
  <DialogTrigger><i className="fas fa-edit text-xl md:text-3xl text-blue-500"  ></i></DialogTrigger>
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

        <i className="fas fa-trash-alt text-xl md:text-3xl text-red-600" onClick={onDelete} title="Delete"></i>
      </div>
      </div>
    </div>
    
    </>
  );
};

export default Note;
