import { Task } from "@/interface/task";

export function addItemAtIndex(
  array: Task[],
  item: Task,
  index: number
): Task[] {
  const newArray = [...array];
  if (index >= 0 && index <= newArray.length) {
    newArray.splice(index, 0, item);
  } else {
    newArray.push(item);
  }

  return newArray;
}
