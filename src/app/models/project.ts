export class Category {
  id: number;
  name: string;
  icon: string;
}

export class Project {
  id: number;
  name: string;
  description: string;
  category: Category;
  creatorFirstName: string;
  creatorLastName: string;
}
